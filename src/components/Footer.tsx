import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface FooterColProps {
  title: string;
  children: React.ReactNode;
}

function FooterCol({ title, children }: FooterColProps) {
  return (
    <div className="qt-foot__col">
      <h4 className="qt-foot__h">{title}</h4>
      {children}
    </div>
  );
}

function FooterLink({ children, to, href }: { children: React.ReactNode; to?: string; href?: string }) {
  if (href) {
    return <a className="qt-foot__link" href={href}>{children}</a>;
  }
  return <Link className="qt-foot__link" to={to || '#'}>{children}</Link>;
}

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: 'https://instagram.com/quevatech',
      label: 'Instagram',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.428a5.918 5.918 0 0 0-2.134 1.39A5.918 5.918 0 0 0 .49 4.951C.266 5.46.144 6.033.11 6.98.075 7.929.062 8.336.062 11.957c0 3.621.013 4.028.048 4.976.034.947.156 1.521.38 2.029a5.918 5.918 0 0 0 1.389 2.134 5.918 5.918 0 0 0 2.134 1.389c.508.224 1.082.346 2.029.38.948.035 1.355.048 4.976.048 3.621 0 4.028-.013 4.976-.048.947-.034 1.521-.156 2.029-.38a5.918 5.918 0 0 0 2.134-1.389 5.918 5.918 0 0 0 1.389-2.134c.224-.508.346-1.082.38-2.029.035-.948.048-1.355.048-4.976 0-3.621-.013-4.028-.048-4.976-.034-.947-.156-1.521-.38-2.029a5.918 5.918 0 0 0-1.389-2.134A5.918 5.918 0 0 0 19.938.49c-.508-.224-1.082-.346-2.029-.38C16.961.013 16.554 0 12.933 0h-.916zm-.076 1.626c3.534 0 3.95.013 5.343.048.781.035 1.204.166 1.486.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.241.705.276 1.486.035 1.394.048 1.81.048 5.343 0 3.534-.013 3.95-.048 5.343-.035.781-.166 1.204-.276 1.486a2.477 2.477 0 0 1-.598.92 2.477 2.477 0 0 1-.92.598c-.282.11-.705.241-1.486.276-1.394.035-1.81.048-5.343.048-3.534 0-3.95-.013-5.343-.048-.781-.035-1.204-.166-1.486-.276a2.477 2.477 0 0 1-.92-.598 2.477 2.477 0 0 1-.598-.92c-.11-.282-.241-.705-.276-1.486-.035-1.394-.048-1.81-.048-5.343 0-3.534.013-3.95.048-5.343.035-.781.166-1.204.276-1.486.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.241 1.486-.276 1.394-.035 1.81-.048 5.343-.048z" />
          <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
      ),
    },
    {
      href: 'https://x.com/quevatech',
      label: 'X (Twitter)',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com/company/quevatech2',
      label: 'LinkedIn',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.328C3.965 1 2 2.985 2 5.337v13.326C2 21.015 3.965 23 6.328 23h11.34c2.363 0 4.328-1.985 4.328-4.337V5.337C22 2.985 20.031 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      href: 'https://www.youtube.com/@QuevaTech',
      label: 'YouTube',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.504 2.504 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.504 2.504 0 0 1 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="qt-foot" role="contentinfo">
      <div className="qt-foot__inner">
        <div className="qt-foot__col">
          <div className="qt-brand qt-brand--foot">
            <img src="/qt-icon.svg" alt="" className="qt-brand__icon" />
            <span className="qt-brand__text">Queva<span className="qt-brand__t">Tech</span></span>
          </div>
          <p className="qt-foot__tag">{t('footer_tagline')}</p>
        </div>

        <FooterCol title={t('footer_menu_quick')}>
          <FooterLink to="#products">{t('footer_nav_products')}</FooterLink>
          <FooterLink to="#platform">{t('footer_nav_solutions')}</FooterLink>
          <FooterLink to="/publications">{t('footer_nav_blog')}</FooterLink>
          <FooterLink to="#contact">{t('footer_nav_contact')}</FooterLink>
        </FooterCol>

        <FooterCol title={t('footer_menu_legal')}>
          <FooterLink href="privacy-policy.html">{t('footer_nav_privacy')}</FooterLink>
          <FooterLink href="terms-of-service.html">{t('footer_nav_terms')}</FooterLink>
        </FooterCol>

        <FooterCol title={t('footer_menu_contact')}>
          <a className="qt-foot__link" href="mailto:info@queva.tech">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            info@queva.tech
          </a>

          <h4 className="qt-foot__h" style={{ marginTop: 24 }}>{t('footer_menu_social')}</h4>
          <div className="qt-foot__social">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} className="qt-foot__icon" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </FooterCol>
      </div>

      <div className="qt-foot__bottom">
        <p>{t('footer_copyright')}</p>
        <p className="qt-foot__disclaimer">{t('footer_academic_disclaimer')}</p>
      </div>
    </footer>
  );
}