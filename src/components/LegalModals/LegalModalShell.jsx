import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function LegalModalShell({ title, onClose, children }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/65 p-0 sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="relative w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white text-[#0F172A] rounded-t-2xl sm:rounded-2xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 bg-white">
          <h2 id="legal-modal-title" className="text-lg sm:text-xl font-extrabold text-[#043263]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#043263] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label={`Close ${title}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-5 py-5 space-y-4 text-sm leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </div>
  );
}
