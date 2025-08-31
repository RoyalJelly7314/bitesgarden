import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Printables } from './pages/Printables';
import { About } from './pages/About';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Recipes');

  return (
    <div className="min-h-screen cozy-gradient">
      {/* Header - shown on all pages */}
      <Header
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

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
          path="/about" 
          element={<About />} 
        />
      </Routes>
    </div>
  );
}

export default App;