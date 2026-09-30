import { useState } from 'react';
import { MessageCircle, Clock, MapPin, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PhoneLinks from './PhoneLinks';
import { DEFAULT_PHONE, DEFAULT_QUOTE_TEXT, waHref } from '../data/contactData';
import { useLegal } from '../context/LegalContext';

const FOCUS = 'focus:outline-none focus:ring-2 focus:ring-brand-blue';
const INPUT =
  'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all';

function validateQuoteField(name, value) {
  const trimmed = value.trim();

  switch (name) {
    case 'name':
      if (!trimmed) return 'Please enter your full name.';
      if (!/^[A-Za-z][A-Za-z' -]{1,79}$/.test(trimmed)) {
        return 'Enter a real name using letters, spaces, hyphens or apostrophes.';
      }
      return '';
    case 'phone': {
      const digits = trimmed.replace(/\D/g, '');
      if (!digits) return 'Please enter a contact phone number.';
      if (!/^(?:0\d{10}|44\d{10})$/.test(digits)) {
        return 'Enter a valid UK mobile number such as 07544 888012.';
      }
      return '';
    }
    case 'postcode':
      if (!trimmed) return 'Please enter your UK postcode or town.';
      if (!/^[A-Za-z0-9][A-Za-z0-9\s-]{1,39}$/.test(trimmed)) {
        return 'Use letters, numbers, spaces or hyphens only.';
      }
      return '';
    case 'notes':
      if (trimmed.length > 400) {
        return 'Keep additional details to 400 characters or fewer.';
      }
      return '';
    default:
      return '';
  }
}

export default function ContactSection() {
  const { openLegal } = useLegal();
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: 'Carpet Cleaning',
    roomCount: '1-2 Rooms',
    preferredTime: 'As Soon As Possible',
    notes: '',
  });

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFieldBlur = (event) => {
    const { name, value } = event.target;
    const message = validateQuoteField(name, value);
    if (!message) return;
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyConsent) return;

    const nextErrors = {
      name: validateQuoteField('name', formData.name),
      phone: validateQuoteField('phone', formData.phone),
      postcode: validateQuoteField('postcode', formData.postcode),
      notes: validateQuoteField('notes', formData.notes),
    };
    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setErrors(nextErrors);
      return;
    }

    const cleanedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      postcode: formData.postcode.trim(),
      service: formData.service,
      roomCount: formData.roomCount,
      preferredTime: formData.preferredTime,
      notes: formData.notes.trim(),
    };

    const message = `*New Cleaning Quote Request - AW Carpet Cleaning*
----------------------------------------
👤 *Name:* ${cleanedData.name || 'Not provided'}
📞 *Phone:* ${cleanedData.phone || 'Not provided'}
📍 *Postcode/Area:* ${cleanedData.postcode || 'Not provided'}
🧼 *Service Required:* ${cleanedData.service}
🏠 *Quantity/Rooms:* ${cleanedData.roomCount}
⏰ *Timeframe:* ${cleanedData.preferredTime}
📝 *Notes:* ${cleanedData.notes || 'None'}
----------------------------------------
_Sent from AW Carpet Cleaning UK Web App_`;

    window.open(waHref(DEFAULT_PHONE, message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Fast UK Quotes</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#043263] tracking-tight">
            Get Your Free, No-Obligation Quote
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Tell us what needs cleaning. Our technician will reply on WhatsApp within minutes with an exact price and available time slots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#043263] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 rounded-full bg-[#00B2FE]/20 blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-extrabold mb-4">WhatsApp Contact</h3>
              <p className="text-sm text-blue-50 mb-6 leading-relaxed">
                Prefer to speak with our cleaning team? WhatsApp either of our UK mobile numbers.
              </p>

              <PhoneLinks quoteText={DEFAULT_QUOTE_TEXT} />

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#00B2FE]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#00B2FE]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100 uppercase font-semibold">Working Hours</div>
                    <div className="text-sm font-bold text-white">Monday – Sunday: 8:00 AM – 8:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-[#00B2FE]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#00B2FE]" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-100 uppercase font-semibold">Service Coverage</div>
                    <div className="text-sm font-bold text-white">Nationwide UK Residential &amp; Commercial</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-[#043263] flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" />
                <span>Our 3-Point Guarantee</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>No deposit or upfront credit card needed.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>You inspect the cleaned carpets before settling payment.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  <span>Pet &amp; toddler friendly non-toxic detergents.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-[#043263] mb-2">
                Instant WhatsApp Quote Form
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-6">
                Fill in below and tick the privacy box to send your details directly into our technician&apos;s WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      maxLength="80"
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={INPUT}
                    />
                    {errors.name ? (
                      <p id="contact-name-error" className="mt-1 text-xs font-medium text-rose-700">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Contact Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      inputMode="tel"
                      maxLength="16"
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      className={INPUT}
                    />
                    {errors.phone ? (
                      <p id="contact-phone-error" className="mt-1 text-xs font-medium text-rose-700">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-postcode" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      UK Postcode / Town
                    </label>
                    <input
                      type="text"
                      id="contact-postcode"
                      name="postcode"
                      required
                      autoComplete="postal-code"
                      placeholder="e.g. M14 5LL or Manchester"
                      value={formData.postcode}
                      inputMode="text"
                      maxLength="40"
                      onChange={handleFieldChange}
                      onBlur={handleFieldBlur}
                      aria-invalid={Boolean(errors.postcode)}
                      aria-describedby={errors.postcode ? 'contact-postcode-error' : undefined}
                      className={INPUT}
                    />
                    {errors.postcode ? (
                      <p id="contact-postcode-error" className="mt-1 text-xs font-medium text-rose-700">
                        {errors.postcode}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Primary Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      aria-label="Primary service required"
                      value={formData.service}
                      onChange={handleFieldChange}
                      className={INPUT}
                    >
                      <option value="Carpet Cleaning">Carpet Cleaning</option>
                      <option value="Sofa & Couch Cleaning">Sofa &amp; Couch Cleaning</option>
                      <option value="Rug Cleaning">Rug Cleaning</option>
                      <option value="Staircase Carpet Cleaning">Staircase Carpet Cleaning</option>
                      <option value="Mattress Sanitisation">Mattress Sanitisation</option>
                      <option value="Car Seat & Interior Cleaning">Car Seat &amp; Interior Cleaning</option>
                      <option value="Full House Bundle Clean">Full House Bundle Clean</option>
                      <option value="End of Tenancy Carpet Clean">End of Tenancy Carpet Clean</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-quantity" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Quantity / Rooms
                    </label>
                    <select
                      id="contact-quantity"
                      name="roomCount"
                      aria-label="Quantity or number of rooms"
                      value={formData.roomCount}
                      onChange={handleFieldChange}
                      className={INPUT}
                    >
                      <option value="1 Room">1 Room</option>
                      <option value="2-3 Rooms">2 - 3 Rooms</option>
                      <option value="4+ Rooms / Full House">4+ Rooms / Full House</option>
                      <option value="1 Sofa / Couch">1 Sofa / Couch</option>
                      <option value="Sofa + Carpet Bundle">Sofa + Carpet Bundle</option>
                      <option value="Stairs & Landing Only">Stairs &amp; Landing Only</option>
                      <option value="Car Interior Seats">Car Interior Seats</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeframe" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Urgency / Preferred Date
                    </label>
                    <select
                      id="contact-timeframe"
                      name="preferredTime"
                      aria-label="Urgency or preferred date"
                      value={formData.preferredTime}
                      onChange={handleFieldChange}
                      className={INPUT}
                    >
                      <option value="As Soon As Possible">As Soon As Possible (Urgent)</option>
                      <option value="Within 48 Hours">Within 48 Hours</option>
                      <option value="This Coming Weekend">This Coming Weekend</option>
                      <option value="Next Week">Next Week</option>
                      <option value="End of Tenancy Date">End of Tenancy Move Out Date</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-notes" className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Specific Stains / Details (Optional)
                  </label>
                  <textarea
                    id="contact-notes"
                    name="notes"
                    rows="3"
                    maxLength="400"
                    placeholder="e.g. Red wine stain on beige lounge carpet, 3-seater grey fabric sofa with tea spill..."
                    value={formData.notes}
                    onChange={handleFieldChange}
                    onBlur={handleFieldBlur}
                    aria-invalid={Boolean(errors.notes)}
                    aria-describedby={errors.notes ? 'contact-notes-error' : 'contact-notes-help'}
                    className={`${INPUT} resize-none`}
                  />
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p id="contact-notes-help" className="text-[11px] text-slate-500">
                      Optional details help us price more accurately before we reply on WhatsApp.
                    </p>
                    <span className="text-[11px] text-slate-500">{formData.notes.length}/400</span>
                  </div>
                  {errors.notes ? (
                    <p id="contact-notes-error" className="mt-1 text-xs font-medium text-rose-700">
                      {errors.notes}
                    </p>
                  ) : null}
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <label htmlFor="contact-privacy" className="flex items-start gap-3 text-sm text-[#0F172A] cursor-pointer">
                    <input
                      type="checkbox"
                      id="contact-privacy"
                      name="privacyConsent"
                      required
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                      className={`mt-0.5 h-4 w-4 shrink-0 accent-[#043263] ${FOCUS}`}
                    />
                    <span>
                      I agree to the{' '}
                      <button
                        type="button"
                        onClick={() => openLegal('privacy')}
                        className={`font-semibold text-[#0072CE] underline ${FOCUS} rounded`}
                      >
                        Privacy Policy
                      </button>{' '}
                      and consent to AW Cleaning contacting me regarding my enquiry.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={!privacyConsent}
                  className={`w-full py-4 px-6 rounded-xl text-base font-black shadow-lg transition-all duration-200 flex items-center justify-center gap-3 ${FOCUS} ${
                    privacyConsent
                      ? 'bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer'
                      : 'bg-slate-300 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="w-6 h-6 fill-current" />
                  <span>Send Enquiry Straight to WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

                <p className="text-center text-[11px] text-slate-600 font-medium">
                  We never share your details. Opens WhatsApp only after you give privacy consent.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
