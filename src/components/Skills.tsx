import React from 'react';
import { motion } from 'motion/react';
import { Layers, HelpCircle, Compass, Target, BrainCircuit, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function Skills() {
  // Let's create helper cards colors mapping
  const cardStyles = [
    "bg-brand-pink-100/60 border-brand-pink-200 text-brand-plum-900",
    "bg-brand-cream border-brand-pink-200 text-brand-charcoal",
    "bg-brand-plum-50 border-brand-plum-100 text-brand-plum-900"
  ];

  const categoryIcons = [
    Layers, // Campaign & Content
    Compass, // Marketing & Research
    BrainCircuit // Strategy & Pitching
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-brand-cream relative overflow-hidden">
      {/* Editorial grid line */}
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-brand-pink-200/40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-brand-gold-dark">
                Expertise Area
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
              Professional <span className="font-semibold italic">Skillset</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light max-w-md font-light leading-relaxed">
            A balanced mix of creative copy development, high-end visual direction, systematic competitor research, and client-ready campaign planning.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const style = cardStyles[idx % cardStyles.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`border rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${style}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-2xl bg-brand-cream border border-brand-pink-200/50 flex items-center justify-center text-brand-plum-800 shadow-sm">
                      <Icon className="w-5 h-5 text-brand-gold-dark" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-brand-plum-900 tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.04 }}
                        className="font-sans text-xs bg-brand-cream/80 backdrop-blur-sm border border-brand-pink-200 text-brand-plum-900 font-medium px-4 py-2 rounded-full shadow-sm cursor-default hover:border-brand-gold transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Footer decorative text */}
                <div className="mt-12 flex items-center gap-1.5 opacity-60">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                    Core Competency
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Strategy Statement */}
        <div className="mt-12 text-center">
          <p className="font-sans text-xs tracking-wider uppercase text-brand-plum-300 font-medium">
            Familiar with digital ecosystems including:
            <span className="text-brand-plum-800 font-semibold ml-1.5">Meta Ads Manager, Notion, Canva, Instagram Insights, Figma &amp; Excel.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
