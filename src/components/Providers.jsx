'use client';

import { LogoProvider } from '@/context/LogoContext';
import ScrollToTop from './ScrollToTop';

export default function Providers({ children }) {
  return (
    <LogoProvider>
      <ScrollToTop />
      {children}
    </LogoProvider>
  );
}
