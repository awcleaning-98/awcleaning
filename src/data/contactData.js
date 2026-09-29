export const BUSINESS_NAME = 'AW Professional Carpet Cleaning';
export const AREA_SERVED = 'Homes and businesses across Greater Manchester, Leeds, Birmingham, Liverpool, Sheffield, Cheshire and surrounding UK regions';

export const PHONES = [
  {
    id: 'main',
    label: 'Main Line',
    display: '07544 888012',
    tel: '07544888012',
    e164: '447544888012',
  },
  {
    id: 'direct-2',
    label: 'Direct Line 2',
    display: '07391 869432',
    tel: '07391869432',
    e164: '447391869432',
  },
];

export const DEFAULT_PHONE = PHONES[0];

export const DEFAULT_QUOTE_TEXT =
  "Hi AW Carpet Cleaning, I'd like to get a free quote for cleaning services.";

export function telHref(phone) {
  return `tel:${phone.tel}`;
}

export function waHref(phone = DEFAULT_PHONE, text = DEFAULT_QUOTE_TEXT) {
  const base = `https://wa.me/${phone.e164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const COOKIE_STORAGE_KEY = 'aw-cookie-preferences';
