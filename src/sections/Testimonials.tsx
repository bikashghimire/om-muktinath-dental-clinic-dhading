import React from 'react';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();
    
    return (
        <section id="testimonials" className="py-20 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                    {t('testimonials.title')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-4 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('testimonials.name1')}</h3>
                    <p>"{t('testimonials.testimonial1')}"</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{t('testimonials.name2')}</h3>
                    <p>"{t('testimonials.testimonial2')}"</p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
