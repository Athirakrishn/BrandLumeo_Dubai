import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy | Brandlumeo',
  description: 'Privacy Policy of Brandlumeo.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Learn how we collect, use, and protect your data."
      />
      <section className="section-light">
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us — such as your name, email, phone number, and company details — when you request our services, fill out a form, or contact us. We also collect usage data automatically via Google Analytics (GA4), and advertising/conversion data via the Meta Pixel.</p>
          <br />
          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services (Meta Ads management, SEO, WordPress/Elementor development), respond to inquiries, and communicate with you about proposals or updates.</p>
          <br />
          <h3>3. Information Sharing</h3>
          <p>We do not sell your personal information. We do not share your personal information with third parties except as necessary to provide our services (e.g., Google Analytics, Meta/Facebook), or as required by law.</p>
          <br />
          <h3>4. Data Security</h3>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
          <br />
          <h3>5. Cookies</h3>
          <p>We use cookies and similar technologies to improve your experience on our site. See our <a href="/cookie-policy">Cookie Policy</a> for details.</p>
          <br />
          <h3>6. Your Rights</h3>
          <p>Depending on your location, you may have the right to access, correct, or request deletion of your personal data. Contact us using the details below to exercise these rights.</p>
          <br />
          <h3>7. Contact Us</h3>
          <p>BrandLumeo Marketing<br />Al Barsha 1, Dubai, United Arab Emirates<br />Phone: +971 50 549 1436</p>
          <br />
          <p><em>Last updated: August 2026</em></p>
        </div>
      </section>
    </>
  );
}