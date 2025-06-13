import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <Button 
        variant={i18n.language === 'np' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => changeLanguage('np')}
        className="font-medium"
      >
        नेपाली
      </Button>
      <Button 
        variant={i18n.language === 'en' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => changeLanguage('en')}
        className="font-medium"
      >
        English
      </Button>
    </div>
  );
}
