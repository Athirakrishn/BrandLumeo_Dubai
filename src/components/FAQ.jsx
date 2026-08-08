'use client';
import { useState } from 'react';
import Button from './Button';
import { faqs } from '@/data/siteData';

export default function FAQ({ intro }) {
  const [open, setOpen] = useState(0);
  const defaultIntro =
    "Quick answers to common questions from new clients. Can't find what you are looking for?";
  return (
    <section id="faq" className="faq section-light">
      <div className="wrap faq__grid">
        <div className="faq__intro">
          <p className="label">FAQ</p>
          <h2>Frequently asked questions</h2>
          <p className="lead">{intro || defaultIntro}</p>
          <Button href="/contact" variant="outline">Ask a Question</Button>
        </div>
        <div className="faq__list">
          {faqs.map((faq, i) => {
            const active = open === i;
            return (
              <article key={faq.question} className={`faq-item ${active ? 'faq-item--open' : ''}`}>
                <button
                  type="button"
                  className="faq-item__btn"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : i)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-item__icon" aria-hidden="true" />
                </button>
                <div className="faq-item__body">
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}