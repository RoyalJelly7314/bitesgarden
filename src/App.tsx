import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Printables } from './pages/Printables';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { AdSpace } from './components/AdSpace';
import { MobileStickyAd } from './components/MobileStickyAd';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Recipes');

  return (
    <div className="min-h-screen cozy-gradient">
      {/* Header - shown on all pages */}
      <Header
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      {/* Header Banner Ad */}
      <div className="w-full bg-white border-b border-sage-100">
        <div className="container mx-auto px-4 py-3 flex justify-center">
          <AdSpace 
            size="leaderboard" 
            placement="Header Banner"
            className="hidden sm:block"
          />
          <AdSpace 
            size="native" 
            placement="Header Banner Mobile"
            className="block sm:hidden"
          />
        </div>
      </div>

      {/* Routes */}
      <Routes>
        <Route 
          path="/" 
          element={<Home selectedCategory={selectedCategory} />} 
        />
        <Route 
          path="/recipe/:id" 
          element={<RecipeDetail />} 
        />
        <Route 
          path="/recipe/:id/:slug" 
          element={<RecipeDetail />} 
        />
        <Route 
          path="/blog" 
          element={<Blog />} 
        />
        <Route 
          path="/blog/:id" 
          element={<BlogPost />} 
        />
        <Route 
          path="/printables" 
          element={<Printables />} 
        />
        <Route 
          path="/privacy" 
          element={<PrivacyPolicy />} 
        />
      </Routes>

      {/* Mobile Sticky Ad */}
      <MobileStickyAd />
    </div>
  );
}

export default App;