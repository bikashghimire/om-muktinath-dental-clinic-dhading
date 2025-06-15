import React from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface PriceListProps {
  isOpen: boolean;
  onClose: () => void;
}

const PriceList: React.FC<PriceListProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const priceListData = [
    { id: 1, service: 'परामर्श (Check-up)', price: 'Rs.200 /–' },
    { id: 2, service: 'दाँतको X-ray', price: 'Rs.200 /–' },
    { id: 3, service: 'दाँतको सफा गर्ने (Scaling and polishing)', price: 'Rs.1000 – 2500 /–' },
    { id: 4, service: 'दाँत भर्ने (Filling and Restoration)', price: '' },
    { id: 4.1, service: 'अस्थायी दाँत भर्ने (Temporary filling)', price: 'Rs.1000 – 1200 /–' },
    { id: 4.2, service: 'दाँत घिसिएको भर्ने (Cervical Adrasion)', price: 'Rs.600 – 1000 /–' },
    { id: 4.3, service: 'दाँत सामान्य भर्ने (Simple filling)', price: 'Rs.1500 – 2500 /–' },
    { id: 5, service: 'बच्चाको दाँत जरा देखी भर्ने (Pulpectomy)', price: 'Rs.3000 /–' },
    { id: 6, service: 'दाँत जरा देखी भर्ने (Root Canal Treatment)', price: 'Rs.5000 – 8000 /–' },
    { id: 7, service: 'सामान्य दाँत निकाल्ने (Simple Extraction)', price: 'Rs.1000 – 2500 /–' },
    { id: 8, service: 'शल्यक्रिया गरी दाँत निकाल्ने (Surgical Extraction)', price: 'Rs.5000 /–' },
    { id: 9, service: 'मुख सम्बन्धी शल्यक्रिया (Minor Oral Surgery)', price: 'Rs.2000 – 5000 /–' },
    { id: 10, service: 'पूर्ण सेट नक्कली दाँत राख्ने (Complete Denture)', price: 'Rs.30000 – 35000 /–' },
    { id: 11, service: 'आंशिक सेट नक्कली दाँत राख्ने (Partial Denture)', price: 'Rs.1500 – 5000 /–' },
    { id: 12, service: 'खोल लगाउने (Crown)', price: 'Rs.6000 – 20000 /–' },
    { id: 12.1, service: 'Metal', price: '' },
    { id: 12.2, service: 'Melte Ceramic', price: '' },
    { id: 12.3, service: 'E-max', price: '' },
    { id: 12.4, service: 'Zirconia', price: '' },
    { id: 12.5, service: 'Vaneer and Caramage', price: '' },
    { id: 13, service: 'दाँतालाई बाहिरबाट तार बाँध्ने (Fixed Orthodontic)', price: '' },
    { id: 13.1, service: 'दाँतालाई भित्रबाट तार बाँध्ने (Lingual Orthodontic)', price: 'Rs.60000' },
    { id: 13.2, service: 'Retainer', price: 'Rs.85000' },
    { id: 13.3, service: 'Clear Aligner', price: 'Rs.3000 /–' },
    { id: 13.4, service: 'Self – ligation', price: 'Rs.180000 – 250000 /–' },
    { id: 13.5, service: 'Night Guard', price: 'Rs.90000 – 100000 /–' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary">{t('services.priceListTitle')}</h2>
            <p className="text-gray-500 dark:text-gray-400">{t('services.priceListDesc')}</p>
            <div className="text-sm font-medium mt-1 text-primary">{t('services.panNumber')}</div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            aria-label={t('services.closePriceList')}
          >
            <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="overflow-y-auto p-4 max-h-[calc(90vh-100px)]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    #
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t('services.service')}
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {t('services.price')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {priceListData.map((item) => (
                  <tr key={item.id} className={Number.isInteger(item.id) ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 dark:text-gray-400">
                      {Number.isInteger(item.id) ? item.id : ''}
                    </td>
                    <td className={`px-3 py-3 text-sm ${Number.isInteger(item.id) ? 'font-medium text-gray-900 dark:text-gray-100' : 'pl-8 text-gray-700 dark:text-gray-300'}`}>
                      {item.service}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-sm text-right text-gray-700 dark:text-gray-300 font-medium">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 p-4 backdrop-blur-sm">
          <button
            onClick={onClose}
            className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            {t('services.closePriceList')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
