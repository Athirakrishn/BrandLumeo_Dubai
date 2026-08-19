import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Copyright | Brandlumeo',
  description: 'Copyright information for Brandlumeo.',
};

export default function CopyrightPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Copyright"
        subtitle="Copyright information and intellectual property rights."
      />
      <section className="section-light">
        <div className="wrap" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
          <h3>Intellectual Property Rights</h3>
          <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Brandlumeo LLP or its content suppliers and is protected by international copyright laws.</p>
          <br/>
          <h3>Use of Content</h3>
          <p>You may not reproduce, distribute, modify, or create derivative works of any content from this website without express written permission from Brandlumeo LLP.</p>
          <br/>
          <h3>Trademarks</h3>
          <p>The Brandlumeo name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Brandlumeo LLP.</p>
          <br/>
          <p><em>&copy; 2026 Brandlumeo LLP. All rights reserved.</em></p>
        </div>
      </section>
    </>
  );
}
