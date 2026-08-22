import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { portfolio } from '@/data/siteData';



export default function PortfolioGrid({ limit, detailed = false }) {
  const items = limit ? portfolio.slice(0, limit) : portfolio;
  if (detailed) {
    return (
      <div className="portfolio-detailed">
        {items.map((item) => (
          <article key={item.title} className="portfolio-detailed__card">
            <div className="portfolio-detailed__photo">
              <span className="portfolio-detailed__cat">{item.category}</span>
              {item.logo ? (
                <div className="portfolio-detailed__brand-logo" style={{ position: 'relative', width: 160, height: 64 }}>
                  <Image
                    src={item.logo}
                    alt={`${item.title} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="160px"
                    loading="lazy"
                  />
                </div>
              ) : (
                <span className="portfolio-detailed__brand-name">{item.title}</span>
              )}
            </div>
            <div className="portfolio-detailed__content">
              <div className="portfolio-detailed__head">
                <div>
                  <h3>{item.title}</h3>
                  <p className="portfolio-detailed__industry">{item.industry}</p>
                </div>
              </div>
              <p className="portfolio-detailed__desc">{item.description}</p>
              <div className="portfolio-detailed__meta">
                <span><MapPin size={14} /> {item.location}</span>
                <span><Clock size={14} /> {item.duration}</span>
              </div>
              <div className="portfolio-detailed__tags">
                {item.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <div className="portfolio-detailed__stats">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/portfolio" className="portfolio-detailed__link">
                View full case study <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    );
  }
  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article key={item.title} className="portfolio-card">
          <div className="portfolio-card__img portfolio-card__img--brand">
            <span className="portfolio-card__cat">{item.category}</span>
            {item.logo ? (
              <div className="portfolio-card__brand-logo" style={{ position: 'relative', width: 140, height: 56 }}>
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="140px"
                  loading="lazy"
                />
              </div>
            ) : (
              <span className="portfolio-card__brand-name">{item.title}</span>
            )}
          </div>
          <div className="portfolio-card__body">
            <h3>{item.title}</h3>
            <p className="portfolio-card__result">{item.result}</p>
            <Link href="/portfolio" className="portfolio-card__link">
              View case study <ArrowUpRight size={16} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}