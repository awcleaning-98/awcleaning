import { MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import BrandLogo from './BrandLogo';
import PhoneLinks from './PhoneLinks';
import { AREA_SERVED, BUSINESS_NAME, DEFAULT_PHONE, DEFAULT_QUOTE_TEXT, waHref } from '../data/contactData';
import { useLegal } from '../context/LegalContext';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function Footer() {
  const { openLegal } = useLegal();

  const serviceAreas = [
    'Greater Manchester', 'Salford & Eccles', 'Stockport', 'Bolton & Bury',
    'Leeds & West Yorkshire', 'Bradford', 'Wakefield', 'Huddersfield',
    'Birmingham & Solihull', 'Wolverhampton', 'Coventry', 'Dudley',
    'Liverpool & Merseyside', 'Chester & Cheshire', 'Sheffield & South Yorkshire'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Cleaning Services', href: '#services' },
    { name: 'Before & After Transformations', href: '#gallery' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Get Free Quote', href: '#contact' }
  ];

  const servicesList = [
    'Carpet Steam Cleaning',
    'Fabric Sofa & Couch Cleaning',
    'Oriental & Area Rug Wash',
    'Staircase Carpet Revival',
    'Mattress Deep Sanitisation',
    'Car Interior & Vehicle Seats',
    'End of Tenancy Carpet Cleans'
  ];

  const legalLinks = [
    { key: 'privacy', label: 'Privacy Policy' },
    { key: 'terms', label: 'Terms & Conditions' },
    { key: 'cookies', label: 'Cookie Policy' },
    { key: 'refund', label: 'Refund Policy' },
  ];

  return (
    <footer className="bg-[#021e3c] text-slate-300 pt-16 pb-12 border-t border-[#043263]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className={`inline-block rounded-xl ${FOCUS}`}>
              <BrandLogo variant="dark" />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {BUSINESS_NAME} is a UK mobile carpet, upholstery, and fabric steam extraction service. We deliver
              showroom freshness to your doorstep. Registered trading name displayed for UK advertising
              transparency.
            </p>

            <PhoneLinks quoteText={DEFAULT_QUOTE_TEXT} />

            <a
              href={waHref(DEFAULT_PHONE, DEFAULT_QUOTE_TEXT)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-[#25D366] hover:text-emerald-300 text-sm font-bold ${FOCUS} rounded`}
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#021e3c]" />
              Instant WhatsApp on any of the numbers above
            </a>

            <div className="flex items-center gap-2.5 text-slate-300 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-slate-300" />
              <span>Mon – Sun: 8:00 AM – 8:00 PM</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`hover:text-white transition-colors rounded ${FOCUS}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Specialist Services
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesList.map((service) => (
                <li key={service}>
                  <a href="#services" className={`text-slate-300 hover:text-white transition-colors rounded ${FOCUS}`}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              Our Guarantee
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                <span>Pay Only If You&apos;re Happy</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                We never demand upfront payments. Inspect your clean carpets and upholstery first before paying.
                Re-clean within 48 hours — see our Refund Policy.
              </p>
            </div>

            <div className="text-xs text-slate-300">
              <span className="text-white font-semibold">100% Licensed &amp; Insured</span>
              <p className="text-[11px] mt-0.5">Comprehensive UK Public Liability Protection.</p>
            </div>
          </div>
        </div>

        <div className="py-8 border-b border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#00B2FE]" />
            <span>UK Service Coverage &amp; Local Areas</span>
          </h2>
          <p className="text-xs text-slate-300 mb-3">{AREA_SERVED}.</p>
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-[11px] text-slate-200"
              >
                Carpet Cleaning {area}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col gap-4">
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            {legalLinks.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => openLegal(item.key)}
                className={`text-slate-200 hover:text-white font-semibold underline-offset-2 hover:underline ${FOCUS} rounded`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved. Trading in the United Kingdom.
            </p>
            <div className="flex items-center gap-1 text-slate-300">
              <span>Cleaner carpets, happier homes across the UK</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
