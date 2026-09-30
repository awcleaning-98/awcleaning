import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PHONES, DEFAULT_PHONE, DEFAULT_QUOTE_TEXT, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const whatsappUrl = waHref(DEFAULT_PHONE, DEFAULT_QUOTE_TEXT);

  return (
    <>
      <div className="bg-[#043263] text-white text-xs py-2 px-4 border-b border-[#0072CE]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#25D366] text-slate-950">
                100% SATISFACTION
              </span>
              <span className="text-slate-100 font-medium">
                No Upfront Payments • Pay Only If You&apos;re Happy!
              </span>
            </div>
            <span className="hidden md:inline text-xs text-blue-100">
              Covering Homes &amp; Businesses Across the UK
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-3 gap-y-1.5">
            {PHONES.map((phone) => (
              <span key={phone.id} className="inline-flex items-center gap-1.5">
                <span className="text-blue-100 font-semibold whitespace-nowrap">{phone.label}:</span>
                <span className="font-black text-white">{phone.display}</span>
                <a
                  href={waHref(phone, DEFAULT_QUOTE_TEXT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#25D366] font-bold hover:text-emerald-300 ${FOCUS} rounded`}
                  aria-label={`WhatsApp ${phone.label} ${phone.display}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
            : 'bg-white py-3.5 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              id="navbar-logo"
              className={`flex items-center gap-2 group rounded-lg ${FOCUS}`}
            >
              <BrandLogo variant="light" />
            </a>

            <nav className="hidden lg:flex items-center space-x-7" aria-label="Primary">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold text-[#043263] hover:text-[#0072CE] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00B2FE] hover:after:w-full after:transition-all after:duration-200 rounded ${FOCUS}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-cta"
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 ${FOCUS}`}
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>Get WhatsApp Quote</span>
              </a>
            </div>

            <div className="flex sm:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-[#25D366] text-white rounded-lg shadow-sm ${FOCUS}`}
                aria-label="WhatsApp AW Carpet Cleaning on the main line"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white" />
              </a>

              <button
                type="button"
                id="navbar-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg text-[#043263] hover:bg-slate-100 ${FOCUS}`}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-semibold text-[#043263] hover:text-[#0072CE] hover:bg-slate-50 rounded-lg transition-colors ${FOCUS}`}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                {PHONES.map((phone) => (
                  <div
                    key={phone.id}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 text-sm font-bold text-[#043263]"
                  >
                    <span>{phone.label}</span>
                    <span>{phone.display}</span>
                  </div>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl shadow ${FOCUS}`}
                >
                  <MessageCircle className="w-5 h-5 fill-white text-white" />
                  <span>Get Instant WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
