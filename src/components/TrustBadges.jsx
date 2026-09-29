import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, ThumbsUp, MapPin, Sparkles } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Licensed & Insured',
      description: 'Comprehensive public liability coverage for complete customer peace of mind.',
      color: 'text-[#0072CE]',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: CreditCard,
      title: 'No Upfront Payments',
      description: 'Zero deposits or pre-charges required. You book with 100% confidence.',
      color: 'text-[#043263]',
      bg: 'bg-slate-50',
      border: 'border-slate-200'
    },
    {
      icon: ThumbsUp,
      title: "Pay Only If You're Happy",
      description: 'Our ironclad satisfaction guarantee: you inspect the work first before paying.',
      color: 'text-[#25D366]',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200'
    },
    {
      icon: MapPin,
      title: 'Local & Reliable Service',
      description: 'Punctual British cleaning specialists dedicated to prompt arrivals and care.',
      color: 'text-[#0072CE]',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200'
    },
    {
      icon: Sparkles,
      title: 'Safe & Effective Cleaning',
      description: 'Eco-friendly, child and pet-safe botanical and enzyme formulations.',
      color: 'text-[#00B2FE]',
      bg: 'bg-sky-50',
      border: 'border-sky-200'
    }
  ];

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative z-20 -mt-6 lg:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 lg:p-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">
            Our Ironclad Customer Promise
          </span>
          <h2 id="trust-heading" className="text-2xl sm:text-3xl font-black text-[#043263] mt-1">
            Why UK Customers Trust AW Cleaning
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {badges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-4 rounded-xl border ${badge.border} ${badge.bg} flex flex-col items-center text-center hover:shadow-md transition-all duration-200`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm mb-3 ${badge.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-extrabold text-[#043263] mb-1.5 leading-tight">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
