'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLogoIntro } from '@/context/LogoContext';

const LOGO_FULL = '/images/logo.png';
const LOGO_B = '/images/logo.png';

export default function Logo({ theme = 'dark', animate = true, showTagline = true }) {
  const { introComplete } = useLogoIntro();
  const [phase, setPhase] = useState(animate ? 'hidden' : 'full');

  useEffect(() => {
    if (!animate) {
      setPhase('full');
      return undefined;
    }
    if (!introComplete) {
      setPhase('hidden');
      return undefined;
    }
    setPhase('b');
    const expand = setTimeout(() => setPhase('full'), 120);
    const done = setTimeout(() => setPhase('full'), 850);
    return () => {
      clearTimeout(expand);
      clearTimeout(done);
    };
  }, [animate, introComplete]);

  const showBMark = phase === 'b';

  return (
    <Link
      href="/"
      className={`logo logo--${phase} logo--theme-${theme}`}
      aria-label="Brandlumeo home"
    >
      <div className="logo__mark-wrap" aria-hidden={phase === 'hidden'}>
        <div className="logo__clip">
          <img
            src={showBMark ? LOGO_B : LOGO_FULL}
            alt="Brandlumeo — Digital Marketing Agency"
            className={`logo__img ${showBMark ? 'logo__img--b' : 'logo__img--full'}`}
            draggable={false}
          />
        </div>
        <span className="logo__arrow-shimmer" />
      </div>
      {showTagline && (
        <span className={`logo__sub ${theme === 'light' ? 'logo__sub--light' : ''}`}>
          Digital Marketing Agency
        </span>
      )}
    </Link>
  );
}