export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cookTime: string;
  prepTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

export const categories = [
  'All Recipes',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts'
];

export const recipes: Recipe[] = [
  {
    id: '2',
    title: 'Herb-Crusted Honey Glazed Salmon',
    description: `Elegant, flavorful, and surprisingly simple — Herb-Crusted Honey Glazed Salmon is a showstopper that's just as perfect for a cozy dinner as it is for entertaining. Fresh salmon fillets are brushed with a sweet and tangy honey glaze, then topped with a fragrant herb crust that crisps beautifully in the oven.

The result? A tender, flaky fish with a golden, caramelized finish and a burst of fresh flavor in every bite.

Serve it alongside roasted veggies, rice, or a light salad for a balanced, beautiful meal that feels like something special — without the fuss.`,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80',
    category: 'Dinner',
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 salmon fillets (skin on or off)',
      'Salt & pepper to taste',
      '1 tbsp olive oil or melted butter',
      '1½ tbsp honey',
      '1 tsp Dijon mustard (optional)',
      '2 tbsp fresh herbs, chopped (parsley, dill, thyme, or a mix)',
      '1 garlic clove, minced',
      '½ tsp lemon zest',
      'Optional: lemon wedges for serving'
    ],
    instructions: [
      'Prep the oven: Preheat your oven to 200°C (400°F). Line a baking sheet with parchment paper or foil for easy cleanup.',
      'Make the herb glaze: In a small bowl, mix honey, olive oil (or melted butter), Dijon mustard (if using), minced garlic, chopped herbs, lemon zest, and a pinch of salt and pepper. Stir well to combine.',
      'Season the salmon: Pat the salmon dry with a paper towel. Season both sides with a bit of salt and pepper. Place the fillets skin-side down on the baking sheet.',
      'Brush on the glaze: Spoon or brush the herb-honey mixture generously over the top of the salmon fillets, pressing the herbs gently onto the fish.',
      'Bake: Bake in the preheated oven for 12–15 minutes, depending on the thickness of your salmon, until it flakes easily with a fork and the top is golden and glazed. You can broil for the last 1–2 minutes for extra caramelization.',
      'Serve warm: Plate with roasted veggies, a fresh salad, or herbed rice. Garnish with lemon wedges and a few extra herbs if desired.'
    ],
    tags: ['healthy', 'protein', 'quick dinner']
  },
  {
    id: '4',
    title: 'Rustic Apple Cinnamon Tart',
    description: `Golden, crisp, and delicately spiced — this Rustic Apple Cinnamon Tart is everything cozy baked into one beautiful dessert. With tender apple slices nestled in a flaky, free-form crust and sprinkled with cinnamon sugar, it's a simple yet impressive treat that tastes like home.

No fancy techniques, just real ingredients and warm flavors that shine. Perfect for autumn evenings, weekend baking, or anytime you crave something sweet and nostalgic.`,
    image: '/appletart.jpg',
    category: 'Desserts',
    cookTime: '40 mins',
    prepTime: '45 mins',
    servings: 8,
    difficulty: 'Medium',
    ingredients: [
      'For the crust (or use store-bought pie dough):',
      '1¼ cups all-purpose flour',
      '1 tbsp sugar',
      '¼ tsp salt',
      '115g (½ cup) cold unsalted butter, cubed',
      '3–4 tbsp ice water',
      'For the filling:',
      '2–3 medium apples (like Granny Smith or Honeycrisp), thinly sliced',
      '2 tbsp brown sugar',
      '1 tbsp white sugar',
      '1 tsp ground cinnamon',
      '½ tsp vanilla extract',
      '1 tbsp flour (to thicken juices)',
      '1 tbsp lemon juice',
      'Pinch of salt',
      'For brushing & topping:',
      '1 egg (beaten, for egg wash)',
      'Optional: raw sugar for sprinkling, or a drizzle of honey after baking'
    ],
    instructions: [
      'Make the crust (or use store-bought): In a bowl, whisk together flour, sugar, and salt. Cut in the cold butter with a fork or fingers until crumbly. Add ice water, 1 tbsp at a time, just until dough holds together. Shape into a disc, wrap in plastic, and chill for 30 minutes.',
      'Prepare the apple filling: In a bowl, toss thinly sliced apples with sugars, cinnamon, vanilla, flour, lemon juice, and a pinch of salt. Let sit while the dough chills.',
      'Roll out the crust: On a floured surface, roll the chilled dough into a rough 10–12 inch circle (it doesn\'t need to be perfect — rustic is the goal!). Transfer to a parchment-lined baking sheet.',
      'Assemble the tart: Spoon the apple mixture into the center of the dough, leaving a 2-inch border. Gently fold the edges over the apples, overlapping as needed.',
      'Brush & bake: Brush the crust with egg wash and sprinkle raw sugar over the crust and filling if desired. Bake at 200°C (400°F) for 35–40 minutes, until the crust is golden and apples are soft.',
      'Cool slightly & serve: Let rest for 10–15 minutes. Serve warm or at room temperature — optionally with vanilla ice cream, whipped cream, or a drizzle of honey.'
    ],
    tags: ['dessert', 'seasonal', 'homemade', 'comfort food']
  },
  {
    id: '5',
    title: 'Morning Garden Scramble',
    description: `Start your day with a burst of color, flavor, and nourishment with this Morning Garden Scramble. Inspired by the freshness of a backyard garden, this wholesome breakfast combines fluffy scrambled eggs with a medley of seasonal vegetables like bell peppers, spinach, cherry tomatoes, and onions. It's a simple yet vibrant dish that comes together in minutes and delivers a balanced mix of protein, fiber, and natural sweetness.

Whether you're fueling up for a busy day or enjoying a slow weekend morning, the Morning Garden Scramble is endlessly customizable and pairs perfectly with toast, avocado, or fresh herbs from your kitchen window. It's a great way to reduce food waste too—just toss in whatever veggies you have on hand. Healthy, satisfying, and full of garden goodness, this is a breakfast that blooms on your plate.`,
    image: '/eggs.jpg',
    category: 'Breakfast',
    cookTime: '10 mins',
    prepTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '6 large eggs',
      '2 tbsp milk or cream',
      '1 small zucchini, diced',
      '1/4 cup cherry tomatoes, halved',
      'Small handful of fresh spinach leaves',
      '2 tbsp olive oil or butter',
      'Salt and pepper to taste',
      'Optional: cheese, fresh herbs, chili flakes'
    ],
    instructions: [
      'Prep your vegetables: Wash all the produce. Dice the zucchini into small cubes, halve the cherry tomatoes, and set aside a small handful of fresh spinach leaves.',
      'Whisk the eggs: In a medium bowl, crack the eggs and add the milk. Season with a pinch of salt and a few cracks of black pepper. Whisk with a fork until the yolks and whites are fully combined and slightly frothy. Set aside.',
      'Sauté the zucchini: Heat a non-stick skillet over medium heat and add the olive oil (or butter for extra flavor). Once hot, add the diced zucchini. Cook for 3–4 minutes, stirring occasionally, until softened and slightly golden around the edges.',
      'Add tomatoes and spinach: Toss in the halved cherry tomatoes and stir. Cook for about 1 minute to warm them through and release their juices. Add the spinach last — it will wilt quickly in about 30 seconds to 1 minute.',
      'Add eggs and scramble gently: Lower the heat to medium-low. Pour the whisked eggs evenly into the skillet over the veggies. Let them sit for 10–15 seconds, then gently stir with a silicone spatula. Continue stirring slowly in a circular motion, scraping the bottom of the pan. You want soft curds — not dry eggs — so remove from heat while they\'re still slightly glossy.',
      'Add finishing touches: Sprinkle in a little cheese if using, and stir gently to melt. Garnish with fresh chopped herbs if desired.',
      'Serve warm: Plate up with toasted sourdough, avocado slices, or a sprinkle of chili flakes if you like a little heat.'
    ],
    tags: ['breakfast', 'protein', 'quick', 'fresh herbs']
  },
  {
    id: '7',
    title: 'Fluffy Pancakes',
    description: `There's something magical about a stack of golden, fluffy pancakes in the morning. Light, airy, and irresistibly soft, these pancakes are the kind that melt in your mouth and make any breakfast feel special.

Whether it's a cozy weekend brunch or a weekday treat, this recipe delivers perfect results every time with simple pantry staples. What makes these pancakes stand out is their dreamy texture — pillowy on the inside with just the right amount of crisp on the edges.

A splash of vanilla and a touch of sweetness give them that classic, homemade flavor, while a drizzle of maple syrup or a handful of fresh berries takes them to the next level. They're quick to make, endlessly customizable, and sure to become a staple in your kitchen.

Fluffy, comforting, and delicious — this is pancake perfection.`,
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
    category: 'Breakfast',
    cookTime: '15 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 ½ cups all-purpose flour',
      '1 tbsp white sugar',
      '3 ½ tsp baking powder',
      '1 tsp salt',
      '1 ¼ cups milk',
      '1 egg',
      '3 tbsp butter (melted) or oil',
      '1 tsp vanilla extract',
      'Optional: blueberries, chocolate chips, maple syrup'
    ],
    instructions: [
      'Mix dry ingredients: In a large bowl, whisk together the flour, sugar, baking powder, and salt. This step helps evenly distribute the baking powder so your pancakes rise beautifully.',
      'Prepare wet ingredients: In a separate bowl or large measuring cup, whisk together the milk, egg, melted butter (or oil), and vanilla extract. Make sure the butter isn\'t too hot or it could cook the egg.',
      'Combine wet and dry: Pour the wet ingredients into the dry. Stir gently with a wooden spoon or spatula just until combined — a few small lumps are okay! Overmixing will make the pancakes tough instead of fluffy.',
      'Let the batter rest (optional but helpful): Let the batter sit for 5–10 minutes while you heat your pan. This gives the flour time to hydrate and helps make the pancakes even lighter.',
      'Heat your pan: Place a non-stick pan or griddle over medium heat. Add a small amount of butter or oil and swirl to coat. You\'ll know it\'s ready when a drop of water sizzles on contact.',
      'Cook the pancakes: Use a ¼ cup measuring scoop to pour batter into the pan. Cook for about 2–3 minutes, or until bubbles form on the surface and the edges look set. Flip carefully and cook for another 1–2 minutes until golden brown and cooked through.',
      'Keep warm (optional): Transfer cooked pancakes to a plate and cover loosely with a clean kitchen towel or keep them warm in a low oven (around 90°C / 200°F) while you cook the rest.',
      'Serve and enjoy!: Stack \'em high and top with maple syrup, fruit, yogurt, nut butter — whatever makes your morning cozy.'
    ],
    tags: ['breakfast', 'fluffy', 'easy', 'family-friendly', 'weekend treat']
  },
  {
    id: '8',
    title: 'Cinnamon French Toast',
    description: `Wake up to the comforting aroma of warm cinnamon and golden toast with this deliciously simple Cinnamon French Toast. Crispy on the outside, soft and custardy on the inside, this breakfast classic is the perfect way to turn everyday ingredients into something truly special.

Thick slices of bread are soaked in a rich cinnamon-vanilla egg mixture, then pan-fried to perfection for that beautiful golden-brown finish. Whether you're using fresh or slightly stale bread, this recipe is forgiving and full of flavor. Topped with a dusting of powdered sugar, a drizzle of maple syrup, or a handful of fresh fruit, it's a meal that feels like a warm hug on a plate.

Perfect for slow weekend mornings, brunch with friends, or even breakfast-for-dinner, Cinnamon French Toast is a timeless favorite that never goes out of style.`,
    image: '/cinamon.jpg',
    category: 'Breakfast',
    cookTime: '10 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4 slices thick bread (brioche or challah ideal)',
      '2 eggs',
      '1/2 cup milk',
      '1 tsp cinnamon',
      '1 tsp vanilla extract',
      '1 tbsp sugar (optional)',
      'Butter or oil for cooking',
      'Toppings: powdered sugar, maple syrup, berries, whipped yogurt'
    ],
    instructions: [
      'Make the custard: In a shallow bowl or wide dish, whisk together the eggs, milk, cinnamon, vanilla, and sugar (if using). Whisk until fully combined and slightly frothy.',
      'Soak the bread: Dip each slice of bread into the custard mixture, letting it soak for 10–15 seconds per side. If your bread is a bit stale or thick, give it a few more seconds. It should absorb the mixture without falling apart.',
      'Heat your pan: Set a non-stick skillet or griddle over medium heat and melt a small knob of butter or add a swirl of oil. Make sure the pan is hot but not smoking — you want a gentle sizzle.',
      'Cook the toast: Place the soaked bread slices onto the hot pan. Cook for 2–3 minutes per side, or until golden brown and lightly crisp on the outside. You may need to adjust the heat slightly so they don\'t burn before the inside is set.',
      'Repeat in batches: If your pan is small, cook the slices in batches. You can keep finished toast warm in a low oven (90°C / 200°F) while the rest are cooking.',
      'Serve it cozy: Serve hot with a dusting of powdered sugar, a drizzle of maple syrup, and a handful of berries or a spoon of whipped yogurt for extra comfort.'
    ],
    tags: ['breakfast', 'french toast', 'cinnamon', 'sweet', 'weekend']
  },
  {
    id: '9',
    title: 'Avocado Toast with Egg',
    description: `Simple, satisfying, and endlessly customizable, Avocado Toast with Egg is the ultimate go-to breakfast for busy mornings or relaxed brunches. Creamy mashed avocado layered over crispy toasted bread sets the stage for a perfectly cooked egg — whether you prefer it sunny-side up, poached, or soft-boiled.

This dish strikes a beautiful balance of healthy fats, protein, and fiber, keeping you full and energized for hours. A sprinkle of sea salt, a dash of chili flakes, or a squeeze of lemon adds just the right kick, while optional toppings like microgreens, feta, or hot sauce let you make it your own.

Minimal effort, maximum flavor — this recipe is a modern classic that proves healthy can also be delicious. It's no surprise avocado toast has become a kitchen staple around the world.`,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&q=80',
    category: 'Breakfast',
    cookTime: '5 mins',
    prepTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 slices of bread (sourdough, rye, or whole grain)',
      '1 ripe avocado',
      '2 eggs (any style: fried, poached, or scrambled)',
      '1 tsp olive oil or butter (for frying)',
      'Salt & pepper to taste',
      'Optional toppings: chili flakes, lemon juice, feta, cherry tomatoes, microgreens'
    ],
    instructions: [
      'Toast your bread: Lightly toast the bread slices in a toaster or on a hot skillet until golden and crisp on the outside, but still soft in the middle. Set aside.',
      'Mash the avocado: Cut the avocado in half, remove the pit, and scoop the flesh into a small bowl. Mash it with a fork until smooth or slightly chunky, depending on your texture preference. Season with a pinch of salt, a crack of black pepper, and a squeeze of lemon juice (optional).',
      'Cook the eggs your way: Fried eggs: Heat olive oil or butter in a skillet over medium heat. Crack in the eggs and cook until the whites are set but yolks still soft (about 2–3 minutes). Poached eggs: Bring water to a gentle simmer, swirl it, then gently lower in cracked eggs. Cook for 3–4 minutes. Scrambled eggs: Whisk eggs with a splash of milk and cook on low heat, stirring slowly until creamy.',
      'Assemble the toast: Spread the mashed avocado generously onto each slice of toast. Top with one egg per slice.',
      'Add your toppings: Finish with a sprinkle of chili flakes for a kick, crumbled feta for creaminess, or microgreens for a fresh bite. A drizzle of olive oil and a final twist of pepper make it feel extra cozy.',
      'Serve immediately: Avocado toast is best served fresh and warm. Pair with a cup of herbal tea or coffee for the perfect garden breakfast moment.'
    ],
    tags: ['breakfast', 'healthy', 'avocado', 'protein', 'quick']
  },
  {
    id: '10',
    title: 'Breakfast Burrito',
    description: `Kickstart your day with a warm, satisfying Breakfast Burrito that wraps all your morning favorites into one delicious bundle. Packed with scrambled eggs, melty cheese, crispy potatoes, and your choice of protein like bacon, sausage, or black beans, this burrito is a complete meal you can hold in your hand.

Wrapped in a soft tortilla and easy to take on the go, it's perfect for busy mornings, weekend brunches, or even meal prep for the week ahead. Add some avocado, salsa, or hot sauce for an extra flavor boost, or customize it with your favorite fillings to make it just right.

Comforting, filling, and easy to make, the Breakfast Burrito is a crowd-pleaser that delivers every time — whether you're feeding a family or just yourself.`,
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&q=80',
    category: 'Breakfast',
    cookTime: '10 mins',
    prepTime: '10 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 large flour tortillas',
      '4 large eggs',
      '½ cup shredded cheese (cheddar or mozzarella)',
      '½ cup cooked potatoes (cubed or hash brown style)',
      '¼ cup bell pepper, finely chopped',
      '¼ cup onion, finely chopped',
      '2 tbsp milk or plant milk',
      '1 tbsp olive oil or butter',
      'Salt & pepper to taste',
      'Optional: avocado slices, salsa, hot sauce, cooked sausage or beans'
    ],
    instructions: [
      'Prep the fillings: If using raw potatoes, cube them small and pan-fry in olive oil until golden and fork-tender (about 10 minutes). If using frozen hash browns, cook as per package. Sauté the onions and bell peppers until soft and slightly caramelized (about 5 minutes). Set aside.',
      'Scramble the eggs: In a bowl, whisk eggs with milk, a pinch of salt, and black pepper. Heat butter or oil in a non-stick skillet over medium-low heat. Pour in the eggs and cook slowly, stirring with a spatula, until soft and fluffy. Remove from heat just before fully cooked to avoid dryness.',
      'Warm the tortillas: Place tortillas in a warm pan or microwave for 10–15 seconds to make them soft and pliable. This helps prevent tearing during wrapping.',
      'Assemble the burritos: Lay each tortilla flat. In the center of each one, layer: cooked potatoes, sautéed veggies, scrambled eggs, cheese. Optional: avocado slices, salsa, hot sauce, beans or sausage.',
      'Wrap it up: Fold the sides in, then roll the burrito tightly from bottom to top. If needed, place seam-side down in a hot pan for 1–2 minutes to seal and lightly crisp.',
      'Serve warm: Slice in half and serve with extra salsa, sour cream, or a side salad for a complete garden-inspired breakfast.'
    ],
    tags: ['breakfast', 'burrito', 'hearty', 'portable', 'Mexican-inspired']
  },
  {
    id: '11',
    title: 'Overnight Oats',
    description: `Overnight Oats are the perfect no-fuss breakfast — creamy, filling, and ready to enjoy the moment you wake up. Made by soaking rolled oats in milk or yogurt overnight, this chilled breakfast becomes rich and spoonable by morning, no cooking required.

Customizable with your favorite add-ins like fresh fruit, nuts, seeds, or a swirl of peanut butter, overnight oats are both nourishing and endlessly adaptable. They're a great source of fiber, energy, and satisfaction, making them ideal for busy mornings or meal prep throughout the week.

Whether you prefer them fruity, chocolatey, or nutty, Overnight Oats offer a deliciously wholesome start to your day — with barely any effort at all.`,
    image: '/oats.jpeg',
    category: 'Breakfast',
    cookTime: '0 mins',
    prepTime: '5 mins',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '½ cup rolled oats',
      '½ cup milk (or plant milk of choice)',
      '¼ cup plain yogurt (optional, for creaminess)',
      '1–2 tsp honey or maple syrup',
      '½ tsp vanilla extract',
      'Pinch of salt',
      'Optional add-ins: chia seeds, flaxseeds, cinnamon',
      'Toppings: fresh berries, banana slices, nut butter, granola, crushed nuts, jam'
    ],
    instructions: [
      'Combine base ingredients: In a mason jar or lidded container, add the oats, milk, yogurt (if using), sweetener, vanilla, and a pinch of salt. Stir until well mixed. If you like a thicker texture, add a tablespoon of chia seeds or flaxseeds.',
      'Customize with flavor: Add a dash of cinnamon, a spoonful of peanut butter, or a few frozen berries if you want to infuse flavor overnight. You can also wait and add toppings in the morning for freshness.',
      'Seal and chill overnight: Cover tightly and place in the refrigerator for at least 6 hours, ideally overnight. The oats will absorb the liquid and soften into a creamy, pudding-like texture.',
      'Serve cold (or warm it up): In the morning, give your oats a stir and add your favorite toppings. You can enjoy them cold straight from the jar or microwave for 30–60 seconds if you prefer a warm bowl.',
      'Make it a routine: Prep 3–4 jars at once for a no-stress breakfast all week long!'
    ],
    tags: ['breakfast', 'overnight', 'healthy', 'no-cook', 'meal-prep']
  },
  {
    id: '12',
    title: 'Smoothie Bowl',
    description: `Start your morning with a burst of color and nutrition with this refreshing Smoothie Bowl — thick, creamy, and topped with your favorite crunchy, fruity, and nutty extras. Unlike a regular smoothie, this bowl is spoonable and satisfying, turning your drinkable breakfast into a beautiful, energizing meal.

Blended with frozen fruits and a splash of milk or yogurt, each bowl becomes a blank canvas for toppings like granola, chia seeds, fresh berries, coconut flakes, or a drizzle of nut butter. It's as pretty as it is powerful — loaded with vitamins, antioxidants, and fiber to keep you full and glowing all morning.

Perfect for warm weather mornings, healthy habits, or just treating yourself to something colorful and delicious, the Smoothie Bowl is a feel-good favorite that never gets boring.`,
    image: '/smutibowl.jpg',
    category: 'Breakfast',
    cookTime: '0 mins',
    prepTime: '10 mins',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '1 frozen banana',
      '½ cup frozen mixed berries (or mango, pineapple, etc.)',
      '¼ cup Greek yogurt or plant yogurt',
      '¼–½ cup milk or plant milk (adjust for thickness)',
      '1 tsp honey or maple syrup (optional)',
      '½ tsp vanilla extract (optional)',
      'Toppings: fresh fruit, granola, chia seeds, nut butter, coconut flakes, edible flowers'
    ],
    instructions: [
      'Blend the base: In a blender, add the frozen banana, berries, yogurt, milk, and sweetener (if using). Blend until thick and creamy — it should be spoonable, not drinkable. Add a splash more milk only if needed to get things moving.',
      'Pour and smooth: Spoon the smoothie mixture into a bowl and use the back of a spoon to smooth the surface for a nice presentation.',
      'Decorate with toppings: Arrange your toppings in rows or sections for that pretty café-style look. Mix textures and colors — crunchy granola, soft fruit, creamy nut butter, and a sprinkle of seeds.',
      'Serve immediately: Smoothie bowls are best eaten fresh while cold and thick. Serve with a spoon and enjoy a refreshing, nutrient-rich breakfast or snack.'
    ],
    tags: ['breakfast', 'smoothie', 'healthy', 'colorful', 'antioxidants']
  },
  {
    id: '13',
    title: 'Greek Yogurt Parfait',
    description: `Layered, lovely, and loaded with goodness — the Greek Yogurt Parfait is a simple yet elegant breakfast (or snack!) that feels like a treat but fuels like a health food. Creamy Greek yogurt is stacked with juicy fresh fruit, crunchy granola, and a drizzle of honey for the perfect mix of textures and flavors.

It's protein-rich, naturally sweetened, and endlessly customizable. Whether you're making it in a jar for a grab-and-go option or serving it in a glass for a pretty brunch, this parfait is as versatile as it is delicious.

Healthy, satisfying, and ready in minutes, a Greek Yogurt Parfait is proof that wholesome food can be both beautiful and effortless.`,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    category: 'Breakfast',
    cookTime: '0 mins',
    prepTime: '5 mins',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '1 cup Greek yogurt (plain or vanilla)',
      '½ cup granola or muesli',
      '½ cup mixed berries (fresh or thawed frozen)',
      '1–2 tsp honey or maple syrup (optional)',
      'Optional: nuts, seeds, shredded coconut, or cinnamon'
    ],
    instructions: [
      'Choose your glass or jar: A clear glass or small mason jar works beautifully — it lets the pretty layers shine through.',
      'Layer 1: Yogurt base: Spoon about ½ of the Greek yogurt into the bottom of your jar or glass. Spread it evenly with the back of the spoon.',
      'Layer 2: Berries: Add a layer of fresh or thawed berries — try strawberries, blueberries, raspberries, or chopped banana. You can lightly mash some if you like a saucier texture.',
      'Layer 3: Crunchy granola: Sprinkle about half of your granola or muesli over the fruit. This adds texture and a little sweetness.',
      'Repeat the layers: Add the remaining yogurt, followed by more fruit and a final sprinkle of granola. You can drizzle with honey or maple syrup on top for extra indulgence.',
      'Add finishing touches: Garnish with a few extra berries, a dusting of cinnamon, or a sprinkle of coconut flakes or chopped nuts for a garden-style touch.',
      'Serve fresh: Best enjoyed right away so the granola stays crunchy. For a to-go version, assemble just before eating or keep granola separate until ready to serve.'
    ],
    tags: ['breakfast', 'parfait', 'protein', 'layered', 'quick']
  },
  {
    id: '14',
    title: 'Chia Pudding',
    description: `Chia Pudding is a creamy, make-ahead breakfast or snack that's as nourishing as it is easy to love. Made with just chia seeds and milk (plus a touch of sweetener if you like), it transforms overnight into a thick, pudding-like treat packed with fiber, omega-3s, and plant-based protein.

Mild in flavor and endlessly customizable, chia pudding is a perfect base for layering with fruits, nuts, nut butters, or even a bit of chocolate. Whether you enjoy it plain and simple or dressed up with toppings, it's a wholesome option that feels indulgent without the guilt.

Great for busy mornings, meal prep, or a light dessert, this little jar of goodness is proof that simple ingredients can do magical things.`,
    image: '/chia.jpg',
    category: 'Breakfast',
    cookTime: '0 mins',
    prepTime: '5 mins',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '3 tbsp chia seeds',
      '1 cup milk (dairy or plant-based)',
      '1 tsp maple syrup or honey (optional)',
      '½ tsp vanilla extract (optional)',
      'Pinch of salt',
      'Toppings (choose any): fresh fruit, granola, nut butter, coconut flakes, jam, dark chocolate shavings or cinnamon'
    ],
    instructions: [
      'Mix the base: In a small jar or container, combine chia seeds, milk, sweetener, vanilla (if using), and a pinch of salt. Stir well with a spoon or fork to combine everything evenly.',
      'Stir again after a few minutes: Let the mixture sit for 5–10 minutes, then stir again to break up any clumps. This helps the seeds distribute evenly and thicken properly.',
      'Cover and chill overnight: Seal the container with a lid and refrigerate for at least 4 hours, ideally overnight. The chia seeds will absorb the liquid and form a thick, pudding-like consistency.',
      'Serve with toppings: In the morning, give your pudding a gentle stir. Add your favorite toppings for flavor, texture, and color. Try layering fruit or granola for a parfait-style breakfast.',
      'Make a batch: You can prep 2–3 jars at once and store them in the fridge for up to 4 days — great for grab-and-go breakfasts or snack time.'
    ],
    tags: ['breakfast', 'chia', 'pudding', 'superfood', 'make-ahead']
  },
  {
    id: '15',
    title: 'Bagels with Cream Cheese & Toppings',
    description: `Sometimes the simplest breakfasts are the most satisfying, and Bagels with Cream Cheese & Toppings are a perfect example. With their soft, chewy texture and golden crust, bagels make a delicious base for a creamy layer of tangy cream cheese — and from there, the topping options are endless.

Whether you go savory with smoked salmon and capers, or sweet with fresh berries and honey, bagels offer a balance of comfort and creativity. They're ideal for leisurely brunches, quick weekday mornings, or assembling a beautiful bagel board for guests.

Customizable, filling, and always a crowd-pleaser, this is a breakfast classic that never goes out of style.`,
    image: '/bagels.jpg',
    category: 'Breakfast',
    cookTime: '5 mins',
    prepTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 fresh bagels (plain, whole grain, everything, etc.)',
      '¼–½ cup cream cheese (plain or flavored)',
      'Optional: a little butter for toasting',
      'Savory options: sliced cucumber & dill, smashed avocado + chili flakes, smoked salmon + capers + red onion, tomato slices + olive oil + sea salt, hard-boiled egg + microgreens',
      'Sweet options: sliced strawberries + honey, banana + peanut butter + cinnamon, jam + crushed walnuts, apple slices + maple drizzle, blueberries + lemon zest'
    ],
    instructions: [
      'Toast the bagels (optional): Slice the bagels in half and toast them lightly in a toaster or skillet until golden and warm. You can spread a little butter before toasting for extra richness.',
      'Spread the cream cheese: While the bagels are still warm, generously spread cream cheese over each half. Use plain cream cheese for versatility or go with an herbed, whipped, or fruit-flavored version for extra flavor.',
      'Add your toppings: Mix and match your toppings depending on your mood — go fresh and savory, sweet and creamy, or even combine elements like avocado + strawberries for something creative.',
      'Finish with seasoning (optional): Sprinkle with flaky sea salt, freshly cracked pepper, lemon zest, cinnamon, or drizzle with olive oil or honey depending on the combo.',
      'Serve immediately: Best enjoyed warm with a cozy drink. Perfect for breakfast, brunch, or even a light lunch.'
    ],
    tags: ['breakfast', 'bagels', 'customizable', 'classic', 'quick']
  },
  {
    id: '16',
    title: 'Banana Bread',
    description: `Banana Bread is the ultimate cozy comfort — soft, moist, and bursting with the sweet, nostalgic aroma of ripe bananas and warm spices. Whether you enjoy it plain, studded with chocolate chips, or sprinkled with crunchy nuts, it's a timeless recipe that brings instant homey vibes to any kitchen.

Perfect for using up overripe bananas, this loaf bakes up golden and fragrant, ready to be sliced for breakfast, an afternoon snack, or even dessert. It's easy to make, forgiving to tweak, and always satisfying with a cup of coffee or tea.

Whether you bake it for loved ones or just for yourself, Banana Bread is more than just a recipe — it's a hug in every slice.`,
    image: '/banana.jpg',
    category: 'Breakfast',
    cookTime: '55 mins',
    prepTime: '10 mins',
    servings: 10,
    difficulty: 'Easy',
    ingredients: [
      '3 ripe bananas (medium-large, very spotty)',
      '2 eggs',
      '½ cup brown sugar (or coconut sugar)',
      '¼ cup melted butter or oil',
      '¼ cup milk (dairy or plant-based)',
      '1 tsp vanilla extract',
      '1 ½ cups all-purpose flour',
      '1 tsp baking soda',
      '½ tsp cinnamon',
      '¼ tsp salt',
      'Optional: ½ cup chopped nuts, chocolate chips, or berries'
    ],
    instructions: [
      'Preheat the oven: Set your oven to 175°C (350°F). Grease a 9×5 inch loaf pan or line it with parchment paper.',
      'Mash the bananas: In a large mixing bowl, mash the bananas with a fork until smooth. A few small lumps are okay — they give the bread extra texture.',
      'Mix wet ingredients: Add the eggs, brown sugar, melted butter, milk, and vanilla extract to the mashed bananas. Whisk until everything is well combined and smooth.',
      'Combine dry ingredients: In a separate bowl, stir together the flour, baking soda, cinnamon, and salt.',
      'Bring it all together: Slowly add the dry mixture to the wet ingredients. Use a spatula to fold everything together gently — don\'t overmix! Fold in nuts, chocolate chips, or berries at the end if using.',
      'Pour and bake: Pour the batter into your prepared loaf pan. Smooth the top with a spoon. Bake for 50–60 minutes, or until a toothpick inserted into the center comes out clean.',
      'Cool and slice: Let the banana bread cool in the pan for 10–15 minutes before transferring to a wire rack. Slice once cool enough to handle and enjoy with butter, nut spread, or plain with tea.'
    ],
    tags: ['breakfast', 'banana bread', 'baked', 'sweet', 'comfort food']
  },
  {
    id: '18',
    title: 'Garlic Butter Pasta with Parmesan',
    description: `Rich, buttery, and bursting with garlic flavor, Garlic Butter Pasta with Parmesan is the kind of comfort food that's as easy to make as it is hard to resist. With just a handful of pantry ingredients, this dish comes together in minutes but tastes like something truly special.

The pasta is coated in a silky garlic butter sauce, finished with a generous shower of grated Parmesan for that perfect salty-savory finish. It's a go-to recipe for busy nights, last-minute dinners, or whenever you're craving something cozy and satisfying without the fuss.

Simple, flavorful, and endlessly comforting — this is pasta at its best.`,
    image: '/garlicpasta.jpg',
    category: 'Lunch',
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '200g (7 oz) spaghetti or pasta of choice',
      '3 tbsp unsalted butter',
      '3–4 garlic cloves, minced',
      '¼ tsp chili flakes (optional)',
      '½ cup grated Parmesan cheese',
      'Salt and black pepper to taste',
      'Optional: chopped parsley or basil for garnish',
      'Optional: squeeze of lemon or drizzle of olive oil for brightness'
    ],
    instructions: [
      'Cook the pasta: Bring a large pot of salted water to a boil. Add your pasta and cook until al dente according to package instructions. Reserve about ½ cup of the pasta water before draining.',
      'Make the garlic butter sauce: While the pasta is cooking, melt the butter in a large skillet over medium heat. Add the minced garlic and sauté for 1–2 minutes, stirring constantly, until fragrant but not browned. Add chili flakes if using.',
      'Toss the pasta in the sauce: Add the drained pasta directly into the garlic butter sauce. Toss well to coat all the strands.',
      'Add Parmesan and adjust: Sprinkle in the Parmesan cheese and add a splash of the reserved pasta water. Stir gently until everything comes together into a glossy, flavorful sauce. Season with black pepper and a pinch of salt, if needed.',
      'Finish and serve: Plate immediately and top with extra Parmesan, chopped herbs, and a squeeze of lemon or drizzle of olive oil for freshness.'
    ],
    tags: ['lunch', 'pasta', 'garlic', 'Italian', 'quick']
  },
  {
    id: '19',
    title: 'Honey Garlic Chicken Thighs',
    description: `Sticky, savory, and a little bit sweet, Honey Garlic Chicken Thighs are a deliciously satisfying dish that brings bold flavor with minimal effort. Juicy, tender chicken thighs are pan-seared to golden perfection, then glazed in a rich honey garlic sauce that clings to every bite.

This recipe strikes the perfect balance — the honey adds a touch of sweetness, the garlic brings depth and warmth, and the soy sauce rounds it all out with a salty umami kick. It's a family-friendly favorite that pairs beautifully with rice, veggies, or noodles.

Whether it's a quick weeknight dinner or part of a cozy weekend meal, this dish proves that simple ingredients can deliver big flavor.`,
    image: '/thighs.jpg',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '4 bone-in or boneless chicken thighs (skin-on preferred for crispiness)',
      'Salt & pepper to taste',
      '1 tbsp olive oil',
      '3 cloves garlic, minced',
      '¼ cup honey',
      '2 tbsp soy sauce',
      '1 tbsp apple cider vinegar (or lemon juice)',
      '1 tbsp water (to thin sauce if needed)',
      'Optional: chili flakes for heat, fresh parsley or green onions for garnish'
    ],
    instructions: [
      'Prep the chicken: Pat chicken thighs dry with a paper towel. Season both sides with salt and pepper.',
      'Sear the chicken: In a large skillet over medium heat, heat the olive oil. Once hot, add the chicken thighs skin-side down (if using skin-on). Sear for 4–5 minutes per side until golden brown. Reduce heat slightly if needed to avoid burning.',
      'Make the honey garlic sauce: In a small bowl, mix together honey, soy sauce, apple cider vinegar, and minced garlic. Stir well.',
      'Add sauce to pan: Reduce heat to low. Pour the honey garlic mixture over the chicken. Use a spoon to coat the thighs in the sauce. Let simmer for 8–10 minutes, flipping occasionally, until the chicken is fully cooked (internal temp should reach 75°C / 165°F) and the sauce has thickened slightly.',
      'Glaze and finish: If the sauce is too thick, add a splash of water. Once glossy and sticky, spoon extra sauce over the chicken.',
      'Serve warm: Serve with steamed rice, roasted veggies, or mashed potatoes. Garnish with chopped parsley or green onions and a sprinkle of chili flakes if desired.'
    ],
    tags: ['lunch', 'chicken', 'honey garlic', 'Asian-inspired', 'protein']
  },
  {
    id: '20',
    title: 'Pan-Seared Steak with Herb Butter',
    description: `Few things feel as indulgent and satisfying as a perfectly Pan-Seared Steak with Herb Butter. Golden-crusted on the outside, juicy and tender on the inside, this classic dish brings restaurant-quality flavor right to your home kitchen — no grill required.

The magic is in the simplicity: a hot pan, a well-seasoned cut of steak, and a generous spoonful of garlic herb butter that melts luxuriously over the top. It adds richness, fragrance, and that melt-in-your-mouth finish that makes every bite unforgettable.

Whether you're celebrating something special or just craving a cozy, hearty dinner, this steak delivers comfort and elegance in equal measure.`,
    image: '/steak.jpg',
    category: 'Lunch',
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 2,
    difficulty: 'Medium',
    ingredients: [
      'For the steak:',
      '2 steaks (ribeye, sirloin, or filet mignon – about 1 inch thick)',
      'Salt & freshly cracked black pepper',
      '1 tbsp olive oil or high-heat oil',
      '2 cloves garlic, smashed',
      '2 sprigs fresh thyme or rosemary (optional)',
      '1 tbsp butter (for basting)',
      'For the herb butter:',
      '2 tbsp softened butter',
      '1 tsp chopped fresh parsley',
      '½ tsp chopped fresh thyme or rosemary',
      '½ tsp garlic (minced or powder)',
      'Pinch of salt & pepper',
      'Squeeze of lemon juice (optional)'
    ],
    instructions: [
      'Make the herb butter: In a small bowl, mix the softened butter with herbs, garlic, a pinch of salt and pepper, and a little lemon juice if using. Mix well and set aside or refrigerate until needed.',
      'Prep the steak: Bring the steaks to room temperature (20–30 minutes out of the fridge). Pat them dry with paper towels — this is key for a great sear. Season generously on both sides with salt and pepper.',
      'Sear the steak: Heat a heavy skillet (cast iron is best) over medium-high heat. Add olive oil and swirl to coat. Once hot and shimmering, place the steaks in the pan. Sear undisturbed for 3–4 minutes until a golden crust forms.',
      'Flip and baste: Flip the steaks and add the smashed garlic, thyme, and butter to the pan. Tilt the pan slightly and spoon the melted butter over the steaks repeatedly for 1–2 minutes. This keeps them juicy and flavorful.',
      'Check doneness: For medium-rare, remove steaks when internal temp hits ~57°C / 135°F. Let rest for 5–10 minutes on a cutting board before slicing. The temperature will continue to rise slightly.',
      'Top with herb butter & serve: Place a dollop of the herb butter on each steak while resting or just before serving. Serve with roasted veggies, mashed potatoes, or a crisp green salad.'
    ],
    tags: ['lunch', 'steak', 'herb butter', 'premium', 'protein']
  },
  {
    id: '21',
    title: 'Chicken Fried Rice',
    description: `Chicken Fried Rice is the ultimate homemade takeout-style comfort food — quick, satisfying, and full of flavor in every bite. With tender pieces of chicken, fluffy rice, colorful veggies, and savory soy sauce all stir-fried together, this dish transforms simple ingredients into a warm, crave-worthy meal.

It's the perfect way to use up leftover rice and create something that feels both effortless and delicious. A hint of sesame oil and scrambled egg bring that signature fried rice taste, while the chicken adds heartiness that makes it a complete dish.

Whether you're cooking for one or feeding a family, this cozy skillet favorite is always a hit — and it comes together in under 30 minutes.`,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&q=80',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '1 cup cooked rice (best if chilled or leftover)',
      '1 chicken breast or 2 thighs, diced',
      '2 eggs, beaten',
      '1 small carrot, diced',
      '¼ cup green peas (fresh or frozen)',
      '2 green onions, sliced',
      '2–3 tbsp soy sauce (adjust to taste)',
      '1 tbsp sesame oil or cooking oil',
      '1 tsp garlic, minced',
      'Salt & pepper to taste',
      'Optional: chili flakes or sriracha for heat, chopped cilantro for garnish'
    ],
    instructions: [
      'Prepare your rice: Use leftover rice if you have it — cold rice holds its shape better and fries up nicely. If making fresh, spread it out on a plate to cool quickly before cooking.',
      'Cook the chicken: Heat 1 tsp oil in a large skillet or wok over medium heat. Add diced chicken, season lightly with salt and pepper, and cook until golden and cooked through (about 5–6 minutes). Remove and set aside.',
      'Scramble the eggs: In the same pan, add a bit more oil if needed. Pour in the beaten eggs and scramble quickly until just set. Remove and set aside with the chicken.',
      'Sauté the veggies: Add carrots and cook for 2–3 minutes until slightly tender. Add garlic and peas, cooking for another minute. You can add a little splash of water to help soften the carrots if needed.',
      'Fry the rice: Push veggies to the side and add a little more oil if dry. Add the rice and break up any clumps. Stir-fry everything together over medium-high heat for 2–3 minutes until warmed through and slightly crispy.',
      'Combine everything: Add back the chicken and eggs. Pour in soy sauce and sesame oil, stirring well to coat. Toss in sliced green onions last.',
      'Taste & serve: Adjust seasoning as needed. Serve hot, garnished with extra green onions, chili flakes, or fresh herbs.'
    ],
    tags: ['lunch', 'fried rice', 'chicken', 'Asian', 'one-pan']
  },
  {
    id: '22',
    title: 'Creamy One-Pot Chicken Pasta',
    description: `Creamy, comforting, and all made in a single pot — Creamy One-Pot Chicken Pasta is the ultimate cozy dinner for busy nights. Juicy chicken pieces are simmered with tender pasta in a rich, garlicky cream sauce that hugs every bite.

This dish brings together the heartiness of a home-cooked meal with the ease of minimal cleanup. There's no need to boil pasta separately or juggle multiple pans — everything comes together right in one pot, soaking up all the savory flavor along the way.

It's a satisfying, feel-good dinner that's as perfect for weeknights as it is for curling up with something delicious at the end of a long day.`,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80',
    category: 'Lunch',
    cookTime: '25 mins',
    prepTime: '5 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 tbsp olive oil or butter',
      '1 small onion, diced',
      '2 garlic cloves, minced',
      '1 chicken breast, diced (or 2 thighs)',
      '2 cups chicken broth',
      '1 cup milk or cream',
      '200g (7 oz) pasta (penne, fusilli, or shells work great)',
      '½ cup grated Parmesan cheese',
      'Salt & pepper to taste',
      'Optional: 1 tsp Italian seasoning, ½ cup spinach or peas, chili flakes'
    ],
    instructions: [
      'Sauté the aromatics: In a large pot or deep skillet, heat the olive oil over medium heat. Add the diced onion and cook until soft and translucent, about 3 minutes. Add the garlic and cook for another 30 seconds until fragrant.',
      'Cook the chicken: Add the diced chicken to the pot, season with salt and pepper, and cook until lightly browned and cooked through (5–7 minutes). Stir occasionally.',
      'Add liquid & pasta: Pour in the chicken broth and milk (or cream). Stir in the uncooked pasta and bring to a gentle boil.',
      'Simmer until tender: Lower the heat to a simmer and cover. Let it cook for 10–12 minutes, stirring occasionally so the pasta doesn\'t stick. Add a splash more milk or broth if it gets too thick before the pasta is done.',
      'Add cheese & finish: Once the pasta is tender and the sauce creamy, stir in the Parmesan cheese. Adjust seasoning to taste. Add Italian seasoning or a handful of spinach or peas if using. Let it all simmer for 1–2 more minutes.',
      'Serve warm: Spoon into bowls, top with extra cheese, fresh herbs, or a sprinkle of chili flakes, and serve immediately. Comfort in every bite!'
    ],
    tags: ['lunch', 'one-pot', 'creamy pasta', 'chicken', 'comfort food']
  },
  {
    id: '23',
    title: 'Garlic Butter Chicken Bites',
    description: `Garlic Butter Chicken Bites are juicy, golden, and packed with rich, buttery flavor — the kind of quick and satisfying recipe that turns simple ingredients into something irresistible. Each bite-sized piece is seared to perfection, then tossed in a fragrant garlic butter sauce that's impossible to resist.

They're perfect for busy weeknights, meal prep, or as a crowd-pleasing appetizer. Serve them over rice, pasta, salad, or just enjoy straight from the skillet — no judgment here!

This is comfort food done fast, without sacrificing a bit of flavor.`,
    image: '/bites.jpg',
    category: 'Lunch',
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '2 chicken breasts, cut into bite-sized cubes',
      'Salt & pepper to taste',
      '1 tsp paprika (optional for extra color/flavor)',
      '1 tbsp olive oil',
      '2 tbsp unsalted butter',
      '3–4 garlic cloves, minced',
      '1 tbsp chopped fresh parsley (or ½ tsp dried)',
      'Optional: squeeze of lemon or chili flakes for heat'
    ],
    instructions: [
      'Season the chicken: Pat the chicken dry and toss it in a bowl with salt, pepper, and paprika if using. Make sure each piece is evenly coated.',
      'Sear the bites: Heat olive oil in a large skillet over medium-high heat. Once hot, add the chicken pieces in a single layer (don\'t overcrowd). Let them cook undisturbed for 2–3 minutes until golden on one side, then flip and cook another 3–4 minutes until browned and cooked through. Remove and set aside.',
      'Make the garlic butter: Reduce heat to medium. In the same pan, melt the butter and add the minced garlic. Cook for 30–60 seconds until fragrant and golden (not browned).',
      'Toss chicken in sauce: Return the cooked chicken bites to the pan and toss to coat in the garlic butter. Stir in fresh parsley or sprinkle on top just before serving.',
      'Serve warm: Delicious with rice, mashed potatoes, pasta, in wraps, or with a crisp side salad. Finish with a squeeze of lemon or a few chili flakes if you want a little kick.'
    ],
    tags: ['lunch', 'chicken bites', 'garlic butter', 'quick', 'protein']
  },
  {
    id: '24',
    title: 'Chicken & Broccoli Stir-Fry',
    description: `Simple, fresh, and full of flavor — Chicken & Broccoli Stir-Fry is a classic for a reason. Tender chicken strips and vibrant broccoli florets come together in a savory stir-fry sauce that coats every bite with just the right balance of salty, sweet, and umami.

This one-pan wonder is perfect for busy evenings when you want something wholesome and comforting without the fuss. It's quick to make, packed with protein and greens, and delicious served over rice or noodles.

Whether you're meal prepping or making dinner on the fly, this dish brings cozy, home-cooked flavor to your table in under 30 minutes.`,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '1 chicken breast or 2 thighs, thinly sliced',
      '2 cups broccoli florets',
      '2 tbsp oil (vegetable, canola, or sesame)',
      '2 garlic cloves, minced',
      '1 tsp fresh ginger, grated (optional but great)',
      '2 green onions, sliced (optional)',
      'For the stir-fry sauce:',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce (or hoisin for a sweeter version)',
      '1 tsp cornstarch',
      '1 tsp honey or brown sugar',
      '¼ cup water',
      'Optional: chili flakes or sriracha for heat'
    ],
    instructions: [
      'Steam or blanch broccoli: Bring a small pot of water to a boil and blanch the broccoli florets for 1–2 minutes until bright green and just tender. Drain and set aside.',
      'Prepare the sauce: In a small bowl, whisk together soy sauce, oyster sauce, cornstarch, honey, and water until smooth. Set aside.',
      'Cook the chicken: Heat 1 tbsp oil in a large skillet or wok over medium-high heat. Add sliced chicken, season lightly with salt and pepper, and stir-fry for 4–5 minutes until golden and fully cooked. Remove from pan and set aside.',
      'Sauté garlic & ginger: In the same pan, add another tbsp of oil if needed. Sauté minced garlic and ginger for 30 seconds until fragrant.',
      'Bring it all together: Add the broccoli and cooked chicken back to the pan. Pour in the sauce and toss everything to coat. Stir-fry for 2–3 minutes until the sauce thickens and everything is glossy and hot.',
      'Serve warm: Serve over steamed rice or noodles. Top with green onions, sesame seeds, or a drizzle of chili oil if desired.'
    ],
    tags: ['lunch', 'stir-fry', 'healthy', 'Asian', 'quick']
  },
  {
    id: '25',
    title: 'One-Pot Taco Rice',
    description: `One-Pot Taco Rice is everything you love about taco night — bold flavors, hearty ingredients, and comforting spices — all simmered together in a single cozy pot. With seasoned ground meat, fluffy rice, tender beans, and melty cheese, it's a full-flavored meal that's both satisfying and easy to make.

Perfect for weeknights, casual dinners, or meal prep, this dish brings Tex-Mex comfort to your table without the mess of multiple pans. Top it with sour cream, avocado, or a squeeze of lime for a personal twist.

It's fast, filling, and the kind of dish that makes you want seconds (and maybe thirds).`,
    image: '/tacorice.jpg',
    category: 'Lunch',
    cookTime: '25 mins',
    prepTime: '5 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 tbsp olive oil',
      '1 small onion, diced',
      '2 garlic cloves, minced',
      '250g (½ lb) ground beef or chicken',
      '1 cup long-grain white rice',
      '2 tbsp tomato paste',
      '2 tsp chili powder',
      '1 tsp cumin',
      '1 tsp smoked paprika',
      'Salt & pepper to taste',
      '2 cups chicken or veggie broth',
      '½ cup canned black beans (rinsed)',
      '½ cup corn (fresh, canned, or frozen)',
      '½ cup shredded cheese (cheddar or mozzarella)',
      'Optional: chopped cilantro, lime wedges, sour cream, avocado'
    ],
    instructions: [
      'Sauté aromatics: In a large pot or deep skillet, heat olive oil over medium heat. Add diced onion and sauté for 2–3 minutes until soft. Stir in garlic and cook another 30 seconds.',
      'Brown the meat: Add ground beef or chicken. Season lightly with salt and pepper. Cook for 5–6 minutes, breaking it apart with a spoon, until fully browned and no longer pink.',
      'Add spices & tomato paste: Stir in tomato paste, chili powder, cumin, and smoked paprika. Cook for 1 minute to bloom the spices and deepen the flavor.',
      'Add rice & broth: Stir in the uncooked rice, then pour in the broth. Bring to a gentle boil, then reduce heat to low. Cover and simmer for 15 minutes.',
      'Add beans & corn: After 15 minutes, stir in the black beans and corn. Re-cover and cook another 5–7 minutes until the rice is tender and the liquid is mostly absorbed.',
      'Finish with cheese & toppings: Remove from heat. Stir in shredded cheese until melted and creamy. Serve warm with toppings like cilantro, lime, sour cream, or avocado.'
    ],
    tags: ['lunch', 'one-pot', 'taco rice', 'Mexican-inspired', 'hearty']
  },
  {
    id: '26',
    title: 'Crispy Potato Wedges with Dipping Sauce',
    description: `Golden on the outside, fluffy on the inside — Crispy Potato Wedges are the ultimate homemade comfort snack or side dish. Baked (or air-fried) to crispy perfection and seasoned just right, these wedges deliver all the crunch and flavor of fries, without the deep fryer.

Paired with a creamy, zesty dipping sauce, they're perfect for game night, family dinners, or anytime you're craving something warm, salty, and satisfying.

Easy to prep and even easier to love, this is the kind of recipe that disappears fast — so you might want to make a double batch.`,
    image: '/potato.jpeg',
    category: 'Lunch',
    cookTime: '35 mins',
    prepTime: '10 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      'For the wedges:',
      '3–4 medium potatoes (Yukon Gold or Russet)',
      '2 tbsp olive oil',
      '1 tsp garlic powder',
      '1 tsp paprika',
      '½ tsp dried rosemary or thyme',
      'Salt & pepper to taste',
      'Optional: 2 tbsp grated Parmesan (for added crispiness)',
      'For the dipping sauce:',
      '¼ cup mayonnaise',
      '1 tbsp ketchup',
      '1 tsp Dijon mustard or yellow mustard',
      '½ tsp smoked paprika or chili powder',
      '1 tsp lemon juice or vinegar',
      'Pinch of salt & pepper'
    ],
    instructions: [
      'Preheat the oven: Set your oven to 220°C (425°F). Line a baking sheet with parchment paper or lightly grease it.',
      'Prep the potatoes: Wash and scrub the potatoes well (no need to peel). Cut each potato in half lengthwise, then slice each half into 3–4 thick wedges.',
      'Season the wedges: In a large bowl, toss the wedges with olive oil, garlic powder, paprika, rosemary, salt, and pepper until evenly coated. Add Parmesan now if using.',
      'Bake until crispy: Arrange wedges in a single layer on the baking sheet, cut side down. Bake for 20 minutes, then flip each wedge and bake for another 15–20 minutes until golden brown and crispy on the outside, tender inside.',
      'Make the dipping sauce: In a small bowl, mix together mayo, ketchup, mustard, paprika, lemon juice, and a pinch of salt and pepper. Adjust to taste — add a bit of hot sauce if you like it spicy.',
      'Serve immediately: Plate the hot wedges and serve with the dipping sauce. Also great with garlic aioli, ranch, or a herbed yogurt dip!'
    ],
    tags: ['lunch', 'potato wedges', 'crispy', 'side dish', 'comfort food']
  },
  {
    id: '27',
    title: 'Grilled Cheese with Tomato Soup',
    description: `Few pairings are as cozy and comforting as Grilled Cheese with Tomato Soup — a timeless classic that never goes out of style. Buttery, golden-brown bread hugs perfectly melted cheese, while the rich, velvety tomato soup offers the perfect dip with every bite.

It's the kind of meal that warms you from the inside out, whether you're curled up on a rainy day or just craving something familiar and satisfying.

Simple ingredients, quick prep, and soul-soothing flavor — this duo is a hug in a bowl (and sandwich).`,
    image: '/tomatosoup.jpg',
    category: 'Lunch',
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      'For the tomato soup:',
      '1 tbsp olive oil or butter',
      '1 small onion, chopped',
      '2 garlic cloves, minced',
      '1 can (400g / 14 oz) crushed or diced tomatoes',
      '1 cup vegetable broth (or water)',
      '1 tsp sugar',
      'Salt & pepper to taste',
      'Optional: ¼ cup cream or milk for richness, fresh basil for garnish',
      'For the grilled cheese:',
      '4 slices of your favorite bread (sourdough, whole grain, or classic white)',
      '2–3 slices of cheese per sandwich (cheddar, gouda, mozzarella, etc.)',
      '2 tbsp butter (for the outside of the bread)'
    ],
    instructions: [
      '🔸 Tomato Soup:',
      'Sauté aromatics: In a saucepan, heat olive oil over medium heat. Add chopped onion and sauté for 3–4 minutes until soft. Stir in garlic and cook for another 30 seconds.',
      'Simmer the soup: Add the canned tomatoes, broth, sugar, salt, and pepper. Bring to a simmer and cook uncovered for 10–15 minutes to deepen the flavor.',
      'Blend until smooth: Use an immersion blender (or transfer to a regular blender) to purée the soup until creamy. Stir in cream or milk if using, then simmer 2 more minutes. Taste and adjust seasoning.',
      '🔸 Grilled Cheese:',
      'Assemble the sandwiches: Butter one side of each slice of bread. Place cheese slices between two bread slices, buttered side facing out.',
      'Grill to golden: Heat a skillet over medium heat. Cook sandwiches 2–3 minutes per side until golden brown and the cheese is melty. Press gently with a spatula for even toasting.',
      'Slice and serve: Cut sandwiches in halves or quarters. Serve hot alongside bowls of warm tomato soup — perfect for dipping!'
    ],
    tags: ['lunch', 'grilled cheese', 'tomato soup', 'comfort food', 'classic']
  },
  {
    id: '48',
    title: 'Classic Mac \'n\' Cheese',
    description: `Creamy, cheesy, and irresistibly nostalgic — Classic Mac 'n' Cheese is the ultimate comfort food that brings everyone to the table. With tender pasta smothered in a rich, velvety cheese sauce, it's a dish that feels like a warm hug in every bite.

Whether served as a hearty main or a crowd-pleasing side, this timeless recipe is always a hit. Made with simple ingredients and baked to golden perfection, it's easy enough for weeknights yet special enough for holidays.

One forkful and you'll understand why it's a forever favorite.`,
    image: '/mac.jpg',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '200g (7 oz) elbow macaroni or pasta of choice',
      '2 tbsp butter',
      '2 tbsp all-purpose flour',
      '2 cups milk (whole or 2%)',
      '1½ cups shredded cheddar cheese (plus more for topping)',
      '½ cup mozzarella or Gruyère (optional for stretchiness)',
      'Salt & pepper to taste',
      '¼ tsp mustard powder (optional, for depth)',
      'Pinch of nutmeg (optional, for warmth)',
      'Optional topping: ½ cup breadcrumbs + 1 tbsp melted butter'
    ],
    instructions: [
      'Boil the pasta: Cook macaroni in salted boiling water until just al dente. Drain and set aside.',
      'Make a roux: In a medium saucepan over medium heat, melt the butter. Whisk in the flour and cook for 1–2 minutes, stirring constantly, until it smells slightly nutty (this is your roux).',
      'Create the sauce: Gradually whisk in the milk, making sure there are no lumps. Cook for 4–5 minutes, stirring often, until the sauce thickens enough to coat the back of a spoon.',
      'Add cheese & seasoning: Lower the heat and stir in the shredded cheese(s), salt, pepper, mustard powder, and nutmeg. Stir until smooth and creamy.',
      'Combine pasta & sauce: Add the drained pasta to the cheese sauce and stir well to coat every piece.',
      'Optional baked version: Pour into a buttered baking dish, top with extra cheese or buttered breadcrumbs, and broil or bake at 200°C (400°F) for 10–12 minutes until golden and bubbling.',
      'Serve warm: Garnish with herbs or extra cheese shavings if desired. Serve as a main dish or a cozy side.'
    ],
    tags: ['lunch', 'mac and cheese', 'comfort food', 'cheesy', 'classic']
  },
  {
    id: '49',
    title: 'Creamy One-Pot Tomato Pasta',
    description: `When comfort meets convenience, you get Creamy One-Pot Tomato Pasta — a rich, flavorful dish that's as easy to make as it is satisfying to eat. With tender pasta simmered right in a creamy tomato sauce, this recipe keeps cleanup minimal and flavor maximum.

It's perfect for busy weeknights, cozy dinners, or those moments when you want something delicious without the fuss. A touch of garlic, herbs, and a swirl of cream bring the whole dish together in under 30 minutes.

Simple, creamy, and packed with flavor — it's a one-pot wonder you'll want to make again and again.`,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&q=80',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '2 tbsp olive oil',
      '2 garlic cloves, minced',
      '1 small onion, diced',
      '2 tbsp tomato paste',
      '1 can (400g / 14 oz) crushed tomatoes',
      '1 cup vegetable broth (or water)',
      '200g (7 oz) pasta (penne, fusilli, rigatoni, etc.)',
      '½ cup cream or milk of choice',
      '½ tsp sugar (optional, to balance acidity)',
      'Salt & black pepper to taste',
      '½ tsp dried oregano or basil',
      '¼ cup grated Parmesan (plus extra to serve)',
      'Optional: chili flakes, fresh basil for garnish'
    ],
    instructions: [
      'Sauté the aromatics: In a large pot or deep pan, heat olive oil over medium heat. Add diced onion and cook until soft (3–4 min), then stir in garlic and cook for 30 seconds until fragrant.',
      'Add tomato base: Stir in tomato paste and cook for 1 minute to deepen the flavor. Add crushed tomatoes, broth, dried herbs, salt, pepper, and sugar (if using). Stir well.',
      'Add pasta: Pour in uncooked pasta and bring the mixture to a gentle boil. Reduce heat to a simmer and cover. Cook for 10–12 minutes, stirring occasionally to prevent sticking.',
      'Finish creamy & cheesy: Once the pasta is al dente and most of the liquid is absorbed, stir in cream and Parmesan cheese. Cook uncovered for another 1–2 minutes until thick and creamy.',
      'Serve warm: Plate up and garnish with fresh basil, extra cheese, or chili flakes for a cozy touch.'
    ],
    tags: ['lunch', 'one-pot', 'tomato pasta', 'creamy', 'easy cleanup']
  },
  {
    id: '50',
    title: 'Easy Chickpea Curry',
    description: `Warm, fragrant, and full of plant-powered goodness — Easy Chickpea Curry is a go-to recipe for when you want something nourishing, satisfying, and packed with flavor. Made with tender chickpeas simmered in a spiced coconut-tomato sauce, it's a comforting meal that comes together quickly in one pot.

Whether served over fluffy rice or scooped up with warm naan, this curry is both budget-friendly and deeply satisfying. It's naturally vegan, easily customizable, and perfect for meal prep or weeknight dinners.

Simple ingredients, bold flavor — this is comfort food with a kick.`,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80',
    category: 'Lunch',
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 tbsp olive oil or coconut oil',
      '1 small onion, finely chopped',
      '2 garlic cloves, minced',
      '1 tsp fresh ginger, grated (or ½ tsp ground)',
      '1 tbsp curry powder (or garam masala)',
      '1 tsp turmeric',
      '½ tsp cumin',
      '1 can (400g / 14 oz) chickpeas, drained and rinsed',
      '1 can (400ml / 14 oz) coconut milk',
      '½ cup diced tomatoes (fresh or canned)',
      'Salt & pepper to taste',
      'Optional: handful of spinach or kale',
      'Optional garnish: fresh cilantro, lime wedges, chili flakes'
    ],
    instructions: [
      'Sauté aromatics: Heat the oil in a large pan over medium heat. Add chopped onion and cook for 3–4 minutes until soft. Stir in garlic and ginger and cook for another 30 seconds until fragrant.',
      'Toast the spices: Add curry powder, turmeric, and cumin to the pan. Cook for 1 minute, stirring constantly, to toast the spices and enhance their aroma.',
      'Add chickpeas & tomatoes: Stir in the chickpeas and diced tomatoes. Let them simmer for 2–3 minutes so the flavors begin to meld.',
      'Pour in the coconut milk: Add the coconut milk and stir to combine. Bring to a gentle simmer and cook uncovered for 10–15 minutes, stirring occasionally, until slightly thickened.',
      'Add greens (optional): If using spinach or kale, stir it in during the last 2–3 minutes of cooking, just until wilted.',
      'Taste & finish: Season with salt and pepper. Adjust spices if needed, and add a squeeze of lime juice for brightness.',
      'Serve warm: Spoon over rice, quinoa, or warm naan. Top with fresh cilantro and chili flakes if desired.'
    ],
    tags: ['lunch', 'chickpea curry', 'vegetarian', 'coconut milk', 'spicy']
  },
  {
    id: '51',
    title: 'Spaghetti Aglio e Olio with Green Olives',
    description: `Simple yet bold, Spaghetti Aglio e Olio with Green Olives is a rustic Italian classic with a zesty twist. Featuring golden garlic gently sautéed in olive oil, al dente pasta, and briny green olives, this dish is proof that a few humble ingredients can create something truly special.

Perfect for a quick weeknight dinner or a late-night craving, it comes together in under 20 minutes and never disappoints. The olives add a pop of flavor that takes this traditional recipe to the next level.

Bright, garlicky, and utterly satisfying — it's pasta at its most elegant and effortless.`,
    image: '/spageti.jpg',
    category: 'Lunch',
    cookTime: '15 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '200g (7 oz) spaghetti',
      '3 tbsp olive oil (extra virgin recommended)',
      '3–4 garlic cloves, thinly sliced',
      '¼ tsp red chili flakes (or to taste)',
      '½ cup green olives, sliced or halved',
      'Salt & black pepper to taste',
      'Fresh parsley, chopped (about 2 tbsp)',
      'Optional: lemon zest, grated Parmesan for serving'
    ],
    instructions: [
      'Cook the spaghetti: Boil the pasta in well-salted water until al dente. Reserve about ½ cup of pasta water, then drain.',
      'Sauté garlic & chili: While the pasta cooks, heat olive oil in a large skillet over medium heat. Add sliced garlic and red chili flakes. Sauté gently for 1–2 minutes until the garlic is lightly golden — be careful not to burn it.',
      'Add olives: Stir in the green olives and sauté for another minute to warm them through and infuse the oil with their briny flavor.',
      'Toss the pasta: Add the drained pasta to the skillet. Toss well to coat in the garlicky oil. Add a splash of the reserved pasta water to help bind the sauce and make it glossy.',
      'Finish and serve: Stir in chopped parsley and a pinch of black pepper. Add lemon zest for brightness and Parmesan if desired.',
      'Plate up: Serve immediately, garnished with extra parsley, chili flakes, and a drizzle of olive oil.'
    ],
    tags: ['lunch', 'aglio e olio', 'Italian', 'olive oil', 'quick']
  },
  {
    id: '28',
    title: 'Creamy Garlic Shrimp Pasta',
    description: `Decadent yet easy, Creamy Garlic Shrimp Pasta is the kind of dish that turns an ordinary night into something a little more special. Juicy shrimp are sautéed in butter and garlic, then tossed in a silky cream sauce with tender pasta and a hint of parmesan.

It's luxurious comfort in a bowl — the kind of meal that tastes like it came from your favorite restaurant but takes just 30 minutes at home.

Perfect for date night, family dinners, or when you simply crave something indulgent and satisfying.`,
    image: '/shrimp.jpg',
    category: 'Dinner',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Medium',
    ingredients: [
      '200g (7 oz) pasta (fettuccine, linguine, or spaghetti)',
      '2 tbsp olive oil or butter',
      '3–4 garlic cloves, minced',
      '250g (½ lb) shrimp, peeled and deveined',
      'Salt & pepper to taste',
      '½ cup heavy cream',
      '¼ cup grated Parmesan cheese',
      '½ tsp chili flakes (optional)',
      '½ tsp lemon zest or juice',
      'Fresh parsley, chopped (for garnish)'
    ],
    instructions: [
      'Cook the pasta: Boil the pasta in salted water until al dente. Reserve ½ cup of pasta water, then drain and set aside.',
      'Sear the shrimp: In a large skillet, heat olive oil or butter over medium heat. Add the shrimp in a single layer and season with salt and pepper. Cook 1–2 minutes per side until pink and opaque. Remove and set aside.',
      'Make the garlic cream sauce: In the same skillet, add a bit more oil or butter if needed. Sauté the minced garlic for 30–60 seconds until fragrant (don\'t brown it). Pour in the cream, stir, and let it simmer for 2–3 minutes.',
      'Add cheese & seasoning: Stir in Parmesan cheese until melted. Add chili flakes (if using) and a bit of pasta water to loosen the sauce if it\'s too thick.',
      'Combine everything: Add the cooked pasta and shrimp back into the pan. Toss gently to coat. Add lemon zest or juice and adjust seasoning to taste.',
      'Serve immediately: Plate warm with fresh parsley and extra cheese on top. Add a squeeze of lemon or drizzle of olive oil for extra flavor.'
    ],
    tags: ['dinner', 'shrimp', 'pasta', 'creamy', 'garlic']
  },
  {
    id: '29',
    title: 'Baked Lemon Herb Chicken Thighs',
    description: `Bright, flavorful, and effortlessly delicious — Baked Lemon Herb Chicken Thighs are a go-to for busy weeknights or relaxed weekend dinners. Marinated in zesty lemon juice, garlic, and a blend of fragrant herbs, these chicken thighs come out of the oven juicy on the inside with a perfectly golden, crispy skin.

It's a fuss-free recipe with big flavor, using simple ingredients you likely already have in your kitchen.

Pair it with roasted veggies, rice, or a crisp salad for a balanced meal that's as comforting as it is satisfying.`,
    image: '/lemontajs.jpg',
    category: 'Dinner',
    cookTime: '35 mins',
    prepTime: '10 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '4–6 bone-in, skin-on chicken thighs (or boneless if preferred)',
      '2 tbsp olive oil',
      'Juice of 1 lemon + lemon zest',
      '3 garlic cloves, minced',
      '1 tsp dried oregano',
      '1 tsp dried thyme or rosemary',
      'Salt & black pepper to taste',
      'Optional: fresh parsley for garnish, lemon wedges for serving'
    ],
    instructions: [
      'Preheat oven: Preheat your oven to 200°C (400°F). Lightly grease a baking dish or line with parchment paper.',
      'Make the marinade: In a bowl, mix olive oil, lemon juice, lemon zest, garlic, oregano, thyme (or rosemary), salt, and pepper.',
      'Coat the chicken: Pat chicken thighs dry with a paper towel. Place them in the dish and pour the marinade over. Rub it in well and let sit for 10–15 minutes (or marinate longer in the fridge for more flavor).',
      'Bake to golden perfection: Bake uncovered for 35–40 minutes, or until the chicken is cooked through (internal temp of 75°C / 165°F) and the skin is crispy and golden. Baste with pan juices halfway through if desired.',
      'Rest & serve: Let the chicken rest for 5 minutes after baking. Serve with roasted veggies, rice, couscous, or a fresh salad. Garnish with chopped parsley and a squeeze of lemon.'
    ],
    tags: ['dinner', 'chicken', 'lemon', 'herbs', 'baked']
  },
  {
    id: '30',
    title: 'One-Pot Chicken & Rice',
    description: `Comfort food doesn't get cozier than this One-Pot Chicken & Rice — a simple, soul-warming dish that brings everything together in one pan. Tender chicken simmers with fragrant rice, onions, garlic, and just the right touch of herbs and spices for maximum flavor with minimal cleanup.

It's a classic meal that feels like home: nourishing, satisfying, and easy enough for a weeknight dinner.

Whether you're feeding a family or meal prepping for the week, this one-pot wonder is sure to become a regular favorite.`,
    image: '/onepot.jpeg',
    category: 'Dinner',
    cookTime: '30 mins',
    prepTime: '5 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 tbsp olive oil or butter',
      '1 small onion, chopped',
      '2 garlic cloves, minced',
      '1 cup long-grain white rice (uncooked)',
      '2 chicken thighs or breasts, cut into chunks',
      '2¼ cups chicken broth (or water + bouillon)',
      '1 carrot, diced',
      '½ cup frozen peas',
      '1 tsp paprika',
      '½ tsp dried thyme or oregano',
      'Salt & pepper to taste',
      'Optional: chopped parsley or green onions for garnish'
    ],
    instructions: [
      'Sauté aromatics & chicken: In a large pot or deep skillet, heat olive oil over medium heat. Add chopped onion and garlic; sauté for 2–3 minutes until fragrant. Add chicken pieces, season with salt, pepper, and paprika, and cook until lightly browned (not fully cooked through). Remove and set aside.',
      'Toast the rice: In the same pan, add a bit more oil if needed and stir in the rice. Toast it gently for 1–2 minutes, stirring often, to enhance flavor.',
      'Add broth & veggies: Pour in chicken broth, add diced carrots, peas, and herbs. Stir well, then return the browned chicken to the pot.',
      'Simmer everything: Bring to a boil, then reduce to low heat. Cover and simmer for 18–20 minutes until the rice is tender and the liquid is absorbed. Avoid lifting the lid too often.',
      'Rest & fluff: Remove from heat and let sit, covered, for 5 minutes. Then fluff the rice gently with a fork.',
      'Serve warm: Garnish with parsley or green onions. Add lemon wedges or hot sauce on the side if you\'d like!'
    ],
    tags: ['dinner', 'one-pot', 'chicken', 'rice', 'easy']
  },
  {
    id: '31',
    title: 'Ground Beef Tacos',
    description: `A weeknight hero and party favorite, Ground Beef Tacos are the ultimate crowd-pleaser. Seasoned with a smoky, savory blend of spices, the juicy beef is perfectly tucked into warm taco shells and topped with all your favorites — think shredded lettuce, cheese, salsa, and a squeeze of lime.

Quick to make and endlessly customizable, these tacos bring bold flavor with very little effort.

Whether it's Taco Tuesday or a casual weekend meal, this classic recipe always hits the spot.`,
    image: '/taco.jpg',
    category: 'Dinner',
    cookTime: '20 mins',
    prepTime: '5 mins',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      'For the taco filling:',
      '1 tbsp olive oil',
      '250g (½ lb) ground beef',
      '1 small onion, diced',
      '2 garlic cloves, minced',
      '1½ tsp chili powder',
      '1 tsp paprika',
      '½ tsp cumin',
      '½ tsp oregano',
      'Salt & pepper to taste',
      '2 tbsp tomato paste or ¼ cup tomato sauce',
      '¼ cup water or broth',
      'For serving:',
      '6–8 small taco shells (soft or hard)',
      'Shredded lettuce',
      'Chopped tomatoes or salsa',
      'Grated cheese (cheddar or Mexican blend)',
      'Sour cream or yogurt',
      'Avocado or guacamole',
      'Fresh cilantro, lime wedges'
    ],
    instructions: [
      'Cook the beef: In a skillet over medium heat, add olive oil and diced onion. Cook for 2–3 minutes until soft, then add garlic and cook another 30 seconds. Add ground beef and cook until browned, breaking it apart as it cooks.',
      'Add seasoning: Drain excess fat if needed. Stir in chili powder, paprika, cumin, oregano, salt, and pepper. Add tomato paste and water/broth. Stir and simmer for 5–7 minutes until thick and saucy.',
      'Warm the shells: Heat taco shells according to package instructions — usually a few seconds in a dry pan or oven to make them soft and pliable.',
      'Assemble tacos: Spoon the seasoned beef into each taco shell. Top with lettuce, tomato, cheese, sour cream, avocado, and cilantro — or whatever you love most.',
      'Serve immediately: Plate with lime wedges for squeezing and maybe a side of rice or beans. Enjoy warm and fresh!'
    ],
    tags: ['dinner', 'tacos', 'ground beef', 'Mexican', 'quick']
  },
  {
    id: '32',
    title: 'Creamy Chicken & Mushroom Skillet',
    description: `Rich, savory, and oh-so-satisfying, this Creamy Chicken & Mushroom Skillet is a cozy classic that's ready in under 30 minutes. Tender chicken breasts are seared to golden perfection, then simmered in a luscious garlic cream sauce with earthy mushrooms and fresh herbs.

It's the kind of dish that feels elegant but couldn't be easier to make — all in one skillet for less cleanup and more flavor.

Serve it over pasta, rice, or mashed potatoes for a meal that's perfect for a quiet night in or casual dinner with friends.`,
    image: '/skilet.jpg',
    category: 'Dinner',
    cookTime: '30 mins',
    prepTime: '5 mins',
    servings: 3,
    difficulty: 'Medium',
    ingredients: [
      '2 chicken breasts or thighs, sliced or pounded thin',
      'Salt & pepper to taste',
      '1 tbsp olive oil or butter',
      '1 small onion, finely chopped',
      '2 garlic cloves, minced',
      '200g (7 oz) mushrooms (button, cremini, or mixed), sliced',
      '½ cup chicken broth',
      '½ cup heavy cream (or cooking cream)',
      '¼ cup grated Parmesan (optional)',
      '½ tsp dried thyme or Italian seasoning',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Sear the chicken: Season chicken with salt and pepper. In a large skillet, heat oil over medium-high heat. Sear the chicken for 4–5 minutes per side until golden and cooked through. Remove and set aside.',
      'Sauté the veggies: In the same skillet, reduce heat to medium. Add a bit more oil if needed. Sauté chopped onion for 2–3 minutes, then add garlic and mushrooms. Cook 5–7 minutes until mushrooms are browned and soft.',
      'Deglaze & build the sauce: Pour in chicken broth to deglaze the pan, scraping up the browned bits for extra flavor. Let simmer 1–2 minutes.',
      'Add cream & season: Stir in cream, Parmesan (if using), and thyme or Italian seasoning. Simmer gently for 2–3 minutes until creamy and slightly thickened.',
      'Return chicken to pan: Add the seared chicken back into the skillet, spooning sauce over the top. Simmer for another 3–5 minutes until everything is hot and the flavors are combined.',
      'Serve warm: Garnish with chopped parsley. Serve with mashed potatoes, rice, pasta, or crusty bread to soak up the sauce.'
    ],
    tags: ['dinner', 'chicken', 'mushrooms', 'creamy', 'skillet']
  },
  {
    id: '33',
    title: 'Easy Baked Salmon with Veggies',
    description: `Simple, nutritious, and full of flavor, this Easy Baked Salmon with Veggies is your go-to sheet pan dinner. Succulent salmon fillets are seasoned just right and baked alongside a colorful medley of vegetables — all in one tray for easy prep and even easier cleanup.

With minimal ingredients and maximum goodness, it's perfect for busy weeknights or when you're craving something light yet satisfying.

Healthy eating doesn't get much more delicious (or convenient) than this.`,
    image: '/salmon.jpg',
    category: 'Dinner',
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 salmon fillets',
      '1 cup broccoli florets',
      '1 cup carrot slices or matchsticks',
      '1 zucchini, sliced',
      '2 tbsp olive oil',
      'Juice of ½ lemon',
      '1 tsp garlic powder',
      '1 tsp dried herbs (thyme, rosemary, or Italian mix)',
      'Salt & black pepper to taste',
      'Optional: lemon slices & fresh parsley for garnish'
    ],
    instructions: [
      'Preheat the oven: Preheat to 200°C (400°F). Line a baking tray with parchment paper or foil for easy cleanup.',
      'Prepare veggies: In a bowl, toss broccoli, carrots, and zucchini with 1 tbsp olive oil, half the lemon juice, garlic powder, herbs, salt, and pepper. Spread evenly on the tray.',
      'Season the salmon: Pat the salmon fillets dry and place them on the tray next to the veggies. Drizzle with remaining olive oil and lemon juice. Sprinkle with salt, pepper, and a little more garlic powder or herbs if you like.',
      'Bake everything together: Bake for 15–18 minutes, or until salmon flakes easily with a fork and veggies are tender. If you\'d like a bit of char, switch to broil for the last 2 minutes.',
      'Serve & enjoy: Plate the salmon with the roasted veggies. Garnish with lemon slices and chopped fresh parsley.'
    ],
    tags: ['dinner', 'salmon', 'healthy', 'sheet pan', 'vegetables']
  },
  {
    id: '34',
    title: 'Stuffed Bell Peppers',
    description: `A wholesome classic that never goes out of style, Stuffed Bell Peppers are as beautiful as they are satisfying. Tender bell peppers are filled with a hearty mix of ground meat, rice, herbs, and savory seasonings, then baked until perfectly tender and golden on top.

It's a complete meal packed into a colorful, edible bowl — ideal for family dinners, meal prep, or impressing guests with something simple yet special.

Comfort food with a fresh twist, straight from the oven.`,
    image: '/pepers.jpg',
    category: 'Dinner',
    cookTime: '45 mins',
    prepTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '4 large bell peppers (any color), tops sliced off and seeds removed',
      '1 tbsp olive oil',
      '1 small onion, chopped',
      '2 garlic cloves, minced',
      '250g (½ lb) ground beef or turkey',
      '1 cup cooked rice (white or brown)',
      '1 can (400g / 14 oz) diced tomatoes',
      '1 tsp dried oregano or Italian seasoning',
      'Salt & pepper to taste',
      '½ cup shredded mozzarella or cheddar cheese (optional, for topping)',
      'Fresh parsley for garnish (optional)'
    ],
    instructions: [
      'Preheat the oven: Preheat to 190°C (375°F). Lightly grease a baking dish and set aside.',
      'Prep the peppers: Cut the tops off the bell peppers and remove seeds and membranes. Place them upright in the baking dish. If needed, trim the bottoms slightly to help them stand.',
      'Cook the filling: Heat olive oil in a skillet over medium heat. Add onion and sauté 2–3 minutes, then add garlic and cook another 30 seconds. Stir in the ground meat and cook until browned. Season with salt, pepper, and herbs.',
      'Add rice & tomatoes: Stir in cooked rice and diced tomatoes (with juices). Simmer for 5 minutes to let flavors blend. Taste and adjust seasoning.',
      'Stuff the peppers: Spoon the filling into each bell pepper until full. If using cheese, sprinkle it on top of each.',
      'Bake: Cover with foil and bake for 30 minutes. Remove foil and bake uncovered for another 10–15 minutes, until peppers are tender and tops are golden and bubbly.',
      'Serve warm: Garnish with chopped parsley or a dollop of sour cream if you like. Great on its own or with a side salad.'
    ],
    tags: ['dinner', 'stuffed peppers', 'ground meat', 'rice', 'baked']
  },
  {
    id: '35',
    title: 'Beef & Broccoli Stir-Fry',
    description: `Fast, flavorful, and better than takeout, this Beef & Broccoli Stir-Fry is a weeknight hero. Thin slices of tender beef are stir-fried with crisp broccoli in a savory garlic-soy sauce that clings to every bite.

It's ready in under 30 minutes, packed with protein and veggies, and perfect over a bed of rice or noodles. Plus, you only need one pan — easy cleanup, big flavor.

A delicious way to skip the delivery and still satisfy those cravings.`,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&q=80',
    category: 'Dinner',
    cookTime: '15 mins',
    prepTime: '15 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '250g (½ lb) flank steak or sirloin, thinly sliced',
      '2 cups broccoli florets',
      '2 tbsp vegetable oil (divided)',
      '2 garlic cloves, minced',
      '1 tsp grated ginger (optional)',
      'Salt & pepper to taste',
      'Cooked white rice, for serving',
      'For the stir-fry sauce:',
      '¼ cup soy sauce',
      '2 tbsp oyster sauce (or hoisin for a sweeter version)',
      '1 tbsp cornstarch',
      '½ cup water or beef broth',
      '1 tsp sesame oil',
      '1 tbsp brown sugar (optional for balance)'
    ],
    instructions: [
      'Make the sauce: In a small bowl, whisk together soy sauce, oyster sauce, cornstarch, water, sesame oil, and brown sugar (if using). Set aside.',
      'Prep the beef: Season sliced beef lightly with salt and pepper. For extra tenderness, you can marinate it in 1 tsp soy sauce + 1 tsp cornstarch for 10 minutes.',
      'Cook the broccoli: Heat 1 tbsp oil in a wok or large skillet over medium-high heat. Add broccoli and stir-fry for 2–3 minutes until vibrant green and just tender. Remove and set aside.',
      'Sear the beef: Add remaining oil and cook beef in a single layer for 1–2 minutes per side until browned. Work in batches if needed to avoid overcrowding.',
      'Stir-fry everything together: Return broccoli to the pan, add garlic and ginger, and toss everything together. Pour in the sauce and cook for another 1–2 minutes until thickened and everything is coated.',
      'Serve hot: Spoon over steamed rice and garnish with sesame seeds or chopped scallions if you like.'
    ],
    tags: ['dinner', 'stir-fry', 'beef', 'broccoli', 'Asian']
  },
  {
    id: '36',
    title: 'Spaghetti Bolognese',
    description: `A timeless Italian favorite, Spaghetti Bolognese brings together rich, slow-simmered meat sauce and perfectly cooked pasta for the ultimate comfort meal. Made with ground beef, tomatoes, garlic, and herbs, this hearty dish fills your kitchen with cozy aromas and your plate with deep, savory flavor.

Whether it's a weeknight dinner or a Sunday family meal, this classic never disappoints — simple ingredients, soulful results.

Serve it with a sprinkle of Parmesan and crusty bread for a meal that feels like home.`,
    image: '/spagheti.jpg',
    category: 'Dinner',
    cookTime: '40 mins',
    prepTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '2 tbsp olive oil',
      '1 small onion, finely chopped',
      '2 garlic cloves, minced',
      '1 carrot, finely diced',
      '1 celery stalk, finely diced (optional)',
      '300g (⅔ lb) ground beef or a mix of beef & pork',
      'Salt & pepper to taste',
      '2 tbsp tomato paste',
      '1 can (400g / 14 oz) crushed or diced tomatoes',
      '½ cup water or beef broth',
      '1 tsp dried oregano or Italian seasoning',
      '½ tsp sugar (optional, to balance acidity)',
      '200–250g (7–9 oz) spaghetti',
      'Grated Parmesan & fresh basil for garnish'
    ],
    instructions: [
      'Sauté the base: Heat olive oil in a deep pan over medium heat. Add onion, carrot, and celery. Cook for 5–6 minutes until soft. Add garlic and cook another minute.',
      'Brown the meat: Add ground meat, season with salt and pepper, and cook until browned (about 6–8 minutes). Break it apart with a spoon as it cooks.',
      'Build the sauce: Stir in tomato paste and cook for 1 minute. Then add canned tomatoes, water/broth, oregano, and sugar. Stir well and bring to a simmer.',
      'Simmer low & slow: Cover and simmer the sauce on low for 20–30 minutes, stirring occasionally. Add a splash of water if it gets too thick.',
      'Cook the spaghetti: Meanwhile, boil spaghetti in salted water until al dente. Drain and set aside.',
      'Finish & serve: Taste and adjust the sauce. Serve over spaghetti or toss it all together. Top with Parmesan and fresh basil or parsley.'
    ],
    tags: ['dinner', 'spaghetti', 'bolognese', 'Italian', 'classic']
  },
  {
    id: '37',
    title: 'Cheesy Baked Ziti',
    description: `Cheesy Baked Ziti is everything you love about comfort food — warm, bubbly, and loaded with layers of flavor. Tender ziti pasta is smothered in a rich tomato sauce, blended with creamy ricotta, and topped with gooey melted mozzarella for that perfect golden crust.

It's the kind of meal that fills the house with delicious aromas and brings everyone running to the table. Whether you're feeding a family or prepping for the week, this baked classic never fails.

Easy to make, hard to resist — pasta night just got better.`,
    image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80',
    category: 'Dinner',
    cookTime: '40 mins',
    prepTime: '15 mins',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '300g (10 oz) ziti or penne pasta',
      '1 tbsp olive oil',
      '1 small onion, diced',
      '2 garlic cloves, minced',
      '300g (⅔ lb) ground beef or sausage',
      '1 jar (about 2 cups) marinara or tomato sauce',
      '½ tsp dried basil or Italian seasoning',
      'Salt & pepper to taste',
      '½ cup ricotta cheese (optional)',
      '1½ cups shredded mozzarella cheese',
      '¼ cup grated Parmesan cheese',
      'Fresh basil or parsley for garnish'
    ],
    instructions: [
      'Preheat the oven: Preheat to 190°C (375°F). Lightly grease a baking dish (around 9x13 inches).',
      'Boil the pasta: Cook the pasta in salted water until just shy of al dente (about 2 minutes less than package directions). Drain and set aside.',
      'Prepare the sauce: In a large skillet, heat olive oil over medium heat. Add onion and cook 3–4 minutes. Add garlic and stir for 30 seconds. Add the ground beef, season with salt, pepper, and basil, and cook until browned. Stir in marinara sauce and simmer for 5–10 minutes.',
      'Mix everything together: In a large bowl, toss cooked pasta with the meat sauce. Add half the mozzarella and all the ricotta (if using). Stir to coat well.',
      'Assemble the dish: Pour the pasta mixture into the baking dish. Top with remaining mozzarella and Parmesan.',
      'Bake: Bake uncovered for 20–25 minutes, or until bubbly and golden on top. Let rest for 5 minutes before serving.',
      'Serve warm: Garnish with fresh herbs. Serve with garlic bread and a crisp green salad.'
    ],
    tags: ['dinner', 'baked ziti', 'cheesy', 'Italian', 'comfort food']
  },
  {
    id: '38',
    title: 'Chocolate Chip Cookies',
    description: `Soft in the middle, golden at the edges, and loaded with melty chocolate — these Chocolate Chip Cookies are the timeless treat that never goes out of style. Whether you're baking a batch for cozy nights in, lunchbox surprises, or spontaneous sweet cravings, they always hit the spot.

Made with simple pantry staples and ready in under 30 minutes, this recipe delivers that perfect balance of chewiness and crunch with every bite.

Warm, gooey, and utterly comforting — just like homemade should be.`,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80',
    category: 'Desserts',
    cookTime: '12 mins',
    prepTime: '30 mins',
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '1 cup (225g) unsalted butter, softened',
      '¾ cup (150g) brown sugar',
      '½ cup (100g) white sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2¼ cups (280g) all-purpose flour',
      '1 tsp baking soda',
      '½ tsp salt',
      '1½–2 cups chocolate chips or chunks (semi-sweet or milk)',
      'Optional: flaky sea salt for topping'
    ],
    instructions: [
      'Preheat oven: Set oven to 180°C (350°F). Line a baking tray with parchment paper.',
      'Cream the butter & sugars: In a large bowl, beat the softened butter, brown sugar, and white sugar together until light and fluffy (about 2 minutes).',
      'Add eggs & vanilla: Beat in the eggs one at a time, then add the vanilla extract. Mix until smooth.',
      'Combine dry ingredients: In another bowl, whisk together flour, baking soda, and salt. Gradually mix into the wet ingredients until just combined (don\'t overmix).',
      'Fold in chocolate chips: Stir in the chocolate chips or chunks. Chill the dough for 15–30 minutes if you want thicker cookies (optional, but recommended).',
      'Scoop & bake: Drop tablespoon-sized balls of dough onto the prepared tray, spacing them a few centimeters apart. Bake for 10–12 minutes, until edges are golden but centers are soft.',
      'Cool & serve: Let cool on the tray for 5 minutes, then transfer to a wire rack. Sprinkle with flaky sea salt if desired.'
    ],
    tags: ['desserts', 'cookies', 'chocolate chip', 'baking', 'classic']
  },
  {
    id: '39',
    title: 'Classic Brownies',
    description: `Fudgy, chocolaty, and irresistibly rich — these Classic Brownies are the ultimate homemade indulgence. With a crackly top, dense center, and deep cocoa flavor, they strike the perfect balance between chewy and gooey.

Whether served warm with a scoop of ice cream or packed as a sweet snack, these brownies are a comforting favorite that never disappoints.

Simple to make, impossible to resist — this is brownie bliss, baked fresh.`,
    image: '/brownie.jpg',
    category: 'Desserts',
    cookTime: '28 mins',
    prepTime: '15 mins',
    servings: 16,
    difficulty: 'Easy',
    ingredients: [
      '½ cup (115g) unsalted butter',
      '200g (7 oz) dark chocolate (around 70%), chopped',
      '¾ cup (150g) granulated sugar',
      '¼ cup (50g) brown sugar (optional, for richness)',
      '2 large eggs',
      '1 tsp vanilla extract',
      '½ cup + 2 tbsp (75g) all-purpose flour',
      '¼ cup (30g) cocoa powder',
      '¼ tsp salt',
      'Optional: ½ cup chopped nuts, chocolate chunks, or a sprinkle of sea salt on top'
    ],
    instructions: [
      'Preheat oven: Heat oven to 175°C (350°F). Line an 8x8-inch (20x20 cm) baking pan with parchment paper.',
      'Melt butter & chocolate: In a saucepan or microwave-safe bowl, melt the butter and dark chocolate together. Stir until smooth, then let cool slightly.',
      'Whisk in sugars: Add granulated sugar and brown sugar to the chocolate mixture. Whisk well to combine.',
      'Add eggs & vanilla: Beat in the eggs one at a time, then stir in vanilla extract. The mixture should become shiny and thick.',
      'Fold in dry ingredients: In a small bowl, mix flour, cocoa powder, and salt. Gently fold into the wet mixture until just combined. Do not overmix.',
      'Pour & smooth: Pour the batter into the prepared pan and spread it evenly. Add optional toppings (nuts or chocolate chunks).',
      'Bake: Bake for 22–28 minutes, until the top is set and a toothpick comes out with moist crumbs (not wet batter). For fudgier brownies, slightly underbake.',
      'Cool completely: Let the brownies cool in the pan before slicing into squares.'
    ],
    tags: ['desserts', 'brownies', 'chocolate', 'fudgy', 'baking']
  },
  {
    id: '40',
    title: 'Vanilla Cupcakes',
    description: `Light, fluffy, and delicately sweet — these Vanilla Cupcakes are a timeless treat perfect for any occasion. Whether you're celebrating something special or simply craving a homemade dessert, these cupcakes bring cozy bakery vibes straight to your kitchen.

Topped with a swirl of creamy frosting and a sprinkle of joy, each bite is soft, tender, and full of classic vanilla flavor.

Easy to make, even easier to love — a little bite of happiness in every cupcake.`,
    image: '/vanilakap.jpg',
    category: 'Desserts',
    cookTime: '22 mins',
    prepTime: '20 mins',
    servings: 12,
    difficulty: 'Easy',
    ingredients: [
      'For the cupcakes:',
      '1½ cups (190g) all-purpose flour',
      '1½ tsp baking powder',
      '¼ tsp salt',
      '½ cup (115g) unsalted butter, softened',
      '¾ cup (150g) granulated sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '½ cup (120ml) milk (room temp)',
      'Optional: 2 tbsp sour cream or yogurt for extra moisture',
      'For the vanilla frosting:',
      '½ cup (115g) unsalted butter, softened',
      '1¾ cups (220g) powdered sugar',
      '1–2 tbsp milk or cream',
      '1 tsp vanilla extract',
      'Pinch of salt'
    ],
    instructions: [
      'Preheat oven: Preheat to 175°C (350°F). Line a 12-cup muffin tin with paper liners.',
      'Mix dry ingredients: In a bowl, whisk together flour, baking powder, and salt. Set aside.',
      'Cream butter & sugar: In a large bowl, beat the butter and sugar together until light and fluffy (about 2–3 minutes).',
      'Add eggs & vanilla: Beat in the eggs one at a time. Add vanilla and mix until smooth.',
      'Add milk & dry mix: Alternate adding the dry ingredients and milk (and sour cream, if using), beginning and ending with the flour. Mix until just combined — don\'t overmix!',
      'Bake: Divide the batter evenly between cupcake liners. Bake for 18–22 minutes, or until a toothpick comes out clean. Let cool completely before frosting.',
      'Make the frosting: Beat butter until creamy. Gradually add powdered sugar, mixing well. Add vanilla, a pinch of salt, and milk one spoon at a time until it reaches fluffy, pipeable consistency.',
      'Finish & serve: Pipe or spread over cooled cupcakes. Top with sprinkles or fresh berries if desired!'
    ],
    tags: ['desserts', 'cupcakes', 'vanilla', 'baking', 'celebration']
  },
  {
    id: '41',
    title: 'No-Bake Cheesecake',
    description: `Silky, smooth, and effortlessly delicious — this No-Bake Cheesecake is the perfect dessert when you want something rich and indulgent without turning on the oven. With a buttery graham cracker crust and a luscious cream cheese filling, it's chilled to perfection for a refreshing, crowd-pleasing treat.

Whether topped with fresh berries, chocolate drizzle, or left plain and elegant, every bite melts in your mouth.

Simple to make, impossible to resist — a cool slice of comfort, ready whenever you are.`,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80',
    category: 'Desserts',
    cookTime: '0 mins',
    prepTime: '20 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      'For the crust:',
      '200g (7 oz) graham crackers or digestive biscuits, crushed',
      '½ cup (115g) unsalted butter, melted',
      '2 tbsp sugar (optional)',
      'For the filling:',
      '450g (16 oz) cream cheese, softened',
      '½ cup (100g) granulated sugar',
      '1 tsp vanilla extract',
      '1 cup (240ml) heavy cream, cold',
      'Topping ideas:',
      'Fresh berries',
      'Fruit compote',
      'Lemon curd',
      'Chocolate ganache',
      'Crushed cookies or nuts'
    ],
    instructions: [
      'Make the crust: Mix crushed biscuits with melted butter and sugar (if using) until it resembles wet sand. Press evenly into the bottom of a springform pan (20–23 cm / 8–9 inch). Chill in the fridge while making the filling.',
      'Whip the cream: In a cold bowl, whip the heavy cream until stiff peaks form. Set aside.',
      'Make the cheesecake base: In another bowl, beat the cream cheese, sugar, and vanilla until smooth and creamy.',
      'Combine: Gently fold the whipped cream into the cream cheese mixture in two batches, using a spatula until well combined and fluffy.',
      'Chill: Pour the filling over the crust and smooth the top. Cover and chill in the fridge for at least 4 hours, preferably overnight, until fully set.',
      'Serve & top: Once firm, remove from the pan and top with berries, jam, or anything you like. Slice and enjoy cold!'
    ],
    tags: ['desserts', 'cheesecake', 'no-bake', 'creamy', 'summer']
  },
  {
    id: '42',
    title: 'Strawberry Shortcake',
    description: `Sweet, sun-kissed strawberries, fluffy whipped cream, and tender, buttery biscuits come together in this classic Strawberry Shortcake. It's the kind of dessert that feels like a warm summer afternoon, no matter the season.

With every bite, you get a balance of juicy fruit, airy cream, and just the right crumbly softness — simple ingredients layered into pure bliss.

A nostalgic favorite with a homemade touch — bright, beautiful, and made to share.`,
    image: '/shortcake.jpg',
    category: 'Desserts',
    cookTime: '18 mins',
    prepTime: '30 mins',
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
      'For the biscuits:',
      '2 cups (250g) all-purpose flour',
      '¼ cup (50g) granulated sugar',
      '1 tbsp baking powder',
      '½ tsp salt',
      '½ cup (115g) cold unsalted butter, cubed',
      '⅔ cup (160ml) milk or heavy cream',
      '1 tsp vanilla extract',
      'Optional: 1 egg for egg wash + coarse sugar for topping',
      'For the strawberries:',
      '2 cups fresh strawberries, sliced',
      '2 tbsp sugar',
      '1 tsp lemon juice (optional)',
      'For the whipped cream:',
      '1 cup (240ml) heavy cream',
      '2 tbsp powdered sugar',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Prep the strawberries: Mix sliced strawberries with sugar and lemon juice. Set aside for at least 20 minutes to macerate and release their juices.',
      'Make the biscuits: Preheat oven to 200°C (400°F). In a bowl, whisk flour, sugar, baking powder, and salt. Cut in the cold butter using a fork or your fingers until crumbly. Stir in milk and vanilla just until combined.',
      'Shape & bake: Turn dough onto a floured surface and gently pat into a 1-inch thick round. Cut into circles using a cutter or glass. Place on a baking sheet, brush tops with egg wash if using, and sprinkle with sugar. Bake for 15–18 minutes or until golden. Let cool completely.',
      'Make the whipped cream: In a chilled bowl, whip heavy cream with powdered sugar and vanilla until soft peaks form.',
      'Assemble the shortcakes: Slice the cooled biscuits in half. Layer with whipped cream and strawberries in the middle, then more cream and berries on top. Serve immediately!'
    ],
    tags: ['desserts', 'strawberry', 'shortcake', 'summer', 'fresh fruit']
  },
  {
    id: '44',
    title: 'Chocolate Mug Cake',
    description: `Rich, gooey, and ready in minutes — this Chocolate Mug Cake is the ultimate single-serve dessert for those sudden chocolate cravings. Made with pantry staples and cooked right in the microwave, it's soft, fudgy, and deeply satisfying.

Perfect for late-night treats or when you just need something warm and sweet, fast — no oven, no mess, just pure chocolate comfort in a mug.

One spoonful and you'll be hooked — a little magic, one mug at a time.`,
    image: '/magcake.jpg',
    category: 'Desserts',
    cookTime: '90 seconds',
    prepTime: '3 mins',
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      '¼ cup (30g) all-purpose flour',
      '2 tbsp unsweetened cocoa powder',
      '2 tbsp granulated sugar',
      '¼ tsp baking powder',
      'Pinch of salt',
      '¼ cup (60ml) milk (dairy or plant-based)',
      '2 tbsp vegetable oil or melted butter',
      '¼ tsp vanilla extract',
      'Optional: 1 tbsp chocolate chips, Nutella, or peanut butter in the center'
    ],
    instructions: [
      'Mix dry ingredients: In a microwave-safe mug (about 300ml), whisk together flour, cocoa powder, sugar, baking powder, and salt until well combined.',
      'Add wet ingredients: Pour in milk, oil, and vanilla extract. Stir until a smooth batter forms, making sure to scrape the bottom and edges.',
      'Optional center: For an extra treat, drop a spoonful of chocolate chips or Nutella into the center of the batter.',
      'Microwave: Microwave on high for 60–90 seconds, depending on your microwave\'s power. It should rise and be set on top but still soft and gooey inside.',
      'Let it rest: Allow the mug cake to cool for 1–2 minutes (it will be hot!). Optional: top with whipped cream, ice cream, or a dusting of cocoa powder.'
    ],
    tags: ['desserts', 'mug cake', 'chocolate', 'quick', 'microwave']
  },
  {
    id: '45',
    title: 'Apple Crisp',
    description: `Golden, buttery oat topping over tender, cinnamon-spiced apples — this Apple Crisp is the kind of dessert that fills the kitchen with the scent of comfort.

It's simple, rustic, and endlessly cozy — like a warm hug in dessert form. Whether served alone or with a scoop of vanilla ice cream melting on top, it's the perfect treat for crisp autumn days or any time you're craving something sweet and nostalgic.

Easy to make, impossible to resist.`,
    image: '/applecrisp.jpg',
    category: 'Desserts',
    cookTime: '40 mins',
    prepTime: '20 mins',
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      'For the filling:',
      '5–6 medium apples (Granny Smith, Honeycrisp, or mixed), peeled and sliced',
      '2 tbsp brown sugar',
      '1 tbsp white sugar',
      '1 tsp ground cinnamon',
      '¼ tsp ground nutmeg (optional)',
      '1 tbsp lemon juice',
      '1 tbsp flour or cornstarch',
      'For the crisp topping:',
      '¾ cup rolled oats',
      '½ cup all-purpose flour',
      '⅓ cup brown sugar',
      '½ tsp cinnamon',
      'Pinch of salt',
      '½ cup (115g) cold unsalted butter, cut into cubes',
      'Optional: ¼ cup chopped nuts (walnuts or pecans)'
    ],
    instructions: [
      'Preheat oven: Heat to 180°C (350°F). Grease a medium baking dish (like 8x8 inches).',
      'Make the filling: In a bowl, toss apple slices with sugars, cinnamon, nutmeg (if using), lemon juice, and flour. Transfer to the prepared baking dish.',
      'Make the topping: In another bowl, mix oats, flour, brown sugar, cinnamon, and salt. Add cold butter and cut it in with a fork or your fingers until crumbly. Stir in nuts if using.',
      'Assemble & bake: Sprinkle the topping evenly over the apples. Bake for 35–40 minutes until the top is golden and the apples are bubbly and soft.',
      'Cool slightly & serve: Let sit for 10 minutes before serving. Best enjoyed warm with vanilla ice cream or whipped cream.'
    ],
    tags: ['desserts', 'apple crisp', 'fall', 'warm', 'comfort food']
  },
  {
    id: '46',
    title: 'Peanut Butter Cookies',
    description: `Soft, chewy, and packed with rich peanut flavor — these Peanut Butter Cookies are a timeless classic for good reason. With their signature crisscross tops and melt-in-your-mouth texture, they strike the perfect balance between sweet and salty.

Made with just a few simple ingredients, they come together quickly and always disappear fast. Whether enjoyed with a cold glass of milk or tucked into a lunchbox, these cookies bring cozy, homemade joy in every bite.

A childhood favorite that never goes out of style.`,
    image: '/pinat.jpg',
    category: 'Desserts',
    cookTime: '12 mins',
    prepTime: '15 mins',
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '1 cup (250g) creamy peanut butter',
      '½ cup (100g) granulated sugar',
      '½ cup (100g) brown sugar',
      '½ cup (115g) unsalted butter, softened',
      '1 large egg',
      '1 tsp vanilla extract',
      '1½ cups (190g) all-purpose flour',
      '1 tsp baking soda',
      '¼ tsp salt',
      'Optional: ½ cup chocolate chips or chopped peanuts'
    ],
    instructions: [
      'Preheat oven: Heat oven to 175°C (350°F). Line a baking sheet with parchment paper.',
      'Cream butter & sugars: In a large bowl, beat the softened butter, peanut butter, brown sugar, and white sugar until creamy (2–3 minutes).',
      'Add egg & vanilla: Beat in the egg and vanilla extract until smooth.',
      'Add dry ingredients: Mix in flour, baking soda, and salt until a dough forms. Stir in optional chocolate chips or chopped peanuts if using.',
      'Shape cookies: Scoop out tablespoon-sized portions and roll into balls. Place on baking sheet, spacing them apart. Use a fork to press a crisscross pattern into each ball (optional but classic!).',
      'Bake: Bake for 10–12 minutes until the edges are lightly golden. The centers will still be soft — they\'ll firm up as they cool.',
      'Cool: Let cookies rest on the baking sheet for 5 minutes before transferring to a wire rack.'
    ],
    tags: ['desserts', 'peanut butter', 'cookies', 'simple', 'classic']
  },
  {
    id: '47',
    title: 'Lemon Bars',
    description: `These Lemon Bars are sunshine in dessert form — bright, tangy, and irresistibly sweet. With a buttery shortbread crust and a silky lemon curd topping, each bite delivers the perfect balance of tart and sweet.

They're simple to make yet feel like a special treat, ideal for spring gatherings, afternoon tea, or whenever you need a burst of citrusy joy. Dust them with powdered sugar for a touch of elegance, and watch them disappear fast.

Fresh, vibrant, and utterly refreshing — these bars are a slice of happiness.`,
    image: '/lemonbars.jpg',
    category: 'Desserts',
    cookTime: '45 mins',
    prepTime: '20 mins',
    servings: 12,
    difficulty: 'Medium',
    ingredients: [
      'For the crust:',
      '1 cup (225g) unsalted butter, softened',
      '½ cup (100g) granulated sugar',
      '2 cups (250g) all-purpose flour',
      '¼ tsp salt',
      'For the lemon filling:',
      '1½ cups (300g) granulated sugar',
      '¼ cup (30g) all-purpose flour',
      '4 large eggs',
      '⅔ cup (160ml) fresh lemon juice (~3–4 lemons)',
      'Zest of 1 lemon',
      'Optional: powdered sugar for dusting'
    ],
    instructions: [
      'Preheat oven: Heat oven to 175°C (350°F). Line a 9x13-inch (23x33 cm) baking dish with parchment paper.',
      'Make the crust: In a bowl, cream together the softened butter and sugar until light. Add flour and salt and mix until a soft dough forms. Press evenly into the bottom of the pan. Bake for 18–20 minutes, until lightly golden. Set aside.',
      'Make the filling: In a clean bowl, whisk sugar and flour. Add eggs, lemon juice, and zest. Whisk until smooth.',
      'Pour & bake again: Pour the lemon filling over the warm crust. Return to the oven and bake for 20–25 minutes, or until the center is set but still has a slight jiggle.',
      'Cool completely: Let cool at room temperature, then chill in the fridge for at least 2 hours. This makes slicing easier.',
      'Dust & slice: Dust with powdered sugar before slicing into bars. Wipe the knife clean between cuts for neat squares.'
    ],
    tags: ['desserts', 'lemon bars', 'tangy', 'citrus', 'shortbread']
  },
  {
    id: '52',
    title: 'Marry Me Dip',
    description: `Creamy, cheesy, and utterly irresistible — Marry Me Dip earns its name with every bite. This warm appetizer blends sun-dried tomatoes, cream cheese, garlic, and herbs into a rich, savory dip that's perfect for sharing (or not!).

Whether you're hosting friends, setting up a cozy movie night, or just craving something indulgent, this dip delivers bold flavor and melty goodness that keeps everyone coming back for more.

Serve it with warm bread, crackers, or fresh veggies — and get ready for compliments (and maybe a proposal).`,
    image: '/dip.jpg',
    category: 'Dinner',
    cookTime: '20 mins',
    prepTime: '10 mins',
    servings: 8,
    difficulty: 'Easy',
    ingredients: [
      '1 tbsp olive oil or butter',
      '3 garlic cloves, minced',
      '½ cup sun-dried tomatoes (in oil), chopped',
      '200g (7 oz) cream cheese, softened',
      '½ cup sour cream or Greek yogurt',
      '½ cup shredded mozzarella',
      '¼ cup grated Parmesan',
      '½ tsp chili flakes (adjust to taste)',
      '½ tsp dried thyme or Italian seasoning',
      'Salt & pepper to taste',
      'Optional: chopped basil or parsley for garnish',
      'Serve with: sliced baguette, crackers, pita chips, or veggies'
    ],
    instructions: [
      'Preheat oven: Preheat your oven to 190°C (375°F).',
      'Sauté aromatics: In a small skillet, heat olive oil or butter. Add garlic and cook for 30 seconds. Add chopped sun-dried tomatoes and cook 1–2 minutes to soften and flavor the oil.',
      'Mix the base: In a bowl, combine cream cheese, sour cream (or yogurt), mozzarella, Parmesan, chili flakes, thyme, salt, and pepper. Mix until smooth.',
      'Fold in the flavor: Add the sun-dried tomato and garlic mixture to the cheese base. Stir to combine well.',
      'Bake the dip: Transfer to a small baking dish or oven-safe skillet. Bake for 15–20 minutes until bubbly and golden on top.',
      'Garnish & serve: Sprinkle with fresh basil or parsley and serve immediately with your favorite dippers!'
    ],
    tags: ['dinner', 'appetizer', 'cheesy dip', 'baked', 'party food']
  },
  {
    id: '53',
    title: 'Baked Feta Chickpeas',
    description: `Simple, hearty, and bursting with Mediterranean flavor — Baked Feta Chickpeas is a dish that transforms humble ingredients into something truly special. Creamy feta melts into a garlicky tomato base, while tender chickpeas soak up every bit of that savory, herby goodness.

It's perfect for a cozy dinner, quick lunch, or meal prep for the week. Serve it with warm pita, over rice, or enjoy as-is for a satisfying, protein-packed vegetarian meal.

Comforting and effortlessly delicious — this one's a keeper.`,
    image: '/feta.jpg',
    category: 'Dinner',
    cookTime: '30 mins',
    prepTime: '10 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '1 can (400g / 14 oz) chickpeas, drained & rinsed',
      '150g (5 oz) block of feta cheese',
      '1 cup cherry tomatoes, halved',
      '2 garlic cloves, sliced or minced',
      '2 tbsp olive oil',
      '½ tsp chili flakes or paprika',
      '½ tsp dried oregano or thyme',
      'Salt & pepper to taste',
      'Optional: spinach or kale (1 cup), lemon zest, fresh basil for garnish',
      'Serve with: crusty bread, pita, or rice'
    ],
    instructions: [
      'Preheat oven: Set oven to 200°C (400°F).',
      'Assemble in baking dish: In a medium baking dish, add chickpeas, cherry tomatoes, garlic, olive oil, chili flakes, oregano, salt, and pepper. Mix gently.',
      'Nestle the feta: Place the block of feta in the center of the dish, surrounded by the seasoned chickpeas and tomatoes. Drizzle a little more olive oil over the feta.',
      'Bake: Bake uncovered for 25–30 minutes until the tomatoes blister, chickpeas are golden, and feta is soft and lightly browned.',
      'Add greens (optional): If using spinach or kale, stir it into the dish for the last 5 minutes of baking, until wilted.',
      'Stir & serve: Once baked, gently mash and mix the feta into the chickpeas to create a creamy, rich texture. Top with lemon zest or fresh herbs if desired.',
      'Serve warm: Scoop onto plates or serve as a shared dip with warm bread, rice, or grains.'
    ],
    tags: ['dinner', 'Mediterranean', 'feta', 'chickpeas', 'healthy']
  },
  {
    id: '54',
    title: 'Mediterranean White Beans & Greens',
    description: `Fresh, nourishing, and full of rustic charm — Mediterranean White Beans & Greens is the kind of dish that feels both comforting and vibrant. Creamy cannellini beans simmer gently with garlic, olive oil, lemon, and leafy greens, soaking up all those bright, herbaceous flavors.

It's a one-pan wonder you can enjoy on its own, pile onto toasted bread, or pair with grilled fish or chicken for a heartier meal.

Simple ingredients, bold flavors — the Mediterranean way.`,
    image: '/beans.jpg',
    category: 'Dinner',
    cookTime: '15 mins',
    prepTime: '10 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '2 tbsp olive oil',
      '2 garlic cloves, sliced or minced',
      '1 small onion or shallot, finely chopped',
      '1 can (400g / 14 oz) white beans (cannellini or butter beans), drained & rinsed',
      '1 bunch of greens (spinach, kale, chard – chopped)',
      '½ cup cherry tomatoes or sun-dried tomatoes (optional)',
      '½ tsp dried oregano or thyme',
      '¼ tsp chili flakes (optional)',
      'Juice of ½ lemon',
      'Salt & black pepper to taste',
      'Optional: crumbled feta, olives, fresh herbs (like parsley or dill)'
    ],
    instructions: [
      'Sauté aromatics: In a large skillet, heat olive oil over medium heat. Add onion and cook for 2–3 minutes until soft. Add garlic and chili flakes (if using), and sauté for another minute until fragrant.',
      'Add tomatoes & beans: Stir in cherry or sun-dried tomatoes and cook for 1–2 minutes. Then add white beans and season with oregano, salt, and pepper. Stir gently to coat.',
      'Wilt the greens: Add chopped greens and stir until wilted (2–5 minutes depending on the type of greens). Add a splash of water or broth if the pan gets too dry.',
      'Finish with lemon: Turn off the heat and squeeze in the lemon juice. Taste and adjust seasoning if needed.',
      'Serve warm: Plate with crumbled feta, olives, and a drizzle of olive oil if you like. Serve with warm pita, rice, or toasted sourdough.'
    ],
    tags: ['dinner', 'Mediterranean', 'white beans', 'healthy', 'vegetarian']
  }
];