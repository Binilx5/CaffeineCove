import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  onClick 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${className} ${!isLoaded ? 'opacity-0 absolute' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        onClick={onClick}
        style={{ display: hasError ? 'none' : 'block' }}
      />
      
      {/* Error fallback */}
      {hasError && (
        <div className={`${className} bg-gray-100 flex items-center justify-center`}>
          <div className="text-gray-500 text-sm">Failed to load image</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;