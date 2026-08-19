import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms & Conditions | Brandlumeo',
  description: 'Terms and Conditions for using Brandlumeo services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="Please read these terms and conditions carefully."
      />
      <section className="section-light">
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using our website and services, you agree to be bound by these Terms & Conditions.</p>
          <br />
          <h3>2. Services Description</h3>
          <p>Brandlumeo provides digital marketing services including Meta/Facebook Ads management, SEO, WordPress/Elementor web development, paid media, and brand strategy. The specific scope, deliverables, and pricing for any project will be outlined in a separate agreement or proposal with the client.</p>
          <br />
          <h3>3. User Responsibilities</h3>
          <p>You are responsible for providing accurate information and cooperating with our team to facilitate the delivery of our services.</p>
          <br />
          <h3>4. Client Engagements</h3>
          <p>Performance metrics, campaign results, and case study figures referenced on this website are illustrative of past work and do not guarantee similar results for future clients, as outcomes depend on factors such as budget, industry, and market conditions. Payment terms, timelines, and cancellation policies will be specified in individual client agreements.</p>
          <br />
          <h3>5. Intellectual Property</h3>
          <p>All content on this website — including text, graphics, logos, and design — is the property of Brandlumeo unless otherwise stated, and may not be used without permission.</p>
          <br />
          <h3>6. Limitation of Liability</h3>
          <p>Brandlumeo shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
          <br />
          <h3>7. Governing Law</h3>
          <p>These terms are governed by the laws applicable in the United Arab Emirates.</p>
          <br />
          <h3>8. Contact Us</h3>
          <p>Brandlumeo Marketing<br />Al Barsha 1, Dubai, United Arab Emirates<br />Phone: +971 50 549 1436</p>
          <br />
          <p><em>Last updated: August 2026</em></p>
        </div>
      </section>
    </>
  );
}