import { Check } from 'lucide-react';
import Button from './Button';
import { trustPoints, images } from '@/data/siteData';

export default function ServicesIntro({ showButtons = true }) {
  return (
    <section className="about section-light">
      <div className="wrap about__grid">
        <div className="about__visual">
          <img
            src={images.aboutTeam}
            alt="Marketing funnel — awareness to retention"
            className="about__photo about__photo--infographic"
            loading="lazy"
          />
          <div className="about__stat-card">
            <span className="about__stat-num">+32.6%</span>
            <span className="about__stat-text">Average client ROI growth</span>
          </div>
        </div>

        <div className="about__content">
          <p className="label">Digital Marketing That Grows Brands</p>
          <h2>Full-funnel digital marketing services</h2>
          <p className="lead">
            As the best marketing agency in Dubai, Brandlumeo combines strategy, creative,
            and performance execution to increase visibility, leads, and revenue for brands
            in Dubai, Kerala, and across the GCC.
          </p>
          <p className="lead">
            Whether you need SEO, paid media, or brand positioning, our team delivers the
            results you expect from the best digital marketing agency in Dubai.
          </p>
          <ul className="about__checks">
            {trustPoints.map((point) => (
              <li key={point}>
                <Check size={18} strokeWidth={2.5} />
                {point}
              </li>
            ))}
          </ul>
          {showButtons && (
            <div className="about__btns">
              <Button href="/services">Explore Services</Button>
              <Button href="/contact" variant="outline">Get a Free Consultation</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
