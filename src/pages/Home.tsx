import { useMemo, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeCard } from '@/components/RecipeCard';
import { AdSpace } from '@/components/AdSpace';
import { recipes } from '@/data/recipes';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, ChefHat, Sparkles, Loader2, Search, X } from 'lucide-react';
import { getRecipeUrlPath, findRecipeById } from '@/lib/seo-utils';
import { restoreScrollPosition, saveCurrentScrollPosition, saveRecipeCardScrollPosition, cleanupExpiredScrollPositions } from '@/lib/scroll-utils';

interface HomeProps {
  selectedCategory: string;
}

export const Home: React.FC<HomeProps> = ({ selectedCategory }) => {
  const navigate = useNavigate();
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Show hero section only when "All Recipes" is selected
  const showHero = selectedCategory === 'All Recipes';
  
  // Filter recipes based on selected category and search query
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;
    
    // First filter by category
    if (selectedCategory !== 'All Recipes') {
      filtered = recipes.filter(recipe => recipe.category === selectedCategory);
    }
    
    // Then filter by search query if there is one
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query)
        ) ||
        recipe.category.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  // Infinite scroll state
  const [displayedRecipes, setDisplayedRecipes] = useState<typeof recipes>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const RECIPES_PER_PAGE = 8;

  // Initialize displayed recipes when category changes
  useEffect(() => {
    const initialRecipes = filteredRecipes.slice(0, RECIPES_PER_PAGE);
    setDisplayedRecipes(initialRecipes);
    setHasMore(filteredRecipes.length > RECIPES_PER_PAGE);
  }, [filteredRecipes]);

  // Load more recipes function
  const loadMoreRecipes = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const currentLength = displayedRecipes.length;
      const nextRecipes = filteredRecipes.slice(currentLength, currentLength + RECIPES_PER_PAGE);
      
      setDisplayedRecipes(prev => [...prev, ...nextRecipes]);
      setHasMore(currentLength + nextRecipes.length < filteredRecipes.length);
      setIsLoading(false);
    }, 500);
  }, [displayedRecipes.length, filteredRecipes, isLoading, hasMore]);

  // Scroll position restoration effect
  useEffect(() => {
    // Clean up expired scroll positions on component mount
    cleanupExpiredScrollPositions();
    
    // Generate scroll cache key based on category
    const scrollKey = `home-${selectedCategory}`;
    
    // Restore scroll position for this category (only if coming from recipe page)
    restoreScrollPosition(scrollKey);
    
    // Save scroll position when user scrolls
    const handleScroll = () => {
      saveCurrentScrollPosition(scrollKey);
    };
    
    // Add scroll listener for saving position
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedCategory]);

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop 
        >= document.documentElement.offsetHeight - 1000 // Load when 1000px from bottom
      ) {
        loadMoreRecipes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreRecipes]);

  return (
    <main className="container mx-auto px-4 py-8">
      {showHero && (
        <section className="mb-16">
          <div className="recipe-card rounded-2xl p-8 md:p-12 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4">
                <Leaf className="h-16 w-16 text-sage-600" />
              </div>
              <div className="absolute top-8 right-8">
                <Sparkles className="h-12 w-12 text-sage-600" />
              </div>
              <div className="absolute bottom-6 left-1/3">
                <ChefHat className="h-14 w-14 text-sage-600" />
              </div>
            </div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-2 items-center">
              {/* Left Side - Content */}
              <div className="text-left">
                {/* Logo + Tagline */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 text-center sm:text-left">
                  <img
                    src="/logofork.jpg"
                    alt="Bites Garden Logo"
                    className="h-10 w-10 sm:h-16 sm:w-auto object-contain mb-2 sm:mb-0 sm:mr-4 rounded-lg shadow-sm"
                  />
                  <div>
                    <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-sage-800 header-title mb-1 sm:mb-2">
                      Bites Garden
                    </h1>
                    <p className="text-sm sm:text-lg text-sage-600 tagline italic">
                      Where Every Bite Blooms
                    </p>
                  </div>
                </div>

                {/* Intro Blurb */}
                <p className="text-lg text-muted-foreground mb-8 font-natural leading-relaxed">
                  Welcome to Bites Garden — your cozy corner of the web for comforting recipes, 
                  seasonal bites, and slow kitchen inspiration.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => {
                      const recipesSection = document.getElementById('recipes-section');
                      recipesSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-sage-600 hover:bg-sage-700 text-white font-natural text-lg px-8 py-3 rounded-full"
                    size="lg"
                  >
                    🍴 Browse Recipes
                  </Button>
                  <Button
                    onClick={() => navigate('/blog')}
                    variant="outline"
                    className="border-sage-600 text-sage-600 hover:bg-sage-50 font-natural text-lg px-8 py-3 rounded-full"
                    size="lg"
                  >
                    🌿 Get Inspired
                  </Button>
                </div>
              </div>

              {/* Right Side - Featured Image */}
              <div className="relative">
                <div className="aspect-square lg:aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=600&fit=crop&crop=center&q=80"
                    alt="Cozy homemade pancakes with fresh berries and honey"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-sage-600" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search Bar */}
      <section className="mb-12">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
            <input
              type="text"
              placeholder="Search recipes, ingredients, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-3 border border-sage-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent text-sage-800 placeholder-sage-400 font-natural shadow-sm hover:shadow-md transition-shadow"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-sage-100 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-sage-400 hover:text-sage-600" />
              </button>
            )}
          </div>
          {searchQuery && (
            <div className="mt-3 text-center">
              <p className="text-sm text-sage-600 font-natural">
                Found {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} for "{searchQuery}"
                {filteredRecipes.length > 0 && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-sage-500 hover:text-sage-700 underline font-medium"
                  >
                    Clear search
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Recipes Grid - Only show on "All Recipes" and when not searching */}
      {showHero && !searchQuery && (
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 section-heading">
              Featured Collections
            </h2>
            <p className="text-lg text-muted-foreground font-natural">
              Hand-picked recipes for every mood and moment
            </p>
          </div>

          {/* Featured Recipe Collections */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Cozy This Week */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 data-recipe-id="8"
                 onClick={() => {
                   const scrollKey = `home-${selectedCategory}`;
                   saveRecipeCardScrollPosition(scrollKey, '8');
                   const recipe = findRecipeById('8');
                   if (recipe) navigate(getRecipeUrlPath('8', recipe.title));
                 }}>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="/cinamon.jpg"
                  alt="Cinnamon French Toast"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-warm-100 text-warm-800 text-xs">
                    Cozy This Week
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold text-sage-800 mb-2 recipe-title text-base">
                Cinnamon French Toast
              </h3>
              <p className="text-xs text-muted-foreground font-natural">
                20 min • Comfort Food
              </p>
            </div>

            {/* Quick Weeknight Dinners */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 data-recipe-id="18"
                 onClick={() => {
                   const scrollKey = `home-${selectedCategory}`;
                   saveRecipeCardScrollPosition(scrollKey, '18');
                   const recipe = findRecipeById('18');
                   if (recipe) navigate(getRecipeUrlPath('18', recipe.title));
                 }}>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="/garlicpasta.jpg"
                  alt="Garlic Butter Pasta"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-sage-100 text-sage-800 text-xs">
                    Quick Weeknight
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold text-sage-800 mb-2 recipe-title text-base">
                Garlic Butter Pasta
              </h3>
              <p className="text-xs text-muted-foreground font-natural">
                15 min • One-Pot
              </p>
            </div>

            {/* Most Loved Recipes */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 data-recipe-id="7"
                 onClick={() => {
                   const scrollKey = `home-${selectedCategory}`;
                   saveRecipeCardScrollPosition(scrollKey, '7');
                   const recipe = findRecipeById('7');
                   if (recipe) navigate(getRecipeUrlPath('7', recipe.title));
                 }}>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&q=80"
                  alt="Fluffy Pancakes"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-earth-100 text-earth-800 text-xs">
                    Most Loved
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold text-sage-800 mb-2 recipe-title text-base">
                Fluffy Pancakes
              </h3>
              <p className="text-xs text-muted-foreground font-natural">
                25 min • Family Favorite
              </p>
            </div>

            {/* New on the Blog */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 onClick={() => navigate('/blog/4')}>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80"
                  alt="Weekly Meal Planning"
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="bg-purple-100 text-purple-800 text-xs">
                    New on Blog
                  </Badge>
                </div>
              </div>
              <h3 className="font-semibold text-sage-800 mb-2 recipe-title text-base">
                10-Ingredient Meal Plan
              </h3>
              <p className="text-xs text-muted-foreground font-natural">
                8 min read • Meal Planning
              </p>
            </div>
          </div>

          {/* Additional Featured Collections Row */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Seasonal Favorites */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 data-recipe-id="38"
                 onClick={() => {
                   const scrollKey = `home-${selectedCategory}`;
                   saveRecipeCardScrollPosition(scrollKey, '38');
                   const recipe = findRecipeById('38');
                   if (recipe) navigate(getRecipeUrlPath('38', recipe.title));
                 }}>
              <div className="flex gap-4">
                <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80"
                    alt="Chocolate Chip Cookies"
                    className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sage-800 recipe-title text-base">
                      Chocolate Chip Cookies
                    </h3>
                    <Badge className="bg-warm-100 text-warm-800 text-xs ml-2">
                      Seasonal
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-natural mb-2">
                    45 min • Baking • Classic
                  </p>
                  <p className="text-sm text-muted-foreground font-natural">
                    Perfect for cozy winter evenings with a warm cup of cocoa.
                  </p>
                </div>
              </div>
            </div>

            {/* Healthy & Fresh */}
            <div className="recipe-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer group"
                 data-recipe-id="12"
                 onClick={() => {
                   const scrollKey = `home-${selectedCategory}`;
                   saveRecipeCardScrollPosition(scrollKey, '12');
                   const recipe = findRecipeById('12');
                   if (recipe) navigate(getRecipeUrlPath('12', recipe.title));
                 }}>
              <div className="flex gap-4">
                <div className="relative flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&q=80"
                    alt="Smoothie Bowl"
                    className="w-20 h-20 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sage-800 recipe-title text-base">
                      Berry Smoothie Bowl
                    </h3>
                    <Badge className="bg-sage-100 text-sage-800 text-xs ml-2">
                      Healthy & Fresh
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-natural mb-2">
                    10 min • Vegan • Gluten-Free
                  </p>
                  <p className="text-sm text-muted-foreground font-natural">
                    Start your morning with this vibrant, nutritious bowl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Header */}
      <section id="recipes-section" className="mb-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 section-heading">
            {searchQuery ? `Search Results for "${searchQuery}"` : selectedCategory}
          </h2>
          <p className="text-muted-foreground font-natural text-lg">
            {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            {displayedRecipes.length < filteredRecipes.length && (
              <span className="text-sage-600 ml-2">
                (showing {displayedRecipes.length})
              </span>
            )}
          </p>
        </div>
      </section>

      {/* What's New Section - Show 4 latest recipes */}
      {!searchQuery && (
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4 section-heading">
              What's New
            </h2>
            <p className="text-lg text-muted-foreground font-natural">
              Fresh recipes added to our collection
            </p>
          </div>

          {/* Latest 4 Recipes Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recipes.slice(0, 4).map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                currentCategory={selectedCategory}
              />
            ))}
          </div>

          {/* View All Recipes Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/recipes')}
              variant="outline"
              className="border-sage-600 text-sage-600 hover:bg-sage-50 font-natural px-8 py-3"
            >
              View All Recipes
            </Button>
          </div>
        </section>
      )}

      {/* Search Results */}
      {searchQuery && (
        <div className="space-y-8">
          {/* First ad banner before search results */}
          <div className="flex justify-center mb-8">
            <AdSpace 
              size="leaderboard" 
              placement="Pre-Search Results Banner" 
              className="mx-auto"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                currentCategory={selectedCategory}
              />
            ))}
          </div>
          
          {/* Loading indicator for search results */}
          {isLoading && (
            <div className="flex justify-center items-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-sage-600 mr-2" />
              <span className="text-sage-600 font-natural">Loading more recipes...</span>
            </div>
          )}
          
          {/* Load more button for search results */}
          {!isLoading && hasMore && (
            <div className="flex justify-center py-8">
              <Button
                onClick={loadMoreRecipes}
                variant="outline"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 font-natural px-8 py-3"
              >
                Load More Recipes
              </Button>
            </div>
          )}
          
          {/* End of search results indicator */}
          {!hasMore && displayedRecipes.length > RECIPES_PER_PAGE && (
            <div className="text-center py-8">
              <p className="text-sage-600 font-natural text-lg">
                🍴 You've seen all the search results! 🍴
              </p>
              <div className="mt-6 space-y-6">
                <div className="flex justify-center">
                  <AdSpace 
                    size="banner" 
                    placement="End of Search Results Banner" 
                    className="mx-auto"
                  />
                </div>
                
                {/* Final ad grid */}
                <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                  <AdSpace 
                    size="sidebar" 
                    placement="Bottom Sidebar Ad 1" 
                  />
                  <AdSpace 
                    size="sidebar" 
                    placement="Bottom Sidebar Ad 2" 
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* No Search Results */}
      {searchQuery && filteredRecipes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-sage-300 mb-4">
            <ChefHat className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-sage-600 mb-2 font-handwritten">
            No recipes found for your search
          </h3>
          <p className="text-muted-foreground font-natural">
            Try searching for different ingredients or recipe names.
          </p>
          
          <div className="mt-4">
            <Button
              onClick={() => setSearchQuery('')}
              variant="outline"
              className="border-sage-600 text-sage-600 hover:bg-sage-50 font-natural"
            >
              Clear Search
            </Button>
          </div>
          
          {/* Ad for empty state */}
          <div className="mt-8 flex justify-center">
            <AdSpace 
              size="sidebar" 
              placement="No Results Ad" 
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-sage-200">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Leaf className="h-6 w-6 text-sage-500 mr-2" />
            <span className="text-sage-700 font-handwritten text-lg">Bites Garden</span>
          </div>
          <p className="text-sm text-muted-foreground font-natural">
            Made with ❤️ for those who love cooking where every bite blooms.
          </p>
          <p className="text-xs text-muted-foreground mt-2 font-natural">
            © 2024 Bites Garden. Bringing families together through food.
          </p>
        </div>
      </footer>
    </main>
  );
};