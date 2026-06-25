import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, ShieldCheck, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const brandNiches = [
    { name: "Lifestyle & Apparel", icon: Star },
    { name: "Beauty & Wellness", icon: Heart },
    { name: "Luxury Jewellery", icon: Sparkles },
    { name: "Home Decor & Living", icon: ShieldCheck }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-brand-cream relative overflow-hidden">
      {/* Editorial Decorative grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 opacity-[0.03] pointer-events-none">
        <div className="border-r border-brand-plum-900"></div>
        <div className="border-r border-brand-plum-900"></div>
        <div className="border-r border-brand-plum-900"></div>
        <div></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Left Side - Profile Portrait with Editorial Framing */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm w-full"
            >
              {/* Outer decorative gold border */}
              <div className="absolute -inset-4 border border-brand-gold/40 rounded-3xl pointer-events-none"></div>
              
              {/* Secondary decorative background card */}
              <div className="absolute inset-0 bg-brand-pink-200 rounded-2xl transform rotate-3 scale-[1.01] -z-10 shadow-sm"></div>
              
              {/* Main Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-pink-200 bg-brand-pink-100 shadow-xl aspect-[4/5] group">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Khushi Raval"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating overlay chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-cream/90 backdrop-blur-md border border-brand-pink-200/50 p-4 rounded-xl shadow-md">
                  <p className="font-serif text-sm font-semibold text-brand-plum-900">Khushi Raval</p>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-300 font-medium">Digital Marketing & Creative Strategist</p>
                </div>
              </div>

              {/* Decorative star icon in gold */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-cream shadow-md">
                ✦
              </div>
            </motion.div>
          </div>

          {/* Content Right Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-brand-gold-dark">
                Meet the Creative
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900 mb-6 leading-tight">
              A student of marketing,
              <br />
              <span className="font-semibold italic">strategist by design.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-brand-charcoal-light leading-relaxed mb-8 font-light">
              {PERSONAL_INFO.bio}
            </p>

            <div className="border-t border-brand-pink-200/80 pt-8">
              <p className="font-serif text-lg font-semibold text-brand-plum-900 mb-4">
                Core Brand Verticals & Niches
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brandNiches.map((niche, idx) => {
                  const Icon = niche.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-brand-pink-100/50 hover:bg-brand-pink-100 border border-brand-pink-200/50 rounded-2xl p-4 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-xl bg-brand-cream border border-brand-pink-200 flex items-center justify-center text-brand-gold-dark shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-sans text-xs tracking-wide font-medium text-brand-plum-900">
                        {niche.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick statement block */}
            <div className="mt-8 p-4 bg-brand-pink-100 border-l-2 border-brand-gold rounded-r-2xl">
              <p className="font-serif text-sm italic text-brand-plum-800">
                &ldquo;Digital marketing isn’t just about likes and impressions — it’s about aligning aesthetic storytelling with measurable brand growth.&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
