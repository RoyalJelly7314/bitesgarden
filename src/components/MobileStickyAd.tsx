import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { AdSpace } from './AdSpace';

export const MobileStickyAd: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible || !isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-sage-200 shadow-lg md:hidden">
      <div className="relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 p-1 text-sage-500 hover:text-sage-700 z-10"
          aria-label="Close ad"
        >
          <X className="h-4 w-4" />
        </button>
        <AdSpace 
          size="mobile-sticky" 
          placement="Mobile Sticky Footer"
          className="w-full"
        />
      </div>
    </div>
  );
};
