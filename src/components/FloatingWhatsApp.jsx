import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PHONES, DEFAULT_QUOTE_TEXT, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-6 sm:right-6">
      {panelOpen && (
        <div
          className="mb-3 w-[min(100vw-2.5rem,280px)] bg-white text-[#0F172A] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          role="dialog"
          aria-label="Choose a WhatsApp contact"
        >
          <div className="px-3 py-2 bg-[#043263] text-white flex items-center justify-between">
            <p className="text-xs font-bold">WhatsApp</p>
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className={`p-1 rounded ${FOCUS}`}
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <ul className="p-2 space-y-2">
            {PHONES.map((phone) => (
              <li key={phone.id} className="rounded-xl border border-slate-200 p-2">
                <p className="text-[11px] font-semibold uppercase text-slate-600">{phone.label}</p>
                <p className="text-sm font-black text-[#043263]">{phone.display}</p>
                <a
                  href={waHref(phone, DEFAULT_QUOTE_TEXT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-1.5 flex w-full items-center justify-center gap-1 py-1.5 rounded-lg bg-[#25D366] text-slate-950 text-[11px] font-bold ${FOCUS}`}
                  aria-label={`WhatsApp ${phone.label} ${phone.display}`}
                >
                  <MessageCircle className="w-3 h-3 fill-slate-950" />
                  WhatsApp
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showTooltip && !panelOpen && (
        <div className="mb-3 max-w-[240px] sm:max-w-xs bg-white text-[#043263] p-3 rounded-2xl shadow-2xl border border-slate-200/90 text-xs flex items-start gap-2.5">
          <div className="flex-1">
            <div className="flex items-center gap-1.5 font-bold text-[#0F172A]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block"></span>
              <span>Online Now • Quick Reply</span>
            </div>
            <p className="text-slate-700 mt-1 text-[11px] leading-tight">
              Tap to chat on WhatsApp with our team.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className={`text-slate-500 hover:text-slate-800 p-0.5 ${FOCUS} rounded`}
            aria-label="Dismiss WhatsApp tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <button
        type="button"
        id="floating-whatsapp-btn"
        onClick={() => {
          setPanelOpen((open) => !open);
          setShowTooltip(false);
        }}
        className={`relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${FOCUS} animate-pulse-whatsapp`}
        aria-expanded={panelOpen}
        aria-label="Open WhatsApp contact options"
      >
        {panelOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 fill-white text-white drop-shadow" />
        )}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center">
          <span className="w-2 h-2 bg-emerald-700 rounded-full animate-ping"></span>
        </span>
      </button>
    </div>
  );
}
