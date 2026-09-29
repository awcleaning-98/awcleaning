import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Sparkles, CheckCircle, Clock, Award, Star } from 'lucide-react';
import carpetBefore from '../assets/before-after/carpet-before.webp';
import carpetAfter from '../assets/before-after/carpet-after.webp';
import { DEFAULT_PHONE, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function HeroSection() {
  const whatsappUrl = waHref(
    DEFAULT_PHONE,
    'Hello AW Carpet Cleaning! I would like to get a free quote for cleaning my carpets/upholstery.'
  );

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F4F8FC] to-[#e8f3fc] pt-8 pb-16 lg:pt-16 lg:pb-24"
    >
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#00B2FE]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#0072CE]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content & Conversion CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top UK Trust Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#043263]/10 border border-[#043263]/20 mb-6 text-xs sm:text-sm font-semibold text-[#043263]"
            >
              <Sparkles className="w-4 h-4 text-[#00B2FE]" />
              <span>United Kingdom's #1 Rated Carpet &amp; Upholstery Care</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#043263] tracking-tight leading-[1.15]"
            >
              Professional Carpet Cleaning Services <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#043263] via-[#0072CE] to-[#00B2FE] bg-clip-text text-transparent">
                Across the UK
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-slate-700 max-w-2xl font-medium leading-relaxed"
            >
              <span className="font-bold text-[#043263]">AW Cleaning</span> delivers deep steam extraction for carpets, sofas, rugs and upholstery. A cleaner home feels better, with fast drying times, real before-and-after proof and zero upfront payment.
            </motion.p>

            {/* Highlighted Guarantees */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 text-sm font-bold text-[#043263]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#25D366]" />
                <span>No Upfront Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#25D366]" />
                <span>Pay Only If You're Happy</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0072CE]" />
                <span>Fully Licensed &amp; Insured</span>
              </div>
            </motion.div>

            {/* CTA Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* WhatsApp Primary CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 group ${FOCUS}`}
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <div className="text-left">
                  <div className="text-xs font-normal text-emerald-100 uppercase tracking-wider">Fast Response</div>
                  <div className="text-base font-bold leading-tight">Free WhatsApp Quote</div>
                </div>
              </a>

              {/* View Before & After Proof */}
              <a
                href="#gallery"
                id="hero-gallery-btn"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-[#043263] bg-white hover:bg-slate-50 border-2 border-[#043263]/20 hover:border-[#043263] rounded-xl shadow-sm transition-all duration-200 ${FOCUS}`}
              >
                <span>View Before &amp; After Proof</span>
                <span className="text-[#0072CE] font-black">&rarr;</span>
              </a>
            </motion.div>

            {/* UK Social Proof Quick Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">5.0 / 5.0</span>
                <span>(180+ UK Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-[#0072CE]" />
                <span>Fast 2-Hour Dry Time</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                <Award className="w-4 h-4 text-[#0072CE]" />
                <span>Pet &amp; Child Safe Formulas</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Transformation Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-white p-3.5 shadow-2xl border border-slate-200/70"
            >
              {/* Badge: Live Transformation */}
              <div className="absolute top-6 left-6 z-20 bg-[#043263] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>REAL UK RESULT</span>
              </div>

              {/* Side-by-Side Visual Card */}
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden relative">
                {/* Before Image */}
                <div className="relative group overflow-hidden">
                  <img
                    src={carpetBefore}
                    alt="Living room carpet before professional cleaning UK"
                    width="350"
                    height="350"
                    loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1024px) 20rem, 50vw"
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-3 left-3 bg-red-600/90 text-white text-xs font-black uppercase px-2.5 py-1 rounded shadow">
                    BEFORE
                  </span>
                </div>

                {/* After Image */}
                <div className="relative group overflow-hidden">
                  <img
                    src={carpetAfter}
                    alt="Living room carpet after professional cleaning UK"
                    width="350"
                    height="350"
                    loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  sizes="(min-width: 1024px) 20rem, 50vw"
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-900/10" />
                  <span className="absolute bottom-3 right-3 bg-[#25D366] text-slate-900 text-xs font-black uppercase px-2.5 py-1 rounded shadow">
                    AFTER
                  </span>
                </div>
              </div>

              {/* Card Footer Summary */}
              <div className="mt-3 p-3 bg-[#F4F8FC] rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#043263]">Deep Steam Extraction</p>
                  <p className="text-[11px] text-slate-500">100% Tough Stain &amp; Odour Removal</p>
                </div>
                <a
                  href="#gallery"
                  className={`text-xs font-bold text-[#0072CE] hover:text-[#043263] flex items-center gap-1 rounded ${FOCUS}`}
                >
                  View Gallery &rarr;
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
