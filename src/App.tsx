import React from 'react'

import './styles/globals.css'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { useTranslation } from 'react-i18next'


const App: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <ThemeProvider defaultTheme="light">
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber="9779876543210" 
          message={t('whatsapp.message')}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
