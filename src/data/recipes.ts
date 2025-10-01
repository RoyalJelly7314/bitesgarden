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
  servingSuggestions?: string[];
  variations?: string[];
  tips?: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
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
    image: '/Honey-Glazed-Salmon.jpg',
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
    servingSuggestions: [
      'Serve hot with extra glaze drizzled on top.',
      'Pair with roasted potatoes, steamed rice, or quinoa.',
      'Add a side of roasted vegetables (asparagus, carrots, or green beans) for balance.',
      'Garnish with lemon wedges and fresh herbs for a bright finish.',
      'Works beautifully as a dinner party main or a healthy weeknight meal.'
    ],
    variations: [
      'Garlic butter glaze: swap honey for garlic + butter.',
      'Spicy honey: add chili flakes or sriracha to the glaze.',
      'Asian-inspired: add soy sauce, ginger, and sesame oil.',
      'Citrus twist: mix orange or lemon zest into the glaze.',
      'Nut crust: add crushed almonds or pistachios for crunch.'
    ],
    tips: [
      'Pat salmon dry before cooking for a better sear.',
      'Brush glaze on during the last minutes of cooking to prevent burning.',
      'Let salmon rest a few minutes before serving for juiciness.',
      'Line baking trays with parchment for easy cleanup if roasting.',
      'Pair with a crisp white wine like Sauvignon Blanc or Chardonnay.'
    ],
    faq: [
      {
        question: 'What herbs work best for the crust?',
        answer: 'Parsley, dill, thyme, or rosemary — fresh herbs give the best flavor.'
      },
      {
        question: 'Can I use frozen salmon?',
        answer: 'Yes — thaw completely and pat dry before cooking.'
      },
      {
        question: 'How do I keep salmon from drying out?',
        answer: 'Don\'t overcook — remove from heat when it flakes easily (internal temp ~55°C / 130°F).'
      },
      {
        question: 'Can I use another glaze?',
        answer: 'Maple syrup, soy sauce, or balsamic glaze also work.'
      },
      {
        question: 'Can I bake instead of pan-sear?',
        answer: 'Yes — bake at 200°C (400°F) for 12–15 minutes, brushing glaze on halfway through.'
      }
    ],
    tags: ['healthy', 'protein', 'quick dinner']
  },
  {
    id: '4',
    title: 'Rustic Apple Cinnamon Tart',
    description: `Golden, crisp, and delicately spiced — this Rustic Apple Cinnamon Tart is everything cozy baked into one beautiful dessert. With tender apple slices nestled in a flaky, free-form crust and sprinkled with cinnamon sugar, it's a simple yet impressive treat that tastes like home.

No fancy techniques, just real ingredients and warm flavors that shine. Perfect for autumn evenings, weekend baking, or anytime you crave something sweet and nostalgic.`,
    image: '/Rustic-Apple-Cinnamon-Tart.jpg',
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
    servingSuggestions: [
      'Serve warm with a scoop of vanilla ice cream or a dollop of whipped cream.',
      'Drizzle with caramel sauce or honey for extra indulgence.',
      'Pair with hot coffee, chai tea, or apple cider.',
      'Dust with powdered sugar before serving for a bakery-style touch.',
      'Works beautifully as a dessert for gatherings, brunch, or holidays.'
    ],
    variations: [
      'Nutty: sprinkle walnuts, pecans, or almonds over the apples.',
      'Spiced: add nutmeg, cloves, or cardamom with the cinnamon.',
      'Caramel apple: drizzle caramel sauce over apples before baking.',
      'Berry twist: add cranberries, raspberries, or blueberries.',
      'Cheesy flair: serve with a slice of sharp cheddar (classic pairing!).'
    ],
    tips: [
      'Slice apples thinly and evenly so they cook through.',
      'Don\'t overload the tart — keep filling balanced so crust stays crisp.',
      'Brush crust edges with egg wash for a golden finish.',
      'Sprinkle a little sugar on the crust for sparkle and crunch.',
      'Let tart cool slightly before slicing so juices set.'
    ],
    faq: [
      {
        question: 'What apples are best for baking?',
        answer: 'Granny Smith, Honeycrisp, or Braeburn — firm and slightly tart apples hold up well.'
      },
      {
        question: 'Do I need to peel the apples?',
        answer: 'Not required — skins add rustic charm, but peeling gives a softer texture.'
      },
      {
        question: 'Can I use store-bought pastry?',
        answer: 'Yes — puff pastry or pie dough both work great for quick prep.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — assemble and refrigerate, then bake when ready. Best enjoyed fresh.'
      },
      {
        question: 'Can I freeze it?',
        answer: 'Yes — freeze unbaked and bake from frozen, adding a few extra minutes.'
      }
    ],
    tags: ['dessert', 'seasonal', 'homemade', 'comfort food']
  },
  {
    id: '5',
    title: 'Morning Garden Scramble',
    description: `Start your day with a burst of color, flavor, and nourishment with this Morning Garden Scramble. Inspired by the freshness of a backyard garden, this wholesome breakfast combines fluffy scrambled eggs with a medley of seasonal vegetables like bell peppers, spinach, cherry tomatoes, and onions. It's a simple yet vibrant dish that comes together in minutes and delivers a balanced mix of protein, fiber, and natural sweetness.

Whether you're fueling up for a busy day or enjoying a slow weekend morning, the Morning Garden Scramble is endlessly customizable and pairs perfectly with toast, avocado, or fresh herbs from your kitchen window. It's a great way to reduce food waste too—just toss in whatever veggies you have on hand. Healthy, satisfying, and full of garden goodness, this is a breakfast that blooms on your plate.`,
    image: '/Morning-Garden-Scramble.jpg',
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
    servingSuggestions: [
      'Serve with a slice of toasted sourdough or crusty whole grain bread for a heartier breakfast.',
      'Add a side of fresh fruit like sliced oranges or berries to brighten up the plate.',
      'Top with crumbled feta or grated parmesan cheese for a salty kick.',
      'For extra creaminess, serve with a dollop of Greek yogurt on the side.'
    ],
    variations: [
      'No zucchini? Swap with bell peppers, mushrooms, or grated carrots.',
      'Add protein: Toss in diced ham, turkey, smoked salmon, or tofu cubes.',
      'Make it spicy: Add chili flakes, sriracha, or diced jalapeños.',
      'Dairy-free? Use oat milk or almond milk instead of regular milk.'
    ],
    tips: [
      'Always preheat the pan and cook veggies before adding the eggs to avoid a soggy texture.',
      'Whisk the eggs with milk until frothy – this adds fluffiness.',
      'Cook on medium-low heat to avoid overcooking and keep the eggs tender.',
      'Don\'t stir constantly – let the eggs set slightly before pushing them around the pan.'
    ],
    faq: [
      {
        question: 'Can I meal prep this recipe?',
        answer: 'Yes! You can chop the veggies and store them in the fridge the night before. Cooked scramble also lasts up to 2 days in the fridge.'
      },
      {
        question: 'Can I make this vegan?',
        answer: 'Absolutely. Use plant-based eggs like JUST Egg, and swap milk with your preferred dairy-free alternative.'
      },
      {
        question: 'What\'s the best pan to use?',
        answer: 'A non-stick skillet is ideal, but well-seasoned cast iron works great too.'
      },
      {
        question: 'Can I freeze it?',
        answer: 'It\'s best fresh, but if you need to freeze, store in an airtight container and reheat gently on the stove.'
      }
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
    image: '/Fluffy-Pancakes.jpg',
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
    servingSuggestions: [
      'Serve warm with a pat of butter that melts over the top.',
      'Classic toppings: maple syrup, honey, or powdered sugar.',
      'Fresh fruit (berries, banana slices, peach slices) makes it lighter and fresher.',
      'Add whipped cream, Nutella, or peanut butter for a more indulgent version.',
      'Stack them high (3–4 pancakes) for a café-style look.',
      'For a cozy vibe, serve with a hot coffee, cappuccino, or warm tea.'
    ],
    variations: [
      'Chocolate chip pancakes (kids\' favorite).',
      'Blueberry pancakes (toss berries into the batter).',
      'Cinnamon swirl pancakes (mix brown sugar + cinnamon + butter and swirl onto batter while cooking).',
      'Protein boost: add 1 scoop protein powder or replace part of the flour with oat flour.'
    ],
    tips: [
      'Heat pan properly: medium heat, not too high — flip when bubbles form.',
      'Use a ladle or ice cream scoop for even-sized pancakes.',
      'Don\'t press down with the spatula after flipping (keeps them fluffy).'
    ],
    faq: [
      {
        question: 'Can I make the batter ahead of time?',
        answer: 'It\'s best to cook pancakes right after mixing, but you can refrigerate the batter for up to 1 day. Stir gently before using.'
      },
      {
        question: 'How do I make them extra fluffy?',
        answer: 'Don\'t overmix the batter — a few lumps are okay. Letting the batter rest 5–10 minutes before cooking also helps.'
      },
      {
        question: 'Can I freeze pancakes?',
        answer: 'Yes! Cook, cool, then stack with parchment paper in between. Store in a freezer bag for up to 2 months. Reheat in toaster or pan.'
      },
      {
        question: 'Can I substitute milk?',
        answer: 'Yes — any dairy-free milk (almond, oat, soy, coconut) works. Buttermilk makes them extra soft and fluffy.'
      },
      {
        question: 'Why are my pancakes flat or dense?',
        answer: 'Usually from overmixing, old baking powder, or cooking on too low/high heat.'
      }
    ],
    tags: ['breakfast', 'fluffy', 'easy', 'family-friendly', 'weekend treat']
  },
  {
    id: '8',
    title: 'Cinnamon French Toast',
    description: `Wake up to the comforting aroma of warm cinnamon and golden toast with this deliciously simple Cinnamon French Toast. Crispy on the outside, soft and custardy on the inside, this breakfast classic is the perfect way to turn everyday ingredients into something truly special.

Thick slices of bread are soaked in a rich cinnamon-vanilla egg mixture, then pan-fried to perfection for that beautiful golden-brown finish. Whether you're using fresh or slightly stale bread, this recipe is forgiving and full of flavor. Topped with a dusting of powdered sugar, a drizzle of maple syrup, or a handful of fresh fruit, it's a meal that feels like a warm hug on a plate.

Perfect for slow weekend mornings, brunch with friends, or even breakfast-for-dinner, Cinnamon French Toast is a timeless favorite that never goes out of style.`,
    image: '/Cinnamon-French-Toast.jpg',
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
    servingSuggestions: [
      'Dust with powdered sugar and drizzle with maple syrup or honey.',
      'Add fresh berries or caramelized bananas on top.',
      'Serve with a side of whipped cream, yogurt, or even a scoop of vanilla ice cream for a dessert-style version.',
      'Pair with bacon, sausage, or scrambled eggs for a full breakfast plate.',
      'For a cozy vibe, serve with a spiced latte, hot chocolate, or chai tea.'
    ],
    variations: [
      'Stuffed French toast: add cream cheese, Nutella, or fruit jam between slices before dipping.',
      'Cinnamon roll style: drizzle with cream cheese glaze.',
      'Savory twist: skip cinnamon and sugar, use herbs and cheese in the custard instead.',
      'Holiday vibe: add a splash of eggnog or pumpkin spice mix to the custard.'
    ],
    tips: [
      'Whisk the eggs and milk mixture until smooth to avoid "scrambled egg" bits.',
      'Cook on medium heat so the outside browns evenly while the inside cooks through.',
      'Use butter (or butter + oil mix) for that golden crisp edge.',
      'For an Instagram-worthy look: stack slices, drizzle syrup in slow motion, and sprinkle with extra cinnamon sugar.'
    ],
    faq: [
      {
        question: 'Can I use stale bread?',
        answer: 'Yes! Slightly stale bread works best because it soaks up the custard mixture without falling apart.'
      },
      {
        question: 'What\'s the best bread for French toast?',
        answer: 'Brioche, challah, or thick-sliced sandwich bread — they absorb well and stay soft inside.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'You can soak bread slices, cover, and refrigerate overnight. Cook in the morning for quick prep.'
      },
      {
        question: 'Can I freeze French toast?',
        answer: 'Yes! Cook, cool, and freeze in a single layer. Reheat in toaster or oven.'
      },
      {
        question: 'Why is my French toast soggy?',
        answer: 'Usually from too much milk in the custard or cooking on heat that\'s too low.'
      }
    ],
    tags: ['breakfast', 'french toast', 'cinnamon', 'sweet', 'weekend']
  },
  {
    id: '9',
    title: 'Avocado Toast with Egg',
    description: `Simple, satisfying, and endlessly customizable, Avocado Toast with Egg is the ultimate go-to breakfast for busy mornings or relaxed brunches. Creamy mashed avocado layered over crispy toasted bread sets the stage for a perfectly cooked egg — whether you prefer it sunny-side up, poached, or soft-boiled.

This dish strikes a beautiful balance of healthy fats, protein, and fiber, keeping you full and energized for hours. A sprinkle of sea salt, a dash of chili flakes, or a squeeze of lemon adds just the right kick, while optional toppings like microgreens, feta, or hot sauce let you make it your own.

Minimal effort, maximum flavor — this recipe is a modern classic that proves healthy can also be delicious. It's no surprise avocado toast has become a kitchen staple around the world.`,
    image: '/Avocado-Toast-with-Egg.jpg',
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
    servingSuggestions: [
      'Top with a sprinkle of chili flakes, everything bagel seasoning, or sesame seeds for crunch.',
      'Add microgreens, arugula, or spinach for freshness.',
      'Drizzle with olive oil, balsamic glaze, or hot sauce for extra flavor.',
      'Pair with fresh orange juice, iced coffee, or a smoothie for a balanced breakfast.',
      'Serve on a wooden board with sliced tomatoes, cucumber, or fruit on the side for a café-style vibe.'
    ],
    variations: [
      'Mediterranean style: add feta cheese, olives, and cherry tomatoes.',
      'Mexican style: top with pico de gallo, jalapeños, and a squeeze of lime.',
      'Protein boost: sprinkle hemp seeds, pumpkin seeds, or add grilled chicken.',
      'Gourmet twist: drizzle with truffle oil or add caramelized onions.'
    ],
    tips: [
      'Mash avocado with salt, pepper, and lemon juice for best flavor.',
      'Toast bread until golden and crisp — this makes the base sturdy.',
      'For poached eggs: swirl simmering water and add a splash of vinegar before dropping the egg.',
      'Layer toppings evenly so every bite is balanced.'
    ],
    faq: [
      {
        question: 'What bread works best?',
        answer: 'Sourdough, rye, multigrain, or rustic artisan bread — toasted well so it holds the toppings.'
      },
      {
        question: 'How do I keep the avocado from browning?',
        answer: 'Mix with lemon or lime juice before spreading; it keeps the green color and adds flavor.'
      },
      {
        question: 'Can I use different eggs?',
        answer: 'Yes — fried, poached, scrambled, or even a soft-boiled egg all work beautifully.'
      },
      {
        question: 'Can I make this vegan?',
        answer: 'Skip the egg and add toppings like hummus, grilled veggies, or sautéed mushrooms.'
      },
      {
        question: 'How do I make it more filling?',
        answer: 'Add smoked salmon, turkey slices, or chickpeas for protein.'
      }
    ],
    tags: ['breakfast', 'healthy', 'avocado', 'protein', 'quick']
  },
  {
    id: '10',
    title: 'Breakfast Burrito',
    description: `Kickstart your day with a warm, satisfying Breakfast Burrito that wraps all your morning favorites into one delicious bundle. Packed with scrambled eggs, melty cheese, crispy potatoes, and your choice of protein like bacon, sausage, or black beans, this burrito is a complete meal you can hold in your hand.

Wrapped in a soft tortilla and easy to take on the go, it's perfect for busy mornings, weekend brunches, or even meal prep for the week ahead. Add some avocado, salsa, or hot sauce for an extra flavor boost, or customize it with your favorite fillings to make it just right.

Comforting, filling, and easy to make, the Breakfast Burrito is a crowd-pleaser that delivers every time — whether you're feeding a family or just yourself.`,
    image: '/Breakfast-Burrito.jpg',
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
    servingSuggestions: [
      'Wrap tightly in foil to keep warm and make it easier to eat on the go.',
      'Slice in half diagonally for a café-style presentation.',
      'Serve with salsa, hot sauce, or guacamole on the side for dipping.',
      'Pair with hash browns, roasted potatoes, or a fresh fruit salad.',
      'Great for meal prep — make a batch, wrap, and freeze for busy mornings.'
    ],
    variations: [
      'Classic: scrambled eggs, bacon/sausage, cheese, potatoes.',
      'Southwest style: black beans, corn, salsa, jalapeños.',
      'Healthy twist: egg whites, spinach, avocado, and turkey.',
      'High-protein: add grilled chicken, extra beans, or quinoa.',
      'Indulgent: add hash browns inside for crispy texture.'
    ],
    tips: [
      'Don\'t overfill — it makes rolling and eating messy.',
      'Fold sides in first, then roll tightly from the bottom to seal.',
      'Toast the wrapped burrito in a pan or press for a golden, crispy outside.',
      'If freezing, wrap tightly in foil then place in freezer bags to prevent freezer burn.'
    ],
    faq: [
      {
        question: 'Can I make breakfast burritos ahead of time?',
        answer: 'Yes! Cook, wrap in foil or parchment, and refrigerate for up to 3 days or freeze for up to 2 months.'
      },
      {
        question: 'How do I reheat frozen burritos?',
        answer: 'Reheat in the oven at 180°C (350°F) for 20–25 minutes, or microwave in 1-minute intervals.'
      },
      {
        question: 'What tortillas are best?',
        answer: 'Large flour tortillas are classic, but whole wheat, spinach, or gluten-free wraps also work.'
      },
      {
        question: 'How do I stop the tortilla from tearing?',
        answer: 'Warm it briefly in a pan or microwave before filling and rolling — it makes the tortilla flexible.'
      },
      {
        question: 'Can I make it vegetarian or vegan?',
        answer: 'Yes! Use scrambled tofu or beans instead of eggs and dairy-free cheese or avocado as filling.'
      }
    ],
    tags: ['breakfast', 'burrito', 'hearty', 'portable', 'Mexican-inspired']
  },
  {
    id: '11',
    title: 'Overnight Oats',
    description: `Overnight Oats are the perfect no-fuss breakfast — creamy, filling, and ready to enjoy the moment you wake up. Made by soaking rolled oats in milk or yogurt overnight, this chilled breakfast becomes rich and spoonable by morning, no cooking required.

Customizable with your favorite add-ins like fresh fruit, nuts, seeds, or a swirl of peanut butter, overnight oats are both nourishing and endlessly adaptable. They're a great source of fiber, energy, and satisfaction, making them ideal for busy mornings or meal prep throughout the week.

Whether you prefer them fruity, chocolatey, or nutty, Overnight Oats offer a deliciously wholesome start to your day — with barely any effort at all.`,
    image: '/Overnight-Oats.jpeg',
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
    servingSuggestions: [
      'Serve straight from the jar for a trendy, grab-and-go breakfast.',
      'Add a fresh layer of fruit, nuts, or seeds right before eating for crunch.',
      'Drizzle with honey, maple syrup, or nut butter for extra flavor.',
      'Pair with coffee, matcha, or a smoothie for a balanced morning.',
      'Great for meal prep — make 3–5 jars at once and store in the fridge.'
    ],
    variations: [
      'Classic: oats + milk + chia seeds + honey + berries.',
      'Tropical: mango, pineapple, coconut flakes.',
      'Chocolate: cocoa powder, banana, peanut butter.',
      'Apple pie: diced apples, cinnamon, walnuts.',
      'Protein boost: add protein powder, Greek yogurt, or nut butter.'
    ],
    tips: [
      'Use a 1:1 ratio of oats to liquid for a creamy base.',
      'Chia seeds or flaxseeds help thicken and add nutrition.',
      'Prep in mason jars for portion control and easy storage.',
      'Shake or stir before eating to mix layers evenly.',
      'Top just before serving to keep fruits and nuts fresh and crunchy.'
    ],
    faq: [
      {
        question: 'Do I have to cook overnight oats?',
        answer: 'No — the oats soften as they soak in liquid overnight.'
      },
      {
        question: 'How long do overnight oats last?',
        answer: 'Up to 5 days in the fridge (best texture within 2–3 days).'
      },
      {
        question: 'Can I use instant oats?',
        answer: 'You can, but they may turn mushy. Rolled oats are best.'
      },
      {
        question: 'Can I make them dairy-free?',
        answer: 'Yes — use almond, oat, soy, or coconut milk. Yogurt alternatives also work.'
      },
      {
        question: 'Why are my oats too runny or too thick?',
        answer: 'Adjust liquid ratio: more milk for creamier oats, less for thicker texture.'
      }
    ],
    tags: ['breakfast', 'overnight', 'healthy', 'no-cook', 'meal-prep']
  },
  {
    id: '12',
    title: 'Smoothie Bowl',
    description: `Start your morning with a burst of color and nutrition with this refreshing Smoothie Bowl — thick, creamy, and topped with your favorite crunchy, fruity, and nutty extras. Unlike a regular smoothie, this bowl is spoonable and satisfying, turning your drinkable breakfast into a beautiful, energizing meal.

Blended with frozen fruits and a splash of milk or yogurt, each bowl becomes a blank canvas for toppings like granola, chia seeds, fresh berries, coconut flakes, or a drizzle of nut butter. It's as pretty as it is powerful — loaded with vitamins, antioxidants, and fiber to keep you full and glowing all morning.

Perfect for warm weather mornings, healthy habits, or just treating yourself to something colorful and delicious, the Smoothie Bowl is a feel-good favorite that never gets boring.`,
    image: '/Smoothie-Bowl.jpg',
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
    servingSuggestions: [
      'Pour smoothie into a shallow bowl so toppings stay on the surface.',
      'Arrange toppings in rows or sections for a colorful, Instagram-worthy look.',
      'Serve immediately for best texture (smoothies melt fast).',
      'Pair with granola bars, toast, or a light breakfast pastry for balance.',
      'Use a chilled bowl to keep your smoothie colder for longer.'
    ],
    variations: [
      'Tropical: mango, pineapple, coconut milk, shredded coconut.',
      'Berry blast: blueberries, raspberries, strawberries, chia seeds.',
      'Green boost: spinach, kale, banana, almond milk.',
      'Chocolate indulgence: banana, cocoa powder, peanut butter.',
      'Protein power: add protein powder, nut butter, or hemp seeds.'
    ],
    tips: [
      'Use frozen bananas as the base for a creamy, thick texture.',
      'Don\'t add too much liquid — start small, blend, and adjust.',
      'Prep toppings ahead so you can style and serve quickly.',
      'Contrast textures (crunchy granola, soft fruit, creamy nut butter) for the best bite.',
      'Play with colors — vibrant toppings make bowls more appealing.'
    ],
    faq: [
      {
        question: 'What\'s the difference between a smoothie and a smoothie bowl?',
        answer: 'A smoothie bowl is thicker so it can hold toppings without sinking.'
      },
      {
        question: 'How do I make it thicker?',
        answer: 'Use frozen fruit, less liquid, or add yogurt/avocado.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Best enjoyed fresh, but you can prep smoothie packs (fruit in bags) and blend in the morning.'
      },
      {
        question: 'What blender is best?',
        answer: 'A high-speed blender makes the smoothest consistency, but any blender works with patience.'
      },
      {
        question: 'Can I make it dairy-free?',
        answer: 'Absolutely — use plant-based milk (almond, oat, soy, coconut) and dairy-free yogurt.'
      }
    ],
    tags: ['breakfast', 'smoothie', 'healthy', 'colorful', 'antioxidants']
  },
  {
    id: '13',
    title: 'Greek Yogurt Parfait',
    description: `Layered, lovely, and loaded with goodness — the Greek Yogurt Parfait is a simple yet elegant breakfast (or snack!) that feels like a treat but fuels like a health food. Creamy Greek yogurt is stacked with juicy fresh fruit, crunchy granola, and a drizzle of honey for the perfect mix of textures and flavors.

It's protein-rich, naturally sweetened, and endlessly customizable. Whether you're making it in a jar for a grab-and-go option or serving it in a glass for a pretty brunch, this parfait is as versatile as it is delicious.

Healthy, satisfying, and ready in minutes, a Greek Yogurt Parfait is proof that wholesome food can be both beautiful and effortless.`,
    image: '/Greek-Yogurt-Parfait.jpg',
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
    servingSuggestions: [
      'Layer in a clear glass or mason jar for a pretty, café-style look.',
      'Alternate yogurt, fruit, and granola for a colorful layered effect.',
      'Drizzle with honey, maple syrup, or agave for extra sweetness.',
      'Serve with a side of coffee, fresh juice, or tea for a balanced breakfast.',
      'Make mini versions in small jars for a party or brunch table.'
    ],
    variations: [
      'Berry delight: strawberries, blueberries, raspberries.',
      'Tropical: pineapple, mango, coconut flakes.',
      'Chocolate twist: cocoa granola, banana slices, dark chocolate chips.',
      'Nut lover\'s: almonds, walnuts, peanut butter drizzle.',
      'Autumn style: apples, cinnamon, pecans, and a dash of nutmeg.'
    ],
    tips: [
      'Use thick yogurt for the best layered look and creamy texture.',
      'Always add granola last to keep it crunchy.',
      'Mix a little vanilla extract into yogurt for extra flavor.',
      'For meal prep: assemble jars without wet toppings like syrup, then add fresh toppings right before serving.',
      'Play with colors (bright berries, golden honey, green pistachios) to make parfaits visually appealing.'
    ],
    faq: [
      {
        question: 'Can I make parfaits ahead of time?',
        answer: 'Yes — assemble without granola, then add granola right before eating to keep it crunchy.'
      },
      {
        question: 'What\'s the best yogurt to use?',
        answer: 'Thick Greek yogurt is classic, but regular or dairy-free yogurt works too.'
      },
      {
        question: 'Can I make it more filling?',
        answer: 'Add protein powder to the yogurt or layer with nut butter and seeds.'
      },
      {
        question: 'How long do parfaits last in the fridge?',
        answer: '2–3 days if stored in airtight jars (again, add granola just before serving).'
      },
      {
        question: 'Can I make it vegan?',
        answer: 'Yes — use dairy-free yogurt (coconut, almond, oat) and sweeten with maple syrup or agave.'
      }
    ],
    tags: ['breakfast', 'parfait', 'protein', 'layered', 'quick']
  },
  {
    id: '14',
    title: 'Chia Pudding',
    description: `Chia Pudding is a creamy, make-ahead breakfast or snack that's as nourishing as it is easy to love. Made with just chia seeds and milk (plus a touch of sweetener if you like), it transforms overnight into a thick, pudding-like treat packed with fiber, omega-3s, and plant-based protein.

Mild in flavor and endlessly customizable, chia pudding is a perfect base for layering with fruits, nuts, nut butters, or even a bit of chocolate. Whether you enjoy it plain and simple or dressed up with toppings, it's a wholesome option that feels indulgent without the guilt.

Great for busy mornings, meal prep, or a light dessert, this little jar of goodness is proof that simple ingredients can do magical things.`,
    image: '/Chia-Pudding.jpg',
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
    servingSuggestions: [
      'Serve in small glass jars or bowls for a layered, café-style presentation.',
      'Top with fresh fruit, granola, or a drizzle of nut butter right before serving.',
      'Layer with yogurt or smoothie for extra creaminess.',
      'Pair with coffee, tea, or fresh juice for a light breakfast.',
      'Works great as a healthy snack or even a dessert alternative.'
    ],
    variations: [
      'Berry mix: chia pudding with blueberries, raspberries, strawberries.',
      'Chocolate: add cocoa powder and top with banana + dark chocolate.',
      'Tropical: use coconut milk, top with pineapple + mango.',
      'Peanut butter swirl: add a spoon of peanut butter or almond butter.',
      'Spiced: cinnamon, nutmeg, cardamom for a cozy twist.'
    ],
    tips: [
      'Use 3–4 tablespoons chia seeds per 1 cup of liquid for the right consistency.',
      'Stir the mixture after 5–10 minutes to prevent clumps, then refrigerate.',
      'Use a high-quality, thick milk (like coconut or whole milk) for creamier pudding.',
      'Prep multiple jars at once for easy grab-and-go breakfasts.',
      'Add toppings right before eating so they stay fresh and crunchy.'
    ],
    faq: [
      {
        question: 'How long does chia pudding need to set?',
        answer: 'At least 2 hours, but overnight gives the best texture.'
      },
      {
        question: 'How long does it last in the fridge?',
        answer: '4–5 days in an airtight container — perfect for meal prep.'
      },
      {
        question: 'Why is my chia pudding runny?',
        answer: 'Not enough chia seeds, or not stirred enough at the start (they clump).'
      },
      {
        question: 'Can I make it vegan?',
        answer: 'Yes — use plant-based milk (almond, soy, oat, coconut).'
      },
      {
        question: 'Can I sweeten it naturally?',
        answer: 'Definitely — honey, maple syrup, dates, or mashed banana work well.'
      }
    ],
    tags: ['breakfast', 'chia', 'pudding', 'superfood', 'make-ahead']
  },
  {
    id: '15',
    title: 'Bagels with Cream Cheese & Toppings',
    description: `Sometimes the simplest breakfasts are the most satisfying, and Bagels with Cream Cheese & Toppings are a perfect example. With their soft, chewy texture and golden crust, bagels make a delicious base for a creamy layer of tangy cream cheese — and from there, the topping options are endless.

Whether you go savory with smoked salmon and capers, or sweet with fresh berries and honey, bagels offer a balance of comfort and creativity. They're ideal for leisurely brunches, quick weekday mornings, or assembling a beautiful bagel board for guests.

Customizable, filling, and always a crowd-pleaser, this is a breakfast classic that never goes out of style.`,
    image: '/Bagels-with-Cream-Cheese-&-Toppings.jpg',
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
    servingSuggestions: [
      'Toast bagels lightly for a crisp outside and soft inside.',
      'Spread cream cheese while warm so it melts slightly.',
      'Serve open-faced with colorful toppings for a brunch vibe.',
      'Cut into halves or quarters for party platters or grab-and-go snacks.',
      'Pair with coffee, fresh juice, or even a smoothie.'
    ],
    variations: [
      'Classic NYC: smoked salmon, capers, red onion, tomato.',
      'Veggie lover\'s: cucumber, bell peppers, sprouts, avocado.',
      'Sweet option: strawberry cream cheese, fresh berries, drizzle of honey.',
      'Protein boost: turkey slices, ham, or a fried egg.',
      'Gourmet twist: cream cheese + sun-dried tomato + arugula.'
    ],
    tips: [
      'Let cream cheese soften slightly before spreading for easier use.',
      'Slice bagels evenly with a serrated knife to avoid squishing.',
      'Prep toppings ahead (like sliced veggies or salmon) for quick assembly.',
      'For brunch spreads: arrange different bagels, cream cheeses, and toppings buffet-style.',
      'Freeze bagels sliced in half for quick toasting later.'
    ],
    faq: [
      {
        question: 'What\'s the best bagel for this?',
        answer: 'Plain, everything, sesame, onion, or whole grain all work — depends on your flavor choice.'
      },
      {
        question: 'Do I need to toast the bagel?',
        answer: 'Not required, but toasting enhances flavor and texture.'
      },
      {
        question: 'Can I use flavored cream cheese?',
        answer: 'Absolutely — chive, garlic & herb, strawberry, or honey nut add extra character.'
      },
      {
        question: 'How do I keep bagels fresh?',
        answer: 'Store in an airtight bag at room temp for 2–3 days, or freeze for longer.'
      },
      {
        question: 'Can I make this healthier?',
        answer: 'Yes — try whole wheat bagels, light cream cheese, and veggie toppings.'
      }
    ],
    tags: ['breakfast', 'bagels', 'customizable', 'classic', 'quick']
  },
  {
    id: '16',
    title: 'Banana Bread',
    description: `Banana Bread is the ultimate cozy comfort — soft, moist, and bursting with the sweet, nostalgic aroma of ripe bananas and warm spices. Whether you enjoy it plain, studded with chocolate chips, or sprinkled with crunchy nuts, it's a timeless recipe that brings instant homey vibes to any kitchen.

Perfect for using up overripe bananas, this loaf bakes up golden and fragrant, ready to be sliced for breakfast, an afternoon snack, or even dessert. It's easy to make, forgiving to tweak, and always satisfying with a cup of coffee or tea.

Whether you bake it for loved ones or just for yourself, Banana Bread is more than just a recipe — it's a hug in every slice.`,
    image: '/Banana-Bread.jpg',
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
    servingSuggestions: [
      'Serve warm with a pat of butter that melts into the slice.',
      'Pair with coffee, tea, or a glass of milk for a cozy snack.',
      'Toast slices lightly and spread with cream cheese, peanut butter, or Nutella.',
      'Great as breakfast, snack, or even dessert with a scoop of vanilla ice cream.',
      'Slice into mini loaves or muffins for portion-friendly servings.'
    ],
    variations: [
      'Classic walnut: chopped walnuts mixed into the batter.',
      'Chocolate swirl: cocoa powder or melted chocolate swirled in.',
      'Tropical: shredded coconut + pineapple bits.',
      'Protein boost: add Greek yogurt or a scoop of protein powder.',
      'Spiced: add cinnamon, nutmeg, or pumpkin spice.'
    ],
    tips: [
      'Use room-temperature ingredients for smoother mixing.',
      'Don\'t overmix — stir just until combined.',
      'Line the loaf pan with parchment paper for easy removal.',
      'Test doneness with a toothpick — it should come out clean.',
      'Let it cool completely before slicing for neat cuts.'
    ],
    faq: [
      {
        question: 'What bananas are best for banana bread?',
        answer: 'Overripe bananas with brown spots — they\'re sweeter and mash easily.'
      },
      {
        question: 'Can I freeze banana bread?',
        answer: 'Yes — wrap slices or the whole loaf tightly and freeze for up to 3 months.'
      },
      {
        question: 'Why is my banana bread dense?',
        answer: 'Usually from overmixing the batter or using too little leavening.'
      },
      {
        question: 'Can I make it healthier?',
        answer: 'Swap part of the flour with whole wheat flour, reduce sugar, or add oats/seeds.'
      },
      {
        question: 'Can I add mix-ins?',
        answer: 'Definitely — nuts, chocolate chips, blueberries, or dried fruit are all popular.'
      }
    ],
    tags: ['breakfast', 'banana bread', 'baked', 'sweet', 'comfort food']
  },
  {
    id: '18',
    title: 'Garlic Butter Pasta with Parmesan',
    description: `Rich, buttery, and bursting with garlic flavor, Garlic Butter Pasta with Parmesan is the kind of comfort food that's as easy to make as it is hard to resist. With just a handful of pantry ingredients, this dish comes together in minutes but tastes like something truly special.

The pasta is coated in a silky garlic butter sauce, finished with a generous shower of grated Parmesan for that perfect salty-savory finish. It's a go-to recipe for busy nights, last-minute dinners, or whenever you're craving something cozy and satisfying without the fuss.

Simple, flavorful, and endlessly comforting — this is pasta at its best.`,
    image: '/Garlic-Butter-Pasta-with-Parmesan.jpg',
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
    servingSuggestions: [
      'Serve immediately while warm so the butter sauce coats the pasta perfectly.',
      'Garnish with extra grated Parmesan, parsley, or a drizzle of olive oil.',
      'Pair with garlic bread, a fresh green salad, or roasted veggies.',
      'Add a squeeze of lemon for brightness.',
      'Serve in warm bowls for a cozy, restaurant-style presentation.'
    ],
    variations: [
      'Spicy kick: add red chili flakes.',
      'Creamy version: stir in a splash of heavy cream.',
      'Herb lovers: add basil, thyme, or oregano.',
      'Veggie boost: toss in spinach, mushrooms, or cherry tomatoes.',
      'Seafood style: add shrimp, clams, or crab meat.'
    ],
    tips: [
      'Cook pasta al dente — it will finish cooking in the sauce.',
      'Reserve ½ cup pasta water to adjust sauce consistency.',
      'Don\'t let garlic burn — cook gently in butter until fragrant.',
      'Toss pasta immediately in the sauce so it absorbs the flavors.',
      'Serve with a glass of white wine for an elegant pairing.'
    ],
    faq: [
      {
        question: 'What pasta works best?',
        answer: 'Spaghetti, fettuccine, or linguine — but short pasta like penne works too.'
      },
      {
        question: 'Can I use pre-grated Parmesan?',
        answer: 'Freshly grated is best for flavor and creaminess, but pre-grated works in a pinch.'
      },
      {
        question: 'Can I add protein?',
        answer: 'Yes — grilled chicken, shrimp, or crispy bacon all pair well.'
      },
      {
        question: 'How do I keep the pasta from clumping?',
        answer: 'Reserve some pasta water and toss it with the sauce — it keeps the pasta silky.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'It\'s best fresh, but you can store leftovers in the fridge for up to 2 days and reheat gently.'
      }
    ],
    tags: ['lunch', 'pasta', 'garlic', 'Italian', 'quick']
  },
  {
    id: '19',
    title: 'Honey Garlic Chicken Thighs',
    description: `Sticky, savory, and a little bit sweet, Honey Garlic Chicken Thighs are a deliciously satisfying dish that brings bold flavor with minimal effort. Juicy, tender chicken thighs are pan-seared to golden perfection, then glazed in a rich honey garlic sauce that clings to every bite.

This recipe strikes the perfect balance — the honey adds a touch of sweetness, the garlic brings depth and warmth, and the soy sauce rounds it all out with a salty umami kick. It's a family-friendly favorite that pairs beautifully with rice, veggies, or noodles.

Whether it's a quick weeknight dinner or part of a cozy weekend meal, this dish proves that simple ingredients can deliver big flavor.`,
    image: '/Honey-Garlic-Chicken-Thighs.jpg',
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
    servingSuggestions: [
      'Serve with steamed rice, mashed potatoes, or noodles to soak up the sauce.',
      'Add a side of roasted or stir-fried veggies (broccoli, green beans, carrots).',
      'Garnish with sesame seeds and chopped green onions for a restaurant-style touch.',
      'Pair with a crisp salad or cucumber slaw to balance the sweetness.',
      'Serve in a cast-iron skillet or on a platter for family-style dining.'
    ],
    variations: [
      'Asian style: add soy sauce, ginger, sesame oil.',
      'Spicy honey garlic: add sriracha or chili paste.',
      'Herb twist: sprinkle with rosemary or thyme before baking.',
      'Vegetable boost: cook with bell peppers, onions, or zucchini.',
      'Sticky wings version: use the same sauce for chicken wings.'
    ],
    tips: [
      'Pat chicken dry before cooking for a golden sear.',
      'Use bone-in thighs for extra flavor, or boneless for quicker cooking.',
      'Let the sauce bubble until slightly sticky before coating the chicken.',
      'Don\'t overcrowd the pan — cook in batches if needed.',
      'Marinate chicken in sauce for 30 minutes for deeper flavor.'
    ],
    faq: [
      {
        question: 'Can I use chicken breasts instead of thighs?',
        answer: 'Yes — but thighs stay juicier and more flavorful. If using breasts, don\'t overcook.'
      },
      {
        question: 'Can I bake instead of pan-fry?',
        answer: 'Yes — bake at 200°C (400°F) for 25–30 minutes, then brush with sauce.'
      },
      {
        question: 'How do I thicken the sauce?',
        answer: 'Simmer longer, or add a cornstarch slurry (1 tsp cornstarch + 2 tsp water).'
      },
      {
        question: 'Can I meal-prep this dish?',
        answer: 'Definitely — store in airtight containers in the fridge for up to 4 days.'
      },
      {
        question: 'Can I make it spicy?',
        answer: 'Yes — add chili flakes, sriracha, or fresh chili for heat.'
      }
    ],
    tags: ['lunch', 'chicken', 'honey garlic', 'Asian-inspired', 'protein']
  },
  {
    id: '20',
    title: 'Pan-Seared Steak with Herb Butter',
    description: `Few things feel as indulgent and satisfying as a perfectly Pan-Seared Steak with Herb Butter. Golden-crusted on the outside, juicy and tender on the inside, this classic dish brings restaurant-quality flavor right to your home kitchen — no grill required.

The magic is in the simplicity: a hot pan, a well-seasoned cut of steak, and a generous spoonful of garlic herb butter that melts luxuriously over the top. It adds richness, fragrance, and that melt-in-your-mouth finish that makes every bite unforgettable.

Whether you're celebrating something special or just craving a cozy, hearty dinner, this steak delivers comfort and elegance in equal measure.`,
    image: '/Pan-Seared-Steak-with-Herb-Butter.jpg',
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
    servingSuggestions: [
      'Serve sliced against the grain for tenderness.',
      'Drizzle extra herb butter over the steak just before serving.',
      'Pair with mashed potatoes, roasted vegetables, or a simple salad.',
      'For a classic steakhouse experience, serve with creamed spinach and garlic bread.',
      'Pair with a bold red wine (Cabernet Sauvignon, Malbec, or Syrah).'
    ],
    variations: [
      'Garlic & thyme: classic steakhouse flavor.',
      'Peppercorn crust: coat with crushed black pepper before searing.',
      'Smoky twist: add smoked paprika or chipotle to the butter.',
      'Surf & turf: top with garlic shrimp.',
      'Blue cheese butter: swap herbs for crumbled blue cheese.'
    ],
    tips: [
      'Bring steak to room temperature before cooking for even doneness.',
      'Use a cast-iron skillet for the best sear.',
      'Baste with butter, garlic, and herbs during cooking for extra flavor.',
      'Don\'t overcrowd the pan — cook steaks one at a time if needed.',
      'Slice thinly for sharing platters or steak sandwiches.'
    ],
    faq: [
      {
        question: 'What\'s the best cut of steak for pan-searing?',
        answer: 'Ribeye, New York strip, or filet mignon — they cook well and stay juicy.'
      },
      {
        question: 'How do I know when my steak is done?',
        answer: 'Use a meat thermometer: rare (50°C / 120°F), medium rare (55°C / 130°F), medium (60°C / 140°F), medium well (65°C / 150°F), well done (70°C / 160°F).'
      },
      {
        question: 'Do I need to let steak rest?',
        answer: 'Yes — rest for 5–10 minutes so juices redistribute.'
      },
      {
        question: 'Can I use dried herbs in the butter?',
        answer: 'Fresh herbs (parsley, thyme, rosemary) are best, but dried work in a pinch.'
      },
      {
        question: 'What\'s the secret to a good crust?',
        answer: 'Pat steak dry, season generously, and sear on high heat without moving it.'
      }
    ],
    tags: ['lunch', 'steak', 'herb butter', 'premium', 'protein']
  },
  {
    id: '21',
    title: 'Chicken Fried Rice',
    description: `Chicken Fried Rice is the ultimate homemade takeout-style comfort food — quick, satisfying, and full of flavor in every bite. With tender pieces of chicken, fluffy rice, colorful veggies, and savory soy sauce all stir-fried together, this dish transforms simple ingredients into a warm, crave-worthy meal.

It's the perfect way to use up leftover rice and create something that feels both effortless and delicious. A hint of sesame oil and scrambled egg bring that signature fried rice taste, while the chicken adds heartiness that makes it a complete dish.

Whether you're cooking for one or feeding a family, this cozy skillet favorite is always a hit — and it comes together in under 30 minutes.`,
    image: '/Chicken-Fried-Rice.jpg',
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
    servingSuggestions: [
      'Serve hot straight from the wok for best flavor.',
      'Garnish with sesame seeds, chopped green onions, or fresh cilantro.',
      'Pair with spring rolls, dumplings, or a light soup for a full meal.',
      'Serve in bowls for a cozy family-style dinner or in takeout boxes for fun presentation.',
      'Drizzle with extra soy sauce, chili oil, or sriracha to taste.'
    ],
    variations: [
      'Classic: chicken, peas, carrots, scrambled egg, soy sauce.',
      'Spicy: add chili paste or sriracha.',
      'Pineapple fried rice: sweet-savory combo with pineapple chunks.',
      'Protein boost: swap or mix chicken with shrimp, pork, or beef.',
      'Veggie-loaded: broccoli, zucchini, bell peppers, snap peas.'
    ],
    tips: [
      'Use cold, day-old rice for the best texture.',
      'Cook ingredients separately (chicken, veggies, eggs) before mixing — prevents sogginess.',
      'High heat is key for that smoky "wok hei" flavor.',
      'Soy sauce, oyster sauce, or sesame oil add depth — don\'t overdo it.',
      'Great for using up fridge leftovers — customizable and budget-friendly.'
    ],
    faq: [
      {
        question: 'Can I use leftover rice?',
        answer: 'Yes — day-old rice works best because it\'s less sticky and fries better.'
      },
      {
        question: 'Can I use chicken breast or thighs?',
        answer: 'Both work — breasts are leaner, thighs are juicier.'
      },
      {
        question: 'Can I make it vegetarian?',
        answer: 'Yes — simply leave out the chicken and add more veggies or tofu.'
      },
      {
        question: 'Why is my fried rice mushy?',
        answer: 'Too much moisture — use cold rice and don\'t overcrowd the pan.'
      },
      {
        question: 'Can I meal prep fried rice?',
        answer: 'Yes — it keeps in the fridge for 3–4 days and reheats well in a pan or microwave.'
      }
    ],
    tags: ['lunch', 'fried rice', 'chicken', 'Asian', 'one-pan']
  },
  {
    id: '22',
    title: 'Creamy One-Pot Chicken Pasta',
    description: `Creamy, comforting, and all made in a single pot — Creamy One-Pot Chicken Pasta is the ultimate cozy dinner for busy nights. Juicy chicken pieces are simmered with tender pasta in a rich, garlicky cream sauce that hugs every bite.

This dish brings together the heartiness of a home-cooked meal with the ease of minimal cleanup. There's no need to boil pasta separately or juggle multiple pans — everything comes together right in one pot, soaking up all the savory flavor along the way.

It's a satisfying, feel-good dinner that's as perfect for weeknights as it is for curling up with something delicious at the end of a long day.`,
    image: '/Creamy-One-Pot-Chicken-Pasta.jpg',
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
    servingSuggestions: [
      'Serve hot, straight from the pot, for a cozy family-style meal.',
      'Garnish with freshly grated Parmesan, parsley, or a drizzle of olive oil.',
      'Pair with garlic bread or a simple side salad.',
      'For a restaurant feel, serve in shallow bowls with extra sauce spooned on top.',
      'Works great for weeknight dinners or meal prep — just reheat with a splash of milk.'
    ],
    variations: [
      'Spinach & mushroom: add veggies for a hearty twist.',
      'Spicy: stir in chili flakes or a touch of hot sauce.',
      'Cheesy: add mozzarella or cream cheese for extra richness.',
      'Pesto: stir in a spoonful of pesto at the end for fresh flavor.',
      'Seafood: swap chicken for shrimp for a creamy shrimp pasta.'
    ],
    tips: [
      'Sear chicken first for extra flavor, then cook pasta in the same pot.',
      'Reserve some pasta water in case you need to thin the sauce.',
      'Don\'t overcook pasta — let it simmer gently until al dente.',
      'Add Parmesan gradually to avoid clumping.',
      'Cream sauces thicken as they cool, so keep that in mind before serving.'
    ],
    faq: [
      {
        question: 'Can I use chicken breasts or thighs?',
        answer: 'Both work — breasts cook faster, thighs add more flavor and tenderness.'
      },
      {
        question: 'Can I use a different pasta shape?',
        answer: 'Yes — short pasta (penne, fusilli, rigatoni) works best for creamy sauces.'
      },
      {
        question: 'How do I prevent the pasta from sticking?',
        answer: 'Stir occasionally while cooking and keep enough liquid in the pot.'
      },
      {
        question: 'Can I make it lighter?',
        answer: 'Yes — use milk instead of cream, or swap cream for Greek yogurt.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'Yes — add a splash of milk or cream when reheating to bring back creaminess.'
      }
    ],
    tags: ['lunch', 'one-pot', 'creamy pasta', 'chicken', 'comfort food']
  },
  {
    id: '23',
    title: 'Garlic Butter Chicken Bites',
    description: `Garlic Butter Chicken Bites are juicy, golden, and packed with rich, buttery flavor — the kind of quick and satisfying recipe that turns simple ingredients into something irresistible. Each bite-sized piece is seared to perfection, then tossed in a fragrant garlic butter sauce that's impossible to resist.

They're perfect for busy weeknights, meal prep, or as a crowd-pleasing appetizer. Serve them over rice, pasta, salad, or just enjoy straight from the skillet — no judgment here!

This is comfort food done fast, without sacrificing a bit of flavor.`,
    image: '/Garlic-Butter-Chicken-Bites.jpg',
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
    image: '/Chicken-and-Broccoli-Stirfry.jpg',
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
    servingSuggestions: [
      'Serve hot over steamed rice, noodles, or quinoa.',
      'Garnish with sesame seeds and sliced green onions for a restaurant-style finish.',
      'Pair with spring rolls or dumplings for an Asian-inspired meal.',
      'For a low-carb option, serve over cauliflower rice or zucchini noodles.',
      'Great for weeknight dinners and meal prep — reheats well.'
    ],
    variations: [
      'Spicy: add sriracha, chili paste, or red pepper flakes.',
      'Nutty: toss with cashews or peanuts for crunch.',
      'Garlic lover\'s: add extra garlic to the sauce.',
      'Citrus twist: finish with a splash of orange or lime juice.',
      'Sesame: drizzle with toasted sesame oil for depth.'
    ],
    tips: [
      'Slice chicken thinly against the grain for tenderness.',
      'Use high heat for that signature stir-fry flavor ("wok hei").',
      'Cook chicken and veggies separately, then combine with sauce.',
      'Thicken sauce with cornstarch slurry if you prefer it glossy and rich.',
      'Serve immediately — stir-fries taste best fresh.'
    ],
    faq: [
      {
        question: 'Can I use chicken breast or thighs?',
        answer: 'Both work — breasts cook quickly, thighs are juicier.'
      },
      {
        question: 'How do I keep the broccoli crisp?',
        answer: 'Blanch briefly or stir-fry quickly over high heat to avoid sogginess.'
      },
      {
        question: 'What sauce is best?',
        answer: 'A mix of soy sauce, garlic, ginger, and a touch of honey or brown sugar is classic.'
      },
      {
        question: 'Can I make this gluten-free?',
        answer: 'Yes — use tamari or coconut aminos instead of soy sauce.'
      },
      {
        question: 'Can I add other veggies?',
        answer: 'Absolutely — carrots, bell peppers, snap peas, mushrooms, or baby corn work great.'
      }
    ],
    tags: ['lunch', 'stir-fry', 'healthy', 'Asian', 'quick']
  },
  {
    id: '25',
    title: 'One-Pot Taco Rice',
    description: `One-Pot Taco Rice is everything you love about taco night — bold flavors, hearty ingredients, and comforting spices — all simmered together in a single cozy pot. With seasoned ground meat, fluffy rice, tender beans, and melty cheese, it's a full-flavored meal that's both satisfying and easy to make.

Perfect for weeknights, casual dinners, or meal prep, this dish brings Tex-Mex comfort to your table without the mess of multiple pans. Top it with sour cream, avocado, or a squeeze of lime for a personal twist.

It's fast, filling, and the kind of dish that makes you want seconds (and maybe thirds).`,
    image: '/One-Pot-Taco-Rice.jpg',
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
    servingSuggestions: [
      'Serve hot with toppings like shredded cheese, sour cream, avocado, or salsa.',
      'Garnish with fresh cilantro and lime wedges for brightness.',
      'Scoop into bowls for a cozy dinner or use as a filling for burritos, tacos, or stuffed peppers.',
      'Pair with tortilla chips on the side for crunch.',
      'Works great for meal prep — portion into containers for easy grab-and-go lunches.'
    ],
    variations: [
      'Classic taco style: ground beef, black beans, corn, salsa.',
      'Spicy: add jalapeños, chili powder, or hot sauce.',
      'Cheesy: stir in shredded cheddar or pepper jack before serving.',
      'Tex-Mex veggie: add bell peppers, zucchini, or spinach.',
      'Fiesta style: top with crushed tortilla chips for crunch.'
    ],
    tips: [
      'Sear meat first for deeper flavor before adding rice and liquid.',
      'Use taco seasoning (homemade or store-bought) for authentic flavor.',
      'Don\'t lift the lid too often — it traps steam needed to cook the rice.',
      'Add toppings just before serving for freshness and crunch.',
      'This dish doubles easily if you\'re feeding a crowd.'
    ],
    faq: [
      {
        question: 'Can I use ground beef instead of chicken?',
        answer: 'Yes — ground beef, turkey, or even plant-based crumbles all work.'
      },
      {
        question: 'What rice is best?',
        answer: 'Long-grain white rice cooks evenly, but brown rice works with longer cooking time.'
      },
      {
        question: 'Can I make it vegetarian?',
        answer: 'Yes — skip the meat and double up on beans and veggies.'
      },
      {
        question: 'How do I keep the rice from sticking or burning?',
        answer: 'Stir occasionally, keep enough liquid in the pot, and cook on low heat once simmering.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'Yes — add a splash of broth or water when reheating to keep rice fluffy.'
      }
    ],
    tags: ['lunch', 'one-pot', 'taco rice', 'Mexican-inspired', 'hearty']
  },
  {
    id: '26',
    title: 'Crispy Potato Wedges with Dipping Sauce',
    description: `Golden on the outside, fluffy on the inside — Crispy Potato Wedges are the ultimate homemade comfort snack or side dish. Baked (or air-fried) to crispy perfection and seasoned just right, these wedges deliver all the crunch and flavor of fries, without the deep fryer.

Paired with a creamy, zesty dipping sauce, they're perfect for game night, family dinners, or anytime you're craving something warm, salty, and satisfying.

Easy to prep and even easier to love, this is the kind of recipe that disappears fast — so you might want to make a double batch.`,
    image: '/Crispy-Potato-Wedges-with-Dipping-Sauce.jpeg',
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
    servingSuggestions: [
      'Serve hot and fresh from the oven or fryer for maximum crispiness.',
      'Pair with ketchup, aioli, garlic mayo, ranch, or spicy sriracha sauce.',
      'Add them as a side to burgers, grilled meats, or sandwiches.',
      'For a party, serve in small baskets or paper cones with dipping sauce on the side.',
      'Sprinkle with extra herbs or Parmesan just before serving for a gourmet touch.'
    ],
    variations: [
      'Cheesy wedges: sprinkle with cheddar or Parmesan after baking.',
      'Loaded wedges: top with sour cream, bacon, green onions, and melted cheese.',
      'Spicy: toss with chili powder, cayenne, or hot sauce.',
      'Herb blend: mix rosemary, thyme, or oregano into the seasoning.',
      'Sweet potato wedges: swap regular potatoes for sweet potatoes.'
    ],
    tips: [
      'Cut wedges evenly for consistent cooking.',
      'Preheat oven, fryer, or air fryer for best crispiness.',
      'Don\'t overcrowd the pan — give potatoes space to crisp.',
      'Toss wedges in a little cornstarch before baking for extra crunch.',
      'Serve immediately — wedges lose crispiness as they cool.'
    ],
    faq: [
      {
        question: 'How do I make potato wedges extra crispy?',
        answer: 'Soak cut potatoes in cold water for 30 minutes to remove starch, then dry well before cooking.'
      },
      {
        question: 'Can I bake instead of fry?',
        answer: 'Yes — bake at 220°C (425°F) until golden and crispy, flipping halfway.'
      },
      {
        question: 'What potatoes work best?',
        answer: 'Russet or Yukon Gold potatoes are ideal for crispy wedges.'
      },
      {
        question: 'Can I air fry them?',
        answer: 'Yes — air fry at 200°C (400°F) for 15–20 minutes, shaking halfway through.'
      },
      {
        question: 'Can I season them differently?',
        answer: 'Absolutely — try Cajun, paprika, garlic powder, rosemary, or chili flakes.'
      }
    ],
    tags: ['lunch', 'potato wedges', 'crispy', 'side dish', 'comfort food']
  },
  {
    id: '27',
    title: 'Grilled Cheese with Tomato Soup',
    description: `Few pairings are as cozy and comforting as Grilled Cheese with Tomato Soup — a timeless classic that never goes out of style. Buttery, golden-brown bread hugs perfectly melted cheese, while the rich, velvety tomato soup offers the perfect dip with every bite.

It's the kind of meal that warms you from the inside out, whether you're curled up on a rainy day or just craving something familiar and satisfying.

Simple ingredients, quick prep, and soul-soothing flavor — this duo is a hug in a bowl (and sandwich).`,
    image: '/Grilled-Cheese-with-Tomato-Soup.jpg',
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
    servingSuggestions: [
      'Serve the grilled cheese hot and golden brown, with gooey cheese pulling apart.',
      'Cut sandwiches diagonally for that classic comfort-food look.',
      'Pair with a warm bowl of tomato soup for dipping.',
      'Add a side salad or fries to make it a full meal.',
      'For cozy vibes, serve in mugs or small bowls with soup and mini grilled cheese bites.'
    ],
    variations: [
      'Gourmet grilled cheese: add caramelized onions, bacon, or tomato slices.',
      'Herbed butter: spread garlic or herb butter on the bread before grilling.',
      'Cheese blend: mix 2–3 cheeses for deeper flavor.',
      'Spicy twist: add jalapeños or chili flakes.',
      'Soup variation: swirl cream, pesto, or red pepper flakes into tomato soup.'
    ],
    tips: [
      'Use medium heat — too high burns the bread before cheese melts.',
      'Press gently with a spatula while cooking for even browning.',
      'Grate cheese instead of slicing for quicker melting.',
      'Add a pinch of sugar or cream to tomato soup for balance.',
      'Serve immediately for the ultimate melty-cheese experience.'
    ],
    faq: [
      {
        question: 'What\'s the best cheese for grilled cheese?',
        answer: 'Cheddar, mozzarella, American, or a blend — melty cheeses work best.'
      },
      {
        question: 'Butter or mayo on the bread?',
        answer: 'Butter is classic, but mayo spreads more evenly and creates extra crispiness.'
      },
      {
        question: 'Can I make it in advance?',
        answer: 'Best served fresh, but you can keep sandwiches warm in the oven at low heat.'
      },
      {
        question: 'What\'s the best bread to use?',
        answer: 'White, sourdough, or whole wheat — sturdy breads hold cheese and crisp up nicely.'
      },
      {
        question: 'Can I make tomato soup from scratch?',
        answer: 'Yes — sauté onions, garlic, and canned tomatoes, then blend for a creamy homemade version.'
      }
    ],
    tags: ['lunch', 'grilled cheese', 'tomato soup', 'comfort food', 'classic']
  },
  {
    id: '48',
    title: 'Classic Mac \'n\' Cheese',
    description: `Creamy, cheesy, and irresistibly nostalgic — Classic Mac 'n' Cheese is the ultimate comfort food that brings everyone to the table. With tender pasta smothered in a rich, velvety cheese sauce, it's a dish that feels like a warm hug in every bite.

Whether served as a hearty main or a crowd-pleasing side, this timeless recipe is always a hit. Made with simple ingredients and baked to golden perfection, it's easy enough for weeknights yet special enough for holidays.

One forkful and you'll understand why it's a forever favorite.`,
    image: '/Classic-Mac-n-Cheese.jpg',
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
    servingSuggestions: [
      'Serve hot and bubbly, straight from the oven or stovetop.',
      'Top with extra cheese or breadcrumbs for crunch before serving.',
      'Pair with roasted veggies, garlic bread, or a side salad.',
      'Works as both a main dish or a hearty side for meats.',
      'Serve in ramekins or mini skillets for an individual, restaurant-style presentation.'
    ],
    variations: [
      'Baked mac: top with breadcrumbs and bake until golden.',
      'Spicy mac: add jalapeños, chili powder, or hot sauce.',
      'Loaded mac: stir in bacon, ham, or chicken.',
      'Veggie mac: mix in broccoli, spinach, or peas.',
      'Gourmet twist: try truffle oil or lobster chunks.'
    ],
    tips: [
      'Cook pasta al dente so it doesn\'t get mushy when baked.',
      'Use freshly grated cheese (not pre-shredded) for a smoother sauce.',
      'Stir constantly when making the roux to avoid lumps.',
      'Don\'t skimp on seasoning — salt, pepper, and mustard powder enhance flavor.',
      'Let it rest 5 minutes after baking so the sauce thickens before serving.'
    ],
    faq: [
      {
        question: 'What\'s the best cheese for mac \'n\' cheese?',
        answer: 'Cheddar is classic, but mixing cheeses like Gruyère, mozzarella, or Parmesan adds depth.'
      },
      {
        question: 'Can I make mac \'n\' cheese ahead of time?',
        answer: 'Yes — assemble, refrigerate, then bake before serving. Add extra milk before baking if it thickens too much.'
      },
      {
        question: 'How do I keep the sauce creamy?',
        answer: 'Use enough milk/cream, don\'t overcook the roux, and stir cheese in off the heat.'
      },
      {
        question: 'Can I freeze mac \'n\' cheese?',
        answer: 'Yes — freeze in portions, then reheat in the oven with a splash of milk.'
      },
      {
        question: 'Why is my sauce grainy?',
        answer: 'Cheese added over high heat can curdle — melt it slowly on low heat.'
      }
    ],
    tags: ['lunch', 'mac and cheese', 'comfort food', 'cheesy', 'classic']
  },
  {
    id: '49',
    title: 'Creamy One-Pot Tomato Pasta',
    description: `When comfort meets convenience, you get Creamy One-Pot Tomato Pasta — a rich, flavorful dish that's as easy to make as it is satisfying to eat. With tender pasta simmered right in a creamy tomato sauce, this recipe keeps cleanup minimal and flavor maximum.

It's perfect for busy weeknights, cozy dinners, or those moments when you want something delicious without the fuss. A touch of garlic, herbs, and a swirl of cream bring the whole dish together in under 30 minutes.

Simple, creamy, and packed with flavor — it's a one-pot wonder you'll want to make again and again.`,
    image: '/One-Pot-Creamy-Tommato-Pasta.jpg',
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
    servingSuggestions: [
      'Serve hot, garnished with fresh basil and a sprinkle of Parmesan.',
      'Pair with garlic bread or a side salad for a complete meal.',
      'Drizzle with olive oil or balsamic glaze for extra flavor.',
      'Works great as a weeknight dinner or lunch meal prep.',
      'Serve in wide bowls for a rustic, Italian-style presentation.'
    ],
    variations: [
      'Spicy: add red chili flakes or a dash of hot sauce.',
      'Cheesy: stir in mozzarella or cream cheese for extra richness.',
      'Veggie-loaded: add spinach, mushrooms, or zucchini.',
      'Herby: add oregano, thyme, or rosemary.',
      'Vodka twist: swap some broth for vodka for a "penne alla vodka" style.'
    ],
    tips: [
      'Sauté garlic and onion first for deeper flavor.',
      'Don\'t overcook pasta — let it finish in the sauce for al dente texture.',
      'Reserve some pasta water to loosen the sauce if it thickens.',
      'Stir cream in at the end to prevent curdling.',
      'Fresh basil at the end makes the dish pop with freshness.'
    ],
    faq: [
      {
        question: 'Can I use fresh tomatoes instead of canned?',
        answer: 'Yes — use ripe, peeled, and chopped tomatoes for a fresher taste.'
      },
      {
        question: 'Can I make this dairy-free?',
        answer: 'Yes — use plant-based cream (oat, soy, or cashew) and dairy-free cheese.'
      },
      {
        question: 'What pasta works best?',
        answer: 'Short pasta like penne, fusilli, or rigatoni works best in creamy sauces.'
      },
      {
        question: 'Can I add protein?',
        answer: 'Absolutely — chicken, shrimp, sausage, or chickpeas are great options.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'Yes — add a splash of milk or broth when reheating to keep it creamy.'
      }
    ],
    tags: ['lunch', 'one-pot', 'tomato pasta', 'creamy', 'easy cleanup']
  },
  {
    id: '50',
    title: 'Easy Chickpea Curry',
    description: `Warm, fragrant, and full of plant-powered goodness — Easy Chickpea Curry is a go-to recipe for when you want something nourishing, satisfying, and packed with flavor. Made with tender chickpeas simmered in a spiced coconut-tomato sauce, it's a comforting meal that comes together quickly in one pot.

Whether served over fluffy rice or scooped up with warm naan, this curry is both budget-friendly and deeply satisfying. It's naturally vegan, easily customizable, and perfect for meal prep or weeknight dinners.

Simple ingredients, bold flavor — this is comfort food with a kick.`,
    image: '/chickpeas-curry.jpg',
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
    servingSuggestions: [
      'Serve hot over basmati rice, jasmine rice, or quinoa.',
      'Pair with naan, flatbread, or pita for dipping into the curry sauce.',
      'Garnish with fresh cilantro, lime wedges, or a dollop of yogurt.',
      'Add a side of cucumber raita or a simple green salad for freshness.',
      'Works great for both dinner and meal prep — flavors get even better the next day.'
    ],
    variations: [
      'Classic Indian style: add garam masala, ginger, and cumin seeds.',
      'Thai-inspired: use red curry paste and lime leaves.',
      'Tomato-based: add extra tomatoes for a lighter curry.',
      'Protein boost: add lentils, tofu, or paneer.',
      'Leafy greens: stir in spinach or kale at the end.'
    ],
    tips: [
      'Sauté onions, garlic, and spices first to build flavor.',
      'Simmer gently to allow flavors to develop fully.',
      'Don\'t skip acid — a squeeze of lemon or lime brightens the dish.',
      'Taste and adjust seasoning — curry flavors deepen as they cook.',
      'Serve with warm bread or rice to soak up the sauce.'
    ],
    faq: [
      {
        question: 'Can I use canned chickpeas?',
        answer: 'Yes — canned chickpeas save time. Just rinse and drain before using.'
      },
      {
        question: 'Can I make this curry creamy without coconut milk?',
        answer: 'Yes — use heavy cream, cashew cream, or even Greek yogurt.'
      },
      {
        question: 'Can I make it spicier?',
        answer: 'Add extra chili powder, cayenne, or fresh chopped chilies.'
      },
      {
        question: 'Can I freeze chickpea curry?',
        answer: 'Absolutely — it freezes well for up to 2 months. Reheat gently with a splash of water.'
      },
      {
        question: 'Can I add other vegetables?',
        answer: 'Yes — spinach, potatoes, cauliflower, zucchini, or bell peppers work beautifully.'
      }
    ],
    tags: ['lunch', 'chickpea curry', 'vegetarian', 'coconut milk', 'spicy']
  },
  {
    id: '51',
    title: 'Spaghetti Aglio e Olio with Green Olives',
    description: `Simple yet bold, Spaghetti Aglio e Olio with Green Olives is a rustic Italian classic with a zesty twist. Featuring golden garlic gently sautéed in olive oil, al dente pasta, and briny green olives, this dish is proof that a few humble ingredients can create something truly special.

Perfect for a quick weeknight dinner or a late-night craving, it comes together in under 20 minutes and never disappoints. The olives add a pop of flavor that takes this traditional recipe to the next level.

Bright, garlicky, and utterly satisfying — it's pasta at its most elegant and effortless.`,
    image: '/Spaghetti-Aglio-e-Olio-with-Green-Olives.jpg',
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
    servingSuggestions: [
      'Serve hot, garnished with extra parsley and a drizzle of good olive oil.',
      'Add a sprinkle of Parmesan or Pecorino for extra richness.',
      'Pair with crusty bread and a light salad for a balanced meal.',
      'Works great as a quick lunch, weeknight dinner, or late-night snack.',
      'For presentation, twist pasta into a nest shape on plates and top with olives.'
    ],
    variations: [
      'Classic: skip olives for the traditional version.',
      'Lemon twist: add lemon zest or juice for brightness.',
      'Seafood style: toss in shrimp or anchovies for depth.',
      'Herb boost: add fresh basil or oregano.',
      'Nutty: sprinkle with toasted pine nuts or almonds.'
    ],
    tips: [
      'Slice garlic thinly and cook gently — don\'t burn it, or the dish will taste bitter.',
      'Use high-quality olive oil since it\'s the base flavor.',
      'Cook pasta al dente and reserve some pasta water to help bind the sauce.',
      'Toss pasta directly in the pan with oil, garlic, and olives to absorb flavor.',
      'Serve immediately — this pasta is best fresh and hot.'
    ],
    faq: [
      {
        question: 'What kind of olives work best?',
        answer: 'Green olives (like Castelvetrano or Spanish Manzanilla) add brightness, but black olives can also be used.'
      },
      {
        question: 'Can I make this without olives?',
        answer: 'Yes — traditional Aglio e Olio is just garlic, oil, chili, and parsley. Olives are a flavorful twist.'
      },
      {
        question: 'What pasta is best?',
        answer: 'Spaghetti is classic, but linguine or fettuccine also work.'
      },
      {
        question: 'Can I make it spicier?',
        answer: 'Yes — increase the red pepper flakes or add fresh chili slices.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'It\'s best fresh, but you can reheat gently with a splash of olive oil.'
      }
    ],
    tags: ['lunch', 'aglio e olio', 'Italian', 'olive oil', 'quick']
  },
  {
    id: '28',
    title: 'Creamy Garlic Shrimp Pasta',
    description: `Decadent yet easy, Creamy Garlic Shrimp Pasta is the kind of dish that turns an ordinary night into something a little more special. Juicy shrimp are sautéed in butter and garlic, then tossed in a silky cream sauce with tender pasta and a hint of parmesan.

It's luxurious comfort in a bowl — the kind of meal that tastes like it came from your favorite restaurant but takes just 30 minutes at home.

Perfect for date night, family dinners, or when you simply crave something indulgent and satisfying.`,
    image: '/Creamy-Garlic-Shrimp-Pasta.jpg',
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
    servingSuggestions: [
      'Serve hot with extra Parmesan and parsley sprinkled on top.',
      'Pair with garlic bread or a light side salad.',
      'Drizzle with a squeeze of lemon juice before serving to brighten the flavors.',
      'Works as a cozy weeknight dinner or an elegant date-night dish.',
      'Plate in shallow bowls with shrimp arranged on top for a restaurant-style look.'
    ],
    variations: [
      'Spicy shrimp pasta: add chili flakes or cayenne.',
      'Lemon garlic: add lemon zest and juice for a fresh twist.',
      'Cheesy: stir in cream cheese or mozzarella for extra richness.',
      'Herb boost: add basil, thyme, or oregano.',
      'Surf & turf: toss in seared steak strips for a decadent meal.'
    ],
    tips: [
      'Don\'t overcook shrimp — they\'re done when pink and curled (2–3 minutes).',
      'Use freshly grated Parmesan for a smoother sauce.',
      'Reserve some pasta water to adjust sauce consistency.',
      'Sauté garlic gently in butter — don\'t burn it, or it turns bitter.',
      'Serve immediately for the creamiest texture.'
    ],
    faq: [
      {
        question: 'Can I use frozen shrimp?',
        answer: 'Yes — thaw completely, pat dry, and remove shells before cooking.'
      },
      {
        question: 'What pasta works best?',
        answer: 'Linguine, spaghetti, or fettuccine — but short pasta like penne also works.'
      },
      {
        question: 'Can I make it lighter?',
        answer: 'Yes — use half-and-half or milk instead of heavy cream.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'Best fresh, but leftovers can be reheated gently with a splash of cream or broth.'
      },
      {
        question: 'Can I add more protein or veggies?',
        answer: 'Yes — chicken, mushrooms, spinach, or zucchini pair well with this sauce.'
      }
    ],
    tags: ['dinner', 'shrimp', 'pasta', 'creamy', 'garlic']
  },
  {
    id: '29',
    title: 'Baked Lemon Herb Chicken Thighs',
    description: `Bright, flavorful, and effortlessly delicious — Baked Lemon Herb Chicken Thighs are a go-to for busy weeknights or relaxed weekend dinners. Marinated in zesty lemon juice, garlic, and a blend of fragrant herbs, these chicken thighs come out of the oven juicy on the inside with a perfectly golden, crispy skin.

It's a fuss-free recipe with big flavor, using simple ingredients you likely already have in your kitchen.

Pair it with roasted veggies, rice, or a crisp salad for a balanced meal that's as comforting as it is satisfying.`,
    image: '/Baked-Lemon-Herb-Chicken-Thighs.jpg',
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
    servingSuggestions: [
      'Serve hot with roasted potatoes, rice, or couscous to soak up the juices.',
      'Pair with a side of steamed or roasted vegetables (broccoli, carrots, green beans).',
      'Garnish with fresh parsley and extra lemon wedges for brightness.',
      'Works well for both weeknight dinners and meal prep.',
      'Serve on a platter family-style for gatherings.'
    ],
    variations: [
      'Spicy lemon chicken: add chili flakes or paprika to the seasoning.',
      'Garlic butter version: swap olive oil for garlic-infused butter.',
      'Citrus mix: combine lemon with orange or lime for a fresh twist.',
      'One-pan meal: roast chicken with potatoes, carrots, and onions in the same dish.',
      'Herb crusted: coat thighs in breadcrumbs mixed with herbs for crunch.'
    ],
    tips: [
      'Pat chicken dry before seasoning for a crispy skin.',
      'Use a cast-iron or ovenproof skillet for searing then baking.',
      'Let chicken rest 5 minutes before serving to lock in juices.',
      'Don\'t overcrowd the pan — leave space for air circulation.',
      'Freshly squeezed lemon juice gives the best flavor.'
    ],
    faq: [
      {
        question: 'Can I use chicken breasts instead of thighs?',
        answer: 'Yes, but thighs stay juicier. If using breasts, reduce cooking time to prevent drying.'
      },
      {
        question: 'Can I prepare this ahead of time?',
        answer: 'Yes — marinate chicken in lemon, herbs, and garlic for up to 24 hours before baking.'
      },
      {
        question: 'What herbs work best?',
        answer: 'Parsley, thyme, rosemary, and oregano — fresh or dried.'
      },
      {
        question: 'How long do leftovers last?',
        answer: 'Store in the fridge for up to 4 days, or freeze up to 2 months.'
      },
      {
        question: 'How do I know when chicken is cooked?',
        answer: 'Use a meat thermometer — thighs are done at 75°C / 165°F.'
      }
    ],
    tags: ['dinner', 'chicken', 'lemon', 'herbs', 'baked']
  },
  {
    id: '30',
    title: 'One-Pot Chicken & Rice',
    description: `Comfort food doesn't get cozier than this One-Pot Chicken & Rice — a simple, soul-warming dish that brings everything together in one pan. Tender chicken simmers with fragrant rice, onions, garlic, and just the right touch of herbs and spices for maximum flavor with minimal cleanup.

It's a classic meal that feels like home: nourishing, satisfying, and easy enough for a weeknight dinner.

Whether you're feeding a family or meal prepping for the week, this one-pot wonder is sure to become a regular favorite.`,
    image: '/One-Pot-Chicken-&-Rice.jpeg',
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
    servingSuggestions: [
      'Serve hot straight from the pot for a cozy, family-style meal.',
      'Garnish with fresh parsley, cilantro, or green onions for color and freshness.',
      'Pair with a crisp salad or roasted vegetables on the side.',
      'Add lemon wedges at the table for a bright, zesty finish.',
      'Works great for both weeknight dinners and meal prep.'
    ],
    variations: [
      'Spanish style: add paprika, bell peppers, and peas.',
      'Lemon herb: stir in lemon juice and thyme.',
      'Spicy: add chili powder, cayenne, or jalapeños.',
      'Creamy version: stir in a splash of cream or coconut milk at the end.',
      'Protein boost: mix in beans or chickpeas with the rice.'
    ],
    tips: [
      'Sear chicken first for deeper flavor, then cook rice in the same pot.',
      'Don\'t lift the lid too often — steam is needed to cook the rice evenly.',
      'Let it rest for 5 minutes before fluffing the rice.',
      'Use chicken broth instead of water for more flavor.',
      'Slice chicken before serving to make it easier to portion.'
    ],
    faq: [
      {
        question: 'Can I use chicken breasts instead of thighs?',
        answer: 'Yes, but thighs are more flavorful and won\'t dry out as easily.'
      },
      {
        question: 'What type of rice is best?',
        answer: 'Long-grain white rice works best — basmati or jasmine hold their texture well.'
      },
      {
        question: 'Can I make it with brown rice?',
        answer: 'Yes, but it needs more liquid and longer cooking time.'
      },
      {
        question: 'Why did my rice turn mushy?',
        answer: 'Too much liquid or over-stirring while cooking. Stick to the liquid ratio and let it steam.'
      },
      {
        question: 'Can I freeze chicken & rice?',
        answer: 'Yes — cool completely, then freeze in portions for up to 2 months.'
      }
    ],
    tags: ['dinner', 'one-pot', 'chicken', 'rice', 'easy']
  },
  {
    id: '31',
    title: 'Ground Beef Tacos',
    description: `A weeknight hero and party favorite, Ground Beef Tacos are the ultimate crowd-pleaser. Seasoned with a smoky, savory blend of spices, the juicy beef is perfectly tucked into warm taco shells and topped with all your favorites — think shredded lettuce, cheese, salsa, and a squeeze of lime.

Quick to make and endlessly customizable, these tacos bring bold flavor with very little effort.

Whether it's Taco Tuesday or a casual weekend meal, this classic recipe always hits the spot.`,
    image: '/Ground-Beef-Tacos.jpg',
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
    servingSuggestions: [
      'Serve in warm tortillas (soft or crispy shells).',
      'Add classic toppings: lettuce, tomato, cheese, salsa, sour cream, and avocado.',
      'Pair with Mexican rice, refried beans, or a side salad.',
      'Serve family-style with toppings in bowls so everyone builds their own tacos.',
      'Add lime wedges on the side for squeezing over the tacos.'
    ],
    variations: [
      'Cheesy beef tacos: stir shredded cheese into the beef mixture.',
      'Spicy: add jalapeños, hot sauce, or extra chili powder.',
      'Loaded tacos: top with guacamole, pico de gallo, and corn.',
      'Street-style: serve with chopped onion, cilantro, and lime.',
      'Fusion twist: use Asian sauces (like teriyaki or hoisin) with slaw for a flavor spin.'
    ],
    tips: [
      'Warm tortillas before serving for flexibility and better taste.',
      'Drain excess grease from beef to avoid soggy tacos.',
      'Don\'t overfill — 2–3 tablespoons of meat per taco is ideal.',
      'Toast taco shells briefly for extra crunch.',
      'Offer a variety of toppings so each taco feels unique.'
    ],
    faq: [
      {
        question: 'What\'s the best ground beef for tacos?',
        answer: '80/20 (lean to fat ratio) works best for flavor and juiciness.'
      },
      {
        question: 'Do I need taco seasoning?',
        answer: 'You can use store-bought, or make your own with chili powder, cumin, paprika, and garlic powder.'
      },
      {
        question: 'Can I make tacos ahead of time?',
        answer: 'Cook the filling ahead and reheat. Assemble tacos just before serving so shells don\'t get soggy.'
      },
      {
        question: 'Can I make it healthier?',
        answer: 'Yes — use lean beef, whole wheat tortillas, and plenty of veggie toppings.'
      },
      {
        question: 'Can I freeze taco meat?',
        answer: 'Yes — cooked beef freezes well for up to 2 months. Reheat and use in tacos, burritos, or salads.'
      }
    ],
    tags: ['dinner', 'tacos', 'ground beef', 'Mexican', 'quick']
  },
  {
    id: '32',
    title: 'Creamy Chicken & Mushroom Skillet',
    description: `Rich, savory, and oh-so-satisfying, this Creamy Chicken & Mushroom Skillet is a cozy classic that's ready in under 30 minutes. Tender chicken breasts are seared to golden perfection, then simmered in a luscious garlic cream sauce with earthy mushrooms and fresh herbs.

It's the kind of dish that feels elegant but couldn't be easier to make — all in one skillet for less cleanup and more flavor.

Serve it over pasta, rice, or mashed potatoes for a meal that's perfect for a quiet night in or casual dinner with friends.`,
    image: '/Creamy-Chicken-&-Mushroom-Skillet.jpg',
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
    servingSuggestions: [
      'Serve hot with mashed potatoes, rice, or pasta to soak up the creamy sauce.',
      'Pair with roasted vegetables or a crisp green salad for balance.',
      'Garnish with fresh parsley and a sprinkle of Parmesan.',
      'Works great for both weeknight dinners and dinner parties.',
      'Serve directly in the skillet for a rustic, cozy presentation.'
    ],
    variations: [
      'Garlic herb: add extra garlic, thyme, and rosemary.',
      'White wine sauce: deglaze the pan with white wine before adding cream.',
      'Spicy: stir in chili flakes or cayenne.',
      'Cheesy: add grated Parmesan or cream cheese for richness.',
      'Bacon lovers: add crispy bacon bits to the sauce.'
    ],
    tips: [
      'Sear chicken first for flavor, then simmer gently in the sauce.',
      'Don\'t overcrowd the pan — cook chicken in batches if needed.',
      'Use a mix of mushrooms (button, cremini, shiitake) for deeper flavor.',
      'Let sauce thicken on low heat; avoid boiling cream.',
      'Taste and adjust seasoning before serving — mushrooms soak up salt differently.'
    ],
    faq: [
      {
        question: 'Can I use chicken breasts or thighs?',
        answer: 'Both work — breasts cook faster, thighs stay juicier.'
      },
      {
        question: 'Can I make this dairy-free?',
        answer: 'Yes — swap cream for coconut milk or cashew cream.'
      },
      {
        question: 'Can I add other veggies?',
        answer: 'Definitely — spinach, peas, or zucchini pair well with mushrooms.'
      },
      {
        question: 'Does it reheat well?',
        answer: 'Yes — reheat gently with a splash of cream or broth to loosen the sauce.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Cook chicken and sauce separately, then reheat together before serving.'
      }
    ],
    tags: ['dinner', 'chicken', 'mushrooms', 'creamy', 'skillet']
  },
  {
    id: '33',
    title: 'Easy Baked Salmon with Veggies',
    description: `Simple, nutritious, and full of flavor, this Easy Baked Salmon with Veggies is your go-to sheet pan dinner. Succulent salmon fillets are seasoned just right and baked alongside a colorful medley of vegetables — all in one tray for easy prep and even easier cleanup.

With minimal ingredients and maximum goodness, it's perfect for busy weeknights or when you're craving something light yet satisfying.

Healthy eating doesn't get much more delicious (or convenient) than this.`,
    image: '/Easy-Baked-Salmon-with-Veggies.jpg',
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
    servingSuggestions: [
      'Serve hot with lemon wedges for squeezing over the salmon.',
      'Pair with rice, quinoa, or couscous to make it a full meal.',
      'Garnish with fresh dill, parsley, or chives for color and freshness.',
      'Works great as a healthy weeknight dinner or meal-prep option.',
      'Serve directly from the sheet pan for a simple, rustic presentation.'
    ],
    variations: [
      'Mediterranean: add olives, cherry tomatoes, and oregano.',
      'Asian-inspired: glaze salmon with soy sauce, sesame oil, and ginger.',
      'Garlic butter: drizzle with melted garlic butter before baking.',
      'Spicy: add chili flakes or sriracha.',
      'Herb-crusted: top salmon with breadcrumbs mixed with herbs and Parmesan.'
    ],
    tips: [
      'Cut veggies into even sizes so they cook evenly with the salmon.',
      'Line the baking sheet with parchment for easy cleanup.',
      'Add firmer veggies (like potatoes or carrots) earlier so they cook through.',
      'Don\'t overbake salmon — remove just as it turns opaque.',
      'Let it rest 5 minutes before serving for juicier fish.'
    ],
    faq: [
      {
        question: 'What veggies work best for baking with salmon?',
        answer: 'Broccoli, zucchini, asparagus, carrots, and potatoes — choose firm veggies that roast well.'
      },
      {
        question: 'Can I use frozen salmon?',
        answer: 'Yes — thaw completely and pat dry before baking.'
      },
      {
        question: 'What temperature should I bake salmon at?',
        answer: '200°C (400°F) for 15–20 minutes, depending on thickness.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — bake, cool, and store in the fridge for up to 3 days. Reheat gently.'
      },
      {
        question: 'How do I know when salmon is done?',
        answer: 'It flakes easily with a fork and reaches 55°C (130°F) internal temperature.'
      }
    ],
    tags: ['dinner', 'salmon', 'healthy', 'sheet pan', 'vegetables']
  },
  {
    id: '34',
    title: 'Stuffed Bell Peppers',
    description: `A wholesome classic that never goes out of style, Stuffed Bell Peppers are as beautiful as they are satisfying. Tender bell peppers are filled with a hearty mix of ground meat, rice, herbs, and savory seasonings, then baked until perfectly tender and golden on top.

It's a complete meal packed into a colorful, edible bowl — ideal for family dinners, meal prep, or impressing guests with something simple yet special.

Comfort food with a fresh twist, straight from the oven.`,
    image: '/Stuffed-Bell-Peppers.jpg',
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
    servingSuggestions: [
      'Serve hot with a drizzle of tomato sauce or extra cheese on top.',
      'Pair with a simple green salad, roasted potatoes, or garlic bread.',
      'Garnish with fresh parsley or basil for color and freshness.',
      'Works as a complete meal since it has protein, grains, and veggies all in one.',
      'Serve in individual portions — one stuffed pepper per plate looks beautiful.'
    ],
    variations: [
      'Classic beef & rice: ground beef, tomato sauce, rice, and cheese.',
      'Mexican-style: taco-seasoned beef, black beans, corn, and cheddar.',
      'Mediterranean: quinoa, feta, olives, and spinach.',
      'Spicy: add jalapeños or chili flakes.',
      'Cheesy lovers: top with mozzarella or Parmesan and bake until golden.'
    ],
    tips: [
      'Slice peppers evenly so they bake uniformly.',
      'Don\'t overfill — leave a little space for expansion while cooking.',
      'Cover with foil while baking, then uncover to brown cheese at the end.',
      'Use a baking dish that keeps peppers snug so they don\'t tip over.',
      'Let rest a few minutes before serving — fillings set and flavors blend.'
    ],
    faq: [
      {
        question: 'What peppers are best for stuffing?',
        answer: 'Large bell peppers (red, yellow, or green) — they hold shape and have mild flavor.'
      },
      {
        question: 'Do I need to cook the peppers before stuffing?',
        answer: 'Pre-baking or blanching makes them softer, but you can stuff raw peppers if you like them firmer.'
      },
      {
        question: 'Can I make them vegetarian?',
        answer: 'Yes — swap meat for beans, lentils, quinoa, or extra veggies.'
      },
      {
        question: 'Can I freeze stuffed peppers?',
        answer: 'Absolutely — freeze before or after baking, then reheat in the oven.'
      },
      {
        question: 'Why is my rice undercooked inside the pepper?',
        answer: 'It\'s best to use precooked rice or parboil before stuffing.'
      }
    ],
    tags: ['dinner', 'stuffed peppers', 'ground meat', 'rice', 'baked']
  },
  {
    id: '35',
    title: 'Beef & Broccoli Stir-Fry',
    description: `Fast, flavorful, and better than takeout, this Beef & Broccoli Stir-Fry is a weeknight hero. Thin slices of tender beef are stir-fried with crisp broccoli in a savory garlic-soy sauce that clings to every bite.

It's ready in under 30 minutes, packed with protein and veggies, and perfect over a bed of rice or noodles. Plus, you only need one pan — easy cleanup, big flavor.

A delicious way to skip the delivery and still satisfy those cravings.`,
    image: '/beef-and-broccoli-stir-fry.jpg',
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
    servingSuggestions: [
      'Serve hot over steamed rice, fried rice, or noodles.',
      'Garnish with sesame seeds and sliced green onions for a restaurant-style finish.',
      'Pair with spring rolls or dumplings for a full Asian-inspired meal.',
      'For a low-carb option, serve over cauliflower rice or zucchini noodles.',
      'Works great for weeknight dinners or meal prep.'
    ],
    variations: [
      'Spicy: add chili paste, sriracha, or red pepper flakes.',
      'Garlic lover\'s: add extra garlic to the sauce.',
      'Nutty: toss with cashews or peanuts.',
      'Citrus twist: finish with orange zest or juice.',
      'Mixed veggies: add bell peppers, carrots, or snap peas.'
    ],
    tips: [
      'Slice beef thinly and evenly for quick cooking.',
      'Cook beef in small batches to get a good sear (don\'t overcrowd the pan).',
      'Use high heat for that smoky "wok hei" flavor.',
      'Thicken sauce with a cornstarch slurry for a glossy finish.',
      'Serve immediately — stir-fries are best fresh.'
    ],
    faq: [
      {
        question: 'What cut of beef is best?',
        answer: 'Flank steak, sirloin, or skirt steak — slice thinly against the grain for tenderness.'
      },
      {
        question: 'How do I keep beef tender?',
        answer: 'Marinate in soy sauce, cornstarch, and a splash of oil for at least 15 minutes before cooking.'
      },
      {
        question: 'Can I make this gluten-free?',
        answer: 'Yes — use tamari or coconut aminos instead of soy sauce.'
      },
      {
        question: 'Why is my broccoli soggy?',
        answer: 'Overcooking — stir-fry quickly over high heat to keep it crisp.'
      },
      {
        question: 'Can I use frozen broccoli?',
        answer: 'Yes — thaw and pat dry before cooking to avoid excess moisture.'
      }
    ],
    tags: ['dinner', 'stir-fry', 'beef', 'broccoli', 'Asian']
  },
  {
    id: '36',
    title: 'Spaghetti Bolognese',
    description: `A timeless Italian favorite, Spaghetti Bolognese brings together rich, slow-simmered meat sauce and perfectly cooked pasta for the ultimate comfort meal. Made with ground beef, tomatoes, garlic, and herbs, this hearty dish fills your kitchen with cozy aromas and your plate with deep, savory flavor.

Whether it's a weeknight dinner or a Sunday family meal, this classic never disappoints — simple ingredients, soulful results.

Serve it with a sprinkle of Parmesan and crusty bread for a meal that feels like home.`,
    image: '/Spaghetti-Bolognese.jpg',
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
    servingSuggestions: [
      'Serve hot with freshly grated Parmesan or Pecorino.',
      'Garnish with fresh basil or parsley for color and flavor.',
      'Pair with garlic bread and a crisp green salad.',
      'Works well for family dinners or as a cozy weekend meal.',
      'For a rustic touch, serve in wide bowls with extra sauce spooned on top.'
    ],
    variations: [
      'Classic Italian style: add a splash of red wine and simmer slowly.',
      'Creamy Bolognese: stir in a little milk or cream at the end.',
      'Spicy: add chili flakes or fresh chili peppers.',
      'Veggie-loaded: add mushrooms, spinach, or bell peppers.',
      'Herby: add thyme, oregano, or bay leaves while simmering.'
    ],
    tips: [
      'Cook onions, carrots, and celery first (soffritto) for authentic flavor.',
      'Let sauce simmer low and slow for depth.',
      'Reserve pasta water and add to sauce for better texture.',
      'Toss pasta directly in the sauce before serving.',
      'Use high-quality canned tomatoes or fresh ripe ones for the best result.'
    ],
    faq: [
      {
        question: 'What meat works best for Bolognese?',
        answer: 'Ground beef is classic, but mixing beef and pork (or veal) gives richer flavor.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — Bolognese tastes even better the next day as flavors deepen.'
      },
      {
        question: 'Can I freeze Bolognese sauce?',
        answer: 'Absolutely — freezes well for up to 3 months.'
      },
      {
        question: 'Can I make it healthier?',
        answer: 'Yes — use lean beef, add extra vegetables (carrots, celery, zucchini), or use whole-wheat pasta.'
      },
      {
        question: 'Why is my sauce watery?',
        answer: 'Simmer longer uncovered — slow cooking thickens and develops flavor.'
      }
    ],
    tags: ['dinner', 'spaghetti', 'bolognese', 'Italian', 'classic']
  },
  {
    id: '37',
    title: 'Cheesy Baked Ziti',
    description: `Cheesy Baked Ziti is everything you love about comfort food — warm, bubbly, and loaded with layers of flavor. Tender ziti pasta is smothered in a rich tomato sauce, blended with creamy ricotta, and topped with gooey melted mozzarella for that perfect golden crust.

It's the kind of meal that fills the house with delicious aromas and brings everyone running to the table. Whether you're feeding a family or prepping for the week, this baked classic never fails.

Easy to make, hard to resist — pasta night just got better.`,
    image: '/Cheesy-Baked-Ziti.jpg',
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
    servingSuggestions: [
      'Serve hot and bubbly straight from the oven.',
      'Garnish with fresh basil, parsley, or extra Parmesan.',
      'Pair with garlic bread and a crisp green salad.',
      'Works well for family dinners, parties, or meal prep.',
      'Serve in individual ramekins for a restaurant-style touch.'
    ],
    variations: [
      'Classic meat ziti: ground beef or Italian sausage.',
      'Veggie ziti: add spinach, mushrooms, or zucchini.',
      'Spicy: add chili flakes or spicy Italian sausage.',
      'Extra cheesy: stir in cream cheese or burrata.',
      'Mediterranean: add olives, artichokes, or roasted red peppers.'
    ],
    tips: [
      'Use a mix of cheeses for the best flavor and texture.',
      'Don\'t overcook pasta before baking — keep it slightly firm.',
      'Cover with foil when baking, then uncover to brown cheese on top.',
      'Let rest 10 minutes before serving so it sets.',
      'Great for doubling the recipe if you\'re cooking for a crowd.'
    ],
    faq: [
      {
        question: 'What cheese works best for baked ziti?',
        answer: 'Mozzarella, ricotta, and Parmesan are classic. You can also add provolone for extra flavor.'
      },
      {
        question: 'Do I need to cook the pasta before baking?',
        answer: 'Yes — cook until just under al dente, since it will finish in the oven.'
      },
      {
        question: 'Can I make baked ziti ahead of time?',
        answer: 'Yes — assemble and refrigerate (unbaked) for up to 24 hours, then bake before serving.'
      },
      {
        question: 'Can I freeze baked ziti?',
        answer: 'Absolutely — freeze before baking, then bake from frozen or thaw overnight first.'
      },
      {
        question: 'Can I add meat?',
        answer: 'Yes — ground beef, sausage, or chicken make it heartier.'
      }
    ],
    tags: ['dinner', 'baked ziti', 'cheesy', 'Italian', 'comfort food']
  },
  {
    id: '38',
    title: 'Chocolate Chip Cookies',
    description: `Soft in the middle, golden at the edges, and loaded with melty chocolate — these Chocolate Chip Cookies are the timeless treat that never goes out of style. Whether you're baking a batch for cozy nights in, lunchbox surprises, or spontaneous sweet cravings, they always hit the spot.

Made with simple pantry staples and ready in under 30 minutes, this recipe delivers that perfect balance of chewiness and crunch with every bite.

Warm, gooey, and utterly comforting — just like homemade should be.`,
    image: '/Chocolate-Chip-Cookies.jpg',
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
    servingSuggestions: [
      'Serve warm so the chocolate is still melty inside.',
      'Pair with a glass of milk, hot cocoa, or coffee.',
      'Stack cookies on a plate and dust lightly with powdered sugar for presentation.',
      'Great for dessert, snacks, or gifting — wrap in parchment or place in a cookie tin.',
      'Works beautifully as ice cream sandwich cookies — just add a scoop in between!'
    ],
    variations: [
      'Classic walnut: stir in chopped walnuts or pecans.',
      'Double chocolate: add cocoa powder to the dough.',
      'Sea salt: sprinkle flaky sea salt on top before baking.',
      'Peanut butter swirl: add peanut butter chips or a peanut butter drizzle.',
      'Holiday style: mix in M&Ms, cranberries, or white chocolate chips.'
    ],
    tips: [
      'Chill dough at least 30 minutes for thicker, bakery-style cookies.',
      'Use parchment paper or silicone mats for even baking.',
      'Slightly underbake — cookies will firm up as they cool.',
      'Let them rest on the baking sheet a few minutes before transferring.',
      'Use high-quality chocolate for the best flavor.'
    ],
    faq: [
      {
        question: 'How do I get chewy vs. crispy cookies?',
        answer: 'Use more brown sugar for chewy, more white sugar for crispy.'
      },
      {
        question: 'Can I freeze cookie dough?',
        answer: 'Yes — scoop into balls, freeze on a tray, then bake from frozen (add a few minutes).'
      },
      {
        question: 'Why did my cookies spread too much?',
        answer: 'Butter was too soft or dough wasn\'t chilled — chilling helps cookies hold shape.'
      },
      {
        question: 'Can I make them gluten-free?',
        answer: 'Yes — use a 1:1 gluten-free flour blend.'
      },
      {
        question: 'How long do they stay fresh?',
        answer: '3–4 days in an airtight container at room temperature, or up to 3 months frozen.'
      }
    ],
    tags: ['desserts', 'cookies', 'chocolate chip', 'baking', 'classic']
  },
  {
    id: '39',
    title: 'Classic Brownies',
    description: `Fudgy, chocolaty, and irresistibly rich — these Classic Brownies are the ultimate homemade indulgence. With a crackly top, dense center, and deep cocoa flavor, they strike the perfect balance between chewy and gooey.

Whether served warm with a scoop of ice cream or packed as a sweet snack, these brownies are a comforting favorite that never disappoints.

Simple to make, impossible to resist — this is brownie bliss, baked fresh.`,
    image: '/Classic-Brownies.jpg',
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
    servingSuggestions: [
      'Serve slightly warm with a scoop of vanilla ice cream for a classic dessert.',
      'Dust with powdered sugar or drizzle with chocolate sauce for presentation.',
      'Cut into small squares for party platters or bake in ramekins for individual portions.',
      'Pair with coffee, hot cocoa, or a glass of milk.',
      'Stack and wrap in parchment for a cute homemade gift idea.'
    ],
    variations: [
      'Nutty brownies: add walnuts, pecans, or almonds.',
      'Swirled: swirl in peanut butter, caramel, or cream cheese.',
      'Double chocolate: add chocolate chips to the batter.',
      'Mint: stir in mint extract or top with mint frosting.',
      'Spicy twist: add a pinch of chili powder or cinnamon.'
    ],
    tips: [
      'Line the baking pan with parchment for easy removal.',
      'Don\'t overmix the batter — it makes brownies tough.',
      'Check early — brownies continue to cook a bit after removing from oven.',
      'Chill before slicing if you want super neat edges.',
      'Store in an airtight container for best freshness.'
    ],
    faq: [
      {
        question: 'How do I get fudgy vs. cakey brownies?',
        answer: 'More butter and less flour = fudgy. More flour and slightly longer bake = cakey.'
      },
      {
        question: 'Can I use cocoa powder instead of chocolate?',
        answer: 'Yes — but melted chocolate gives richer flavor. A mix works best.'
      },
      {
        question: 'Why are my brownies dry?',
        answer: 'Overbaking — remove from oven when edges are set but center is slightly soft.'
      },
      {
        question: 'Can I freeze brownies?',
        answer: 'Yes — wrap tightly and freeze for up to 3 months.'
      },
      {
        question: 'How do I cut brownies cleanly?',
        answer: 'Use a sharp knife, wipe between cuts, and let brownies cool completely before slicing.'
      }
    ],
    tags: ['desserts', 'brownies', 'chocolate', 'fudgy', 'baking']
  },
  {
    id: '40',
    title: 'Vanilla Cupcakes',
    description: `Light, fluffy, and delicately sweet — these Vanilla Cupcakes are a timeless treat perfect for any occasion. Whether you're celebrating something special or simply craving a homemade dessert, these cupcakes bring cozy bakery vibes straight to your kitchen.

Topped with a swirl of creamy frosting and a sprinkle of joy, each bite is soft, tender, and full of classic vanilla flavor.

Easy to make, even easier to love — a little bite of happiness in every cupcake.`,
    image: '/Vanilla-Cupcakes.jpg',
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
    servingSuggestions: [
      'Serve at room temperature for the best texture and flavor.',
      'Top with a generous swirl of frosting and colorful sprinkles for a festive look.',
      'Arrange on a pretty cake stand or tiered display for parties and celebrations.',
      'Pair with a glass of cold milk, hot coffee, or tea for a cozy treat.',
      'Great for birthdays, baby showers, or any special occasion.'
    ],
    variations: [
      'Chocolate chip: fold in mini chocolate chips before baking.',
      'Lemon: add lemon zest and lemon extract for a citrus twist.',
      'Strawberry: add diced fresh strawberries to the batter.',
      'Funfetti: mix in colorful sprinkles for a birthday cake vibe.',
      'Coconut: add shredded coconut and coconut extract for tropical flavor.'
    ],
    tips: [
      'Use room temperature ingredients for smooth, even mixing.',
      'Don\'t overmix the batter — it makes cupcakes tough and dense.',
      'Fill cupcake liners only 2/3 full to prevent overflow.',
      'Let cupcakes cool completely before frosting to avoid melting.',
      'Store in an airtight container at room temperature for best freshness.'
    ],
    faq: [
      {
        question: 'Why are my cupcakes dense or tough?',
        answer: 'Usually from overmixing the batter or using cold ingredients. Mix just until combined and use room temperature ingredients.'
      },
      {
        question: 'Can I make them ahead of time?',
        answer: 'Yes — bake cupcakes up to 2 days ahead and frost the day of serving for best results.'
      },
      {
        question: 'How do I get perfectly domed tops?',
        answer: 'Don\'t overfill liners, use fresh baking powder, and don\'t open the oven door too early.'
      },
      {
        question: 'Can I freeze unfrosted cupcakes?',
        answer: 'Yes — wrap individually in plastic wrap and freeze for up to 3 months. Thaw at room temperature before frosting.'
      },
      {
        question: 'What\'s the best way to pipe frosting?',
        answer: 'Use a piping bag with a large star tip, start from the center, and pipe in a circular motion outward.'
      }
    ],
    tags: ['desserts', 'cupcakes', 'vanilla', 'baking', 'celebration']
  },
  {
    id: '41',
    title: 'No-Bake Cheesecake',
    description: `Silky, smooth, and effortlessly delicious — this No-Bake Cheesecake is the perfect dessert when you want something rich and indulgent without turning on the oven. With a buttery graham cracker crust and a luscious cream cheese filling, it's chilled to perfection for a refreshing, crowd-pleasing treat.

Whether topped with fresh berries, chocolate drizzle, or left plain and elegant, every bite melts in your mouth.

Simple to make, impossible to resist — a cool slice of comfort, ready whenever you are.`,
    image: '/No-Bake-Cheesecake.jpg',
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
    servingSuggestions: [
      'Serve chilled for the best creamy texture.',
      'Garnish with fresh berries, fruit compote, or chocolate shavings.',
      'Drizzle with caramel, berry sauce, or lemon curd before serving.',
      'Works beautifully as a make-ahead dessert for parties or holidays.',
      'Serve in slices or as mini cheesecakes in jars for individual portions.'
    ],
    variations: [
      'Classic berry: top with strawberries, blueberries, or raspberries.',
      'Chocolate swirl: swirl in melted chocolate before chilling.',
      'Citrus twist: add lemon or lime zest to the filling.',
      'Nutty: add almond or peanut butter to the crust or filling.',
      'Mini jars: make individual cheesecakes in small glasses for parties.'
    ],
    tips: [
      'Use room-temperature cream cheese for a smooth filling.',
      'Whip cream until stiff peaks form to help cheesecake set.',
      'Press crust firmly into the pan so it holds together when sliced.',
      'Chill overnight if possible — it makes slicing easier.',
      'Add toppings just before serving to keep them fresh.'
    ],
    faq: [
      {
        question: 'Does no-bake cheesecake taste like baked cheesecake?',
        answer: 'It\'s lighter and creamier, while baked cheesecake is denser.'
      },
      {
        question: 'How long does it need to chill?',
        answer: 'At least 4–6 hours, preferably overnight for best texture.'
      },
      {
        question: 'Can I make it without gelatin?',
        answer: 'Yes — use whipped cream or cream cheese only, but it may be softer.'
      },
      {
        question: 'Can I freeze no-bake cheesecake?',
        answer: 'Yes — freeze without toppings for up to 2 months. Thaw in the fridge before serving.'
      },
      {
        question: 'Why is my cheesecake not firm?',
        answer: 'It may not have chilled long enough, or the cream wasn\'t whipped stiffly enough.'
      }
    ],
    tags: ['desserts', 'cheesecake', 'no-bake', 'creamy', 'summer']
  },
  {
    id: '42',
    title: 'Strawberry Shortcake',
    description: `Sweet, sun-kissed strawberries, fluffy whipped cream, and tender, buttery biscuits come together in this classic Strawberry Shortcake. It's the kind of dessert that feels like a warm summer afternoon, no matter the season.

With every bite, you get a balance of juicy fruit, airy cream, and just the right crumbly softness — simple ingredients layered into pure bliss.

A nostalgic favorite with a homemade touch — bright, beautiful, and made to share.`,
    image: '/Strawberry-Shortcake.jpg',
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
    servingSuggestions: [
      'Serve immediately after assembling so biscuits stay slightly crisp.',
      'Top with extra whipped cream and a drizzle of strawberry syrup.',
      'Pair with vanilla ice cream for a richer dessert.',
      'Works perfectly as a spring/summer treat or party dessert.',
      'Present on individual dessert plates or as a layered trifle in a glass bowl.'
    ],
    variations: [
      'Mixed berry: add blueberries, raspberries, or blackberries.',
      'Chocolate twist: drizzle with melted chocolate or add cocoa to biscuits.',
      'Citrus shortcake: add lemon or orange zest to the whipped cream.',
      'Nut lover\'s: sprinkle with toasted almonds or pistachios.',
      'Mini shortcakes: make smaller biscuits for party-style servings.'
    ],
    tips: [
      'Macerate strawberries with sugar for at least 20 minutes to bring out juices.',
      'Whip cream to soft peaks so it\'s fluffy, not stiff.',
      'Assemble right before serving to keep textures perfect.',
      'Split biscuits gently with a fork, not a knife, for a rustic look.',
      'Serve chilled whipped cream with slightly warm biscuits for the best contrast.'
    ],
    faq: [
      {
        question: 'What\'s the best base for strawberry shortcake?',
        answer: 'Traditional biscuits are classic, but sponge cake or pound cake also work.'
      },
      {
        question: 'Can I use frozen strawberries?',
        answer: 'Yes — thaw and macerate with sugar, but fresh strawberries give the best texture.'
      },
      {
        question: 'How far in advance can I make it?',
        answer: 'Prepare biscuits and strawberries ahead, but assemble just before serving to avoid sogginess.'
      },
      {
        question: 'Can I use whipped cream in a can?',
        answer: 'Freshly whipped cream holds better and tastes richer, but canned works in a pinch.'
      },
      {
        question: 'How do I keep biscuits fluffy?',
        answer: 'Don\'t overmix the dough — handle it gently.'
      }
    ],
    tags: ['desserts', 'strawberry', 'shortcake', 'summer', 'fresh fruit']
  },
  {
    id: '44',
    title: 'Chocolate Mug Cake',
    description: `Rich, gooey, and ready in minutes — this Chocolate Mug Cake is the ultimate single-serve dessert for those sudden chocolate cravings. Made with pantry staples and cooked right in the microwave, it's soft, fudgy, and deeply satisfying.

Perfect for late-night treats or when you just need something warm and sweet, fast — no oven, no mess, just pure chocolate comfort in a mug.

One spoonful and you'll be hooked — a little magic, one mug at a time.`,
    image: '/Chocolate-Mug-Cake.jpg',
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
    servingSuggestions: [
      'Serve warm, straight from the mug, for the best gooey texture.',
      'Top with whipped cream, ice cream, or a drizzle of chocolate or caramel sauce.',
      'Sprinkle with powdered sugar, cocoa powder, or fresh berries for garnish.',
      'Pair with coffee, hot cocoa, or a glass of milk.',
      'Works great as a single-serve dessert or late-night treat.'
    ],
    variations: [
      'Double chocolate: add extra chocolate chips inside.',
      'Nut butter swirl: swirl in peanut butter or almond butter.',
      'Mint chocolate: add a drop of peppermint extract.',
      'Cookies & cream: stir in crushed Oreos.',
      'Spicy twist: add cinnamon or a pinch of chili powder.'
    ],
    tips: [
      'Use a large microwave-safe mug to prevent overflow.',
      'Mix batter well, especially at the bottom of the mug, for even cooking.',
      'Don\'t overfill — mug should be no more than half full before cooking.',
      'Start with 1 minute, then check and cook in 10–15 second bursts if needed.',
      'Let cool for 1–2 minutes before eating (it\'s hot straight from the microwave!).'
    ],
    faq: [
      {
        question: 'Can I make a mug cake without eggs?',
        answer: 'Yes — substitute with applesauce, mashed banana, or yogurt.'
      },
      {
        question: 'Can I make it vegan?',
        answer: 'Yes — use plant-based milk and oil, and skip eggs or replace with flaxseed "egg."'
      },
      {
        question: 'Why is my mug cake rubbery?',
        answer: 'Overcooking — microwave times vary, so cook in short intervals and stop when set.'
      },
      {
        question: 'Can I bake it instead of microwaving?',
        answer: 'Yes — bake in an oven-safe ramekin at 175°C (350°F) for about 12–15 minutes.'
      },
      {
        question: 'Can I add mix-ins?',
        answer: 'Absolutely — chocolate chips, Nutella, peanut butter, or crushed cookies work great.'
      }
    ],
    tags: ['desserts', 'mug cake', 'chocolate', 'quick', 'microwave']
  },
  {
    id: '45',
    title: 'Apple Crisp',
    description: `Golden, buttery oat topping over tender, cinnamon-spiced apples — this Apple Crisp is the kind of dessert that fills the kitchen with the scent of comfort.

It's simple, rustic, and endlessly cozy — like a warm hug in dessert form. Whether served alone or with a scoop of vanilla ice cream melting on top, it's the perfect treat for crisp autumn days or any time you're craving something sweet and nostalgic.

Easy to make, impossible to resist.`,
    image: '/Apple-Crisp.jpg',
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
    servingSuggestions: [
      'Serve warm with a scoop of vanilla ice cream or whipped cream.',
      'Drizzle with caramel sauce for extra indulgence.',
      'Pair with coffee, chai tea, or hot apple cider.',
      'Works beautifully for fall gatherings, Thanksgiving, or cozy weeknights.',
      'Present in individual ramekins or family-style in a baking dish.'
    ],
    variations: [
      'Berry crisp: add blueberries, raspberries, or cranberries.',
      'Nutty topping: mix in walnuts, pecans, or almonds.',
      'Spiced: add nutmeg, ginger, or cardamom with cinnamon.',
      'Caramel apple: drizzle caramel into the filling before baking.',
      'Oat-free: use flour, sugar, and nuts only for the crumble.'
    ],
    tips: [
      'Cut apples evenly for consistent baking.',
      'Toss apples with lemon juice to prevent browning and enhance flavor.',
      'Use cold butter for a crumbly, crisp topping.',
      'Bake uncovered for maximum crispiness.',
      'Let rest 10 minutes before serving so juices set.'
    ],
    faq: [
      {
        question: 'What apples are best for apple crisp?',
        answer: 'Granny Smith, Honeycrisp, or Braeburn — firm apples hold shape and balance sweetness.'
      },
      {
        question: 'Do I need to peel the apples?',
        answer: 'Peeling is classic, but leaving skins on gives a rustic look and adds fiber.'
      },
      {
        question: 'Can I make apple crisp ahead of time?',
        answer: 'Yes — assemble and refrigerate before baking, or bake and reheat before serving.'
      },
      {
        question: 'Can I freeze apple crisp?',
        answer: 'Yes — freeze before baking, then bake from frozen, adding extra time.'
      },
      {
        question: 'Why is my topping not crispy?',
        answer: 'Too much butter or underbaking. Bake uncovered until golden brown and crunchy.'
      }
    ],
    tags: ['desserts', 'apple crisp', 'fall', 'warm', 'comfort food']
  },
  {
    id: '46',
    title: 'Peanut Butter Cookies',
    description: `Soft, chewy, and packed with rich peanut flavor — these Peanut Butter Cookies are a timeless classic for good reason. With their signature crisscross tops and melt-in-your-mouth texture, they strike the perfect balance between sweet and salty.

Made with just a few simple ingredients, they come together quickly and always disappear fast. Whether enjoyed with a cold glass of milk or tucked into a lunchbox, these cookies bring cozy, homemade joy in every bite.

A childhood favorite that never goes out of style.`,
    image: '/Peanut-Butter-Cookies.jpg',
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
    servingSuggestions: [
      'Serve warm or at room temperature with a glass of milk.',
      'Dip halfway in melted chocolate for an indulgent twist.',
      'Pair with coffee or hot cocoa for a cozy snack.',
      'Great for cookie platters, holiday trays, or gifting in jars/tins.',
      'Sandwich two cookies with Nutella, jam, or extra peanut butter for a fun treat.'
    ],
    variations: [
      'Classic criss-cross: press with a fork before baking.',
      'Chocolate chip PB cookies: stir in chocolate chips.',
      'Double peanut: add peanut butter chips.',
      'Swirl: drizzle or marble with Nutella.',
      'Festive: roll dough balls in sugar or sprinkles before baking.'
    ],
    tips: [
      'Use room-temperature peanut butter for easy mixing.',
      'Don\'t overbake — cookies firm up as they cool.',
      'Line baking sheets with parchment for even cooking.',
      'Keep cookies uniform in size for consistent baking.',
      'Store in an airtight container for up to a week.'
    ],
    faq: [
      {
        question: 'Can I use natural peanut butter?',
        answer: 'Yes, but the texture may be softer — add a little extra flour if needed.'
      },
      {
        question: 'Can I make them gluten-free?',
        answer: 'Yes — use a 1:1 gluten-free flour blend.'
      },
      {
        question: 'Why are my cookies crumbly?',
        answer: 'Too much flour or overbaking. Chill dough and measure flour properly.'
      },
      {
        question: 'Can I freeze peanut butter cookies?',
        answer: 'Absolutely — freeze baked cookies or unbaked dough balls for up to 3 months.'
      },
      {
        question: 'Do I need to chill the dough?',
        answer: 'It\'s optional but helps cookies hold shape and prevents spreading.'
      }
    ],
    tags: ['desserts', 'peanut butter', 'cookies', 'simple', 'classic']
  },
  {
    id: '47',
    title: 'Lemon Bars',
    description: `These Lemon Bars are sunshine in dessert form — bright, tangy, and irresistibly sweet. With a buttery shortbread crust and a silky lemon curd topping, each bite delivers the perfect balance of tart and sweet.

They're simple to make yet feel like a special treat, ideal for spring gatherings, afternoon tea, or whenever you need a burst of citrusy joy. Dust them with powdered sugar for a touch of elegance, and watch them disappear fast.

Fresh, vibrant, and utterly refreshing — these bars are a slice of happiness.`,
    image: '/Lemon-Bars.jpg',
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
    servingSuggestions: [
      'Serve chilled or at room temperature, dusted with powdered sugar.',
      'Pair with tea, coffee, or a light sparkling drink.',
      'Cut into small squares or triangles for party platters.',
      'Works perfectly as a spring/summer dessert or afternoon snack.',
      'Serve on a white plate or tray to make the golden color pop.'
    ],
    variations: [
      'Classic lemon: simple and tart.',
      'Berry swirl: add raspberry or blueberry puree to the filling.',
      'Nutty crust: mix almonds, pecans, or coconut into the base.',
      'Citrus twist: add orange or lime juice/zest.',
      'Glazed: drizzle with lemon icing for extra sweetness.'
    ],
    tips: [
      'Line the baking pan with parchment for easy removal.',
      'Chill before cutting for neat, clean squares.',
      'Dust with powdered sugar just before serving (it absorbs quickly).',
      'Don\'t overmix filling — air bubbles can cause cracks.',
      'Store in fridge for best freshness.'
    ],
    faq: [
      {
        question: 'How do I keep lemon bars from being runny?',
        answer: 'Bake until the center is just set — it will firm as it cools.'
      },
      {
        question: 'Can I make lemon bars ahead of time?',
        answer: 'Yes — they keep in the fridge for up to 4 days.'
      },
      {
        question: 'Can I freeze lemon bars?',
        answer: 'Yes — freeze un-dusted, then thaw and dust with sugar before serving.'
      },
      {
        question: 'Why did my crust separate from the filling?',
        answer: 'The filling was poured onto a hot crust — let crust cool slightly before adding.'
      },
      {
        question: 'Can I use bottled lemon juice?',
        answer: 'Fresh lemon juice is best for bright flavor, but bottled works if necessary.'
      }
    ],
    tags: ['desserts', 'lemon bars', 'tangy', 'citrus', 'shortbread']
  },
  {
    id: '52',
    title: 'Marry Me Dip',
    description: `Creamy, cheesy, and utterly irresistible — Marry Me Dip earns its name with every bite. This warm appetizer blends sun-dried tomatoes, cream cheese, garlic, and herbs into a rich, savory dip that's perfect for sharing (or not!).

Whether you're hosting friends, setting up a cozy movie night, or just craving something indulgent, this dip delivers bold flavor and melty goodness that keeps everyone coming back for more.

Serve it with warm bread, crackers, or fresh veggies — and get ready for compliments (and maybe a proposal).`,
    image: '/Marry-Me-Dip.jpg',
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
    servingSuggestions: [
      'Serve hot and bubbly straight from the oven in a skillet or baking dish.',
      'Pair with toasted baguette slices, pita chips, tortilla chips, or crackers.',
      'Add fresh parsley or basil as garnish for color and freshness.',
      'Perfect for parties, game day, or holiday gatherings.',
      'Serve alongside a veggie platter (carrots, celery, cucumber) for dipping variety.'
    ],
    variations: [
      'Bacon lovers: stir in crispy bacon bits.',
      'Extra cheesy: add cheddar or gouda to the mix.',
      'Mediterranean style: add olives, artichokes, or roasted peppers.',
      'Herb twist: add thyme, oregano, or rosemary.',
      'Protein boost: stir in shredded chicken or Italian sausage.'
    ],
    tips: [
      'Use room-temperature cream cheese for smooth mixing.',
      'Bake until golden and bubbly on top for best flavor.',
      'Serve in the same dish it bakes in for rustic presentation.',
      'Stir halfway through baking for extra melty consistency.',
      'Always serve warm — keep in a warming dish if serving at parties.'
    ],
    faq: [
      {
        question: 'What is Marry Me Dip made of?',
        answer: 'It usually combines cream cheese, mayo, sun-dried tomatoes, garlic, Parmesan, and mozzarella for a creamy, savory flavor.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — assemble the dip, refrigerate, then bake just before serving.'
      },
      {
        question: 'Can I make it spicy?',
        answer: 'Yes — add chili flakes, jalapeños, or hot sauce.'
      },
      {
        question: 'Can I serve it cold?',
        answer: 'It\'s best hot and melty, but it can also be served at room temperature.'
      },
      {
        question: 'Can I freeze Marry Me Dip?',
        answer: 'Not recommended — dairy-based dips can separate when thawed.'
      }
    ],
    tags: ['dinner', 'appetizer', 'cheesy dip', 'baked', 'party food']
  },
  {
    id: '53',
    title: 'Baked Feta Chickpeas',
    description: `Simple, hearty, and bursting with Mediterranean flavor — Baked Feta Chickpeas is a dish that transforms humble ingredients into something truly special. Creamy feta melts into a garlicky tomato base, while tender chickpeas soak up every bit of that savory, herby goodness.

It's perfect for a cozy dinner, quick lunch, or meal prep for the week. Serve it with warm pita, over rice, or enjoy as-is for a satisfying, protein-packed vegetarian meal.

Comforting and effortlessly delicious — this one's a keeper.`,
    image: '/Baked-Feta-Chickpeas.jpg',
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
    servingSuggestions: [
      'Serve warm with crusty bread or pita for dipping into the sauce.',
      'Pair with rice, quinoa, or couscous for a full meal.',
      'Garnish with fresh basil, parsley, or dill for brightness.',
      'Drizzle with extra olive oil and a squeeze of lemon before serving.',
      'Works as a main vegetarian dish, appetizer, or side for grilled meats.'
    ],
    variations: [
      'Mediterranean style: add olives, sun-dried tomatoes, or roasted red peppers.',
      'Spicy: add chili flakes or harissa paste.',
      'Creamier: stir in Greek yogurt after baking.',
      'Herb boost: add oregano or thyme.',
      'Green touch: mix in spinach or kale before baking.'
    ],
    tips: [
      'Use a baking dish that keeps ingredients snug for better melding of flavors.',
      'Toss chickpeas in olive oil and seasoning before adding feta for more depth.',
      'Bake until feta is golden and edges are caramelized.',
      'Stir everything gently after baking for a creamy, saucy texture.',
      'Serve with warm bread to scoop up all the cheesy chickpea goodness.'
    ],
    faq: [
      {
        question: 'Can I use canned chickpeas?',
        answer: 'Yes — rinse and drain well before baking.'
      },
      {
        question: 'Does the feta melt completely?',
        answer: 'No — feta becomes soft and creamy but holds some texture. Stir into the chickpeas after baking for a creamy sauce.'
      },
      {
        question: 'Can I use another cheese?',
        answer: 'Yes — goat cheese, ricotta, or halloumi work, but feta gives the strongest flavor.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — bake, cool, and store in the fridge for up to 3 days. Reheat before serving.'
      },
      {
        question: 'Is it good cold?',
        answer: 'Absolutely — it works well as a room-temperature salad or mezze dish.'
      }
    ],
    tags: ['dinner', 'Mediterranean', 'feta', 'chickpeas', 'healthy']
  },
  {
    id: '54',
    title: 'Mediterranean White Beans & Greens',
    description: `Fresh, nourishing, and full of rustic charm — Mediterranean White Beans & Greens is the kind of dish that feels both comforting and vibrant. Creamy cannellini beans simmer gently with garlic, olive oil, lemon, and leafy greens, soaking up all those bright, herbaceous flavors.

It's a one-pan wonder you can enjoy on its own, pile onto toasted bread, or pair with grilled fish or chicken for a heartier meal.

Simple ingredients, bold flavors — the Mediterranean way.`,
    image: '/Mediterranean-White-Beans-&-Greens.jpg',
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
    servingSuggestions: [
      'Serve warm with crusty bread or pita to soak up the juices.',
      'Pair with rice, couscous, or quinoa for a heartier meal.',
      'Garnish with fresh parsley, dill, or a drizzle of olive oil.',
      'Add a squeeze of lemon before serving for brightness.',
      'Works as a vegetarian main, side dish, or part of a mezze platter.'
    ],
    variations: [
      'Tomato base: add crushed tomatoes for a saucier version.',
      'Spicy: add red pepper flakes or harissa paste.',
      'Herb boost: mix in oregano, thyme, or rosemary.',
      'Mediterranean mix: add olives, sun-dried tomatoes, or roasted peppers.',
      'Creamy twist: stir in a little Greek yogurt or cream.'
    ],
    tips: [
      'Sauté garlic and onion first to build a flavorful base.',
      'Don\'t overcook greens — add at the end so they stay vibrant.',
      'Use good olive oil — it\'s a key flavor here.',
      'Season generously with salt, pepper, and lemon juice for balance.',
      'Serve with bread or grains to make it a complete meal.'
    ],
    faq: [
      {
        question: 'What beans work best?',
        answer: 'Cannellini or Great Northern beans — they\'re creamy and hold shape well.'
      },
      {
        question: 'Can I use canned beans?',
        answer: 'Yes — just rinse and drain before using.'
      },
      {
        question: 'What greens are best?',
        answer: 'Spinach, kale, Swiss chard, or even arugula for a peppery twist.'
      },
      {
        question: 'Can I make it ahead of time?',
        answer: 'Yes — it keeps in the fridge for up to 4 days and reheats well.'
      },
      {
        question: 'Can I add protein?',
        answer: 'Absolutely — grilled chicken, shrimp, or feta cheese pair perfectly.'
      }
    ],
    tags: ['dinner', 'Mediterranean', 'white beans', 'healthy', 'vegetarian']
  },
  {
    id: '55',
    title: 'Shakshuka (Middle Eastern Poached Eggs in Tomato Sauce)',
    description: `Shakshuka is a vibrant Middle Eastern and North African dish where eggs are gently poached in a spiced tomato and pepper sauce. It's bold, comforting, and full of flavor, often enjoyed for breakfast or brunch with warm bread for dipping.

This dish is loved worldwide because it's easy, healthy, and endlessly customizable. With just a few pantry ingredients, you can create a skillet meal that feels hearty yet fresh. The saucy base makes the perfect bed for creamy yolks, and every bite is balanced with spices, vegetables, and herbs.

Perfect for weekend brunches, family gatherings, or when you want something that feels special but requires minimal effort.`,
    image: '/Shakshuka-Eggs.jpg',
    category: 'Breakfast',
    cookTime: '25 mins',
    prepTime: '10 mins',
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '2 tbsp olive oil',
      '1 medium onion, finely chopped',
      '1 red bell pepper, diced',
      '2–3 garlic cloves, minced',
      '1 can (400 g / 14 oz) crushed tomatoes (or 4–5 fresh tomatoes, chopped)',
      '1 tsp ground cumin',
      '1 tsp paprika (smoked or sweet)',
      '½ tsp chili flakes (optional, for heat)',
      'Salt & black pepper, to taste',
      '4–5 large eggs',
      'Fresh parsley or cilantro, chopped (for garnish)',
      'Optional: crumbled feta cheese, avocado slices, or warm crusty bread for serving'
    ],
    instructions: [
      'Cook vegetables: Heat olive oil in a skillet over medium heat. Add onion and bell pepper. Cook 5–7 minutes until softened and lightly caramelized.',
      'Add spices: Stir in garlic, cumin, paprika, and chili flakes. Cook 1 minute, stirring constantly, until fragrant.',
      'Simmer sauce: Pour in crushed tomatoes, season with salt and pepper, stir well. Reduce heat and simmer 10–15 minutes until thickened. Stir occasionally.',
      'Add eggs: Make small wells in the sauce with a spoon. Crack eggs into a small cup first, then pour gently into each well.',
      'Cook eggs: Cover skillet and cook 5–8 minutes until whites are set and yolks are still runny (or longer for firmer yolks).',
      'Serve: Remove from heat. Garnish with parsley or cilantro and optional feta. Serve immediately with bread for dipping.'
    ],
    servingSuggestions: [
      'Best enjoyed family-style — place the skillet in the middle of the table with bread on the side.',
      'Pair with a light cucumber salad or fresh fruit for balance.',
      'Add avocado slices on top for creaminess.'
    ],
    variations: [
      'Cheesy Shakshuka: Add crumbled feta, goat cheese, or mozzarella on top before serving.',
      'Green Shakshuka: Swap tomato base for spinach, kale, zucchini, and fresh herbs.',
      'Spicy Shakshuka: Add harissa paste or extra chili peppers for heat.',
      'Protein Boost: Stir in chickpeas, white beans, or cooked lentils to the sauce.',
      'Meat Lover\'s: Add ground lamb, beef, or chorizo while cooking the onions and peppers.',
      'Tomato Options: Use fresh, ripe tomatoes instead of canned for a lighter, fresher flavor.'
    ],
    tips: [
      'Make the tomato sauce ahead, store in the fridge, and reheat. Add eggs only when you\'re ready to serve.',
      'Keep the skillet covered and check every couple of minutes. Remove from heat while yolks are still jiggly.',
      'Crusty bread, pita, or naan are perfect accompaniments.',
      'Control the spice by adjusting chili flakes or adding fresh chilies.'
    ],
    faq: [
      {
        question: 'Can I make shakshuka ahead of time?',
        answer: 'Yes. Make the tomato sauce ahead, store in the fridge, and reheat. Add eggs only when you\'re ready to serve.'
      },
      {
        question: 'How do I keep the eggs from overcooking?',
        answer: 'Keep the skillet covered and check every couple of minutes. Remove from heat while yolks are still jiggly.'
      },
      {
        question: 'What do I serve shakshuka with?',
        answer: 'Crusty bread, pita, or naan are perfect. You can also pair it with couscous, rice, or a fresh side salad.'
      },
      {
        question: 'Can I make it vegan?',
        answer: 'Yes — simply skip the eggs and add chickpeas or tofu for protein.'
      },
      {
        question: 'Is shakshuka spicy?',
        answer: 'Traditionally it has a mild kick, but you can control the spice by adjusting chili flakes or adding fresh chilies.'
      }
    ],
    tags: ['breakfast', 'brunch', 'shakshuka', 'eggs', 'Middle Eastern', 'healthy', 'one-pan', 'vegetarian']
  }
];