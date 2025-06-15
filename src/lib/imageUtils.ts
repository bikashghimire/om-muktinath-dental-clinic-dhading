/**
 * This utility helps manage image paths for consistent loading in both development and production
 */

// Add a mapping of image names to their paths
export const getImagePath = (imageName: string): string => {
  // For simplicity and because process.env might not be available,
  // we'll just use a simple path approach that works in both environments
  return `/images/${imageName}`;
};

// Pre-defined image names for type safety
export const CLINIC_IMAGES = {
  FRONTPIC1: 'frontpic1.jpeg',
  FRONTPIC2: 'frontpic2.jpeg',
  INSIDEPIC: 'insidepic.jpeg',
  INSIDEPIC2: 'insidepic2.jpeg',
};
