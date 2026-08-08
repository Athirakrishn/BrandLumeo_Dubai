import PageHero from '@/components/PageHero';
import ServicesGrid from '@/components/ServicesGrid';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import { images } from '@/data/siteData';

export const metadata = {
  title: 'Services — SEO Agency in Dubai | Brandlumeo',
  description:
    'Brandlumeo is the SEO agency in Dubai for full-funnel digital marketing — SEO, Paid Ads, Social Media, Brand Strategy & websites.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="SEO Agency in Dubai"
        title="Full-funnel digital marketing from your SEO agency in Dubai"
        subtitle="Technical SEO, paid ads, social, and brand strategy — built by a team that cares about rankings, but cares more about revenue."
        image={images.heroServices}
      />

      <ServicesGrid
        variant="visual"
        sectionTitle="End-to-end digital marketing solutions"
        sectionLead="We combine data, creativity, and technology to turn traffic into leads, and leads into revenue — at every stage of your funnel."
        sectionLeadExtra="From local SEO for a single storefront to enterprise campaigns spanning markets, our team builds strategies that actually scale across the UAE, Kerala, and the GCC."
      />

      <Process description="This four-step framework — discovery, strategy, execution, optimization — is the same one we run for every client, no matter the size of the campaign." />

      <FAQ intro="A few things clients usually ask before signing on. If yours isn't here, just reach out." />

      <FinalCTA description="Want to see what this could look like for your business? Book a free strategy call and let's talk numbers." />
    </>
  );
}