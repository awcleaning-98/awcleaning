import { useState } from 'react';
import { Cookie } from 'lucide-react';
import { COOKIE_STORAGE_KEY } from '../data/contactData';
import { useLegal } from '../context/LegalContext';

const defaultPrefs = {
  essential: true,
  tracking: false,
};

function readStoredPrefs() {
  try {
    const raw = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function persistPrefs(prefs) {
  localStorage.setItem(
    COOKIE_STORAGE_KEY,
    JSON.stringify({
      ...prefs,
      essential: true,
      decided: true,
      updatedAt: new Date().toISOString(),
    })
  );
}

function getInitialCookieState() {
  if (typeof window === 'undefined') {
    return { visible: false, tracking: false };
  }

  const stored = readStoredPrefs();
  if (stored?.decided) {
    return { visible: false, tracking: Boolean(stored.tracking) };
  }

  return { visible: true, tracking: false };
}

export default function CookieBanner() {
  const { openLegal } = useLegal();
  const initialState = getInitialCookieState();
  const [visible, setVisible] = useState(initialState.visible);
  const [tracking, setTracking] = useState(initialState.tracking);

  const closeWith = (prefs) => {
    persistPrefs(prefs);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] p-3 sm:p-4 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-white text-[#0F172A] border border-slate-200 rounded-2xl shadow-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#043263] text-white items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 id="cookie-banner-title" className="text-sm sm:text-base font-extrabold text-[#043263]">
              Cookie preferences
            </h2>
            <p id="cookie-banner-desc" className="mt-1 text-xs sm:text-sm text-slate-600">
              We use essential storage to remember this choice. Optional tracking cookies stay off unless you
              opt in.{' '}
              <button
                type="button"
                onClick={() => openLegal('cookies')}
                className="font-semibold text-[#0072CE] underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
              >
                Read our Cookie Policy
              </button>
              .
            </p>

            <div className="mt-3 space-y-2">
              <label className="flex items-center justify-between gap-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                <span className="font-semibold text-[#0F172A]">Essential cookies (always on)</span>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Essential cookies are always enabled"
                  className="h-4 w-4 accent-[#043263]"
                />
              </label>
              <label className="flex items-center justify-between gap-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                <span className="font-semibold text-[#0F172A]">Optional tracking / analytics cookies</span>
                <input
                  type="checkbox"
                  checked={tracking}
                  onChange={(event) => setTracking(event.target.checked)}
                  aria-label="Enable optional tracking cookies"
                  className="h-4 w-4 accent-[#0072CE] focus:outline-none focus:ring-2 focus:ring-brand-blue"
                />
              </label>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => closeWith({ ...defaultPrefs, tracking: true })}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#043263] text-white text-xs sm:text-sm font-bold hover:bg-[#07488c] focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => closeWith({ ...defaultPrefs, tracking: false })}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white text-[#043263] border border-slate-300 text-xs sm:text-sm font-bold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => closeWith({ ...defaultPrefs, tracking })}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#0072CE] text-white text-xs sm:text-sm font-bold hover:bg-[#043263] focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                Save preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
