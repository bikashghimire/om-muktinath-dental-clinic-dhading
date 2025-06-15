import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface LanguageSwitcherProps {
  mobileView?: boolean;
}

const LanguageSwitcher = ({ mobileView = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'np' : 'en';
    i18n.changeLanguage(newLang);
  };

  if (mobileView) {
    return (
      <div className="grid grid-cols-2 gap-2 w-full">
        <button
          type="button"
          onClick={() => i18n.changeLanguage('np')}
          className={cn(
            "py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-1.5",
            currentLanguage === 'np'
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-foreground hover:bg-muted/80 active:bg-muted/90"
          )}
        >
          <span className="text-xs">🇳🇵</span>
          <span>नेपाली</span>
        </button>
        <button
          type="button"
          onClick={() => i18n.changeLanguage('en')}
          className={cn(
            "py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-1.5",
            currentLanguage === 'en'
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted text-foreground hover:bg-muted/80 active:bg-muted/90"
          )}
        >
          <span className="text-xs">🇺🇸</span>
          <span>English</span>
        </button>
      </div>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3"
    >
      {currentLanguage === 'np' ? (
        <>
          <span className="text-xs">🇺🇸</span>
          <span>EN</span>
        </>
      ) : (
        <>
          <span className="text-xs">🇳🇵</span>
          <span>नेपाली</span>
        </>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
