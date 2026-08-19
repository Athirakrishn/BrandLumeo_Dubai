import Link from 'next/link';
import Logo from './Logo';
import { contact, social, footerServices, footerPages, footerResources } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <Logo theme="light" animate={false} showTagline={false} />
          <p>Premium digital marketing partner for growth-minded brands.</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Services</h4>
            <ul>
              {footerServices.map((s) => (
                <li key={s.label}>
                  <Link href={s.path}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              {footerPages.map((p) => (
                <li key={p.path}>
                  <Link href={p.path}>{p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              {footerResources.map((r) => (
                <li key={r.label}>
                  <Link href={r.path}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <address>
              <p>{contact.address}</p>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </p>
              <p>{contact.hours}</p>
              <p>{contact.responseTime}</p>
            </address>
            <div className="footer__social">
              {social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <p>&copy; 2026 Brandlumeo LLP. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/copyright">Copyright</Link>
        </div>
      </div>
    </footer>
  );
}
