// Utility functions for preserving scroll position

interface ScrollState {
  position: number;
  timestamp: number;
}

const SCROLL_CACHE_KEY = 'bites-garden-scroll-cache';
const CACHE_EXPIRY_TIME = 5 * 60 * 1000; // 5 minutes

export const saveScrollPosition = (key: string, position: number) => {
  try {
    const scrollCache = getScrollCache();
    scrollCache[key] = {
      position,
      timestamp: Date.now(),
    };
    localStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(scrollCache));
  } catch (error) {
    console.warn('Failed to save scroll position:', error);
  }
};

export const getScrollPosition = (key: string): number | null => {
  try {
    const scrollCache = getScrollCache();
    const scrollState = scrollCache[key];
    
    if (!scrollState) return null;
    
    // Check if the cached position is still valid (not expired)
    if (Date.now() - scrollState.timestamp > CACHE_EXPIRY_TIME) {
      delete scrollCache[key];
      localStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(scrollCache));
      return null;
    }
    
    return scrollState.position;
  } catch (error) {
    console.warn('Failed to get scroll position:', error);
    return null;
  }
};

export const clearScrollPosition = (key: string) => {
  try {
    const scrollCache = getScrollCache();
    delete scrollCache[key];
    localStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(scrollCache));
  } catch (error) {
    console.warn('Failed to clear scroll position:', error);
  }
};

export const restoreScrollPosition = (key: string, forceRestore = false) => {
  const position = getScrollPosition(key);
  if (position !== null) {
    // Only restore if we're explicitly forcing it or coming from a recipe page
    const shouldRestore = forceRestore || 
                         (document.referrer && document.referrer.includes('/recipe/'));
    
    if (shouldRestore) {
      // Use setTimeout to ensure the page has rendered before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: position,
          behavior: 'smooth',
        });
      }, 100);
    }
  }
};

export const saveCurrentScrollPosition = (key: string) => {
  const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  saveScrollPosition(key, currentPosition);
};

// Save scroll position for a specific recipe card
export const saveRecipeCardScrollPosition = (key: string, recipeId: string) => {
  try {
    // Try to find the recipe card element
    const recipeCard = document.querySelector(`[data-recipe-id="${recipeId}"]`);
    if (recipeCard) {
      const rect = recipeCard.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Calculate position to center the card in viewport
      const cardPosition = scrollTop + rect.top - (window.innerHeight / 2) + (rect.height / 2);
      saveScrollPosition(key, Math.max(0, cardPosition));
    } else {
      // Fallback to current scroll position
      saveCurrentScrollPosition(key);
    }
  } catch (error) {
    console.warn('Failed to save recipe card position, using current scroll:', error);
    saveCurrentScrollPosition(key);
  }
};

// Helper function to get the scroll cache object
const getScrollCache = (): Record<string, ScrollState> => {
  try {
    const cached = localStorage.getItem(SCROLL_CACHE_KEY);
    return cached ? JSON.parse(cached) : {};
  } catch (error) {
    console.warn('Failed to parse scroll cache:', error);
    return {};
  }
};

// Clean up expired entries
export const cleanupExpiredScrollPositions = () => {
  try {
    const scrollCache = getScrollCache();
    const now = Date.now();
    let hasChanges = false;
    
    Object.keys(scrollCache).forEach(key => {
      if (now - scrollCache[key].timestamp > CACHE_EXPIRY_TIME) {
        delete scrollCache[key];
        hasChanges = true;
      }
    });
    
    if (hasChanges) {
      localStorage.setItem(SCROLL_CACHE_KEY, JSON.stringify(scrollCache));
    }
  } catch (error) {
    console.warn('Failed to cleanup scroll cache:', error);
  }
};
