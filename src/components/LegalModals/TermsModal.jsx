import LegalModalShell from './LegalModalShell';
import { BUSINESS_NAME } from '../../data/contactData';

export default function TermsModal({ onClose }) {
  return (
    <LegalModalShell title="Terms & Conditions" onClose={onClose}>
      <p>
        These terms apply when you book a cleaning visit with {BUSINESS_NAME}. By confirming a booking you
        agree to the following service and payment terms.
      </p>

      <h3 className="font-bold text-[#043263]">Service agreement</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Quotes given by phone or WhatsApp are estimates based on the information you provide. The technician
          may adjust the price on site if the job size, fabric type, or soiling differs from the description.
        </li>
        <li>
          You (or an authorised adult) must be present to grant access, confirm the work, and inspect the
          result before payment.
        </li>
        <li>
          We use professional hot-water extraction and fabric-safe products. Some older, unstable dyes or
          previously damaged fibres may not return to a “new” appearance; we will advise you before proceeding
          where this is apparent.
        </li>
      </ul>

      <h3 className="font-bold text-[#043263]">Payment terms</h3>
      <p>
        We do not take deposits or upfront card payments through this website. Payment is due on completion,
        after you have inspected the work, by cash or card as agreed with the technician. No charge is taken
        if you are not satisfied and we cannot resolve the issue under our guarantee (see Refund Policy).
      </p>

      <h3 className="font-bold text-[#043263]">Cancellation</h3>
      <p>
        Please give at least 24 hours’ notice to cancel or reschedule. Repeated no-shows may result in us
        declining future bookings. Statutory rights under the Consumer Rights Act 2015 remain unaffected.
      </p>

      <h3 className="font-bold text-[#043263]">Limitation of liability</h3>
      <p>
        We hold public liability insurance for our work. We are not liable for pre-existing damage, colour
        migration in non-colourfast fabrics, or items you have not disclosed (for example, electrical items
        left under cushions). Nothing in these terms limits liability for death or personal injury caused by
        negligence, or for other liability that cannot be excluded under UK law.
      </p>
    </LegalModalShell>
  );
}
