import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-brand-cream relative overflow-hidden">
      {/* Editorial Grid lines decoration */}
      <div className="absolute inset-0 grid grid-cols-3 opacity-[0.02] pointer-events-none">
        <div className="border-r border-brand-plum-900"></div>
        <div className="border-r border-brand-plum-900"></div>
        <div></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-pink-100 border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              Industry Reviews
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Agency <span className="font-semibold italic">Recommendations</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Feedback and observations from professional marketing directors and team leads.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-brand-pink-100/40 border border-brand-pink-200 rounded-[32px] p-8 sm:p-12 md:p-16 relative shadow-sm"
            >
              {/* Huge elegant quote mark icon */}
              <div className="absolute top-6 left-6 text-brand-plum-300/35">
                <Quote className="w-12 h-12" />
              </div>

              {/* Quote Content */}
              <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light text-brand-plum-950 italic leading-relaxed text-center relative z-10 mb-8">
                &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-serif text-base font-bold text-brand-plum-900 mb-0.5">
                  {TESTIMONIALS[activeIndex].author}
                </p>
                <div className="flex items-center justify-center gap-1.5 font-sans text-[10px] uppercase tracking-widest text-brand-gold-dark font-bold">
                  <Sparkles className="w-3 h-3" />
                  <span>{TESTIMONIALS[activeIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-brand-cream hover:bg-brand-pink-100 border border-brand-pink-200 text-brand-plum-900 transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-sans text-xs tracking-wider text-brand-plum-300 font-semibold select-none">
              {activeIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-brand-cream hover:bg-brand-pink-100 border border-brand-pink-200 text-brand-plum-900 transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
