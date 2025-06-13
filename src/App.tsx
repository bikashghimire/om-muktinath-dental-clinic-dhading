import React from 'react'

import './styles/globals.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import TestComponent from './components/TestComponent'

const App: React.FC = () => {
  return (
 <main>
      <TestComponent />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
