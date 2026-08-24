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
      mobileMenuRef.current.style.animation = 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
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
        <button
          className="md:hidden qt-nav__menu-btn qt-nav__btn-icon"
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
      )}

      {/* Mobile Menu Sidebar */}
      {isMobile && mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="fixed inset-0 z-50 flex items-end bg-black/50"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative w-full max-w-xs flex-1 bg-surface p-6 shadow-2xl transform transition-transform duration-300 ease-out"
            style={{ transform: 'translateX(0)' }}>
            <div className="flex justify-between items-start mb-6">
              <Link to="/" className="qt-brand">
                <img src="/qt-icon.svg" alt="" className="qt-brand__icon h-8 w-8" />
                <span className="qt-brand__text text-lg font-bold">
                  Queva<span className="qt-brand__t">Tech</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="qt-nav__btn-icon text-fg3 hover:text-fg1 transition-colors"
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-4">
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  to={href}
                  className="block py-3 px-4 rounded-lg text-fg1 hover:bg-surface/50 hover:text-queva-signal transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Smooth scroll for anchor links
                    if (href.startsWith('#')) {
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-fg3/20">
              <div className="flex items-center space-x-3 mb-4">
                <button
                  onClick={() => setLang('tr')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${lang === 'tr' ? 'bg-queva-signal/20 text-queva-signal' : 'text-fg3 hover:bg-surface/50'} transition-colors`}
                >
                  TR
                </button>
                <span>/</span>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${lang === 'en' ? 'bg-queva-signal/20 text-queva-signal' : 'text-fg3 hover:bg-surface/50'} transition-colors`}
                >
                  EN
                </button>
              </div>
              
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full items-center justify-between px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${theme === 'dark' ? 'bg-queva-signal/20 text-queva-signal' : 'text-fg3 hover:bg-surface/50'}"
              >
                <span>
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  {theme === 'dark' ? (
                    <>
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}