import React from 'react';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';

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

      {/* Contact Section (could be part of the Footer or separate) */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default App;
