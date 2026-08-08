import PageHero from '@/components/PageHero';
import PortfolioGrid from '@/components/PortfolioGrid';
import FinalCTA from '@/components/FinalCTA';
import { images } from '@/data/siteData';

export const metadata = {
  title: 'Portfolio — Best Digital Marketing Company in Dubai | Brandlumeo',
  description:
    'Case studies from the best digital marketing company in Dubai — real campaigns and results across Kerala and the GCC.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Best Digital Marketing Company in Dubai"
        title="Case studies from the best digital marketing company in Dubai"
        subtitle="Real campaigns, real numbers — a look at how we've helped brands grow across the UAE, Kerala, and the GCC."
        image={images.heroPortfolio}
        tall
      />

      <section className="section-light portfolio-page">
        <div className="wrap">
          <div className="section-head section-head--center">
            <p className="label">Client Results</p>
            <h2>Proven work from Dubai&apos;s growth experts</h2>
            <p className="lead lead--center">
              Clients stick with us because the numbers hold up — from SEO
              and paid media to full-funnel brand campaigns that scale past
              the first quarter.
            </p>
            <p className="lead lead--center">
              Every case study below follows the same standard: transparent
              reporting, KPIs we're accountable for, and growth that
              compounds month over month.
            </p>
          </div>

          <PortfolioGrid detailed />

          <p className="lead lead--center portfolio-page__outro">
            Want to be the next one on this list? One strategy call is
            usually enough to map out what growth could look like for you.
          </p>
        </div>
      </section>

      <FinalCTA
        title="Work with the best digital marketing company in Dubai"
        description="Book a free consultation and let's talk through where your brand stands — and where it could go."
      />
    </>
  );
}