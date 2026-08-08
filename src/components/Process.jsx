import { process } from '@/data/siteData';

export default function Process({ description }) {
  return (
    <section className="process section-light">
      <div className="wrap">
        <div className="section-head">
          <p className="label">How We Work</p>
          <h2>A proven framework for growth</h2>
          {description && <p className="lead">{description}</p>}
        </div>
        <div className="process__row">
          {process.map((item, i) => (
            <article key={item.step} className="process__item">
              <span className="process__step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {i < process.length - 1 && <span className="process__line" aria-hidden="true" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
