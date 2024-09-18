import React from 'react';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Contact from './components/Contact';

const App = () => {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Features Section */}
      <section id="features">
        <Service />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default App;
