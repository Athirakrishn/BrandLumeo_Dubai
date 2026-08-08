'use client';

import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const INTRO_KEY = 'brandlumeo-logo-intro';

const LogoContext = createContext({
  introComplete: true,
  setIntroComplete: () => { },

});

export function LogoProvider({ children }) {
  const [introComplete, setIntroComplete] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setIntroComplete(true);
    }
  }, []);

  const value = useMemo(
    () => ({ introComplete, setIntroComplete }),
    [introComplete],
  );

  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
}

export function useLogoIntro() {
  return useContext(LogoContext);
}

export { INTRO_KEY };