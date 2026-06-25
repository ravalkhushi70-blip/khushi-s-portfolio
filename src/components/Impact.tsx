import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Sparkles } from 'lucide-react';
import { IMPACT_METRICS } from '../data';

export default function Impact() {
  return (
    <section className="py-24 px-4 bg-brand-pink-100 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-pink-200 to-transparent opacity-30 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <TrendingUp className="w-3.5 h-3.5 text-brand-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              Impact &amp; Performance
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Campaign <span className="font-semibold italic">Metrics &amp; Milestones</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Tangible results and deliverables generated throughout academic projects and agency internship contributions.
          </p>
        </div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {IMPACT_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="bg-brand-cream border border-brand-pink-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner Star ornament */}
              <div className="absolute top-4 right-4 text-brand-gold/20 font-serif text-2xl font-bold">
                ✦
              </div>

              <div>
                {/* Metric Large Value */}
                <span className="font-serif text-4xl sm:text-5xl font-bold text-brand-plum-900 block tracking-tight leading-none mb-3">
                  {metric.value}
                </span>

                {/* Metric Name */}
                <h3 className="font-serif text-base font-semibold text-brand-plum-800 tracking-wide mb-2">
                  {metric.label}
                </h3>

                {/* Metric Description */}
                <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed font-light">
                  {metric.description}
                </p>
              </div>

              {/* Lower indicator line */}
              <div className="mt-6 h-[2px] bg-brand-pink-200/50 rounded-full w-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-brand-plum-300 via-brand-gold to-brand-plum-600 rounded-full w-3/4"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-brand-cream border border-brand-pink-200 p-6 rounded-3xl text-center shadow-sm">
          <p className="font-sans text-xs tracking-wide text-brand-plum-900 font-medium">
            💡 <strong className="font-bold">Did you know?</strong> Every single metric is backed by research sheets, creative drafts, and campaign presentations which are available for review.
          </p>
        </div>

      </div>
    </section>
  );
}
