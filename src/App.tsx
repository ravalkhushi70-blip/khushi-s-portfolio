import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Impact from './components/Impact';
import CampaignBuilder from './components/CampaignBuilder';
import Work from './components/Work';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToPlayground = () => {
    const builderSection = document.getElementById('campaign-builder');
    if (builderSection) {
      builderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-pink-50 font-sans antialiased text-brand-charcoal overflow-x-hidden selection:bg-brand-plum-300 selection:text-brand-plum-900">
      {/* Dynamic Header */}
      <Header onOpenPlayground={handleScrollToPlayground} />

      {/* Hero Header Presentation */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Skills Showcase Section */}
      <Skills />

      {/* Impact Metric Data Section */}
      <Impact />

      {/* Interactive Strategy Simulator Playground */}
      <CampaignBuilder />

      {/* Case Studies Sections */}
      <Work />

      {/* Masonry Drafts & Sheets Gallery */}
      <Gallery />

      {/* Testimonials recommendation sliders */}
      <Testimonials />

      {/* Contact Section Form */}
      <Contact />

      {/* Minimal Footer Signature */}
      <Footer />
    </div>
  );
}
