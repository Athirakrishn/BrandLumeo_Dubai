'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { contact, navLinks } from '@/data/siteData';

function isActive(pathname, path) {
  if (path === '/') return pathname === '/';
  return pathname === path || pathname.startsWith(`${path}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <div className="header-bar">
        <div className="wrap header-bar__inner">
          <a href={`mailto:${contact.email}`} className="header-bar__item">
            <Mail size={14} /> {contact.email}
          </a>
          <a href={contact.phoneHref} className="header-bar__item">
            <Phone size={14} /> {contact.phone}
          </a>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="wrap header__inner">
          <Logo animate showTagline={false} />
          <nav className="header__nav" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={isActive(pathname, link.path) ? 'active' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header__right">
            <Button href="/contact" className="header__cta btn--sm">
              Get a Proposal
            </Button>
            <button
              type="button"
              className="header__toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}>
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={isActive(pathname, link.path) ? 'active' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/contact" onClick={() => setMenuOpen(false)}>
          Get a Free Strategy Call
        </Button>
      </div>
    </>
  );
}
