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
      <div className="grid grid-cols-2 gap-3 w-full">
        <button
          type="button"
          onClick={() => i18n.changeLanguage('np')}
          className={cn(
            "py-2.5 text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
            currentLanguage === 'np'
              ? "bg-primary/90 text-white shadow-md"
              : "bg-muted/80 text-foreground hover:bg-muted active:bg-muted/90 border border-gray-100/10"
          )}
        >
          <span className="text-sm">🇳🇵</span>
          <span>नेपाली</span>
        </button>
        <button
          type="button"
          onClick={() => i18n.changeLanguage('en')}
          className={cn(
            "py-2.5 text-sm font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
            currentLanguage === 'en'
              ? "bg-primary/90 text-white shadow-md"
              : "bg-muted/80 text-foreground hover:bg-muted active:bg-muted/90 border border-gray-100/10"
          )}
        >
          <span className="text-sm">🇺🇸</span>
          <span>English</span>
        </button>
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-primary/10 transition-all duration-300"
    >
      {currentLanguage === 'np' ? (
        <>
          <span className="text-xs">🇺🇸</span>
          <span className="text-xs font-medium">EN</span>
        </>
      ) : (
        <>
          <span className="text-xs">🇳🇵</span>
          <span className="text-xs font-medium">NP</span>
        </>
      )}
    </Button>
  );
};

export default LanguageSwitcher;
