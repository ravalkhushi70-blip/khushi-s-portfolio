import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Instagram, Send, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-brand-pink-50 relative overflow-hidden">
      {/* Decorative floral gradient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-pink-200 to-transparent opacity-40 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-pink-200 rounded-full px-3 py-1 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-spin-slow" />
            <span className="font-sans text-[10px] uppercase tracking-widest font-semibold text-brand-plum-800">
              Collaboration
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-brand-plum-900">
            Let’s build your <span className="font-semibold italic">next digital campaign</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light mt-4 font-light leading-relaxed">
            Interested in booking a creative brainstorm session, or hiring me for an internship? Leave a message below, and let’s grow online.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Details Left - 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-cream border border-brand-pink-200 p-8 rounded-[32px] shadow-sm relative overflow-hidden">
              <div className="absolute top-4 right-4 text-brand-gold/10 font-serif text-3xl">✦</div>

              <h3 className="font-serif text-2xl font-semibold text-brand-plum-900 tracking-tight mb-4">
                Let's Connect
              </h3>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light leading-relaxed font-light mb-8">
                I am highly responsive to professional agency outreach and brand marketing strategy inquiries. Feel free to shoot a direct email or connect across networks.
              </p>

              {/* Direct Link Badges */}
              <div className="space-y-4">
                
                {/* Email link */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-pink-100/50 hover:bg-brand-pink-100 border border-brand-pink-200/50 hover:border-brand-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-pink-200 flex items-center justify-center text-brand-plum-900 shadow-sm group-hover:text-brand-cream group-hover:bg-brand-plum-900 transition-colors">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-brand-plum-300 block">Direct Email</span>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-brand-plum-950 block">{PERSONAL_INFO.email}</span>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-pink-100/50 hover:bg-brand-pink-100 border border-brand-pink-200/50 hover:border-brand-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-pink-200 flex items-center justify-center text-brand-plum-900 shadow-sm group-hover:text-brand-cream group-hover:bg-brand-plum-900 transition-colors">
                    <Linkedin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-brand-plum-300 block">Professional Network</span>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-brand-plum-950 block">LinkedIn Profile</span>
                  </div>
                </a>

                {/* Instagram Link */}
                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-brand-pink-100/50 hover:bg-brand-pink-100 border border-brand-pink-200/50 hover:border-brand-gold transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cream border border-brand-pink-200 flex items-center justify-center text-brand-plum-900 shadow-sm group-hover:text-brand-cream group-hover:bg-brand-plum-900 transition-colors">
                    <Instagram className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold text-brand-plum-300 block">Aesthetic Snippets</span>
                    <span className="font-sans text-xs sm:text-sm font-semibold text-brand-plum-950 block">@khushiraval_</span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* Contact Form Right - 7 cols */}
          <div className="lg:col-span-7 bg-brand-cream border border-brand-pink-200 p-8 rounded-[32px] shadow-sm relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="form-name" className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-plum-800 mb-2">
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Khushi"
                        className="w-full font-sans text-xs px-4 py-3 bg-brand-pink-50 border border-brand-pink-200 focus:border-brand-gold focus:ring-0 rounded-xl outline-none text-brand-plum-950 transition-colors"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="form-email" className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-plum-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@agency.com"
                        className="w-full font-sans text-xs px-4 py-3 bg-brand-pink-50 border border-brand-pink-200 focus:border-brand-gold focus:ring-0 rounded-xl outline-none text-brand-plum-950 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Brand name */}
                  <div>
                    <label htmlFor="form-brand" className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-plum-800 mb-2">
                      Brand / Agency Name (Optional)
                    </label>
                    <input
                      id="form-brand"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="The Daily Co."
                      className="w-full font-sans text-xs px-4 py-3 bg-brand-pink-50 border border-brand-pink-200 focus:border-brand-gold focus:ring-0 rounded-xl outline-none text-brand-plum-950 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="form-message" className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-plum-800 mb-2">
                      Brief Strategy Requirement *
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Khushi, we are looking for creative and campaign strategy support for our wellness line..."
                      className="w-full font-sans text-xs px-4 py-3 bg-brand-pink-50 border border-brand-pink-200 focus:border-brand-gold focus:ring-0 rounded-xl outline-none text-brand-plum-950 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-widest bg-brand-plum-900 text-brand-cream hover:bg-brand-gold-dark hover:text-brand-cream py-4 rounded-full font-semibold transition-all duration-300 shadow-md disabled:opacity-55"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-brand-cream border-t-transparent rounded-full block"
                        />
                        Securely Dispatching Brief...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Strategy Proposal
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-12 text-center flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-serif text-2xl font-bold text-brand-plum-900 mb-3">
                    Campaign Brief Dispatched!
                  </h4>
                  
                  <p className="font-sans text-xs sm:text-sm text-brand-charcoal-light leading-relaxed max-w-sm mb-8 font-light">
                    Thank you, <strong className="font-bold">{name}</strong>. Your campaign parameters have been successfully packaged. Khushi will review the strategy draft and get back to you at <strong className="font-bold">{email}</strong> shortly.
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setBrand('');
                      setMessage('');
                    }}
                    className="flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest bg-brand-pink-100 hover:bg-brand-pink-200 border border-brand-pink-200 text-brand-plum-900 px-6 py-3 rounded-full transition-all duration-300 font-semibold"
                  >
                    Submit Another Brief
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
