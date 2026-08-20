import PageHero from '@/components/PageHero';
import BlogGrid from '@/components/BlogGrid';
import FinalCTA from '@/components/FinalCTA';
import { images } from '@/data/siteData';

export const metadata = {
  title: 'Blog — Best Advertising Agency in Dubai | Brandlumeo',
  description:
    'Marketing insights and growth playbooks from Brandlumeo — for brands in the UAE, Kerala, and GCC.',
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Growth Playbooks"
        title="Marketing insights from real client campaigns"
        subtitle="Notes and playbooks from campaigns we've actually run — not theory, things that worked for brands scaling across the UAE, Kerala, and the GCC."
        image={images.heroBlog}
      />
      <section className="section-light blog-page">
        <div className="wrap">
          <div className="section-head section-head--center">
            <p className="label">Growth Playbooks</p>
            <h2>Expert advice for Dubai &amp; GCC brands</h2>
            <p className="lead lead--center">
              Here's where we break down what's working right now — SEO,
              paid media, social growth, brand positioning — pulled straight
              from client campaigns instead of guesswork.
            </p>
            <p className="lead lead--center">
              Whether you're launching in Dubai or scaling across the GCC,
              these are the tactics we'd actually recommend, not just the
              obvious ones.
            </p>
          </div>
          <BlogGrid />
          <p className="lead lead--center blog-page__outro">
            Want hands-on help putting this into action? We can turn these
            ideas into a growth plan built specifically for your brand.
          </p>
        </div>
      </section>
      <FinalCTA
        title="Ready to plan your next campaign?"
        description="Book a free strategy call and let's start mapping out your next campaign."
      />
    </>
  );
}