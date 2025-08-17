import React from 'react';

interface AdSpaceProps {
  size: 'leaderboard' | 'banner' | 'sidebar' | 'mobile-sticky' | 'square' | 'native';
  placement: string;
  className?: string;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ size, placement, className = '' }) => {
  const getAdDimensions = () => {
    switch (size) {
      case 'leaderboard':
        return { width: '728px', height: '90px', maxWidth: '100%' };
      case 'banner':
        return { width: '970px', height: '250px', maxWidth: '100%' };
      case 'sidebar':
        return { width: '300px', height: '250px', maxWidth: '100%' };
      case 'mobile-sticky':
        return { width: '100%', height: '50px', maxWidth: '100%' };
      case 'square':
        return { width: '250px', height: '250px', maxWidth: '100%' };
      case 'native':
        return { width: '100%', height: '120px', maxWidth: '100%' };
      default:
        return { width: '300px', height: '250px', maxWidth: '100%' };
    }
  };

  const dimensions = getAdDimensions();

  const getAdContent = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-sage-50 to-earth-50 border-2 border-dashed border-sage-200 rounded-lg text-sage-600">
        <div className="text-center px-4">
          <div className="text-xs font-semibold mb-1 uppercase tracking-wide">Advertisement</div>
          <div className="text-xs opacity-75">{placement}</div>
          {size !== 'mobile-sticky' && (
            <div className="text-xs opacity-50 mt-1">
              {Math.round(parseFloat(dimensions.width))}×{dimensions.height.replace('px', '')}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`ad-space ${className}`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
        maxWidth: dimensions.maxWidth,
      }}
      data-placement={placement}
      data-size={size}
    >
      {getAdContent()}
    </div>
  );
};
