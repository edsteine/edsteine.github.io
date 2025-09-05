/**
 * Custom Image Loader for Next.js Static Export
 * Optimizes images for static deployment
 */

export default function imageLoader({ src, width, quality }) {
  // For static export, we can't use Next.js image optimization
  // Instead, we'll return the original image with query parameters for caching
  
  // Handle different image sources
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // Data URLs and blob URLs don't need optimization
    return src;
  }
  
  if (src.startsWith('http://') || src.startsWith('https://')) {
    // External images - return as-is for now
    // In production, you might want to use a service like Cloudinary or ImageKit
    return `${src}?w=${width}&q=${quality || 75}`;
  }
  
  // Local images
  const params = new URLSearchParams();
  
  if (width) {
    params.set('w', width);
  }
  
  if (quality) {
    params.set('q', quality);
  }
  
  const queryString = params.toString();
  const separator = src.includes('?') ? '&' : '?';
  
  return queryString ? `${src}${separator}${queryString}` : src;
}

/**
 * Generate responsive image srcSet for better performance
 */
export function generateSrcSet(src, sizes = [640, 750, 828, 1080, 1200]) {
  return sizes
    .map(size => `${imageLoader({ src, width: size })} ${size}w`)
    .join(', ');
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px'
}) {
  return [
    `(max-width: ${breakpoints.sm}) 100vw`,
    `(max-width: ${breakpoints.md}) 50vw`,
    `(max-width: ${breakpoints.lg}) 33vw`,
    '25vw'
  ].join(', ');
}

/**
 * Optimized Image Component for static export
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className = '',
  sizes,
  ...props 
}) => {
  const optimizedSrc = imageLoader({ src, width, quality: 85 });
  const srcSet = generateSrcSet(src);
  
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={optimizedSrc}
      srcSet={srcSet}
      sizes={sizes || generateSizes()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      {...props}
      style={{
        objectFit: 'cover',
        ...props.style
      }}
    />
  );
};