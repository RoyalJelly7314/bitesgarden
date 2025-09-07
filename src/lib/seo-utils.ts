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
 * Custom SEO data for specific recipes
 */
const customSeoData: Record<string, { title: string; description: string; altText: string }> = {
  'Avocado Toast with Egg': {
    title: 'Avocado Toast with Egg | BitesGarden',
    description: 'Creamy avocado toast topped with a perfectly cooked egg — a healthy, quick breakfast idea.',
    altText: 'Sourdough toast with mashed avocado and runny fried egg.'
  },
  'Breakfast Burrito': {
    title: 'Breakfast Burrito Recipe | BitesGarden',
    description: 'A hearty breakfast burrito filled with eggs, cheese, and fresh ingredients — perfect on the go.',
    altText: 'Halved breakfast burrito showing eggs, cheese, potatoes, salsa.'
  },
  'Overnight Oats': {
    title: 'Easy Overnight Oats | BitesGarden',
    description: 'Healthy overnight oats with customizable toppings — a simple make-ahead breakfast.',
    altText: 'Mason jar of creamy overnight oats topped with berries.'
  },
  'Smoothie Bowl': {
    title: 'Smoothie Bowl Recipe | BitesGarden',
    description: 'A vibrant smoothie bowl topped with fruit and granola — refreshing and nourishing.',
    altText: 'Thick purple smoothie bowl with granola and fresh fruit.'
  },
  'Greek Yogurt Parfait': {
    title: 'Greek Yogurt Parfait | BitesGarden',
    description: 'Layers of creamy yogurt, crunchy granola, and fruit — an easy, balanced breakfast or snack.',
    altText: 'Layered yogurt parfait with granola and mixed berries in glass.'
  },
  'Chia Pudding': {
    title: 'Chia Pudding Recipe | BitesGarden',
    description: 'Creamy chia pudding topped with fruit — a nutritious, make-ahead breakfast or snack.',
    altText: 'Vanilla chia pudding in jar topped with fruit and nuts.'
  },
  'Bagels with Cream Cheese & Toppings': {
    title: 'Bagels with Cream Cheese | BitesGarden',
    description: 'Freshly toasted bagels with cream cheese and your favorite toppings — simple and delicious.',
    altText: 'Toasted bagels spread with cream cheese and colorful toppings.'
  },
  'Banana Bread': {
    title: 'Banana Bread Recipe | BitesGarden',
    description: 'Moist and fluffy banana bread — a cozy, classic recipe that\'s perfect for breakfast or snacking.',
    altText: 'Sliced banana bread loaf on board with butter.'
  },
  'Morning Garden Scramble': {
    title: 'Morning Garden Scramble | BitesGarden',
    description: 'Fluffy scrambled eggs with zucchini, tomatoes, and greens — a bright, protein-packed breakfast.',
    altText: 'Fluffy eggs with zucchini, tomatoes, spinach in skillet.'
  },
  'Garlic Butter Pasta with Parmesan': {
    title: 'Garlic Butter Pasta with Parmesan | BitesGarden',
    description: 'Buttery garlic pasta tossed with Parmesan — rich flavor in minutes.',
    altText: 'Creamy garlic pasta with grated Parmesan cheese on white plate.'
  },
  'Honey Garlic Chicken Thighs': {
    title: 'Honey Garlic Chicken Thighs | BitesGarden',
    description: 'Juicy chicken glazed in sticky honey-garlic sauce — easy weeknight favorite.',
    altText: 'Golden chicken thighs glazed with honey garlic sauce on serving platter.'
  },
  'Pan-Seared Steak with Herb Butter': {
    title: 'Pan-Seared Steak with Herb Butter | BitesGarden',
    description: 'Tender steak seared to perfection and finished with melting herb butter.',
    altText: 'Perfectly seared steak with melting herb butter on wooden cutting board.'
  },
  'Chicken Fried Rice': {
    title: 'Chicken Fried Rice | BitesGarden',
    description: 'Classic fried rice with chicken, veggies, and egg — quick, filling, and flavorful.',
    altText: 'Colorful fried rice with chicken, vegetables, and scrambled egg in wok.'
  },
  'Creamy One-Pot Chicken Pasta': {
    title: 'Creamy One-Pot Chicken Pasta | BitesGarden',
    description: 'Comforting creamy pasta with tender chicken — one pot, minimal cleanup.',
    altText: 'Creamy chicken pasta in white bowl with fresh herbs garnish.'
  },
  'Garlic Butter Chicken Bites': {
    title: 'Garlic Butter Chicken Bites | BitesGarden',
    description: 'Golden, juicy chicken bites tossed in garlicky butter — great for meals or appetizers.',
    altText: 'Golden chicken bite pieces with garlic butter sauce on wooden board.'
  },
  'Chicken & Broccoli Stir-Fry': {
    title: 'Chicken & Broccoli Stir-Fry | BitesGarden',
    description: 'Crisp broccoli and tender chicken in a savory sauce — fast, fresh stir-fry.',
    altText: 'Stir-fried chicken and broccoli in savory sauce on white plate.'
  },
  'One-Pot Taco Rice': {
    title: 'One-Pot Taco Rice | BitesGarden',
    description: 'All the taco flavors in a hearty rice dish — customizable and meal-prep ready.',
    altText: 'Colorful taco rice bowl with ground beef, cheese, and vegetables.'
  },
  'Spaghetti Aglio e Olio with Green Olives': {
    title: 'Spaghetti Aglio e Olio with Olives | BitesGarden',
    description: 'Garlic, olive oil, chili, and briny olives tossed with al dente spaghetti — simple and bold.',
    altText: 'Spaghetti with garlic, olive oil, and green olives on white plate.'
  },
  'Herb-Crusted Honey Glazed Salmon': {
    title: 'Herb-Crusted Honey Glazed Salmon | BitesGarden',
    description: 'Flaky salmon with fresh herbs and a sweet-savory glaze — elegant yet easy.',
    altText: 'Herb-crusted salmon fillet with honey glaze on white plate.'
  },
  'Creamy Garlic Shrimp Pasta': {
    title: 'Creamy Garlic Shrimp Pasta | BitesGarden',
    description: 'Succulent shrimp in a silky garlic cream sauce over pasta — fast and luxurious.',
    altText: 'Creamy shrimp pasta with garlic sauce in white bowl.'
  },
  'Baked Lemon Herb Chicken Thighs': {
    title: 'Baked Lemon Herb Chicken Thighs | BitesGarden',
    description: 'Oven-baked thighs with zesty lemon and herbs — juicy, aromatic, and simple.',
    altText: 'Lemon herb chicken thighs on baking sheet with fresh herbs.'
  },
  'One-Pot Chicken & Rice': {
    title: 'One-Pot Chicken & Rice | BitesGarden',
    description: 'Comforting chicken and fluffy rice cooked together for a complete, cozy meal.',
    altText: 'One pot chicken and rice dish with vegetables and herbs.'
  },
  'Ground Beef Tacos': {
    title: 'Ground Beef Tacos | BitesGarden',
    description: 'Seasoned beef in warm tortillas with classic toppings — taco night made easy.',
    altText: 'Ground beef tacos with lettuce, cheese, and salsa on wooden board.'
  },
  'Creamy Chicken & Mushroom Skillet': {
    title: 'Creamy Chicken & Mushroom Skillet | BitesGarden',
    description: 'Seared chicken and mushrooms in a rich cream sauce — perfect with pasta or rice.',
    altText: 'Chicken and mushrooms in creamy sauce in cast iron skillet.'
  },
  'Easy Baked Salmon with Veggies': {
    title: 'Easy Baked Salmon with Veggies | BitesGarden',
    description: 'Sheet-pan salmon with roasted vegetables — healthy, colorful, and hands-off.',
    altText: 'Baked salmon fillet with roasted vegetables on sheet pan.'
  },
  'Stuffed Bell Peppers': {
    title: 'Stuffed Bell Peppers | BitesGarden',
    description: 'Tender peppers filled with savory rice and protein — a complete, hearty meal.',
    altText: 'Colorful stuffed bell peppers with rice and meat filling.'
  },
  'Beef & Broccoli Stir-Fry': {
    title: 'Beef & Broccoli Stir-Fry | BitesGarden',
    description: 'Thin-sliced beef and crisp broccoli in a glossy sauce — takeout vibes at home.',
    altText: 'Beef and broccoli stir-fry in glossy sauce on white plate.'
  },
  'Spaghetti Bolognese': {
    title: 'Spaghetti Bolognese | BitesGarden',
    description: 'Slow-simmered meat sauce tossed with spaghetti — rich, comforting classic.',
    altText: 'Spaghetti with rich meat sauce and grated Parmesan cheese.'
  },
  'Cheesy Baked Ziti': {
    title: 'Cheesy Baked Ziti | BitesGarden',
    description: 'Bubbling baked pasta layered with sauce and cheese — crowd-pleasing comfort.',
    altText: 'Baked ziti pasta with melted cheese in ceramic baking dish.'
  },
  'Creamy One-Pot Tomato Pasta': {
    title: 'Creamy One-Pot Tomato Pasta | BitesGarden',
    description: 'Tomato-cream pasta cooked in one pot — weeknight-easy and ultra creamy.',
    altText: 'Creamy tomato pasta in white bowl with fresh basil garnish.'
  },
  'Easy Chickpea Curry': {
    title: 'Easy Chickpea Curry | BitesGarden',
    description: 'Cozy, coconut-kissed chickpea curry with warm spices — budget-friendly and vegan-friendly.',
    altText: 'Chickpea curry in coconut sauce with rice on white plate.'
  },
  'Mediterranean White Beans & Greens': {
    title: 'Mediterranean White Beans & Greens | BitesGarden',
    description: 'Creamy white beans with wilted greens, olive oil, and lemon — wholesome and bright.',
    altText: 'White beans with wilted greens and lemon on white plate.'
  },
  'Baked Feta Chickpeas': {
    title: 'Baked Feta Chickpeas | BitesGarden',
    description: 'Roasted chickpeas with melty feta and herbs — a Mediterranean main or mezze.',
    altText: 'Baked chickpeas with melted feta cheese and herbs in ceramic dish.'
  },
  'Crispy Potato Wedges with Dipping Sauce': {
    title: 'Crispy Potato Wedges with Dips | BitesGarden',
    description: 'Oven or air-fried potato wedges with your favorite dips — extra crispy, extra craveable.',
    altText: 'Golden crispy potato wedges with dipping sauces on wooden board.'
  },
  'Grilled Cheese with Tomato Soup': {
    title: 'Grilled Cheese with Tomato Soup | BitesGarden',
    description: 'Gooey grilled cheese and creamy tomato soup — the ultimate cozy combo.',
    altText: 'Grilled cheese sandwich with tomato soup in white bowl.'
  },
  'Classic Mac \'n\' Cheese': {
    title: 'Classic Mac \'n\' Cheese | BitesGarden',
    description: 'Ultra-creamy, cheesy macaroni — bake or stovetop for a timeless comfort dish.',
    altText: 'Creamy mac and cheese with melted cheese in white bowl.'
  },
  'Marry Me Dip': {
    title: 'Marry Me Dip | BitesGarden',
    description: 'Hot, melty sun-dried tomato and cheese dip that wows at parties and game day.',
    altText: 'Hot cheese dip with sun-dried tomatoes in ceramic dish with bread.'
  },
  'Rustic Apple Cinnamon Tart': {
    title: 'Rustic Apple Cinnamon Tart | BitesGarden',
    description: 'Buttery crust with tender cinnamon apples — rustic, cozy, and irresistibly good.',
    altText: 'Rustic apple tart with cinnamon apples on wooden board.'
  },
  'Chocolate Chip Cookies': {
    title: 'Chocolate Chip Cookies | BitesGarden',
    description: 'Chewy, gooey chocolate chip cookies with golden edges — bakery style at home.',
    altText: 'Fresh chocolate chip cookies on cooling rack with golden edges.'
  },
  'Classic Brownies': {
    title: 'Classic Brownies | BitesGarden',
    description: 'Rich, fudgy brownies with deep chocolate flavor — easy, one-bowl favorite.',
    altText: 'Fudgy chocolate brownies on white plate with powdered sugar.'
  },
  'Vanilla Cupcakes': {
    title: 'Vanilla Cupcakes | BitesGarden',
    description: 'Soft, fluffy vanilla cupcakes ready for your favorite frosting and sprinkles.',
    altText: 'Vanilla cupcakes with frosting and sprinkles on white plate.'
  },
  'No-Bake Cheesecake': {
    title: 'No-Bake Cheesecake | BitesGarden',
    description: 'Silky, chilled cheesecake with graham crust — make-ahead and crowd-pleasing.',
    altText: 'No-bake cheesecake with graham cracker crust on white plate.'
  },
  'Strawberry Shortcake': {
    title: 'Strawberry Shortcake | BitesGarden',
    description: 'Buttery biscuits, juicy strawberries, and whipped cream — a fresh summer classic.',
    altText: 'Strawberry shortcake with whipped cream and fresh berries.'
  },
  'Chocolate Mug Cake': {
    title: 'Chocolate Mug Cake | BitesGarden',
    description: 'Single-serve chocolate cake made in minutes — warm, gooey, and microwave-easy.',
    altText: 'Chocolate mug cake with whipped cream in white mug.'
  },
  'Apple Crisp': {
    title: 'Apple Crisp | BitesGarden',
    description: 'Tender apples with a crunchy oat topping — best served warm with ice cream.',
    altText: 'Apple crisp with oat topping and vanilla ice cream in white bowl.'
  },
  'Peanut Butter Cookies': {
    title: 'Peanut Butter Cookies | BitesGarden',
    description: 'Soft, peanut-y cookies with classic criss-cross tops — simple and nostalgic.',
    altText: 'Peanut butter cookies with criss-cross pattern on white plate.'
  },
  'Lemon Bars': {
    title: 'Lemon Bars | BitesGarden',
    description: 'Bright, tangy lemon filling on buttery shortbread — dusted with powdered sugar.',
    altText: 'Lemon bars with powdered sugar on white plate.'
  }
};

/**
 * Generate recipe metadata for SEO
 */
export function getRecipeMetadata(recipe: any) {
  // Check if recipe has custom SEO data
  const customData = customSeoData[recipe.title];
  
  if (customData) {
    return {
      title: customData.title,
      description: customData.description,
      altText: customData.altText,
      keywords: [
        recipe.title.toLowerCase(),
        recipe.category.toLowerCase(),
        ...recipe.tags,
        'recipe',
        'cooking',
        'bites garden',
        'easy recipe',
        'homemade'
      ].join(', '),
      canonical: getRecipeUrlPath(recipe.id, recipe.title)
    };
  }
  
  // Default SEO format for other recipes
  const seoTitle = `${recipe.title} Recipe | BitesGarden`;
  const firstSentence = recipe.description.split('.')[0];
  const categoryLower = recipe.category.toLowerCase();
  const seoDescription = `${firstSentence} — an easy, ${categoryLower} favorite everyone loves.`;
  
  return {
    title: seoTitle,
    description: seoDescription,
    altText: recipe.title, // Fallback to recipe title for default recipes
    keywords: [
      recipe.title.toLowerCase(),
      recipe.category.toLowerCase(),
      ...recipe.tags,
      'recipe',
      'cooking',
      'bites garden',
      'easy recipe',
      'homemade'
    ].join(', '),
    canonical: getRecipeUrlPath(recipe.id, recipe.title)
  };
}
