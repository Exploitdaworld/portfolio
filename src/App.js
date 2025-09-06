import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-primary font-inter">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
