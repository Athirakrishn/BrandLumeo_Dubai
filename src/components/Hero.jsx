import { ArrowUpRight, TrendingUp } from 'lucide-react';
import Button from './Button';
import { heroFeatures, metrics, images } from '@/data/siteData';

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero__photo"
        style={{ backgroundImage: `url(${images.heroHome})` }}
        aria-hidden="true"
      />
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__shine" />
      </div>
      <div className="wrap hero__layout">
        <div className="hero__copy">
          <p className="label label--green">Dubai&apos;s Premier Growth Partner</p>
          <h1>Best Digital Marketing Agency in Dubai</h1>
          <span> for measurable brand growth</span>
          <p className="hero__desc">
            Best Digital Marketing Agency in Dubai providing expert SEO, Google Ads, Meta Ads,
            social media marketing, website development, and branding solutions for businesses.
          </p>
          <div className="hero__btns">
            <Button href="/contact">Get a Free Strategy Call</Button>
            <Button href="/portfolio" variant="secondary">View Our Work</Button>
          </div>
          <ul className="hero__features">
            {heroFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="hero__panel">
          <div className="hero__panel-main">
            <div className="hero__panel-head">
              <span>What We Deliver</span>
            </div>
            <div className="hero__panel-chart">
              {[38, 52, 45, 68, 58, 82, 74, 92, 86, 100, 94, 88].map((h, i) => (
                <div key={i} className="hero__bar" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="hero__panel-foot">
              <div>
                <small>Focus Area</small>
                <strong>Meta &amp; Google Ads</strong>
              </div>
              <div>
                <small>Approach</small>
                <strong>Data-Driven</strong>
              </div>
            </div>
          </div>
          <div className="hero__float hero__float--1">
            <TrendingUp size={20} />
            <div>
              <strong>SEO</strong>
              <span>Search Growth</span>
            </div>
          </div>
          <div className="hero__float hero__float--2">
            <ArrowUpRight size={18} />
            <div>
              <strong>Ads</strong>
              <span>Reach &amp; Conversions</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__metrics">
        <div className="wrap hero__metrics-inner">
          {metrics.map((m) => (
            <div key={m.label} className="hero__metric">
              <span className="hero__metric-val">{m.value}</span>
              <span className="hero__metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}