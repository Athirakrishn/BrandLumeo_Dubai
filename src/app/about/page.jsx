import { Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Team from '@/components/Team';
import Process from '@/components/Process';
import FinalCTA from '@/components/FinalCTA';
import { images, trustPoints } from '@/data/siteData';

export const metadata = {
  title: 'About — Best Marketing Company in Dubai | Brandlumeo',
  description:
    'Meet the team behind Brandlumeo — a full-funnel digital marketing agency serving brands across Dubai, the UAE, and Kerala.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Growth partners for brands across Dubai, Kerala & the GCC"
        subtitle="We combine data, creativity, and technology to deliver the kind of results that keep clients around for years, not just campaigns."
        image={images.heroAbout}
        tall
      />
      <section className="section-light about-page">
        <div className="wrap about-page__grid">
          <div className="about-page__text">
            <p className="label">Who We Are</p>
            <h2>A full-funnel growth agency</h2>
            <p className="lead">
              Brandlumeo works with growth-minded brands across Dubai, Kerala,
              and the wider GCC — handling everything from SEO and paid media
              to social, brand strategy, and website development under one
              roof.
            </p>
            <p className="lead">
              What keeps clients with us long-term isn't a single tactic —
              it's the combination of full-funnel thinking, honest reporting,
              and being genuinely accountable for the numbers we promise.
            </p>
            <ul className="about__checks">
              {trustPoints.map((point) => (
                <li key={point}>
                  <Check size={18} strokeWidth={2.5} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={images.strategy}
            alt="Strategy planning session at Brandlumeo"
            className="about-page__img"
            loading="lazy"
          />
        </div>
      </section>
      <section className="section-muted about-office">
        <div className="wrap about-office__grid">
          <img
            src={images.office}
            alt="Brandlumeo office workspace"
            className="about-office__img"
            loading="lazy"
          />
          <div>
            <p className="label">Our Approach</p>
            <h2>Built for accountability</h2>
            <p className="lead">
              Every campaign we run is tied to the numbers you actually
              care about — leads, revenue, ROAS, CAC . We report transparently
              and iterate weekly, so you're never left wondering what's
              working and what needs to change.
            </p>
          </div>
        </div>
      </section>
      <Team intro="The team behind Brandlumeo — strategists and builders who've been running growth campaigns across Kerala and the GCC for years." />
      <Process />
      <FinalCTA description="Curious what this could look like for your brand? Book a free strategy call and let's talk through your next phase of growth." />
    </>
  );
}