import React, { useState, useRef, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  onClick,
  loading = 'lazy'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative overflow-hidden" ref={imgRef}>
      {/* Low quality placeholder */}
      {placeholderSrc && !isLoaded && (
        <img
          src={placeholderSrc}
          alt={alt}
          className={`${className} blur-sm scale-110 transition-opacity duration-300`}
          style={{ filter: 'blur(10px)' }}
        />
      )}
      
      {/* Loading skeleton */}
      {!placeholderSrc && !isLoaded && (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Main image */}
      {(isInView || loading === 'eager') && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${placeholderSrc && !isLoaded ? 'absolute inset-0' : ''}`}
          onLoad={handleLoad}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default ProgressiveImage;