import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, ArrowLeft, Utensils, RefreshCw, Lightbulb, HelpCircle } from 'lucide-react';
import { recipes } from '@/data/recipes';
import { getRecipeMetadata, getRecipeUrlPath } from '@/lib/seo-utils';

export const RecipeDetail = () => {
  const { id, slug } = useParams<{ id: string; slug?: string }>();
  const navigate = useNavigate();

  const recipe = recipes.find(r => r.id === id);

  const navigateBackToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (recipe) {
      const metadata = getRecipeMetadata(recipe);
      document.title = metadata.title;

      // Meta description
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', metadata.description);

      // Meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', metadata.keywords);

      if (!slug && recipe) {
        const seoUrl = getRecipeUrlPath(recipe.id, recipe.title);
        navigate(seoUrl, { replace: true });
      }

      // Structured data
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

      let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script') as HTMLScriptElement;
        script.setAttribute('type', 'application/ld+json');

        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

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
        <Button 
          variant="ghost" 
          onClick={navigateBackToHome} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Button>

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

          <div className="flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <div className="grid gap-8 lg:grid-cols-5">
              <div className="lg:col-span-2 space-y-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>

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

              <div className="lg:col-span-3 space-y-8">
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

                <Separator />

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
                      </div>
                    ))}
                  </div>
                </div>

                {/* Serving Suggestions */}
                {recipe.servingSuggestions && recipe.servingSuggestions.length > 0 && (
                  <>
                    <Separator />
                    <div className="recipe-card p-6 rounded-lg">
                      <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading flex items-center gap-3">
                        <Utensils className="h-6 w-6 text-sage-600" />
                        Serving Suggestions
                      </h2>
                      <div className="space-y-3">
                        {recipe.servingSuggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="inline-block w-3 h-3 bg-sage-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-base font-natural leading-relaxed">{suggestion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Variations & Substitutions */}
                {recipe.variations && recipe.variations.length > 0 && (
                  <>
                    <Separator />
                    <div className="recipe-card p-6 rounded-lg">
                      <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading flex items-center gap-3">
                        <RefreshCw className="h-6 w-6 text-sage-600" />
                        Variations & Substitutions
                      </h2>
                      <div className="space-y-3">
                        {recipe.variations.map((variation, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="inline-block w-3 h-3 bg-sage-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-base font-natural leading-relaxed">{variation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Tips & Tricks */}
                {recipe.tips && recipe.tips.length > 0 && (
                  <>
                    <Separator />
                    <div className="recipe-card p-6 rounded-lg">
                      <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading flex items-center gap-3">
                        <Lightbulb className="h-6 w-6 text-sage-600" />
                        Tips & Tricks
                      </h2>
                      <div className="space-y-3">
                        {recipe.tips.map((tip, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="inline-block w-3 h-3 bg-sage-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-base font-natural leading-relaxed">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* FAQ */}
                {recipe.faq && recipe.faq.length > 0 && (
                  <>
                    <Separator />
                    <div className="recipe-card p-6 rounded-lg">
                      <h2 className="text-2xl font-semibold mb-6 text-sage-800 section-heading flex items-center gap-3">
                        <HelpCircle className="h-6 w-6 text-sage-600" />
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {recipe.faq.map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="font-semibold text-base text-sage-800 font-natural">
                              Q: {item.question}
                            </div>
                            <div className="text-base text-muted-foreground font-natural ml-4">
                              A: {item.answer}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <aside className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Removed AdSpace components */}
            </div>
          </aside>
        </div>

        <div className="mt-12 mb-8 flex justify-center">
          {/* Removed AdSpace component */}
        </div>

        <div className="mt-8 flex justify-center">
          <Button onClick={navigateBackToHome} variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to All Recipes
          </Button>
        </div>
      </div>
    </div>
  );
};
