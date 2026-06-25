import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, ArrowUpRight, Sparkle } from 'lucide-react';
import { EXPERIENCES } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-brand-pink-50 relative overflow-hidden">
      {/* Visual top and bottom subtle divider lines */}
      <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-brand-pink-300 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              My Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Agency Experience &amp; <span className="font-semibold italic">Internships</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Hands-on support for lifestyle, beauty, jewellery, and consumer brands under fast-paced agency workflows.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative flex flex-col justify-between bg-brand-cream border border-brand-pink-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-plum-300 via-brand-gold to-brand-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-brand-gold-dark bg-brand-pink-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-pink-50 border border-brand-pink-200 flex items-center justify-center text-brand-plum-300 group-hover:text-brand-plum-800 group-hover:bg-brand-pink-100 transition-colors duration-300">
                    <Sparkle className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-brand-plum-900 tracking-tight leading-tight mb-1 group-hover:text-brand-plum-800 transition-colors">
                  {exp.company}
                </h3>
                
                {/* Role */}
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-brand-plum-600 mb-6">
                  {exp.role}
                </p>

                {/* Work list */}
                <ul className="space-y-3">
                  {exp.work.map((item, keyIdx) => (
                    <li key={keyIdx} className="flex gap-2 text-brand-charcoal-light font-sans text-xs leading-relaxed font-light">
                      <span className="text-brand-gold font-bold select-none text-[10px] mt-[2px]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Arrow Bottom */}
              <div className="mt-8 pt-4 border-t border-brand-pink-100 flex items-center justify-between text-brand-plum-300 group-hover:text-brand-gold duration-300">
                <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">Active Contributions</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
