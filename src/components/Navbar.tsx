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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 py-3 space-y-2 sm:px-3 bg-white/80 backdrop-blur-sm shadow-inner">
          <Button 
            asChild variant="ghost" 
            className="w-full justify-start text-base hover:text-primary hover:bg-gray-50"
          >
            <a href="#home">{t('navbar.home')}</a>
          </Button>
          <Button 
            asChild variant="ghost" 
            className="w-full justify-start text-base hover:text-primary hover:bg-gray-50"
          >
            <a href="#about">{t('navbar.about')}</a>
          </Button>
          <Button 
            asChild variant="ghost" 
            className="w-full justify-start text-base hover:text-primary hover:bg-gray-50"
          >
            <a href="#services">{t('navbar.services')}</a>
          </Button>
          <Button 
            asChild variant="ghost" 
            className="w-full justify-start text-base hover:text-primary hover:bg-gray-50"
          >
            <a href="#testimonials">{t('navbar.testimonials')}</a>
          </Button>
          <Button 
            asChild variant="ghost" 
            className="w-full justify-start text-base hover:text-primary hover:bg-gray-50"
          >
            <a href="#contact">{t('navbar.contact')}</a>
          </Button>
          <div className="px-2 pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
