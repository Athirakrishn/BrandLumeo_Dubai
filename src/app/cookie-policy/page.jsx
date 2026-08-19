import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Cookie Policy | Brandlumeo',
  description: 'Cookie Policy for Brandlumeo website.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Cookie Policy"
        subtitle="How we use cookies to improve your experience."
      />
      <section className="section-light">
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
          <h3>What Are Cookies</h3>
          <p>Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>
          <br/>
          <h3>How We Use Cookies</h3>
          <p>We use cookies to understand how you interact with our website, to improve your user experience, and for analytics and marketing purposes.</p>
          <br/>
          <h3>Types of Cookies We Use</h3>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements to you.</li>
          </ul>
          <br/>
          <h3>Managing Cookies</h3>
          <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
          <br/>
          <p><em>Last updated: August 2026</em></p>
        </div>
      </section>
    </>
  );
}
