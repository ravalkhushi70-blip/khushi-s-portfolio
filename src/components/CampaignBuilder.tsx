import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Play, RefreshCw, Send, ArrowRight, Lightbulb, FileSpreadsheet } from 'lucide-react';

export default function CampaignBuilder() {
  const [selectedNiche, setSelectedNiche] = useState('Skincare & Beauty');
  const [selectedObjective, setSelectedObjective] = useState('Brand Trust');
  const [selectedBudget, setSelectedBudget] = useState('Micro & Nano (Highly engaging)');
  const [generatedBlueprint, setGeneratedBlueprint] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const niches = ['Skincare & Beauty', 'Luxury Jewellery', 'Aesthetic Home & Living', 'Pet Fashion', 'Apparel & Lifestyle'];
  
  const objectives = [
    { label: 'Brand Trust & Education', value: 'Brand Trust' },
    { label: 'Viral Product Launch', value: 'Viral Launch' },
    { label: 'Community & UGC Drive', value: 'UGC Drive' },
    { label: 'High-Intent Sale Inquiries', value: 'Direct Inquiries' }
  ];

  const budgets = [
    'Micro & Nano (Highly engaging)',
    'Mid-Tier Creators (Extended reach)',
    'Macro / Elite (Authority & scale)'
  ];

  // Client-side marketing rules logic mapping to simulate strategist ideas
  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedBlueprint(null);

    setTimeout(() => {
      let conceptName = '';
      let campaignHook = '';
      let coreStrategy = '';
      let executionPoints: string[] = [];
      let trackedKpi = '';

      if (selectedNiche === 'Skincare & Beauty') {
        conceptName = selectedObjective === 'Brand Trust' ? 'The Bare-Skin Chronicles' : 'The Glow-Up Transition';
        campaignHook = selectedObjective === 'Brand Trust' 
          ? '"Stop hiding your acne. Let\'s heal it together." - Educational Ingredient Walkthroughs'
          : '"From dull to dewy in 3 steps." - High impact visual transitions';
        coreStrategy = 'Utilize a dual-layer strategy: "Skin-Educator" carousels detailing ingredients (e.g. Niacinamide) paired with unpolished, raw UGC morning routine reels.';
        executionPoints = [
          'Brief 12 micro-creators to record unfiltered skin textures in natural light.',
          'Develop 3 education carousels focused on skin barrier healing, not just selling.',
          'Launch a weekly AMA story sticker series hosted by clinic dermatologists.'
        ];
        trackedKpi = 'Profile Visits to Appointment Link CTR (Target: +15%)';
      } else if (selectedNiche === 'Luxury Jewellery') {
        conceptName = 'The Timeless Reflection';
        campaignHook = '"Your hands tell a story. Let\'s make it golden." - Premium aesthetic macro-shots';
        coreStrategy = 'Focus on "Aesthetic Desire Modeling" by positioning luxury rings and necklaces as daily confidence boosters rather than occasional wear.';
        executionPoints = [
          'Onboard 8 elegant mid-tier creators for aesthetic styling transitions ("Office Chic to Candlelit Dinner").',
          'Deploy an interactive Instagram Story poll series: "Classic Gold vs. Contemporary Silver".',
          'Create high-contrast product reels paired with trending lo-fi soundtracks.'
        ];
        trackedKpi = 'Direct Message Inquiries (Target: 150+ genuine conversations)';
      } else if (selectedNiche === 'Aesthetic Home & Living') {
        conceptName = 'Coming Home to Calm';
        campaignHook = '"Your desk isn\'t just furniture. It\'s where your ideas live."';
        coreStrategy = 'Leverage "Sensory Cozy Content". Presenting organic linen, cozy bedsheets, or ergonomic tables in warm morning sunshine to spark emotional relaxation.';
        executionPoints = [
          'Brief creators to shoot cinematic "Cozy Morning Desk Setup" vlog reels.',
          'Write aesthetic narrative copies focusing on mental wellbeing and workspace neatness.',
          'Design custom grid patterns mimicking neutral, high-end design magazines.'
        ];
        trackedKpi = 'Save Rate on Inspiration Posts (Target: +8% of total impressions)';
      } else if (selectedNiche === 'Pet Fashion') {
        conceptName = 'Dressed-Up Paws';
        campaignHook = '"Because your best friend deserves a winter wardrobe too."';
        coreStrategy = 'Focus heavily on community-driven humor and lighthearted UGC transitions. Utilize funny pet runway formats to trigger shareability.';
        executionPoints = [
          'Establish a gifting loop with 20 viral pet creators for organic dog-sweaters content.',
          'Launch a playful "Coziest Pet of the Week" photo competition across stories.',
          'Draft high-hook audio templates for pet parents to sync their dogs\' runway strut.'
        ];
        trackedKpi = 'Share Count & Saved Reels (Target: 3,000+ organic shares)';
      } else {
        conceptName = 'The Daily Uniform';
        campaignHook = '"Minimal effort. Maximum impact." - Styling 1 basic apparel piece 5 different ways.';
        coreStrategy = 'Deploy high-velocity "Wardrobe Capsule" content reels and carousel lookbooks, lowering buyer hesitation by displaying maximum versatility.';
        executionPoints = [
          'Brief 10 micro-influencers to shoot quick 15-second transitions styling the clothing.',
          'Whip up punchy copywriting showcasing quality of premium fabrics and stitching.',
          'Construct custom creative briefs highlighting direct call-to-actions to the shop link.'
        ];
        trackedKpi = 'Link-in-Bio Clicks & Add-to-Cart Activity';
      }

      setGeneratedBlueprint({
        niche: selectedNiche,
        objective: selectedObjective,
        budget: selectedBudget,
        concept: conceptName,
        hook: campaignHook,
        strategy: coreStrategy,
        deliverables: executionPoints,
        kpi: trackedKpi
      });
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <section id="campaign-builder" className="py-24 px-4 bg-brand-pink-50 relative overflow-hidden">
      {/* Editorial aesthetic lines */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-brand-pink-200/50 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              Interactive Tool
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Aesthetic <span className="font-semibold italic">Campaign Strategy Builder</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Test my strategic approach instantly. Customize a brand scenario below, and watch how I would structure a campaign strategy for your business.
          </p>
        </div>

        {/* Dynamic Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls - Left side */}
          <div className="lg:col-span-5 bg-brand-cream border border-brand-pink-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
            
            {/* Step 1: Niche */}
            <div>
              <label className="block font-serif text-base font-semibold text-brand-plum-900 mb-3">
                1. Select Brand Verticals
              </label>
              <div className="flex flex-wrap gap-2">
                {niches.map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedNiche(n)}
                    className={`font-sans text-xs px-4 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                      selectedNiche === n
                        ? 'bg-brand-plum-900 border-brand-plum-900 text-brand-cream shadow-sm'
                        : 'bg-brand-pink-50 border-brand-pink-200 text-brand-plum-900 hover:border-brand-gold'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Objective */}
            <div>
              <label className="block font-serif text-base font-semibold text-brand-plum-900 mb-3">
                2. Core Campaign Objective
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {objectives.map((obj) => (
                  <button
                    key={obj.value}
                    onClick={() => setSelectedObjective(obj.value)}
                    className={`font-sans text-xs text-left px-4 py-3 rounded-2xl border transition-all duration-300 font-medium ${
                      selectedObjective === obj.value
                        ? 'bg-brand-plum-900 border-brand-plum-900 text-brand-cream shadow-sm'
                        : 'bg-brand-pink-50 border-brand-pink-200 text-brand-plum-900 hover:border-brand-gold'
                    }`}
                  >
                    {obj.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Budget/Influencer Level */}
            <div>
              <label className="block font-serif text-base font-semibold text-brand-plum-900 mb-3">
                3. Creator Tier Priority
              </label>
              <div className="space-y-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBudget(b)}
                    className={`w-full font-sans text-xs text-left px-4 py-3 rounded-2xl border transition-all duration-300 font-medium flex items-center justify-between ${
                      selectedBudget === b
                        ? 'bg-brand-plum-900 border-brand-plum-900 text-brand-cream'
                        : 'bg-brand-pink-50 border-brand-pink-200 text-brand-plum-900 hover:border-brand-gold'
                    }`}
                  >
                    <span>{b}</span>
                    {selectedBudget === b && <Check className="w-4 h-4 text-brand-gold" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-brand-gold-dark text-brand-cream hover:bg-brand-plum-900 transition-colors py-4 rounded-full font-semibold shadow-md disabled:opacity-55"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Analyzing Competitor Trends...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Generate Custom Strategy
                </>
              )}
            </button>
          </div>

          {/* Output Display - Right side */}
          <div className="lg:col-span-7 h-full min-h-[450px] flex flex-col">
            <AnimatePresence mode="wait">
              {generatedBlueprint ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="bg-brand-cream border border-brand-pink-200 rounded-3xl p-6 sm:p-8 shadow-md flex-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Strategy header badge */}
                    <div className="flex items-center justify-between border-b border-brand-pink-200/60 pb-4 mb-6">
                      <div>
                        <span className="font-mono text-[9px] tracking-widest uppercase font-semibold text-brand-plum-300">
                          Live Strategy Generation
                        </span>
                        <h4 className="font-serif text-2xl font-bold text-brand-plum-900">
                          {generatedBlueprint.concept}
                        </h4>
                      </div>
                      <span className="font-serif text-xs italic text-brand-gold-dark font-medium">
                        Concept Pitch
                      </span>
                    </div>

                    {/* Creative Hook */}
                    <div className="mb-6 bg-brand-pink-100/50 rounded-2xl p-4 border border-brand-pink-200">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-600 font-bold block mb-1">
                        Recommended Viral Anchor Hook
                      </span>
                      <p className="font-serif text-sm italic font-semibold text-brand-plum-900">
                        {generatedBlueprint.hook}
                      </p>
                    </div>

                    {/* Core Strategy explanation */}
                    <div className="mb-6">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-600 font-bold block mb-2">
                        Core Strategy
                      </span>
                      <p className="font-sans text-xs text-brand-charcoal-light leading-relaxed font-light">
                        {generatedBlueprint.strategy}
                      </p>
                    </div>

                    {/* Executions / Deliverables checklist */}
                    <div className="mb-6">
                      <span className="font-sans text-[10px] uppercase tracking-wider text-brand-plum-600 font-bold block mb-3">
                        Strategic Execution Deliverables
                      </span>
                      <div className="space-y-2.5">
                        {generatedBlueprint.deliverables.map((item: string, i: number) => (
                          <div key={i} className="flex gap-2.5 items-start">
                            <span className="w-5 h-5 rounded-full bg-brand-pink-200/60 flex items-center justify-center text-brand-plum-800 text-[10px] font-bold shrink-0 select-none">
                              {i + 1}
                            </span>
                            <p className="font-sans text-xs text-brand-charcoal leading-relaxed font-light">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Primary KPI box */}
                  <div className="border-t border-brand-pink-200/60 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-brand-plum-300 font-bold block">
                        Primary Campaign KPI to track
                      </span>
                      <span className="font-sans text-xs font-semibold text-brand-plum-900 block mt-0.5">
                        🎯 {generatedBlueprint.kpi}
                      </span>
                    </div>
                    <button 
                      onClick={() => {
                        const emailBody = encodeURIComponent(`Hi Khushi,\n\nI just ran your Campaign Strategy Builder for my brand (${generatedBlueprint.niche}) under the objective "${generatedBlueprint.objective}".\n\nI would love to schedule a quick call to discuss the "${generatedBlueprint.concept}" campaign idea!\n\nBest regards,`);
                        window.location.href = `mailto:ravalkhushi70@gmail.com?subject=Inquiry: ${generatedBlueprint.concept} Campaign Concept&body=${emailBody}`;
                      }}
                      className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest bg-brand-plum-900 text-brand-cream px-4 py-2.5 rounded-full hover:bg-brand-gold transition-all duration-300 font-semibold"
                    >
                      <Send className="w-3 h-3" />
                      Discuss This Idea
                    </button>
                  </div>

                </motion.div>
              ) : (
                <div className="border border-dashed border-brand-plum-300/40 rounded-3xl p-8 flex-1 flex flex-col items-center justify-center text-center bg-brand-cream/40 min-h-[450px]">
                  <div className="w-16 h-16 rounded-full bg-brand-pink-100 flex items-center justify-center text-brand-gold-dark mb-4 border border-brand-pink-200">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-brand-plum-900 mb-2">
                    Strategy Panel Idle
                  </h4>
                  <p className="font-sans text-xs text-brand-charcoal-light max-w-sm leading-relaxed font-light mb-6">
                    Configure your brand niche, core target objective, and target influencer levels, then trigger the generator to build an instant customized creative brief.
                  </p>
                  <button
                    onClick={handleGenerate}
                    className="flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-widest bg-transparent border border-brand-plum-300 text-brand-plum-900 px-5 py-2.5 rounded-full hover:bg-brand-pink-100 duration-300 font-semibold"
                  >
                    Quick Load Sample Strategy
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
