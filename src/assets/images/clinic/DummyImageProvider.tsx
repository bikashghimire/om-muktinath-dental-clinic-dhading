import React from 'react';
import { ClinicImage } from './config';
import DummyImage from './dummy/DummyImage';

interface DummyImageProviderProps {
  image: ClinicImage;
  className?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

// This component acts as a wrapper that either renders a real image
// or a dummy placeholder based on the image src format
const DummyImageProvider: React.FC<DummyImageProviderProps> = ({ 
  image, 
  className = '', 
  style = {},
  width = '100%',
  height = '400px'
}) => {
  // Check if we should use a dummy image
  if (image.src.startsWith('dummy:')) {
    return (
      <DummyImage 
        category={image.category} 
        index={image.index || 1}
        text={image.title}
        width={width}
        height={height}
      />
    );
  }
  
  // Otherwise, render a regular image
  return (
    <img 
      src={image.src} 
      alt={image.alt} 
      className={className} 
      style={style} 
    />
  );
};

export default DummyImageProvider;
