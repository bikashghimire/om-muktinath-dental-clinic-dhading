import React, { useState, useEffect } from "react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if a nav item is active
  const isActive = (section: string) => activeSection === section;

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // 100px offset for better UX

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    
    // Initial call to set the active section on page load
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle nav item click
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-10 backdrop-blur-sm transition-all duration-300 bg-background/95 shadow-md border-b border-border/40`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Full name on larger screens, shortened name on very small screens */}
              <span className="hidden sm:inline font-bold text-lg md:text-2xl lg:text-3xl tracking-tight text-primary">
                {t('navbar.clinicName', 'Om Muktinath Dental Home')}
              </span>
              <span className="sm:hidden font-bold text-base tracking-tight text-primary leading-tight">
                {t('navbar.shortClinicName', 'Om Muktinath')}
              </span>
            </div>
          </div>

                      {/* Desktop menu */}
                      <div className="hidden md:flex md:items-center">
                          <NavigationMenu>
                              <NavigationMenuList className="gap-6">
                                  <NavigationMenuItem>
                                      <NavigationMenuLink
                                          href="#home"
                                          onClick={() => handleNavClick('home')}
                                          className={`${navigationMenuTriggerStyle()} text-lg font-medium px-6 py-3 hover:text-primary border-b-2 ${isActive('home') ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary transition-colors`}
                                      >
                                          {t('navbar.home')}
                                      </NavigationMenuLink>
                                  </NavigationMenuItem>
                                  <NavigationMenuItem>
                                      <NavigationMenuLink
                                          href="#about"
                                          onClick={() => handleNavClick('about')}
                                          className={`${navigationMenuTriggerStyle()} text-lg font-medium px-6 py-3 hover:text-primary border-b-2 ${isActive('about') ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary transition-colors`}
                                      >
                                          {t('navbar.about')}
                                      </NavigationMenuLink>
                                  </NavigationMenuItem>
                                  <NavigationMenuItem>
                                      <NavigationMenuLink
                                          href="#services"
                                          onClick={() => handleNavClick('services')}
                                          className={`${navigationMenuTriggerStyle()} text-lg font-medium px-6 py-3 hover:text-primary border-b-2 ${isActive('services') ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary transition-colors`}
                                      >
                                          {t('navbar.services')}
                                      </NavigationMenuLink>
                                  </NavigationMenuItem>
                                  <NavigationMenuItem>
                                      <NavigationMenuLink
                                          href="#testimonials"
                                          onClick={() => handleNavClick('testimonials')}
                                          className={`${navigationMenuTriggerStyle()} text-lg font-medium px-6 py-3 hover:text-primary border-b-2 ${isActive('testimonials') ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary transition-colors`}
                                      >
                                          {t('navbar.testimonials')}
                                      </NavigationMenuLink>
                                  </NavigationMenuItem>
                                  <NavigationMenuItem>
                                      <NavigationMenuLink
                                          href="#contact"
                                          onClick={() => handleNavClick('contact')}
                                          className={`${navigationMenuTriggerStyle()} text-lg font-medium px-6 py-3 hover:text-primary border-b-2 ${isActive('contact') ? 'border-primary text-primary' : 'border-transparent'} hover:border-primary transition-colors`}
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
                  className={`${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
              >
                  <div className="px-4 py-4 space-y-4 bg-background shadow-inner">
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
                      <div className="space-y-2.5">
                          <Button
                              asChild variant="ghost"
                              className={`w-full justify-start text-xl font-medium py-4 hover:text-primary hover:bg-muted/50 border-l-4 ${isActive('home') ? 'border-primary text-primary bg-muted/30' : 'border-transparent'} hover:border-primary`}
                          >
                              <a href="#home" onClick={() => handleNavClick('home')}>{t('navbar.home')}</a>
                          </Button>
                          <Button
                              asChild variant="ghost"
                              className={`w-full justify-start text-xl font-medium py-4 hover:text-primary hover:bg-muted/50 border-l-4 ${isActive('about') ? 'border-primary text-primary bg-muted/30' : 'border-transparent'} hover:border-primary`}
                          >
                              <a href="#about" onClick={() => handleNavClick('about')}>{t('navbar.about')}</a>
                          </Button>
                          <Button
                              asChild variant="ghost"
                              className={`w-full justify-start text-xl font-medium py-4 hover:text-primary hover:bg-muted/50 border-l-4 ${isActive('services') ? 'border-primary text-primary bg-muted/30' : 'border-transparent'} hover:border-primary`}
                          >
                              <a href="#services" onClick={() => handleNavClick('services')}>{t('navbar.services')}</a>
                          </Button>
                          <Button
                              asChild variant="ghost"
                              className={`w-full justify-start text-xl font-medium py-4 hover:text-primary hover:bg-muted/50 border-l-4 ${isActive('testimonials') ? 'border-primary text-primary bg-muted/30' : 'border-transparent'} hover:border-primary`}
                          >
                              <a href="#testimonials" onClick={() => handleNavClick('testimonials')}>{t('navbar.testimonials')}</a>
                          </Button>
                          <Button
                              asChild variant="ghost"
                              className={`w-full justify-start text-xl font-medium py-4 hover:text-primary hover:bg-muted/50 border-l-4 ${isActive('contact') ? 'border-primary text-primary bg-muted/30' : 'border-transparent'} hover:border-primary`}
                          >
                              <a href="#contact" onClick={() => handleNavClick('contact')}>{t('navbar.contact')}</a>
                          </Button>
                      </div>
                  </div>
              </div>
          </nav>
          );
          };

export default Navbar;
