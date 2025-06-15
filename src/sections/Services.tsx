import React, { useState } from 'react';
import { FaTooth, FaSmile, FaTeeth, FaUserMd, FaChild, FaFirstAid, FaListUl } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import PriceList from '../components/PriceList';

const Services = () => {
  const { t } = useTranslation();
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);
  
  const services = [
    {
      title: t('services.generalDentistry', 'General Dentistry'),
      description: t('services.generalDesc', 'Comprehensive exams, cleanings, and preventive care.'),
      icon: <FaTooth />,
    },
    {
      title: t('services.cosmeticDentistry', 'Cosmetic Dentistry'),
      description: t('services.cosmeticDesc', 'Teeth whitening, veneers, and smile makeovers.'),
      icon: <FaSmile />,
    },
    {
      title: t('services.orthodontics', 'Orthodontics'),
      description: t('services.orthodonticsDesc', 'Braces and clear aligners for a straighter smile.'),
      icon: <FaTeeth />,
    },
    {
      title: t('services.oralSurgery', 'Oral Surgery'),
      description: t('services.oralSurgeryDesc', 'Extractions, implants, and other surgical procedures.'),
      icon: <FaUserMd />,
    },
    {
      title: t('services.pediatricDentistry', 'Pediatric Dentistry'),
      description: t('services.pediatricDesc', 'Specialized care for children\'s dental health.'),
      icon: <FaChild />,
    },
    {
      title: t('services.emergencyCare', 'Emergency Care'),
      description: t('services.emergencyDesc', 'Prompt treatment for dental emergencies.'),
      icon: <FaFirstAid />,
    }
  ];
  
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-background to-muted dark:from-background dark:to-background/70">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">{t('services.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/40 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('services.description', 'We offer a wide range of dental services to meet your needs, from routine check-ups to advanced cosmetic procedures.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/30 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-6 mx-auto group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <button
              onClick={() => setIsPriceListOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-700 text-primary border border-primary dark:border-primary/30 font-medium rounded-lg hover:bg-primary/5 hover:shadow-lg transition-all duration-300 gap-2"
            >
              <FaListUl className="text-lg" /> {t('services.viewPriceList')}
            </button>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary/90 to-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            >
              {t('services.scheduleAppointment')}
            </a>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('services.contactText')}
          </p>
        </div>
        
        {/* Price List Modal */}
        <PriceList isOpen={isPriceListOpen} onClose={() => setIsPriceListOpen(false)} />
      </div>
    </section>
  );
}

export default Services;