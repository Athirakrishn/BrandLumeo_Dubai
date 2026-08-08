'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { contact, images, faqs } from '@/data/siteData';

export default function ContactPage() {
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
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
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
            <button type="submit" className="btn btn--primary">
              Send Message
            </button>
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
