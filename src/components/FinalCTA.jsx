import Button from './Button';

export default function FinalCTA({ title, description }) {
  return (
    <section className="cta">
      <div className="cta__bg" aria-hidden="true" />
      <div className="wrap cta__inner">
        <h2>{title || 'Ready to scale your revenue?'}</h2>
        <p>
          {description ||
            'Schedule a strategy call to review your funnel and identify quick wins for growth.'}
        </p>
        <Button href="/contact" variant="white">Get a Proposal</Button>
      </div>
    </section>
  );
}
