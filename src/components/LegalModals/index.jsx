import { useLegal } from '../../context/LegalContext';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsModal from './TermsModal';
import CookiePolicyModal from './CookiePolicyModal';
import RefundPolicyModal from './RefundPolicyModal';

export default function LegalModals() {
  const { activeModal, closeLegal } = useLegal();

  if (activeModal === 'privacy') return <PrivacyPolicyModal onClose={closeLegal} />;
  if (activeModal === 'terms') return <TermsModal onClose={closeLegal} />;
  if (activeModal === 'cookies') return <CookiePolicyModal onClose={closeLegal} />;
  if (activeModal === 'refund') return <RefundPolicyModal onClose={closeLegal} />;
  return null;
}
