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
          <br/>
          <h3>2. Services Description</h3>
          <p>Brandlumeo provides digital marketing, SEO, paid media, and brand strategy services. The specific terms of any project will be outlined in a separate agreement or proposal.</p>
          <br/>
          <h3>3. User Responsibilities</h3>
          <p>You are responsible for providing accurate information and cooperating with our team to facilitate the delivery of our services.</p>
          <br/>
          <h3>4. Limitation of Liability</h3>
          <p>Brandlumeo shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.</p>
          <br/>
          <p><em>Last updated: August 2026</em></p>
        </div>
      </section>
    </>
  );
}
