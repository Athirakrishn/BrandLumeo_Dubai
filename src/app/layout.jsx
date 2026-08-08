import '@/index.css';
import Script from 'next/script';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieConsent from '@/components/CookieConsent';

export const metadata = {
  title: {
    default: "Best Digital Marketing Agency in Dubai | Brandlumeo",
    template: '%s',
  },
  icons: {
    icon: '/images/logo.png',
  },
  verification: {
    google: "lC2q1FU10FlT44Nsj8biM3j66TnF-6pYmFJtWXwNOVs",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZYHDFGYHF2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZYHDFGYHF2');
          `}
        </Script>
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}