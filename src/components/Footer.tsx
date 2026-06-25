import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-plum-900 text-brand-cream py-16 px-4 relative overflow-hidden">
      {/* Visual top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink-300/30 to-transparent"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight block text-brand-cream hover:text-brand-gold duration-300 mb-1">
            Khushi Raval<span className="text-brand-gold">.</span>
          </a>
          <span className="font-sans text-[10px] tracking-widest uppercase text-brand-plum-300 font-semibold">
            Digital Marketing &amp; Campaign Strategy
          </span>
        </div>

        {/* Middle Credits */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="font-sans text-xs text-brand-plum-100 font-light">
            Designed for agencies, built for growth.
          </p>
          <div className="flex items-center gap-1 font-sans text-[10px] text-brand-plum-300 font-semibold uppercase tracking-wider">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-brand-gold fill-brand-gold animate-pulse" />
            <span>&copy; {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>

        {/* Right Side - Back to top */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-brand-cream/10 hover:bg-brand-gold text-brand-cream hover:text-brand-plum-900 transition-all duration-300 border border-brand-cream/10 hover:border-brand-gold flex items-center justify-center shadow-md group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
