'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { contact, images, faqs } from '@/data/siteData';

const WEB3FORMS_ACCESS_KEY = '5f7aa5fb-b0af-4907-b384-76f9f62a8575';

export default function ContactPage() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `New inquiry from ${formData.get('name')} via brandlumeo.site`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHero
        label="Contact"
        title="Let's talk growth"
        subtitle="Schedule a strategy call or send us a message — we respond within 2 business hours."
        image={images.heroContact}
      />
      <section className="section-light contact-page">
        <div className="wrap contact-page__grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send a message</h2>
            <p className="lead">
              Tell us about your brand and goals. We&apos;ll get back to you shortly.
            </p>
            <div className="contact-form__row">
              <label>
                Full Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@company.com" required />
              </label>
            </div>
            <label>
              Company
              <input type="text" name="company" placeholder="Company name" />
            </label>
            <label>
              Message
              <textarea name="message" rows={5} placeholder="How can we help you grow?" required />
            </label>

            {/* Honeypot field to reduce spam — kept hidden from real users */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p style={{ color: '#16a34a', marginTop: '12px' }}>
                Thanks! Your message has been sent — we&apos;ll get back to you within 2 business hours.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#dc2626', marginTop: '12px' }}>
                Something went wrong. Please try again, or email us directly at{' '}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>.
              </p>
            )}
          </form>
          <aside className="contact-info">
            <img
              src={images.contactSide}
              alt="Brandlumeo team"
              className="contact-info__img"
              loading="lazy"
            />
            <div className="contact-info__cards">
              <div className="contact-info__card">
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <div className="contact-info__card">
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </div>
              </div>
              <div className="contact-info__card">
                <MapPin size={20} />
                <div>
                  <strong>Address</strong>
                  <p>{contact.address}</p>
                </div>
              </div>
              <div className="contact-info__card">
                <Clock size={20} />
                <div>
                  <strong>Working Hours</strong>
                  <p>{contact.hours}</p>
                  <p className="contact-info__note">{contact.responseTime}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="section-muted contact-faq">
        <div className="wrap">
          <h2>Quick answers</h2>
          <div className="contact-faq__grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="contact-faq__item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}