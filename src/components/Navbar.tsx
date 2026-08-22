import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  lang: 'tr' | 'en';
  setLang: (lang: 'tr' | 'en') => void;
}

const navLinks = [
  { key: 'nav_home', href: '#' },
  { key: 'nav_products', href: '#products' },
  { key: 'nav_platform', href: '#platform' },
  { key: 'nav_solutions', href: '#solutions' },
  { key: 'nav_projects', href: '#projects' },
  { key: 'nav_youtube', href: '#youtube' },
  { key: 'nav_contact', href: '#contact' },
];

export function Navbar({ theme, setTheme, lang, setLang }: NavbarProps) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`qt-nav ${scrolled ? 'qt-nav--scrolled' : ''}`}>
      <div className="qt-nav__inner">
        <a href="#" className="qt-brand">
          <img src="/qt-icon.svg" alt="" className="qt-brand__icon" />
          <span className="qt-brand__text">
            Queva<span className="qt-brand__t">Tech</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-6 qt-nav__links">
          {navLinks.map(({ key, href }) => (
            <a key={key} href={href} className="qt-nav__link">{t(key)}</a>
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
            className="qt-theme"
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
            className="md:hidden p-2 ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-queva-midnight shadow-lg">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="block py-3 px-4 text-sm font-semibold text-white hover:text-queva-gold dark:hover:text-queva-gold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(key)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}