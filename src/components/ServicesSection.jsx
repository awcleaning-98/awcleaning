import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { DEFAULT_PHONE, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Carpets & Flooring',
    'Upholstery',
    'Rugs & Runners',
    'Sanitisation',
    'Automotive'
  ];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const createWhatsAppLink = (serviceName) => {
    const text = `Hi AW Carpet Cleaning, I am interested in getting a free quote for ${serviceName}. Could you let me know your availability?`;
    return waHref(DEFAULT_PHONE, text);
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 bg-[#F4F8FC] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Cleaning Solutions</span>
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043263] tracking-tight">
            Our Professional Cleaning Services
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            Covering residential homes, commercial premises, and rental properties across the UK with state-of-the-art steam extraction.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${FOCUS} ${
                  selectedCategory === cat
                    ? 'bg-[#043263] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge Header */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.alt}
                  width="700"
                  height="700"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#043263]/80 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 text-[#043263] shadow-md backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Authenticity Badge */}
                <div className="absolute bottom-3 right-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#25D366] text-slate-950 shadow-md flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Real Result</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#043263] group-hover:text-[#0072CE] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0072CE] mt-0.5 mb-2">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Key Service Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#25D366]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={createWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#043263] hover:bg-[#0072CE] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 ${FOCUS}`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#043263] to-[#0072CE] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Need Multiple Items Cleaned?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Bundle carpets, sofas, and stairs together for special package discounts across the UK!
            </p>
          </div>
          <a
            href={waHref(DEFAULT_PHONE, "Hi AW, I have multiple rooms/furniture pieces to clean. Can I get a discounted bundle quote?")}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5 ${FOCUS}`}
          >
            <MessageCircle className="w-5 h-5 fill-slate-950" />
            <span>Get Bundle Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
}
