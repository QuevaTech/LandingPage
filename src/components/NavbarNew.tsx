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
  { key: 'nav_home', href: '/', icon: 'home' },
  { key: 'nav_products', href: '#products', icon: 'box' },
  { key: 'nav_platform', href: '#platform', icon: 'cpu' },
  { key: 'nav_solutions', href: '/publications', icon: 'book-open' },
  { key: 'nav_trng_demo', href: '/trng-demo', icon: 'flask' },
  { key: 'nav_projects', href: '#projects', icon: 'folder' },
  { key: 'nav_youtube', href: '#youtube', icon: 'tv' },
  { key: 'nav_contact', href: '#contact', icon: 'phone' },
];

export function NavbarNew({ theme, setTheme, lang, setLang }: NavbarProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
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
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      {!isMobile && (
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
            </div>
          </div>
        </header>
      )}

      {/* Mobile Bottom Navigation - Modern */}
      {isMobile && (
        <nav className="qt-mobile-bottom-nav">
          <div className="qt-mobile-bottom-nav__content">
            {navLinks.map(({ key, href }, index) => (
              <Link
                key={key}
                to={href}
                className={`qt-mobile-bottom-nav__item ${isActive(href) ? 'is-active' : ''}`}
                onClick={() => {
                  handleMobileLinkClick(href);
                }}
              >
                {/* Icon would go here - for now using text */}
                <span className="qt-mobile-bottom-nav__icon">
                  {/* Simple icon representation - in real implementation, use proper icons */}
                  {index === 0 && '🏠'}
                  {index === 1 && '📦'}
                  {index === 2 && '💻'}
                  {index === 3 && '📚'}
                  {index === 4 && '🧪'}
                  {index === 5 && '📁'}
                  {index === 6 && '📺'}
                  {index === 7 && '📞'}
                </span>
                <span className="qt-mobile-bottom-nav__label">{t(key)}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Mobile Menu - Sidebar (Alternative to bottom nav) */}
      {!isMobile && mobileMenuOpen && (
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
    </>
  );
}