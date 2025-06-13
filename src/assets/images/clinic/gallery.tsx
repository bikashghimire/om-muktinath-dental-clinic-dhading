import React, { useState } from 'react';
import { clinicImages, ClinicImage } from './config';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import DummyImageProvider from './DummyImageProvider';

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: ClinicImage['category'];
}

const ClinicGallery: React.FC<GalleryProps> = ({ isOpen, onClose, initialCategory = 'exterior' }) => {
  const [activeCategory, setActiveCategory] = useState<ClinicImage['category']>(initialCategory);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter images by active category
  const categoryImages = clinicImages.filter(img => img.category === activeCategory);
  const currentImage = categoryImages[currentImageIndex];
  
  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === categoryImages.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? categoryImages.length - 1 : prev - 1
    );
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Gallery Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-medium">Om Muktinath Clinic Gallery</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close gallery"
          >
            <FaTimes />
          </button>
        </div>
        
        {/* Category Navigation */}
        <div className="flex space-x-2 p-4 overflow-x-auto">
          {['exterior', 'interior', 'equipment', 'team'].map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category as ClinicImage['category']);
                setCurrentImageIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Main Gallery Area */}
        <div className="flex-1 overflow-hidden relative flex items-center justify-center p-4">
          {categoryImages.length > 0 ? (
            <>
              {/* Render dummy or real image */}
              <div className="w-full h-64 md:h-96 flex items-center justify-center">
                <DummyImageProvider
                  image={currentImage}
                  className="max-w-full max-h-full object-contain"
                  height="100%"
                />
              </div>
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                <h4 className="font-medium">{currentImage.title}</h4>
                <p className="text-sm text-gray-600">{currentImage.description}</p>
              </div>
              
              {/* Navigation Controls */}
              {categoryImages.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="text-center text-gray-500">
              No images available for this category yet.
            </div>
          )}
        </div>
        
        {/* Thumbnails */}
        <div className="p-4 flex space-x-2 overflow-x-auto">
          {categoryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-16 h-16 rounded-md overflow-hidden ${
                index === currentImageIndex ? 'ring-2 ring-primary' : ''
              }`}
              aria-label={`View ${image.title}`}
            >
              {/* Render small dummy images as thumbnails */}
              <DummyImageProvider
                image={image}
                height="100%"
                width="100%"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicGallery;
