import React from 'react';
import { useTranslation } from 'react-i18next';
import PhotoGallery from '../components/PhotoGallery';

const Gallery = () => {
  const { t } = useTranslation();
  
  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          {t('gallery.sectionTitle', 'Gallery')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t('gallery.description', 'Explore our dental clinic facilities and successful treatments through our photo gallery.')}
        </p>
      </div>

      <PhotoGallery />
    </section>
  );
};

export default Gallery;
