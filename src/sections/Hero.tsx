import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-primary text-white py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  );

};

export default Hero;