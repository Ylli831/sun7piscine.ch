'use client';

import Image, { ImageProps } from 'next/image';

/**
 * SmartImage component that automatically handles images with special characters
 * Falls back to unoptimized mode for images with accented characters or spaces
 */
export default function SmartImage(props: ImageProps) {
  const { src, ...otherProps } = props;
  
  // Check if the image path contains special characters that might cause issues
  const srcString = typeof src === 'string' ? src : '';
  const hasSpecialChars = /[àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ\s]/i.test(srcString);
  
  // For images with special characters, use unoptimized mode to avoid 400 errors
  // This bypasses Next.js image optimization which can have issues with special chars
  const shouldUnoptimize = hasSpecialChars && srcString.startsWith('/sun7piscine-photos');
  
  return (
    <Image
      src={src}
      unoptimized={shouldUnoptimize}
      {...otherProps}
    />
  );
}
