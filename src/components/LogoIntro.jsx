'use client';

import { useState, useEffect } from 'react';
import { useLogoIntro, INTRO_KEY } from '@/context/LogoContext';

const LOGO_B = '/images/brandlumeo-logo-b.png';

export default function LogoIntro() {
  const { introComplete, setIntroComplete } = useLogoIntro();
  const [visible, setVisible] = useState(!introComplete);
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    if (introComplete) return undefined;

    document.body.classList.add('logo-intro-active');

    const pulse = setTimeout(() => setPhase('pulse'), 100);
    const exit = setTimeout(() => setPhase('exit'), 400);
    const finish = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('logo-intro-active');
      sessionStorage.setItem(INTRO_KEY, '1');
      setIntroComplete(true);
    }, 600);

    return () => {
      clearTimeout(pulse);
      clearTimeout(exit);
      clearTimeout(finish);
      document.body.classList.remove('logo-intro-active');
    };
  }, [introComplete, setIntroComplete]);

  if (!visible) return null;

  return (
    <div className={`logo-preloader logo-preloader--${phase}`} role="status" aria-label="Loading Brandlumeo">
      <div className="logo-preloader__backdrop" />
      <div className="logo-preloader__stage">
        <img
          src={LOGO_B}
          alt="Brandlumeo"
          className="logo-preloader__b"
          draggable={false}
        />
        <span className="logo-preloader__arrow" aria-hidden="true" />
        <span className="logo-preloader__ring" aria-hidden="true" />
      </div>
    </div>
  );
}
