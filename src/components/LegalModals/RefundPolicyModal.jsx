import LegalModalShell from './LegalModalShell';
import { BUSINESS_NAME } from '../../data/contactData';

export default function RefundPolicyModal({ onClose }) {
  return (
    <LegalModalShell title="Refund & Satisfaction Guarantee" onClose={onClose}>
      <p>
        {BUSINESS_NAME} offers a <strong>100% Satisfaction Guarantee</strong>: you inspect the cleaned carpets
        or upholstery first and pay only if you are happy. This policy sits alongside your statutory rights
        under the Consumer Rights Act 2015 (services must be provided with reasonable care and skill).
      </p>

      <h3 className="font-bold text-[#043263]">Pay only if you are happy</h3>
      <p>
        We do not take an upfront payment for standard domestic bookings. If you are not satisfied with the
        visible result at the end of the visit, tell the technician before they leave. You will not be charged
        until the issue is resolved or you accept the work.
      </p>

      <h3 className="font-bold text-[#043263]">Re-clean within 48 hours</h3>
      <p>
        If a treated area soils back or a treated stain reappears within 48 hours of the visit (and you have
        followed drying and aftercare advice), contact us and we will return to re-clean the affected area at
        no extra charge, subject to access being available.
      </p>

      <h3 className="font-bold text-[#043263]">When a refund or no-charge applies</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          We cannot reasonably complete the agreed work (for example unsafe access or equipment failure on our
          side).
        </li>
        <li>
          After a complimentary re-clean you remain unhappy with workmanship, and the service has not been
          provided with reasonable care and skill.
        </li>
      </ul>

      <h3 className="font-bold text-[#043263]">Limits</h3>
      <p>
        Permanent dye damage, burns, pet urine that has reached underlay, mould, or stains you did not
        disclose may not be fully removable. We will explain this before charging. The guarantee does not
        cover soiling that occurs after we leave (spills, pets, or foot traffic on a still-damp carpet).
      </p>

      <p className="text-xs text-slate-500">
        Nothing in this policy affects your legal rights as a UK consumer.
      </p>
    </LegalModalShell>
  );
}
