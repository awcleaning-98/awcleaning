import { createContext, useCallback, useContext, useState } from 'react';

const LegalContext = createContext(null);

export function LegalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null);

  const openLegal = useCallback((key) => setActiveModal(key), []);
  const closeLegal = useCallback(() => setActiveModal(null), []);

  return (
    <LegalContext.Provider value={{ activeModal, openLegal, closeLegal }}>
      {children}
    </LegalContext.Provider>
  );
}

export function useLegal() {
  const ctx = useContext(LegalContext);
  if (!ctx) {
    throw new Error('useLegal must be used within LegalProvider');
  }
  return ctx;
}
