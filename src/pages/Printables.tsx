import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { recipes } from '@/data/recipes';
import jsPDF from 'jspdf';

export const Printables: React.FC = () => {
  const navigate = useNavigate();

  // Group recipes by category
  const recipesByCategory = recipes.reduce((acc, recipe) => {
    if (!acc[recipe.category]) {
      acc[recipe.category] = [];
    }
    acc[recipe.category].push(recipe);
    return acc;
  }, {} as Record<string, typeof recipes>);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-sage-100 text-sage-800';
      case 'Medium':
        return 'bg-warm-100 text-warm-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const generateRecipePDF = async (recipe: typeof recipes[0]) => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.width;
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPosition = 20;

      // Helper function to check if we need a new page
      const checkNewPage = (additionalHeight: number) => {
        if (yPosition + additionalHeight > 280) {
          pdf.addPage();
          yPosition = 20;
        }
      };

      // Title
      pdf.setFontSize(24);
      pdf.setTextColor(90, 138, 73); // Sage green
      pdf.text(recipe.title, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 12;

      // Description
      pdf.setFontSize(11);
      pdf.setTextColor(102, 102, 102);
      const descriptionLines = pdf.splitTextToSize(recipe.description, contentWidth);
      pdf.text(descriptionLines, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += descriptionLines.length * 5 + 10;

      // Meta info box
      checkNewPage(25);
      pdf.setFillColor(247, 249, 247);
      pdf.rect(margin, yPosition, contentWidth, 20, 'F');
      
      pdf.setFontSize(9);
      pdf.setTextColor(90, 138, 73);
      const metaY = yPosition + 12;
      pdf.text(`PREP: ${recipe.prepTime}`, margin + 10, metaY);
      pdf.text(`COOK: ${recipe.cookTime}`, margin + 55, metaY);
      pdf.text(`SERVES: ${recipe.servings}`, margin + 100, metaY);
      pdf.text(`DIFFICULTY: ${recipe.difficulty}`, margin + 145, metaY);
      yPosition += 30;

      // Ingredients section
      checkNewPage(30);
      pdf.setFontSize(16);
      pdf.setTextColor(90, 138, 73);
      pdf.text('Ingredients', margin, yPosition);
      yPosition += 10;

      pdf.setFillColor(250, 248, 245);
      const ingredientsHeight = recipe.ingredients.length * 6 + 10;
      pdf.rect(margin, yPosition, contentWidth, ingredientsHeight, 'F');

      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);
      yPosition += 8;

      recipe.ingredients.forEach((ingredient) => {
        checkNewPage(8);
        pdf.circle(margin + 5, yPosition - 1, 1, 'F');
        pdf.text(ingredient, margin + 12, yPosition);
        yPosition += 6;
      });

      yPosition += 10;

      // Instructions section
      checkNewPage(30);
      pdf.setFontSize(16);
      pdf.setTextColor(90, 138, 73);
      pdf.text('Instructions', margin, yPosition);
      yPosition += 15;

      pdf.setFontSize(10);
      pdf.setTextColor(51, 51, 51);

      recipe.instructions.forEach((instruction, index) => {
        checkNewPage(15);
        
        // Step number circle
        pdf.setFillColor(90, 138, 73);
        pdf.circle(margin + 5, yPosition - 2, 3, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(8);
        pdf.text((index + 1).toString(), margin + 5, yPosition, { align: 'center' });
        
        // Instruction text
        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        const instructionLines = pdf.splitTextToSize(instruction, contentWidth - 20);
        pdf.text(instructionLines, margin + 12, yPosition);
        yPosition += instructionLines.length * 5 + 8;
      });

      yPosition += 10;

      // Serving Suggestions section
      if (recipe.servingSuggestions && recipe.servingSuggestions.length > 0) {
        checkNewPage(30);
        pdf.setFontSize(16);
        pdf.setTextColor(90, 138, 73);
        pdf.text('Serving Suggestions', margin, yPosition);
        yPosition += 10;

        pdf.setFillColor(250, 248, 245);
        const servingHeight = recipe.servingSuggestions.length * 6 + 10;
        pdf.rect(margin, yPosition, contentWidth, servingHeight, 'F');

        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        yPosition += 8;

        recipe.servingSuggestions.forEach((suggestion) => {
          checkNewPage(8);
          pdf.circle(margin + 5, yPosition - 1, 1, 'F');
          pdf.text(suggestion, margin + 12, yPosition);
          yPosition += 6;
        });

        yPosition += 10;
      }

      // Variations & Substitutions section
      if (recipe.variations && recipe.variations.length > 0) {
        checkNewPage(30);
        pdf.setFontSize(16);
        pdf.setTextColor(90, 138, 73);
        pdf.text('Variations & Substitutions', margin, yPosition);
        yPosition += 10;

        pdf.setFillColor(250, 248, 245);
        const variationsHeight = recipe.variations.length * 6 + 10;
        pdf.rect(margin, yPosition, contentWidth, variationsHeight, 'F');

        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        yPosition += 8;

        recipe.variations.forEach((variation) => {
          checkNewPage(8);
          pdf.circle(margin + 5, yPosition - 1, 1, 'F');
          pdf.text(variation, margin + 12, yPosition);
          yPosition += 6;
        });

        yPosition += 10;
      }

      // Tips & Tricks section
      if (recipe.tips && recipe.tips.length > 0) {
        checkNewPage(30);
        pdf.setFontSize(16);
        pdf.setTextColor(90, 138, 73);
        pdf.text('Tips & Tricks', margin, yPosition);
        yPosition += 10;

        pdf.setFillColor(250, 248, 245);
        const tipsHeight = recipe.tips.length * 6 + 10;
        pdf.rect(margin, yPosition, contentWidth, tipsHeight, 'F');

        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        yPosition += 8;

        recipe.tips.forEach((tip) => {
          checkNewPage(8);
          pdf.circle(margin + 5, yPosition - 1, 1, 'F');
          pdf.text(tip, margin + 12, yPosition);
          yPosition += 6;
        });

        yPosition += 10;
      }

      // FAQ section
      if (recipe.faq && recipe.faq.length > 0) {
        checkNewPage(30);
        pdf.setFontSize(16);
        pdf.setTextColor(90, 138, 73);
        pdf.text('Frequently Asked Questions', margin, yPosition);
        yPosition += 10;

        pdf.setFillColor(250, 248, 245);
        let faqHeight = 0;
        recipe.faq.forEach((item) => {
          const questionLines = pdf.splitTextToSize(item.question, contentWidth - 20);
          const answerLines = pdf.splitTextToSize(item.answer, contentWidth - 20);
          faqHeight += (questionLines.length + answerLines.length) * 5 + 8;
        });
        faqHeight += 10;
        pdf.rect(margin, yPosition, contentWidth, faqHeight, 'F');

        pdf.setFontSize(10);
        pdf.setTextColor(51, 51, 51);
        yPosition += 8;

        recipe.faq.forEach((item) => {
          checkNewPage(15);
          
          // Question
          pdf.setFontSize(10);
          pdf.setTextColor(90, 138, 73);
          const questionLines = pdf.splitTextToSize(`Q: ${item.question}`, contentWidth - 20);
          pdf.text(questionLines, margin + 12, yPosition);
          yPosition += questionLines.length * 5 + 3;
          
          // Answer
          pdf.setFontSize(10);
          pdf.setTextColor(51, 51, 51);
          const answerLines = pdf.splitTextToSize(`A: ${item.answer}`, contentWidth - 20);
          pdf.text(answerLines, margin + 12, yPosition);
          yPosition += answerLines.length * 5 + 5;
        });

        yPosition += 10;
      }

      // Tags
      if (recipe.tags.length > 0) {
        checkNewPage(20);
        yPosition += 5;
        pdf.setFontSize(9);
        pdf.setTextColor(90, 138, 73);
        pdf.text('Tags: ' + recipe.tags.join(', '), margin, yPosition);
        yPosition += 15;
      }

      // Footer
      pdf.setFontSize(12);
      pdf.setTextColor(90, 138, 73);
      pdf.text('Bites Garden', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 6;
      pdf.setFontSize(9);
      pdf.setTextColor(102, 102, 102);
      pdf.text('where every bite blooms', pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 8;
      pdf.setFontSize(7);
      pdf.text(`Recipe from Bites Garden • Downloaded on ${new Date().toLocaleDateString()}`, 
        pageWidth / 2, yPosition, { align: 'center' });

      // Save the PDF
      const fileName = `${recipe.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_recipe.pdf`;
      pdf.save(fileName);

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Sorry, there was an error generating the PDF. Please try again.');
    }
  };

  const downloadAllRecipesPDF = async () => {
    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.width;
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPosition = 20;

      // Helper function to check if we need a new page
      const checkNewPage = (additionalHeight: number) => {
        if (yPosition + additionalHeight > 280) {
          pdf.addPage();
          yPosition = 20;
        }
      };

      // Cover page
      pdf.setFontSize(32);
      pdf.setTextColor(90, 138, 73);
      pdf.text('Bites Garden', pageWidth / 2, 80, { align: 'center' });
      
      pdf.setFontSize(16);
      pdf.setTextColor(102, 102, 102);
      pdf.text('where every bite blooms', pageWidth / 2, 95, { align: 'center' });
      
      pdf.setFontSize(14);
      pdf.setTextColor(90, 138, 73);
      pdf.text(`Complete Recipe Collection • ${recipes.length} Recipes`, pageWidth / 2, 120, { align: 'center' });
      
      pdf.setFontSize(10);
      pdf.setTextColor(102, 102, 102);
      pdf.text(`Downloaded on ${new Date().toLocaleDateString()}`, pageWidth / 2, 140, { align: 'center' });

      // Process each category
      for (const [category, categoryRecipes] of Object.entries(recipesByCategory)) {
        pdf.addPage();
        yPosition = 30;

        // Category title
        pdf.setFontSize(24);
        pdf.setTextColor(90, 138, 73);
        pdf.text(category, pageWidth / 2, yPosition, { align: 'center' });
        yPosition += 20;

        // Process each recipe in the category
        for (const recipe of categoryRecipes) {
          checkNewPage(50);

          // Recipe title
          pdf.setFontSize(16);
          pdf.setTextColor(90, 138, 73);
          pdf.text(recipe.title, margin, yPosition);
          yPosition += 8;

          // Description
          pdf.setFontSize(9);
          pdf.setTextColor(102, 102, 102);
          const descriptionLines = pdf.splitTextToSize(recipe.description, contentWidth);
          pdf.text(descriptionLines, margin, yPosition);
          yPosition += descriptionLines.length * 4 + 5;

          // Meta info
          pdf.setFontSize(8);
          pdf.setTextColor(90, 138, 73);
          pdf.text(`Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime} | Serves: ${recipe.servings} | ${recipe.difficulty}`, 
            margin, yPosition);
          yPosition += 8;

          // Ingredients
          pdf.setFontSize(11);
          pdf.setTextColor(90, 138, 73);
          pdf.text('Ingredients:', margin, yPosition);
          yPosition += 6;

          pdf.setFontSize(8);
          pdf.setTextColor(51, 51, 51);
          recipe.ingredients.forEach((ingredient) => {
            checkNewPage(5);
            pdf.text(`• ${ingredient}`, margin + 5, yPosition);
            yPosition += 4;
          });
          yPosition += 3;

          // Instructions
          checkNewPage(15);
          pdf.setFontSize(11);
          pdf.setTextColor(90, 138, 73);
          pdf.text('Instructions:', margin, yPosition);
          yPosition += 6;

          pdf.setFontSize(8);
          pdf.setTextColor(51, 51, 51);
          recipe.instructions.forEach((instruction, index) => {
            checkNewPage(10);
            const instructionLines = pdf.splitTextToSize(`${index + 1}. ${instruction}`, contentWidth - 5);
            pdf.text(instructionLines, margin + 5, yPosition);
            yPosition += instructionLines.length * 4 + 2;
          });

          yPosition += 10;

          // Add separator line
          if (yPosition < 260) {
            pdf.setDrawColor(232, 240, 230);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 10;
          }
        }
      }

      // Save the PDF
      pdf.save('bites_garden_complete_recipe_collection.pdf');

    } catch (error) {
      console.error('Error generating complete PDF:', error);
      alert('Sorry, there was an error generating the complete recipe collection PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen cozy-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Button>

        {/* Printables Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FileText className="h-12 w-12 text-sage-600 mr-2" />
            <Printer className="h-10 w-10 text-earth-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4 header-title">
            Printable Recipes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-natural leading-relaxed">
            Download and print your favorite recipes for easy cooking! Perfect for meal planning, 
            recipe cards, or building your personal cookbook collection.
          </p>
        </div>

        {/* Download All Recipes Button */}
        <div className="text-center mb-12">
          <div className="recipe-card p-8 rounded-lg max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4 section-heading">
              Complete Recipe Collection
            </h3>
            <p className="text-muted-foreground font-natural mb-6">
              Download all {recipes.length} recipes in one comprehensive PDF, organized by category.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={downloadAllRecipesPDF}
                className="gap-2 text-lg px-8 py-3"
                size="lg"
              >
                <Download className="h-5 w-5" />
                Download Complete PDF
              </Button>
              <Button
                onClick={() => window.print()}
                className="gap-2 text-lg px-8 py-3"
                size="lg"
                variant="outline"
              >
                <Printer className="h-5 w-5" />
                Print This Page
              </Button>
            </div>
          </div>
        </div>

        {/* Individual Recipe Downloads by Category */}
        <div className="space-y-12">
          {Object.entries(recipesByCategory).map(([category, categoryRecipes]) => (
            <div key={category}>
              <h2 className="text-3xl font-bold text-sage-800 mb-6 section-heading">
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryRecipes.map((recipe) => (
                  <Card key={recipe.id} className="recipe-card transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="relative w-full h-32 overflow-hidden rounded-t-lg">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-sage-800 line-clamp-2 recipe-title">
                        {recipe.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground font-natural line-clamp-2">
                        {recipe.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-2">
                      {/* Recipe Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-natural">
                        <span>{recipe.prepTime}</span>
                        <span>{recipe.cookTime}</span>
                        <span>{recipe.servings} servings</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          onClick={() => generateRecipePDF(recipe)}
                          className="flex-1 gap-2"
                          variant="default"
                        >
                          <Download className="h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button
                          onClick={() => window.open(`/recipe/${recipe.id}`, '_blank')}
                          className="gap-2"
                          variant="outline"
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <div className="recipe-card p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4 section-heading">
              Printing Tips
            </h3>
            <div className="text-left space-y-3 font-natural text-muted-foreground">
              <p>• <strong>Best Results:</strong> Use good quality paper for durability</p>
              <p>• <strong>Recipe Cards:</strong> Print individual recipes for easy reference while cooking</p>
              <p>• <strong>Meal Planning:</strong> Download the complete collection for weekly meal prep</p>
              <p>• <strong>Gift Idea:</strong> Print favorite recipes to share with friends and family</p>
              <p>• <strong>Kitchen Binder:</strong> Create your own Bites Garden cookbook</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};