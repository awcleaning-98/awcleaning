import LegalModalShell from './LegalModalShell';

export default function CookiePolicyModal({ onClose }) {
  return (
    <LegalModalShell title="Cookie Policy" onClose={onClose}>
      <p>
        This site is a static brochure and booking page. We use cookies and similar storage only as described
        below, in line with the Privacy and Electronic Communications Regulations (PECR).
      </p>

      <h3 className="font-bold text-[#043263]">Essential cookies</h3>
      <p>
        Essential storage is required for the site to remember your cookie choice. We save a small preference
        object in your browser’s localStorage (key: <code>aw-cookie-preferences</code>). This does not track
        you across other websites and cannot be switched off if you want to use the consent banner correctly.
      </p>

      <h3 className="font-bold text-[#043263]">Optional tracking cookies</h3>
      <p>
        Tracking or analytics cookies (for example visit counts or advertising measurement) are{' '}
        <strong>off by default</strong>. They are only set if you choose “Accept all” or enable the tracking
        toggle and save preferences. If you reject optional cookies, we do not load analytics or marketing
        scripts.
      </p>

      <h3 className="font-bold text-[#043263]">WhatsApp and phone links</h3>
      <p>
        Tapping a WhatsApp or telephone link opens an external app or site. Those services apply their own
        cookies and privacy rules once you leave this website.
      </p>

      <h3 className="font-bold text-[#043263]">Changing your mind</h3>
      <p>
        You can clear this site’s data in your browser settings, or use the cookie banner controls again after
        deleting localStorage. Rejecting optional cookies will not stop you requesting a quote.
      </p>
    </LegalModalShell>
  );
}
