import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { recipes } from '@/data/recipes';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import { AdSpace } from '@/components/AdSpace';
import { getRecipeMetadata, getRecipeUrlPath } from '@/lib/seo-utils';
import { saveCurrentScrollPosition } from '@/lib/scroll-utils';

export const RecipeDetail = () => {
  const { id, slug } = useParams<{ id: string; slug?: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === id);

  // Helper function to navigate back while preserving scroll position
  const navigateBackToHome = () => {
    // We don't need to save scroll position here since we want to go back to the saved position
    navigate('/');
  };

  // Scroll to top when recipe loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Trigger when recipe ID changes

  // SEO: Update document title and meta tags
  useEffect(() => {
    if (recipe) {
      const metadata = getRecipeMetadata(recipe);
      document.title = metadata.title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metadata.keywords);

      // Redirect to SEO-friendly URL if accessing old format
      if (!slug && recipe) {
        const seoUrl = getRecipeUrlPath(recipe.id, recipe.title);
        navigate(seoUrl, { replace: true });
      }

      // Add structured data for SEO
      const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Recipe",
        "name": recipe.title,
        "description": recipe.description,
        "image": recipe.image.startsWith('/') ? `${window.location.origin}${recipe.image}` : recipe.image,
        "cookTime": `PT${recipe.cookTime.replace(/\D/g, '')}M`,
        "prepTime": `PT${recipe.prepTime.replace(/\D/g, '')}M`,
        "recipeYield": recipe.servings.toString(),
        "recipeCategory": recipe.category,
        "recipeCuisine": "American",
        "keywords": metadata.keywords,
        "recipeIngredient": recipe.ingredients,
        "recipeInstructions": recipe.instructions.map((instruction, index) => ({
          "@type": "HowToStep",
          "text": instruction,
          "position": index + 1
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "reviewCount": "127"
        },
        "nutrition": {
          "@type": "NutritionInformation",
          "servingSize": "1 serving"
        },
        "author": {
          "@type": "Organization",
          "name": "Bites Garden"
        }
      };

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to reset title
    return () => {
      document.title = 'Bites Garden - Where Every Bite Blooms';
    };
  }, [recipe, slug, navigate]);

  if (!recipe) {
    return (
      <div className="min-h-screen cozy-gradient flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-sage-800 mb-4 font-handwritten">
            Recipe Not Found
          </h1>
          <p className="text-muted-foreground mb-6 font-natural">
            The recipe you're looking for doesn't exist.
          </p>
          <Button onClick={navigateBackToHome} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-sage-100 text-sage-800';
      case 'Medium':
        return 'bg-earth-100 text-earth-800';
      case 'Hard':
        return 'bg-warm-100 text-warm-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen cozy-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={navigateBackToHome} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Button>

        {/* Recipe Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-2 recipe-title" style={{fontSize: '3rem'}}>
                {recipe.title}
              </h1>
              <p className="text-lg text-muted-foreground font-natural">
                {recipe.description}
              </p>
            </div>
            <Badge className={getDifficultyColor(recipe.difficulty)}>
              {recipe.difficulty}
            </Badge>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Image and Meta Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recipe Image */}
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Recipe Meta */}
                <div className="recipe-card p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 text-sage-800 font-handwritten">
                    Recipe Info
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <Clock className="h-8 w-8 text-sage-600 mb-2" />
                      <div className="text-sm font-medium font-natural">Prep Time</div>
                      <div className="text-lg font-semibold text-sage-800 font-natural">
                        {recipe.prepTime}
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <ChefHat className="h-8 w-8 text-sage-600 mb-2" />
                      <div className="text-sm font-medium font-natural">Cook Time</div>
                      <div className="text-lg font-semibold text-sage-800 font-natural">
                        {recipe.cookTime}
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center col-span-2">
                      <Users className="h-8 w-8 text-sage-600 mb-2" />
                      <div className="text-sm font-medium font-natural">Servings</div>
                      <div className="text-lg font-semibold text-sage-800 font-natural">
                        {recipe.servings} people
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recipe Details */}
              <div className="lg:col-span-3 space-y-8">
                {/* Ingredients */}
                <div className="recipe-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading">
                    Ingredients
                  </h2>
                  <div className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="inline-block w-3 h-3 bg-sage-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-base font-natural leading-relaxed">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Native In-Content Ad after Ingredients */}
                <div className="flex justify-center">
                  <AdSpace 
                    size="native" 
                    placement="After Ingredients"
                    className="w-full max-w-2xl"
                  />
                </div>

                <Separator />

                {/* Instructions */}
                <div className="recipe-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading">
                    Instructions
                  </h2>
                  <div className="space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index}>
                        <div className="flex items-start gap-4">
                          <span className="inline-flex items-center justify-center w-8 h-8 bg-sage-100 text-sage-800 text-sm font-semibold rounded-full flex-shrink-0 font-natural">
                            {index + 1}
                          </span>
                          <p className="text-base font-natural leading-relaxed pt-1">
                            {instruction}
                          </p>
                        </div>
                        
                        {/* Native In-Content Ad between steps 2 and 3 */}
                        {index === 1 && (
                          <div className="my-8 flex justify-center">
                            <AdSpace 
                              size="native" 
                              placement="Between Instructions 2-3"
                              className="w-full max-w-2xl"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Ads - Desktop Only */}
          <aside className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <AdSpace 
                size="sidebar" 
                placement="Recipe Sidebar Top"
              />
              <AdSpace 
                size="sidebar" 
                placement="Recipe Sidebar Middle"
              />
              <AdSpace 
                size="square" 
                placement="Recipe Sidebar Bottom"
              />
            </div>
          </aside>
        </div>

        {/* Bottom of Post Ad */}
        <div className="mt-12 mb-8 flex justify-center">
          <AdSpace 
            size="banner" 
            placement="Bottom of Recipe"
            className="w-full max-w-4xl"
          />
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={navigateBackToHome} 
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Recipes
          </Button>
        </div>
      </div>
    </div>
  );
};