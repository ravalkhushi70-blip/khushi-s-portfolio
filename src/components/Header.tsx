import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenPlayground: () => void;
}

export default function Header({ onOpenPlayground }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 transition-all duration-300">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 border ${
            isScrolled
              ? 'bg-brand-cream/80 backdrop-blur-md shadow-md border-brand-pink-200 py-3 px-6'
              : 'bg-transparent border-transparent py-4 px-4'
          } flex items-center justify-between`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-plum-800 rounded-full flex items-center justify-center text-brand-cream font-serif text-lg font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
              KR
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-brand-plum-900 group-hover:text-brand-gold duration-300">
                Khushi Raval<span className="text-brand-gold">.</span>
              </span>
              <span className="font-sans text-[9px] tracking-widest uppercase text-brand-plum-300 font-semibold leading-none mt-0.5">
                Creative Strategist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-brand-charcoal-light hover:text-brand-plum-800 transition-colors duration-300 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPlayground}
              className="hidden sm:flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider bg-brand-plum-900 text-brand-cream px-4 py-2.5 rounded-full hover:bg-brand-gold-dark hover:text-brand-cream transition-all duration-300 shadow-sm font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Campaign Builder
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-brand-pink-100 text-brand-plum-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-40 mx-4 md:hidden"
          >
            <div className="bg-brand-cream border border-brand-pink-200 rounded-3xl p-6 shadow-xl backdrop-blur-lg flex flex-col gap-4">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-sm tracking-wider uppercase text-brand-plum-900 hover:text-brand-gold duration-200 py-2 border-b border-brand-pink-100 font-medium"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPlayground();
                }}
                className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider bg-brand-plum-900 text-brand-cream py-3 rounded-xl hover:bg-brand-gold transition-colors font-medium mt-2"
              >
                <Sparkles className="w-4 h-4" />
                Try Campaign Builder
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
