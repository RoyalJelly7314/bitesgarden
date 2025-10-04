import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Clock, Users, ChefHat } from 'lucide-react';
import type { Recipe } from '@/data/recipes';
import { getRecipeUrlPath } from '@/lib/seo-utils';
import { saveRecipeCardScrollPosition } from '@/lib/scroll-utils';

interface RecipeCardProps {
  recipe: Recipe;
  currentCategory?: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, currentCategory = 'All Recipes' }) => {
  const navigate = useNavigate();
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

  const handleCardClick = () => {
    // Save recipe card position before navigating
    const scrollKey = `home-${currentCategory}`;
    saveRecipeCardScrollPosition(scrollKey, recipe.id);
    navigate(getRecipeUrlPath(recipe.id, recipe.title));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <Card 
      className="recipe-card transition-all duration-300 hover:shadow-lg hover:shadow-sage-200/50 overflow-hidden group h-full flex flex-col cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-sage-500 focus:outline-none"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View recipe for ${recipe.title}`}
      data-recipe-id={recipe.id}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.altText || recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge className={getDifficultyColor(recipe.difficulty)}>
            {recipe.difficulty}
          </Badge>
        </div>
      </div>

      {/* Card content that grows to fill available space */}
      <div className="flex flex-col flex-1">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl text-sage-800 line-clamp-2 recipe-title">
            {recipe.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {recipe.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col flex-1">
          {/* Recipe Meta */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span className="font-natural">{recipe.cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span className="font-natural">{recipe.servings}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChefHat className="h-4 w-4" />
              <span className="font-natural">{recipe.category}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {recipe.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Spacer to push button to bottom */}
          <div className="flex-1"></div>

          {/* Action Button - always at bottom */}
          <Button
            onClick={(e) => {
              e.stopPropagation(); // Prevent double navigation
              // Save recipe card position before navigating
              const scrollKey = `home-${currentCategory}`;
              saveRecipeCardScrollPosition(scrollKey, recipe.id);
              navigate(getRecipeUrlPath(recipe.id, recipe.title));
            }}
            className="w-full mt-auto"
            variant="default"
          >
            View Recipe
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};