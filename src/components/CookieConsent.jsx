'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'brandlumeo-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        We use cookies for essential functionality and analytics. See our{' '}
        <a href="#">Cookie Policy</a>.
      </p>
      <div className="cookie-banner__actions">
        <button type="button" className="cookie-banner__decline" onClick={decline}>
          Decline
        </button>
        <button type="button" className="cookie-banner__accept" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
