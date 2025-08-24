import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '@/data/recipes';
import { saveCurrentScrollPosition } from '@/lib/scroll-utils';

interface HeaderProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedCategory, onCategorySelect }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur" style={{ backgroundColor: '#f5ebd7' }}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div 
          className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => {
            onCategorySelect('All Recipes');
            navigate('/');
          }}
        >
          <img 
            src="/logofork.jpg" 
            alt="Bites Garden Logo" 
            className="h-12 w-auto object-contain"
          />
          {/* Desktop: Logo + Text */}
          <div className="hidden sm:block">
            <h1 className="text-3xl font-bold text-sage-800 header-title">
              Bites Garden
            </h1>
            <p className="text-sm text-muted-foreground tagline">
              where every bite blooms
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block relative" ref={dropdownRef}>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-natural h-10 px-4 py-2"
              style={{ backgroundColor: '#976139', color: 'white' }}
            >
              About
            </button>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-natural h-10 px-4 py-2"
              style={{ backgroundColor: '#976139', color: 'white' }}
            >
              Blog
            </button>
            <button
              onClick={() => navigate('/printables')}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-natural h-10 px-4 py-2"
              style={{ backgroundColor: '#976139', color: 'white' }}
            >
              Printables
            </button>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-natural h-10 px-4 py-2 gap-1"
              style={{ backgroundColor: '#976139', color: 'white' }}
            >
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 rounded-md border bg-popover shadow-lg z-50">
              <div className="grid gap-1 p-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sage-100 hover:text-sage-800 focus:bg-sage-100 focus:text-sage-800 cursor-pointer font-natural ${
                      selectedCategory === category ? 'bg-sage-100 text-sage-800' : ''
                    }`}
                    onClick={() => {
                      // Save scroll position before changing category (if we're on the home page)
                      if (window.location.pathname === '/') {
                        const scrollKey = `home-${selectedCategory}`;
                        saveCurrentScrollPosition(scrollKey);
                      }
                      onCategorySelect(category);
                      setIsDropdownOpen(false);
                      // Navigate to home page if we're not already there
                      if (window.location.pathname !== '/') {
                        navigate('/');
                      } else {
                        // If we're already on home, scroll to top when changing categories
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                  >
                    <div className="text-sm font-medium leading-none">
                      {category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => navigate('/about')}
            className="rounded-md px-3 py-2 text-sm font-natural focus:outline-none focus:ring-2 focus:ring-sage-500"
            style={{ backgroundColor: '#976139', color: 'white' }}
          >
            About
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="rounded-md px-3 py-2 text-sm font-natural focus:outline-none focus:ring-2 focus:ring-sage-500"
            style={{ backgroundColor: '#976139', color: 'white' }}
          >
            Blog
          </button>
          <button
            onClick={() => navigate('/printables')}
            className="rounded-md px-2 py-2 text-sm font-natural focus:outline-none focus:ring-2 focus:ring-sage-500"
            style={{ backgroundColor: '#976139', color: 'white' }}
          >
            PDF
          </button>
          <select
            value={selectedCategory}
            onChange={(e) => {
              // Save scroll position before changing category (if we're on the home page)
              if (window.location.pathname === '/') {
                const scrollKey = `home-${selectedCategory}`;
                saveCurrentScrollPosition(scrollKey);
              }
              onCategorySelect(e.target.value);
              // Navigate to home page if we're not already there
              if (window.location.pathname !== '/') {
                navigate('/');
              } else {
                // If we're already on home, scroll to top when changing categories
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="rounded-md border border-sage-300 px-3 py-2 text-sm font-natural focus:outline-none focus:ring-2 focus:ring-sage-500"
            style={{ backgroundColor: '#976139', color: 'white' }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};