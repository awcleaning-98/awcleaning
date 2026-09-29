import { useState } from 'react';
import logoImg from '../assets/logo/aw-logo.webp';

function LogoFallback({ compact }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-black tracking-tight ${
        compact ? 'text-sm' : 'text-base sm:text-lg'
      }`}
    >
      <span className="inline-flex items-center justify-center rounded-lg bg-[#043263] text-white px-2 py-1 leading-none shadow-md">
        AW
      </span>
      <span className="text-[#043263]">
        Carpet <span className="text-[#0072CE]">Cleaning</span>
      </span>
    </span>
  );
}

export default function BrandLogo({
  variant = 'light',
  heightClass = 'h-11 sm:h-12',
  className = '',
}) {
  const [failed, setFailed] = useState(false);

  const shell =
    variant === 'dark'
      ? 'bg-white px-2.5 py-1.5 rounded-xl border border-white/80 shadow-md'
      : 'bg-white px-2 py-1 rounded-lg border border-slate-200/80 shadow-sm';

  if (failed) {
    return (
      <span className={`inline-flex items-center ${shell}`}>
        <LogoFallback compact={variant === 'dark'} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center justify-center ${shell}`}>
      <img
        src={logoImg}
        alt="AW Professional Carpet Cleaning logo"
        width="600"
        height="200"
        loading="eager"
        decoding="async"
        className={`${heightClass} w-auto object-contain drop-shadow-md brand-logo-img ${className}`}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
