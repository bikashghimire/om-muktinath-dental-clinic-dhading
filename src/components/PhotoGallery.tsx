import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

// Import the gallery images
const importAllImages = () => {
  const galleryImagesContext = import.meta.glob('/public/gallery/*.jpeg', { eager: true });
  return Object.values(galleryImagesContext).map((module: any) => module.default);
};

const PhotoGallery = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  
  // Use all the actual gallery images from public/gallery
  const galleryImages = [
    '/gallery/04552a9e-70f5-44d9-9081-ef857b26e96d.jpeg',
    '/gallery/13285ade-30a6-4897-a3ea-fb08b9e29079.jpeg',
    '/gallery/1ace1d9c-d214-479c-b376-14c5f090c878.jpeg',
    '/gallery/21a04935-9b1d-425e-8c2e-01c235409356.jpeg',
    '/gallery/5bfb5543-17ff-4a78-86a1-0ce5e5833bb3.jpeg',
    '/gallery/5e5b9db5-a7e9-4251-8d1d-e26d5c9c9ed4.jpeg',
    '/gallery/6860eaf7-51d4-492f-b4b5-dc357d0e59b2.jpeg',
    '/gallery/701c6714-db34-4644-83a8-ac1ef0e1e00f.jpeg',
    '/gallery/797ba7ed-a2ff-4f34-8c35-35ef1893f514.jpeg',
    '/gallery/7f7877a0-ab28-4550-aa51-61eec43534e8.jpeg',
    '/gallery/927f8335-f44f-4630-aa7e-0e0edc5d5829.jpeg',
    '/gallery/92cef929-d040-4445-9b20-9d20ea0ece1e.jpeg',
    '/gallery/addf66df-5330-4a79-b239-e37e823f9bbd.jpeg',
    '/gallery/b18c9f7c-63aa-4f21-886a-2fd1ed9f5205.jpeg',
    '/gallery/c0a3e21f-b2b6-4b92-bbc6-788e97d02093.jpeg',
    '/gallery/cac277b9-447d-40a1-8fc7-08621ecd6f78.jpeg',
    '/gallery/f0a2271a-8e1e-447f-97c8-06e12a22a424.jpeg',
    '/gallery/f1a82459-fcd2-406a-8aee-f470cf4b0bae.jpeg',
    '/gallery/f4433aae-25ba-4602-abd6-f3d31460e9e0.jpeg',
    '/gallery/frontpic1.jpeg',
    '/gallery/frontpic2.jpeg'
  ];
  
  // Calculate pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  
  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };
  
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold text-primary mb-6">{t('gallery.title', 'Our Clinic Gallery')}</h3>
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {currentImages.map((image, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800"
            onClick={() => openModal(image)}
          >
            <div className="aspect-square overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <span className="text-primary font-medium text-sm bg-white/80 dark:bg-gray-800/80 py-1 px-3 rounded-full shadow-sm">
                  {t('gallery.clickToView', 'Click to view')}
                </span>
              </div>
              <img 
                src={image} 
                alt={`${t('gallery.imageAlt', 'Dental Clinic Photo')} ${indexOfFirstImage + index + 1}`}
                className="w-full h-full object-cover transform hover:scale-[1.05] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-1">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
            >
              {t('gallery.prev', 'Previous')}
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === index + 1 
                    ? 'bg-primary text-white' 
                    : 'border border-gray-300 dark:border-gray-600'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50"
            >
              {t('gallery.next', 'Next')}
            </button>
          </nav>
        </div>
      )}
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center absolute -top-12 w-full">
              <span className="text-white text-sm">{t('gallery.imageViewer', 'Image Viewer')}</span>
              <button 
                onClick={closeModal}
                className="text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label={t('gallery.close', 'Close')}
              >
                <X size={24} />
              </button>
            </div>
            <div className="overflow-hidden rounded-lg shadow-2xl border border-gray-700">
              <img 
                src={selectedImage} 
                alt={t('gallery.enlargedImage', 'Enlarged view')}
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.indexOf(selectedImage);
                  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prevIndex]);
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
              >
                {t('gallery.prev', 'Previous')}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = galleryImages.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[nextIndex]);
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
              >
                {t('gallery.next', 'Next')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
