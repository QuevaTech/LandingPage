import { type MouseEvent, useEffect, useState } from 'react';
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

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href === '/publications') return location.pathname === '/publications';
    if (href === '/trng-demo') return location.pathname === '/trng-demo';
    return false;
  };

  const linkTarget = (href: string) => href.startsWith('#') && location.pathname !== '/' ? `/${href}` : href;

  const handleNavigationClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#') && location.pathname === '/') {
      event.preventDefault();
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
        <header className={`qt-nav ${scrolled ? 'qt-nav--scrolled' : ''} hidden md:block`}>
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
                  to={linkTarget(href)}
                  className={`qt-nav__btn ${isActive(href) ? 'qt-nav__btn--active' : ''}`}
                  onClick={(event) => handleNavigationClick(event, href)}
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

      {/* Mobile Hamburger Button - Hidden on desktop */}
      {isMobile && (
        <>
          <Link to="/" className="qt-mobile-brand" aria-label="QuevaTech ana sayfa">
            <img src="/qt-icon.svg" alt="" />
            <span>Queva<span>Tech</span></span>
          </Link>
          <button
            className="md:hidden qt-nav__menu-btn qt-nav__btn-icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </>
      )}

      {/* Mobile Menu Sidebar */}
      {isMobile && mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="qt-mobile-menu"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          <button
            className="qt-mobile-menu__backdrop"
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          />
          <aside className="qt-mobile-menu__panel">
            <div className="qt-mobile-menu__header flex items-center justify-between gap-4">
              <Link to="/" className="qt-brand qt-mobile-menu__brand" onClick={() => setMobileMenuOpen(false)}>
                <img src="/qt-icon.svg" alt="" className="qt-brand__icon" />
                <span className="qt-brand__text">
                  Queva<span className="qt-brand__t">Tech</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="qt-mobile-menu__close"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="qt-mobile-menu__nav" aria-label="Mobile navigation">
              {navLinks.map(({ key, href }, index) => (
                <Link
                  key={key}
                  to={linkTarget(href)}
                  className={`qt-mobile-menu__item ${isActive(href) ? 'is-active' : ''}`}
                  style={{ animationDelay: `${80 + index * 45}ms` }}
                  onClick={(event) => handleNavigationClick(event, href)}
                >
                  <span className="qt-mobile-menu__item-text">{t(key)}</span>
                  <svg className="qt-mobile-menu__item-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </nav>
            
            <div className="qt-mobile-menu__footer">
              <div className="qt-mobile-menu__lang" aria-label="Language selector">
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
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`qt-nav__btn-icon qt-mobile-menu__theme ${theme === 'dark' ? 'is-dark' : 'is-light'}`}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  {theme === 'dark' ? (
                    <g>
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </g>
                  ) : (
                    <g>
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </g>
                  )}
                </svg>
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
