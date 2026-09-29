import LegalModalShell from './LegalModalShell';
import { BUSINESS_NAME, PHONES } from '../../data/contactData';

export default function PrivacyPolicyModal({ onClose }) {
  return (
    <LegalModalShell title="Privacy Policy" onClose={onClose}>
      <p>
        {BUSINESS_NAME} (“we”, “us”) processes personal data in line with the UK General Data Protection
        Regulation (UK GDPR) and the Data Protection Act 2018. This notice explains what we collect, why we
        collect it, and your rights.
      </p>

      <h3 className="font-bold text-[#043263]">What we collect</h3>
      <p>
        When you request a quote we only collect details needed to respond: your name, UK telephone number,
        postcode or town, the service you need, and any notes you choose to add (for example stain type). We
        do not collect payment card details through this website.
      </p>

      <h3 className="font-bold text-[#043263]">Legal basis</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Consent</strong> — you tick the contact form checkbox before we message you about your enquiry.
        </li>
        <li>
          <strong>Legitimate interests</strong> — answering a phone call or WhatsApp you initiate, and delivering
          the booked clean.
        </li>
        <li>
          <strong>Contract</strong> — fulfilling a booking you have confirmed with us.
        </li>
      </ul>

      <h3 className="font-bold text-[#043263]">How we use and retain data</h3>
      <p>
        We use your details solely to quote, schedule, and complete cleaning work, and to follow up on
        satisfaction or re-clean requests. Enquiry messages are kept only as long as needed to complete the job
        and handle any complaint (typically up to 12 months), then deleted unless the law requires a longer
        record.
      </p>

      <h3 className="font-bold text-[#043263]">Sharing</h3>
      <p>
        We do not sell your data. WhatsApp (Meta) processes messages you send via wa.me according to their own
        terms. We do not load third-party advertising pixels unless you opt in to optional tracking cookies.
      </p>

      <h3 className="font-bold text-[#043263]">Your rights</h3>
      <p>
        You may request access, correction, erasure, restriction, or a portable copy of your data, and you may
        withdraw consent at any time. Contact us on {PHONES.map((p) => p.display).join(', ')}. You can also
        complain to the Information Commissioner’s Office (ICO) at{' '}
        <a
          href="https://ico.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0072CE] font-semibold underline focus:outline-none focus:ring-2 focus:ring-brand-blue rounded"
        >
          ico.org.uk
        </a>
        .
      </p>
    </LegalModalShell>
  );
}
