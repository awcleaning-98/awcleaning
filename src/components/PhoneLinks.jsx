import { MessageCircle } from 'lucide-react';
import { PHONES, waHref } from '../data/contactData';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';

export default function PhoneLinks({
  phones = PHONES,
  variant = 'dark',
  quoteText,
  compact = false,
}) {
  const isDark = variant === 'dark';
  const text = isDark ? 'text-white' : 'text-[#043263]';
  const muted = isDark ? 'text-blue-100' : 'text-slate-600';
  const row = isDark
    ? 'bg-white/10 hover:bg-white/15 border-white/15'
    : 'bg-white hover:bg-slate-50 border-slate-200';

  return (
    <ul className={`space-y-2 ${compact ? '' : ''}`}>
      {phones.map((phone) => (
        <li
          key={phone.id}
          className={`flex flex-wrap items-center justify-between gap-2 rounded-xl border px-3 py-2 ${row}`}
        >
          <div className="min-w-0">
            <p className={`text-[11px] font-semibold uppercase tracking-wide ${muted}`}>{phone.label}</p>
            <p className={`inline-flex items-center gap-1.5 font-black ${text}`}>
              {phone.display}
            </p>
          </div>
          <a
            href={waHref(phone, quoteText)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#25D366] text-slate-950 text-[11px] font-bold hover:bg-[#20bd5a] ${FOCUS}`}
            aria-label={`WhatsApp ${phone.label} ${phone.display}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
            WhatsApp
          </a>
        </li>
      ))}
    </ul>
  );
}
