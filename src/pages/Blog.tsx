import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AdSpace } from '@/components/AdSpace';

// Sample blog posts data
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

When cooking with fresh garden ingredients, remember that less is often more. Let the natural flavors shine through with simple preparations and minimal seasoning.`,
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

**Mint** - Perfect for teas, desserts, and Middle Eastern dishes. Plant in containers as it spreads rapidly.`,
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

**Hearty Grains** - Incorporate quinoa, farro, and barley into warm salads and grain bowls for satisfying winter meals.`,
    author: 'Marcus Winter',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=500&q=80',
    tags: ['winter cooking', 'seasonal', 'comfort food']
  }
];

export const Blog: React.FC = () => {
  const navigate = useNavigate();

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
          onClick={() => navigate('/')} 
          className="mb-6 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Recipes
        </Button>

        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 mb-4 header-title">
            Garden Stories & Tips
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-natural leading-relaxed">
            Discover gardening wisdom, cooking tips, and seasonal inspiration to help you create 
            beautiful, delicious meals that bloom with flavor.
          </p>
        </div>

        {/* Blog Posts Grid with Sidebar */}
        <div className="flex gap-8">
          {/* Main Blog Posts */}
          <div className="flex-1">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="recipe-card transform transition-transform duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col">
              <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${getCategoryColor(post.category)}`}>
                  {post.category}
                </Badge>
              </div>
              
              {/* Card content that grows to fill available space */}
              <div className="flex flex-col flex-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-sage-800 line-clamp-2 blog-title">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground font-natural line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-2 flex flex-col flex-1">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 font-natural">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-natural bg-sage-50 text-sage-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Spacer to push button to bottom */}
                  <div className="flex-1"></div>

                  {/* Read More Button - always at bottom */}
                  <Button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="w-full mt-auto"
                    variant="default"
                  >
                    Read More
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
            </div>
          </div>

          {/* Sidebar Ads - Desktop Only */}
          <aside className="hidden xl:block w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <AdSpace 
                size="sidebar" 
                placement="Blog Sidebar Top"
              />
              <AdSpace 
                size="sidebar" 
                placement="Blog Sidebar Middle"
              />
              <AdSpace 
                size="square" 
                placement="Blog Sidebar Bottom"
              />
            </div>
          </aside>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <div className="recipe-card p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-sage-800 mb-4 section-heading">
              More Stories Coming Soon
            </h3>
            <p className="text-muted-foreground font-natural leading-relaxed">
              We're constantly growing our collection of gardening tips, seasonal recipes, 
              and cooking wisdom. Check back regularly for new posts that will help you 
              cultivate both your garden and your culinary skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};