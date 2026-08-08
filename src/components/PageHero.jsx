export default function PageHero({ label, title, subtitle, image, tall = false }) {
  return (
    <section
      className={`page-hero ${tall ? 'page-hero--tall' : ''}`}
      style={{ '--page-hero-bg': `url(${image})` }}
    >
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="wrap page-hero__content">
        {label && <p className="label label--green">{label}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  );
}
