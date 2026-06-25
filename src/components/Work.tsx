import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, Compass, Award, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { CAMPAIGNS } from '../data';
import { CampaignCaseStudy } from '../types';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCampaignId, setExpandedCampaignId] = useState<string | null>(null);

  const categories = ['All', 'Beauty & Luxury', 'Home & Living', 'Lifestyle'];

  const filteredCampaigns = CAMPAIGNS.filter((campaign) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Beauty & Luxury') {
      return campaign.id === 'jewellery' || campaign.id === 'skincare';
    }
    if (selectedCategory === 'Home & Living') {
      return campaign.id === 'furniture' || campaign.id === 'bedsheet';
    }
    if (selectedCategory === 'Lifestyle') {
      return campaign.id === 'pet-clothing';
    }
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedCampaignId(expandedCampaignId === id ? null : id);
  };

  return (
    <section id="campaigns" className="py-24 px-4 bg-brand-cream relative overflow-hidden">
      {/* Editorial grid line */}
      <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-brand-pink-200/40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <span className="font-sans text-[11px] uppercase tracking-widest font-semibold text-brand-gold-dark">
                Case Studies
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
              Featured <span className="font-semibold italic">Work &amp; Campaigns</span>
            </h2>
          </div>

          {/* Categories Filters */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setExpandedCampaignId(null);
                }}
                className={`font-sans text-xs px-4 py-2 rounded-full border transition-all duration-300 font-medium ${
                  selectedCategory === cat
                    ? 'bg-brand-plum-900 border-brand-plum-900 text-brand-cream shadow-sm'
                    : 'bg-brand-pink-100/50 border-brand-pink-200 text-brand-plum-950 hover:border-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((campaign, idx) => {
              const isExpanded = expandedCampaignId === campaign.id;
              return (
                <motion.div
                  key={campaign.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-brand-cream border border-brand-pink-200/80 rounded-[32px] overflow-hidden hover:border-brand-pink-300 transition-all duration-300 shadow-sm"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Visual Thumb - 12 cols total */}
                    <div className="lg:col-span-5 relative h-72 lg:h-auto min-h-[300px] overflow-hidden group">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Dark/Warm vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-plum-950/40 via-transparent to-transparent"></div>
                      
                      {/* Decorative Label */}
                      <span className="absolute top-4 left-4 font-mono text-[9px] tracking-widest uppercase bg-brand-cream/90 backdrop-blur-sm border border-brand-pink-200 text-brand-plum-900 px-3 py-1 rounded-full font-bold">
                        {campaign.category}
                      </span>
                    </div>

                    {/* Meta & Details */}
                    <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Title & Tagline */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-brand-plum-900 tracking-tight leading-tight">
                              {campaign.title}
                            </h3>
                            <p className="font-serif text-sm italic text-brand-gold-dark mt-1">
                              {campaign.tagline}
                            </p>
                          </div>
                        </div>

                        {/* Summary Objective/Strategy split */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 border-t border-brand-pink-100 pt-6">
                          <div>
                            <div className="flex items-center gap-1.5 mb-2 text-brand-plum-800">
                              <Target className="w-4 h-4 shrink-0 text-brand-gold-dark" />
                              <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Objective</span>
                            </div>
                            <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed font-light">
                              {campaign.objective}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5 mb-2 text-brand-plum-800">
                              <Lightbulb className="w-4 h-4 shrink-0 text-brand-gold-dark" />
                              <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Strategy Blueprint</span>
                            </div>
                            <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed font-light">
                              {campaign.strategy}
                            </p>
                          </div>
                        </div>

                        {/* Collapsible details (Execution & Result) */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-brand-pink-100 pt-6 mt-6">
                                <div>
                                  <div className="flex items-center gap-1.5 mb-3 text-brand-plum-800">
                                    <Compass className="w-4 h-4 shrink-0 text-brand-gold-dark" />
                                    <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Execution Plan</span>
                                  </div>
                                  <ul className="space-y-2">
                                    {campaign.execution.map((step, k) => (
                                      <li key={k} className="flex gap-2 text-brand-charcoal-light font-sans text-xs leading-relaxed font-light">
                                        <span className="text-brand-gold font-bold select-none text-[10px] mt-[2px]">✦</span>
                                        <span>{step}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-brand-pink-100/40 rounded-2xl p-4 border border-brand-pink-200">
                                  <div className="flex items-center gap-1.5 mb-2.5 text-brand-plum-900">
                                    <Award className="w-4 h-4 shrink-0 text-brand-gold-dark" />
                                    <span className="font-sans text-[10px] uppercase tracking-wider font-bold">Quantified Result</span>
                                  </div>
                                  <p className="font-serif text-sm font-semibold text-brand-plum-900 leading-relaxed italic">
                                    &ldquo;{campaign.result}&rdquo;
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Expand CTA button */}
                      <div className="mt-8 pt-6 border-t border-brand-pink-100 flex items-center justify-between">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-brand-plum-300 font-bold">
                          Client Campaign Delivery
                        </span>
                        <button
                          onClick={() => toggleExpand(campaign.id)}
                          className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider bg-brand-pink-100 hover:bg-brand-pink-200 text-brand-plum-900 px-5 py-2.5 rounded-full transition-all duration-300 border border-brand-pink-200"
                        >
                          <span>{isExpanded ? 'Hide Brief' : 'Read Full Case Study'}</span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </motion.div>
                        </button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
