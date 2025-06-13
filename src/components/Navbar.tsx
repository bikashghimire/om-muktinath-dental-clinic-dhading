import React, { useState } from "react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./theme-provider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 shadow-md sticky top-0 z-10 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-2xl tracking-tight">Smile Dental Clinic</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#home"
                    className={`${navigationMenuTriggerStyle()} hover:text-primary hover:bg-transparent`}
                  >
                    {t('navbar.home')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#about"
                    className={`${navigationMenuTriggerStyle()} hover:text-primary hover:bg-transparent`}
                  >
                    {t('navbar.about')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#services"
                    className={`${navigationMenuTriggerStyle()} hover:text-primary hover:bg-transparent`}
                  >
                    {t('navbar.services')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#testimonials"
                    className={`${navigationMenuTriggerStyle()} hover:text-primary hover:bg-transparent`}
                  >
                    {t('navbar.testimonials')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    href="#contact"
                    className={`${navigationMenuTriggerStyle()} hover:text-primary hover:bg-transparent`}
                  >
                    {t('navbar.contact')}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="ml-4 flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded="false"
              className="focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-4 py-4 space-y-4 bg-background border-t border-border/20 shadow-inner">
          {/* Language switcher in mobile menu */}
          <div className="mb-2 pb-3 border-b border-border/30">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">
                  {t('navbar.language', 'Language')}
                </span>
              </div>
              <div className="py-1">
                <LanguageSwitcher mobileView={true} />
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="space-y-1.5">
            <Button 
              asChild variant="ghost" 
              className="w-full justify-start text-base hover:text-primary hover:bg-muted/50"
            >
              <a href="#home">{t('navbar.home')}</a>
            </Button>
            <Button 
              asChild variant="ghost" 
              className="w-full justify-start text-base hover:text-primary hover:bg-muted/50"
            >
              <a href="#about">{t('navbar.about')}</a>
            </Button>
            <Button 
              asChild variant="ghost" 
              className="w-full justify-start text-base hover:text-primary hover:bg-muted/50"
            >
              <a href="#services">{t('navbar.services')}</a>
            </Button>
            <Button 
              asChild variant="ghost" 
              className="w-full justify-start text-base hover:text-primary hover:bg-muted/50"
            >
              <a href="#testimonials">{t('navbar.testimonials')}</a>
            </Button>
            <Button 
              asChild variant="ghost" 
              className="w-full justify-start text-base hover:text-primary hover:bg-muted/50"
            >
              <a href="#contact">{t('navbar.contact')}</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
