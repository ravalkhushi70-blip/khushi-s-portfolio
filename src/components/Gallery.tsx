import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Sparkles, Image as ImageIcon, X, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 bg-brand-pink-50 relative overflow-hidden">
      {/* Visual divider line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-brand-pink-300 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              Creative Assets
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Portfolio <span className="font-semibold italic">Gallery &amp; Drafts</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Sneak peeks at visual moodboards, copywriting outlines, structured spreadsheets, and campaign strategy boards.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer bg-brand-cream border border-brand-pink-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-plum-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-cream/90 backdrop-blur-sm flex items-center justify-center text-brand-plum-900 shadow-md transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Tag type top left */}
                <span className="absolute top-3 left-3 font-mono text-[9px] tracking-widest uppercase bg-brand-cream/90 backdrop-blur-sm border border-brand-pink-200/50 text-brand-plum-900 px-2.5 py-0.5 rounded-full font-bold">
                  {item.typeName}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-brand-plum-900 group-hover:text-brand-plum-800 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-pink-100 flex items-center gap-1 text-brand-plum-300 group-hover:text-brand-gold duration-300">
                  <span className="font-sans text-[9px] uppercase tracking-widest font-semibold">Inspect Asset Details</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-plum-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-brand-cream border border-brand-pink-200 rounded-[32px] overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-brand-cream hover:bg-brand-pink-100 border border-brand-pink-200 text-brand-plum-900 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-brand-plum-900 text-brand-cream px-3 py-1 rounded-full font-bold">
                  {activeItem.typeName}
                </span>
              </div>

              {/* Description */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-1 text-brand-gold-dark mb-1">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Creative Strategist Perspective</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-brand-plum-900 mb-3">
                  {activeItem.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light leading-relaxed font-light mb-6">
                  {activeItem.description} This asset represents structural branding exercises mapped out using aesthetic layout templates. The goal of this deliverable is to establish early-stage creative alignment across agency teams and prospective clients before major campaign rollouts.
                </p>

                {/* Details list */}
                <div className="grid grid-cols-2 gap-4 border-t border-brand-pink-100 pt-5">
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-300 font-bold block">Deliverable Format</span>
                    <span className="font-sans text-xs font-semibold text-brand-plum-900">{activeItem.typeName}</span>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-300 font-bold block">Agency Alignment</span>
                    <span className="font-sans text-xs font-semibold text-brand-plum-900">Creative Strategy Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
