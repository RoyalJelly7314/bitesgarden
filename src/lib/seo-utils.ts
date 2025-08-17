import { recipes } from '@/data/recipes';

/**
 * Generate a SEO-friendly slug from recipe title
 */
export function generateRecipeSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Generate SEO-friendly URL path for recipe
 */
export function getRecipeUrlPath(id: string, title: string): string {
  const slug = generateRecipeSlug(title);
  return `/recipe/${id}/${slug}`;
}

/**
 * Find recipe by ID from URL params
 */
export function findRecipeById(id: string) {
  return recipes.find(recipe => recipe.id === id);
}

/**
 * Extract recipe ID from SEO URL
 */
export function extractRecipeIdFromUrl(url: string): string | null {
  const match = url.match(/\/recipe\/(\d+)/);
  return match ? match[1] : null;
}

/**
 * Generate recipe metadata for SEO
 */
export function getRecipeMetadata(recipe: any) {
  return {
    title: `${recipe.title} - Bites Garden Recipe`,
    description: `${recipe.description} Cook time: ${recipe.cookTime}, Prep time: ${recipe.prepTime}, Serves: ${recipe.servings}. ${recipe.difficulty} difficulty level.`,
    keywords: [
      recipe.title.toLowerCase(),
      recipe.category.toLowerCase(),
      ...recipe.tags,
      'recipe',
      'cooking',
      'bites garden'
    ].join(', '),
    canonical: getRecipeUrlPath(recipe.id, recipe.title)
  };
}
