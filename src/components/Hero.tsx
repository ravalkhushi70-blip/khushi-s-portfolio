import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, ArrowDown, Sparkle, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-brand-pink-100 via-brand-pink-50 to-brand-cream">
      {/* Aesthetic abstract background shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-gradient-to-tr from-brand-pink-200 to-transparent opacity-40 blur-3xl pointer-events-none animate-pulse duration-5000"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-bl from-brand-plum-100 to-transparent opacity-30 blur-3xl pointer-events-none animate-pulse duration-7000"></div>
      
      {/* Decorative Floating Creative Accent Shapes */}
      <motion.div 
        animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] hidden md:flex flex-col items-center gap-1 bg-brand-cream/95 border border-brand-pink-200 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm z-10"
      >
        <div className="flex gap-1.5 items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-brand-charcoal">REELS OUTREACH</span>
        </div>
        <span className="font-serif text-sm italic font-semibold text-brand-plum-800">40+ creators synced</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] left-[12%] hidden md:flex items-center gap-3 bg-brand-cream/95 border border-brand-pink-200 rounded-full px-5 py-2.5 shadow-lg backdrop-blur-sm z-10"
      >
        <span className="text-brand-gold text-lg">✦</span>
        <span className="font-sans text-xs tracking-wider uppercase font-semibold text-brand-plum-900">Campaign ROI: +18%</span>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
        >
          <Sparkle className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
          <span className="font-sans text-xs uppercase tracking-widest font-semibold text-brand-plum-800">
            Available for Internships & Agency Work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-5xl md:text-6.5xl font-normal text-brand-plum-900 tracking-tight leading-[1.15] mb-6"
        >
          Hi, I’m <span className="font-semibold italic text-brand-plum-900">Khushi Raval</span>
          <br />
          <span className="text-brand-plum-800">
            Digital Marketing &{' '}
            <span className="italic text-brand-gold font-serif font-light">Campaign Strategy</span>
          </span>{' '}
          Portfolio
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-base sm:text-lg text-brand-charcoal-light max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#campaigns"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-brand-plum-900 text-brand-cream px-8 py-4 rounded-full hover:bg-brand-gold-dark hover:text-brand-cream transition-all duration-300 shadow-md font-medium group"
          >
            View My Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-transparent border border-brand-plum-300 text-brand-plum-900 px-8 py-4 rounded-full hover:bg-brand-pink-200 transition-all duration-300 font-medium"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons & Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-brand-cream hover:bg-brand-plum-100 rounded-full border border-brand-pink-200 text-brand-plum-800 hover:text-brand-plum-900 shadow-sm transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-brand-cream hover:bg-brand-plum-100 rounded-full border border-brand-pink-200 text-brand-plum-800 hover:text-brand-plum-900 shadow-sm transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 bg-brand-cream hover:bg-brand-plum-100 rounded-full border border-brand-pink-200 text-brand-plum-800 hover:text-brand-plum-900 shadow-sm transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#about"
            className="flex flex-col items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-brand-plum-300 font-semibold group mt-4 hover:text-brand-plum-800 transition-colors"
          >
            <span>Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-brand-gold" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
