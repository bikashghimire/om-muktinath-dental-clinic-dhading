import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  className = ''
}) => {
  const { t } = useTranslation();
  
  // Format the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-2.5 md:p-3 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group animate-pulse-whatsapp",
        className
      )}
      aria-label={t('whatsapp.ariaLabel', 'Chat with us on WhatsApp')}
    >
      <FaWhatsapp className="text-xl md:text-2xl" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 whitespace-nowrap transition-all duration-300 ease-in-out text-sm md:text-base">
        {t('whatsapp.text', 'Chat with us')}
      </span>
    </a>
  );
};

export default WhatsAppButton;
