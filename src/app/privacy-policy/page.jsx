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
          <p>We collect information you provide directly to us when you request our services, fill out a form, or contact us.</p>
          <br/>
          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you.</p>
          <br/>
          <h3>3. Information Sharing</h3>
          <p>We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          <br/>
          <h3>4. Data Security</h3>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.</p>
          <br/>
          <p><em>Last updated: August 2026</em></p>
        </div>
      </section>
    </>
  );
}
