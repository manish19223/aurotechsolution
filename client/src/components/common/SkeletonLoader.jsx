import React from "react";

const SkeletonLoader = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
  className = "",
  variant = "text",
}) => {
  const baseClasses = "animate-pulse bg-gray-200";

  const variants = {
    text: "h-4",
    title: "h-6",
    avatar: "rounded-full",
    thumbnail: "rounded-lg",
    card: "rounded-lg",
    button: "rounded-md h-10",
  };

  const variantClass = variants[variant] || variants.text;

  return (
    <div
      className={`${baseClasses} ${variantClass} ${className}`}
      style={{
        width,
        height:
          variant === "text" || variant === "title" || variant === "button"
            ? height
            : undefined,
        borderRadius: variant === "avatar" ? "50%" : borderRadius,
      }}
    />
  );
};

// Pre-built skeleton components
export const SkeletonText = ({ lines = 1, className = "" }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonLoader key={i} variant="text" />
    ))}
  </div>
);

export const SkeletonCard = ({ className = "" }) => (
  <div className={`p-4 border rounded-lg space-y-3 ${className}`}>
    <SkeletonLoader variant="title" width="60%" />
    <SkeletonText lines={2} />
    <SkeletonLoader variant="button" width="100px" />
  </div>
);

export const SkeletonImage = ({
  width = "100%",
  height = "200px",
  className = "",
}) => (
  <SkeletonLoader
    variant="thumbnail"
    width={width}
    style={{ height }}
    className={className}
  />
);

export const SkeletonAvatar = ({ size = "40px", className = "" }) => (
  <SkeletonLoader
    variant="avatar"
    width={size}
    height={size}
    className={className}
  />
);

export default SkeletonLoader;
