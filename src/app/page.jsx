import Hero from '@/components/Hero';
import ClientMarquee from '@/components/ClientMarquee';
import ServicesIntro from '@/components/ServicesIntro';
import ServicesGrid from '@/components/ServicesGrid';
import Process from '@/components/Process';
import Team from '@/components/Team';
import PortfolioGrid from '@/components/PortfolioGrid';
import FAQ from '@/components/FAQ';
import BlogGrid from '@/components/BlogGrid';
import FinalCTA from '@/components/FinalCTA';
import Button from '@/components/Button';

export const metadata = {
  title: "Best Digital Marketing Agency in Dubai | Brandlumeo",
  description:
    "SEO, Google Ads, Meta Ads, social media marketing, website development, and branding solutions for businesses in Dubai, the UAE, and Kerala.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Dubai | Brandlumeo",
    description:
      "Expert SEO, Google Ads, Meta Ads, social media marketing, website development, and branding solutions for businesses in Dubai, UAE.",
    url: "https://brandlumeo.site",
    siteName: "Brandlumeo",
    images: [
      {
        url: "https://brandlumeo.site/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Brandlumeo — Best Digital Marketing Agency in Dubai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Dubai | Brandlumeo",
    description:
      "Expert SEO, Google Ads, Meta Ads, social media marketing, website development, and branding solutions for businesses in Dubai, UAE.",
    images: ["https://brandlumeo.site/images/logo.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  "name": "Brandlumeo",
  "image": "https://brandlumeo.site/images/logo.png",
  "url": "https://brandlumeo.site",
  "telephone": "+971505491436",
  "email": "info@brandlumeo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Barsha 1",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "addressCountry": "AE"
  },
  "areaServed": [
    { "@type": "City", "name": "Dubai" },
    { "@type": "AdministrativeArea", "name": "United Arab Emirates" },
    { "@type": "AdministrativeArea", "name": "Kerala" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/brandlumeo/",
    "https://www.instagram.com/brandlumeo.ae/",
    "https://www.facebook.com/brandlumeo/"
  ],
  "priceRange": "$$"
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* H1 primary keyword should live inside Hero component */}
      <Hero />

      <ClientMarquee />

      <ServicesIntro />

      <section id="services-preview" className="home-section">
        <div className="wrap">
          <h2>Best Web Development Agency in Dubai</h2>
          <p className="lead">
            We design and build websites, online stores, and custom web apps
            that are genuinely fast, mobile-ready, and built to convert — not
            just look good.
          </p>

          <p className="lead">
            It's why businesses across the UAE keep coming back to us for
            their web projects, whether it's a simple brochure site or a
            full e-commerce build.
          </p>
        </div>

        <ServicesGrid variant="visual" />


        <div className="wrap home-section__cta">
          <Button href="/services" variant="outline">
            Explore All Services
          </Button>
        </div>
      </section>

      <Process />


      <section id="portfolio" className="section-light home-portfolio">
        <div className="wrap">
          <div className="home-preview__head">
            <div>
              <p className="label">Portfolio</p>
              <h2>Results that speak for themselves</h2>
              <p className="lead">
                Here's a look at the kind of work we do for clients
                across Kerala and the GCC.
              </p>
            </div>

            <Button href="/portfolio" variant="outline">
              View All Projects
            </Button>
          </div>

          <PortfolioGrid limit={3} detailed />

          <h2 style={{ marginTop: "2rem" }}>Web Design &amp; Development That Converts</h2>
          <p className="lead">
            Behind every project on this list is the same attention to
            detail — fast, secure builds that leave a good impression the
            moment someone lands on the page.
          </p>
        </div>
      </section>

      <section id="about">
        <Team />


      </section>

      <section id="blog" className="section-light home-blog">
        <div className="wrap">
          <div className="home-preview__head">
            <div>
              <p className="label">Insights</p>
              <h2>Marketing insights &amp; growth playbooks</h2>
              <p className="lead">
                Notes from our own campaigns — the things that worked, the
                things that didn't, and what we'd tell brands scaling
                across Kerala, the UAE, and the wider GCC.
              </p>
            </div>

            <Button href="/blog" variant="outline">
              Read All Articles
            </Button>
          </div>

          <BlogGrid limit={2} />
        </div>
      </section>

      <FAQ
        intro="A few quick answers before you reach out — if you've got something more specific in mind, the team's just a message away."
      />

      <FinalCTA />
    </>
  );
}