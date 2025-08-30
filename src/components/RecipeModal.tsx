import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Clock, Users, ChefHat, Utensils, RefreshCw, Lightbulb, HelpCircle } from 'lucide-react';
import type { Recipe } from '@/data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, isOpen, onClose }) => {
  if (!recipe) return null;

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-sage-800">
            {recipe.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {recipe.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge className={getDifficultyColor(recipe.difficulty)}>
                  {recipe.difficulty}
                </Badge>
              </div>
            </div>

            {/* Recipe Meta */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center space-y-1">
                <Clock className="h-5 w-5 text-sage-600" />
                <div className="text-sm font-medium font-natural">Prep</div>
                <div className="text-xs text-muted-foreground font-natural">
                  {recipe.prepTime}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <ChefHat className="h-5 w-5 text-sage-600" />
                <div className="text-sm font-medium font-natural">Cook</div>
                <div className="text-xs text-muted-foreground font-natural">
                  {recipe.cookTime}
                </div>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Users className="h-5 w-5 text-sage-600" />
                <div className="text-sm font-medium font-natural">Serves</div>
                <div className="text-xs text-muted-foreground font-natural">
                  {recipe.servings}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="space-y-6">
            {/* Ingredients */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten">
                Ingredients
              </h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm font-natural">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            {/* Instructions */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten">
                Instructions
              </h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="space-y-2">
                    <div className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-sage-100 text-sage-800 text-xs font-semibold rounded-full mr-3 mt-0.5 flex-shrink-0 font-natural">
                        {index + 1}
                      </span>
                      <span className="text-sm font-natural leading-relaxed">
                        {instruction}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Serving Suggestions */}
            {recipe.servingSuggestions && recipe.servingSuggestions.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-sage-600" />
                    Serving Suggestions
                  </h3>
                  <ul className="space-y-2">
                    {recipe.servingSuggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm font-natural">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Variations & Substitutions */}
            {recipe.variations && recipe.variations.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-sage-600" />
                    Variations & Substitutions
                  </h3>
                  <ul className="space-y-2">
                    {recipe.variations.map((variation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm font-natural">{variation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* Tips & Tricks */}
            {recipe.tips && recipe.tips.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-sage-600" />
                    Tips & Tricks
                  </h3>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-sage-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm font-natural">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {/* FAQ */}
            {recipe.faq && recipe.faq.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-sage-800 font-handwritten flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-sage-600" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {recipe.faq.map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="font-semibold text-sm text-sage-800 font-natural">
                          Q: {item.question}
                        </div>
                        <div className="text-sm text-muted-foreground font-natural ml-4">
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
      </DialogContent>
    </Dialog>
  );
};