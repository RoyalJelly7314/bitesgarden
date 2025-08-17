import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AdSpace } from '@/components/AdSpace';

// Sample blog posts data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: '4',
    title: 'How I Plan My Weekly Meals with Just 10 Ingredients',
    excerpt: 'Life is busy, and cooking doesn\'t need to be complicated. Discover how to build a week of cozy, homemade meals using only 10 simple ingredients.',
    content: `Life is busy, and cooking doesn't need to be complicated. Some of the best meals I've ever made came from limiting myself to just a handful of core ingredients — not dozens of pantry items.

In this post, I'll walk you through how I build a week of cozy, homemade meals using only 10 simple ingredients. It's affordable, flexible, and surprisingly satisfying.

**🧺 My 10 Must-Have Ingredients**

**Eggs 🥚** – Breakfasts, quick lunches, or to bind recipes

**Pasta 🍝** – Versatile, filling, and kid-friendly

**Canned Chickpeas 🧆** – Protein-packed for curries, salads, or baking

**Rice 🍚** – The ultimate base for bowls or stir-fries

**Cheese 🧀** – For flavor, comfort, and melty magic

**Tomatoes (canned or fresh) 🍅** – Sauces, soups, or roasted

**Onions 🧅** – The base of almost every savory dish

**Garlic 🧄** – Because flavor matters

**Spinach (or another leafy green) 🥬** – To sneak in nutrients

**Milk (or plant-based alt) 🥛** – For sauces, scrambles, or baking

**📅 What the Week Looks Like**

**Monday - Chickpea Curry over Rice**
Cook onion, garlic, tomatoes, and chickpeas with spices. Simmer and serve over rice.

**Tuesday - One-Pot Pasta with Spinach and Cheese**
Cook pasta with garlic, tomato, and spinach. Stir in cheese at the end.

**Wednesday - Spinach & Cheese Omelette + Toast**
Quick, protein-rich, and perfect for midweek.

**Thursday - Chickpea Patties with Garlic Rice**
Mash chickpeas with garlic and onion, form patties, and pan-fry. Serve with rice.

**Friday - Tomato Garlic Pasta Bake**
Mix cooked pasta, tomatoes, cheese, and garlic. Bake until bubbly.

**Saturday - Breakfast Rice Bowl with Eggs and Spinach**
Fried egg over warm rice, sautéed garlic spinach, and cheese.

**Sunday - Simple Tomato Soup + Cheesy Toasts**
Simmer tomatoes with onion and garlic. Blend smooth, serve with cheesy bread.

**💡 Why This Works**

**Budget-friendly:** 10 ingredients = lower cost

**Flexible:** Mix and match depending on what's in season

**Less waste:** Use everything up, nothing rots in the back of the fridge

**Cozy and comforting:** You never feel deprived

**🌿 Final Thoughts**

You don't need to be a chef or have a full pantry to eat well. With just 10 thoughtful ingredients, you can make meals that feel nourishing, intentional, and — most of all — cozy.

Try it for a week and let me know how it goes!`,
    author: 'Emma Kitchen',
    date: '2024-01-20',
    readTime: '8 min read',
    category: 'Meal Planning',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80',
    tags: ['meal planning', '10 ingredients', 'budget cooking', 'weekly meals']
  },
  {
    id: '1',
    title: 'The Art of Garden-to-Table Cooking',
    excerpt: 'Discover how to transform fresh garden herbs and vegetables into delicious, wholesome meals that celebrate the flavors of each season.',
    content: `There's something magical about stepping into your garden and picking fresh ingredients for dinner. Garden-to-table cooking isn't just about fresh flavors—it's about connecting with your food and understanding where it comes from.

Starting your own herb garden is easier than you might think. Begin with hardy herbs like basil, rosemary, and thyme. These not only add incredible flavor to your dishes but also fill your garden with wonderful aromas.

When cooking with fresh garden ingredients, remember that less is often more. Let the natural flavors shine through with simple preparations and minimal seasoning.

**Getting Started with Your Garden**

Choose a sunny spot in your yard or even a windowsill that gets good light. Start small with just a few herbs and expand as you gain confidence.

**Essential Tools**

- Good quality soil
- Watering can or gentle hose attachment
- Small hand trowel
- Pruning shears for harvesting

**Best Herbs for Beginners**

Basil, mint, parsley, and chives are virtually foolproof and provide maximum impact in the kitchen.

Remember, the journey from garden to table is one of the most rewarding aspects of cooking. Every meal becomes a celebration of your hard work and nature's bounty.`,
    author: 'Sarah Garden',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Gardening',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80',
    tags: ['gardening', 'fresh herbs', 'seasonal cooking']
  },
  {
    id: '2',
    title: 'Essential Herbs Every Home Cook Should Grow',
    excerpt: 'Learn about the must-have herbs that will elevate your cooking and how to care for them in your garden or windowsill.',
    content: `Fresh herbs can transform any dish from ordinary to extraordinary. Here are the essential herbs every home cook should consider growing:

**Basil** - Perfect for Italian dishes, caprese salads, and homemade pesto. Pinch flowers to keep leaves tender.

**Rosemary** - Excellent with roasted meats and potatoes. This hardy perennial thrives in well-drained soil.

**Thyme** - A versatile herb that pairs well with almost everything. Great for soups, stews, and marinades.

**Parsley** - Both flat-leaf and curly varieties are useful. Flat-leaf has more flavor for cooking.

**Mint** - Perfect for teas, desserts, and Middle Eastern dishes. Plant in containers as it spreads rapidly.

**Growing Tips**

Most herbs prefer well-drained soil and plenty of sunlight. Water regularly but don't overwater—herbs generally prefer to dry out slightly between waterings.

**Harvesting**

Harvest herbs in the morning after the dew has dried but before the heat of the day. This is when their essential oils are most concentrated.

**Preserving Your Harvest**

Dry herbs by hanging them in bunches, freeze them in ice cubes with olive oil, or make herb butters that can be frozen for later use.`,
    author: 'Emily Bloom',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Herbs',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&q=80',
    tags: ['herbs', 'growing tips', 'cooking basics']
  },
  {
    id: '3',
    title: 'Seasonal Cooking: Winter Comfort Foods',
    excerpt: 'Embrace the colder months with hearty, warming recipes that use winter vegetables and preserved summer flavors.',
    content: `Winter cooking is all about comfort and warmth. While fresh summer vegetables may be scarce, winter offers its own bounty of hearty vegetables and preserved flavors.

**Root Vegetables** - Carrots, parsnips, turnips, and potatoes become sweet and tender when roasted. Try them with rosemary and olive oil.

**Winter Squash** - Butternut, acorn, and delicata squashes are perfect for soups, roasted dishes, and even desserts.

**Preserved Summer** - Use frozen herbs, canned tomatoes, and dried vegetables to bring summer flavors to winter dishes.

**Hearty Grains** - Incorporate quinoa, farro, and barley into warm salads and grain bowls for satisfying winter meals.

**Winter Cooking Techniques**

Braising, roasting, and slow cooking are perfect for winter ingredients. These methods concentrate flavors and create the warming, comforting meals we crave in cold weather.

**Meal Planning for Winter**

Plan meals around what's in season and available. Root vegetables, winter squashes, and hearty greens like kale and collards are at their peak in winter months.

**Storage Tips**

Many winter vegetables store well in cool, dark places. A properly stored butternut squash can last for months, providing fresh ingredients throughout the winter season.`,
    author: 'Marcus Winter',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500&q=80',
    tags: ['winter cooking', 'seasonal', 'comfort food']
  }
];

export const BlogPost: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen cozy-gradient">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')} 
            className="mb-6 gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-sage-800 mb-4 header-title">
              Post Not Found
            </h1>
            <p className="text-muted-foreground font-natural">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Gardening':
        return 'bg-sage-100 text-sage-800';
      case 'Herbs':
        return 'bg-earth-100 text-earth-800';
      case 'Seasonal':
        return 'bg-warm-100 text-warm-800';
      case 'Meal Planning':
        return 'bg-muted-100 text-sage-700';
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
          onClick={() => navigate('/blog')} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Button>

        {/* Blog Post with Sidebar */}
        <div className="flex gap-8">
          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            {/* Hero Image */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <Badge className={`absolute top-4 right-4 text-sm px-3 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                {post.category}
              </Badge>
            </div>

            {/* Post Header */}
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4 blog-title">
                {post.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4 font-natural">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-natural bg-sage-50 text-sage-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Post Content with Ads */}
            <div className="recipe-card p-8 rounded-lg">
              <div className="prose prose-lg max-w-none font-natural leading-relaxed">
                {post.content.split('\n\n').map((paragraph, index) => {
                  const isHeader = paragraph.startsWith('**') && paragraph.endsWith('**');
                  
                  return (
                    <div key={index}>
                      {/* Native In-Content Ad after first paragraph */}
                      {index === 1 && (
                        <div className="my-8 flex justify-center">
                          <AdSpace 
                            size="native" 
                            placement="Blog In-Content"
                            className="w-full max-w-2xl"
                          />
                        </div>
                      )}
                      
                      {isHeader ? (
                        <h3 className="text-xl font-semibold text-sage-800 mt-6 mb-3 section-heading">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      ) : (
                        <p className="mb-4 text-base leading-relaxed">
                          {paragraph.split('**').map((part, partIndex) => {
                            if (partIndex % 2 === 1) {
                              return <strong key={partIndex} className="font-semibold text-sage-800">{part}</strong>;
                            }
                            return part;
                          })}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom of Post Ad */}
            <div className="mt-8 mb-8 flex justify-center">
              <AdSpace 
                size="banner" 
                placement="Bottom of Blog Post"
                className="w-full max-w-4xl"
              />
            </div>

            {/* Related Posts Navigation */}
            <div className="mt-12 pt-8 border-t border-sage-200">
              <h3 className="text-xl font-semibold text-sage-800 mb-4 section-heading">
                More Garden Stories
              </h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/blog')}
                  className="flex-1"
                >
                  View All Posts
                </Button>
                <Button 
                  onClick={() => navigate('/')}
                  className="flex-1"
                >
                  Browse Recipes
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar Ads - Desktop Only */}
          <aside className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <AdSpace 
                size="sidebar" 
                placement="Blog Post Sidebar Top"
              />
              <AdSpace 
                size="sidebar" 
                placement="Blog Post Sidebar Middle"
              />
              <AdSpace 
                size="square" 
                placement="Blog Post Sidebar Bottom"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};