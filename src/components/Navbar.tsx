import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  lang: 'tr' | 'en';
  setLang: (lang: 'tr' | 'en') => void;
}

const navLinks = [
  { key: 'nav_home', href: '/' },
  { key: 'nav_products', href: '#products' },
  { key: 'nav_platform', href: '#platform' },
  { key: 'nav_solutions', href: '/publications' },
  { key: 'nav_trng_demo', href: '/trng-demo' },
  { key: 'nav_projects', href: '#projects' },
  { key: 'nav_youtube', href: '#youtube' },
  { key: 'nav_contact', href: '#contact' },
];

export function Navbar({ theme, setTheme, lang, setLang }: NavbarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Animate mobile menu on open/close
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      mobileMenuRef.current.style.animation = 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    }
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/publications') return location.pathname === '/publications';
    return false;
  };

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    // Smooth scroll for anchor links
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`qt-nav ${scrolled ? 'qt-nav--scrolled' : ''}`}>
      <div className="qt-nav__inner">
        <Link to="/" className="qt-brand">
          <img src="/qt-icon.svg" alt="" className="qt-brand__icon" />
          <span className="qt-brand__text">
            Queva<span className="qt-brand__t">Tech</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center qt-nav__links">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              to={href}
              className={`qt-nav__btn ${isActive(href) ? 'qt-nav__btn--active' : ''}`}
              onClick={() => handleMobileLinkClick(href)}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="qt-nav__util">
          <div className="qt-lang">
            <button
              onClick={() => setLang('tr')}
              className={lang === 'tr' ? 'is-active' : ''}
            >
              TR
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'is-active' : ''}
            >
              EN
            </button>
          </div>

          <button
            className="qt-theme qt-nav__btn-icon"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden qt-nav__btn-icon qt-nav__menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Modern Animated */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="md:hidden qt-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="qt-mobile-menu__backdrop" onClick={() => setMobileMenuOpen(false)} />
          <div className="qt-mobile-menu__panel">
            <div className="qt-mobile-menu__header">
              <Link to="/" className="qt-brand qt-mobile-menu__brand" onClick={() => setMobileMenuOpen(false)}>
                <img src="/qt-icon.svg" alt="" className="qt-brand__icon" />
                <span className="qt-brand__text">
                  Queva<span className="qt-brand__t">Tech</span>
                </span>
              </Link>
            </div>
            <nav className="qt-mobile-menu__nav">
              {navLinks.map(({ key, href }, index) => (
                <Link
                  key={key}
                  to={href}
                  className="qt-mobile-menu__item"
                  style={{ animationDelay: `${index * 60}ms` }}
                  onClick={() => handleMobileLinkClick(href)}
                >
                  <span className="qt-mobile-menu__item-text">{t(key)}</span>
                  <svg className="qt-mobile-menu__item-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>
            <div className="qt-mobile-menu__footer">
              <div className="qt-lang qt-mobile-menu__lang">
                <button
                  onClick={() => setLang('tr')}
                  className={lang === 'tr' ? 'is-active' : ''}
                >
                  TR
                </button>
                <span>/</span>
                <button
                  onClick={() => setLang('en')}
                  className={lang === 'en' ? 'is-active' : ''}
                >
                  EN
                </button>
              </div>
              <button
                className="qt-theme qt-nav__btn-icon qt-mobile-menu__theme"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}