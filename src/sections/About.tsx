import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCheckCircle } from 'react-icons/fa';
import { getImagePath, CLINIC_IMAGES } from '../lib/imageUtils';

const About = () => {
  const { t, i18n } = useTranslation();
  const isNepali = i18n.language === 'np';

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          {t('about.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {t('about.description')}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          {/* Clinic Name Header */}
          <div className="border-b border-primary/20 pb-3">
            <h3 className="text-2xl font-semibold text-primary">{t('about.clinicName')}</h3>
          </div>
          
          {/* Introduction */}
          <p className="text-gray-700 dark:text-gray-300">
            {t('about.intro')}
          </p>
          
          {/* Services */}
          <p className="text-gray-700 dark:text-gray-300">
            {t('about.services')}
          </p>
          
          {/* Mission */}
          <p className="text-gray-700 dark:text-gray-300">
            {t('about.mission')}
          </p>
          
          {/* Why Choose Us */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-medium text-primary mb-3">{t('about.whyChooseUs')}</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaRegCheckCircle className="text-primary mt-1 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{t('about.reason1')}</span>
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-primary mt-1 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{t('about.reason2')}</span>
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-primary mt-1 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{t('about.reason3')}</span>
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-primary mt-1 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{t('about.reason4')}</span>
              </li>
              <li className="flex items-start">
                <FaRegCheckCircle className="text-primary mt-1 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">{t('about.reason5')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {/* Clinic Images */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src={getImagePath(CLINIC_IMAGES.FRONTPIC1)} 
                alt="Om Mukatinath Dental Home Exterior" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src={getImagePath(CLINIC_IMAGES.INSIDEPIC)} 
                alt="Om Mukatinath Dental Home Interior" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src={getImagePath(CLINIC_IMAGES.INSIDEPIC2)} 
                alt="Om Mukatinath Dental Home Equipment" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src={getImagePath(CLINIC_IMAGES.FRONTPIC2)} 
                alt="Om Mukatinath Dental Home Team" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          {/* Our Vision */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-gray-800 dark:to-primary/20 p-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-medium text-primary mb-3">{t('about.ourVision')}</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {t('about.visionText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;