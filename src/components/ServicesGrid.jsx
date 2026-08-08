import Link from 'next/link';
import { Search, Megaphone, Sparkles, Share2, ArrowRight } from 'lucide-react';
import { services } from '@/data/siteData';

const icons = { search: Search, megaphone: Megaphone, sparkles: Sparkles, share2: Share2 };

export default function ServicesGrid({
  variant = 'dark',
  sectionTitle,
  sectionLead,
  sectionLeadExtra,
}) {
  const isVisual = variant === 'visual';

  return (
    <section className={`services ${isVisual ? 'services--visual section-light' : 'section-dark'}`}>
      <div className="wrap">
        <div className="section-head section-head--center">
          <p className={`label ${isVisual ? '' : 'label--green'}`}>What We Do</p>
          <h2 className={isVisual ? 'text-dark' : ''}>
            {sectionTitle || 'End-to-end digital marketing solutions'}
          </h2>
          <p className={`lead lead--center ${isVisual ? '' : ''}`}>
            {sectionLead ||
              'We combine data, creativity, and technology to deliver measurable growth across every stage of your funnel.'}
          </p>
          {sectionLeadExtra && (
            <p className={`lead lead--center ${isVisual ? '' : ''}`}>{sectionLeadExtra}</p>
          )}
        </div>

        <div className={`services__grid ${isVisual ? 'services-showcase' : ''}`}>
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            if (isVisual) {
              return (
                <article key={service.title} className="service-showcase">
                  <div
                    className={`service-showcase__photo${service.imageFit === 'contain' ? ' service-showcase__photo--contain' : ''}`}
                    style={{
                      backgroundImage: `url(${service.image})`,
                      ...(service.imageBg ? { backgroundColor: service.imageBg } : {}),
                    }}
                  >
                    <span className="service-showcase__num">{String(i + 1).padStart(2, '0')}</span>
                    <div className="service-showcase__icon">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="service-showcase__body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href="/contact" className="service-showcase__link">
                      Get started <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article key={service.title} className="service-card">
                <span className="service-card__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="service-card__icon"><Icon size={22} strokeWidth={1.75} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href="/contact" className="service-card__link">
                  Learn more <ArrowRight size={16} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
