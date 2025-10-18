/**
 * Utility functions for handling image paths with special characters
 */

/**
 * Encode image path for Next.js Image component
 * Properly encodes special characters while preserving path structure
 */
export function encodeImagePath(path: string): string {
  // Split the path to preserve the structure
  const parts = path.split('/');
  
  // Encode each part (except the first empty one if path starts with /)
  const encoded = parts.map((part, index) => {
    if (index === 0 && part === '') return '';
    // Encode each segment properly
    return encodeURIComponent(part);
  });
  
  return encoded.join('/');
}

/**
 * Get optimized image URL
 * Returns the proper URL for Next.js Image component
 */
export function getOptimizedImageUrl(src: string): string {
  // For local images starting with /, just return as-is
  // Next.js will handle the optimization
  if (src.startsWith('/')) {
    return src;
  }
  
  return src;
}

/**
 * Check if image should use unoptimized mode
 * Returns true for images with problematic characters
 */
export function shouldUnoptimize(src: string): boolean {
  // Check for accented characters or special characters that might cause issues
  const hasSpecialChars = /[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ]/i.test(src);
  
  return hasSpecialChars;
}
