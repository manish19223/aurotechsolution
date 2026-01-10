import { useState, useRef, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  placeholder = "blur",
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px", // Start loading 50px before the image enters viewport
        threshold: 0.1,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate WebP and fallback sources
  const getImageSources = (src) => {
    if (!src) return { webp: "", original: "" };

    // If it's already a full URL, return as is
    if (src.startsWith("http") || src.startsWith("//")) {
      return { webp: src, original: src };
    }

    // For local assets, assume they're in public folder
    const basePath = src.startsWith("/") ? src : `/${src}`;
    const webpPath = basePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    return {
      webp: webpPath,
      original: basePath,
    };
  };

  const { webp, original } = getImageSources(src);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Main image */}
      {isInView && !hasError && (
        <picture>
          {/* WebP format for modern browsers */}
          <source srcSet={webp} type="image/webp" />

          {/* Fallback to original format */}
          <img
            src={original}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
