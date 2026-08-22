import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

const trustItems = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    titleKey: 'trust_github_title',
    descKey: 'trust_github_desc',
    chips: [{ label: 'github.com/QuevaTech', variant: 'gray' as const }],
    link: 'https://github.com/QuevaTech',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    titleKey: 'trust_vt_title',
    descKey: 'trust_vt_desc',
    chips: [{ label: '0 / 70+ Tehdit Tespit', variant: 'green' as const }],
    link: 'https://www.virustotal.com',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    titleKey: 'trust_nist_title',
    descKey: 'trust_nist_desc',
    chips: [
      { label: 'SP 800-90A', variant: 'sky' as const },
      { label: 'SP 800-90B', variant: 'sky' as const },
      { label: 'SP 800-90C', variant: 'sky' as const },
      { label: 'arXiv:2507.00145 ↗', variant: 'indigo' as const },
    ],
    link: 'https://arxiv.org/abs/2507.00145',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    titleKey: 'trust_academic_title',
    descKey: 'trust_academic_desc',
    chips: [
      { label: 'Akademik Köken', variant: 'indigo' as const },
      { label: 'Ar-Ge Odaklı', variant: 'purple' as const },
      { label: 'Akyaka · Muğla', variant: 'gray' as const },
    ],
    link: null,
  },
];

export function TrustSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading
          eyebrow={t('eyebrow_open_source')}
          title={t('trust_title')}
          subtitle={t('trust_subtitle')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {trustItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link || '#'} 
              target={item.link ? '_blank' : undefined}
              rel={item.link ? 'noopener' : undefined}
              className={`glass-card group transition-all duration-300 hover:scale-[1.02] ${!item.link ? 'pointer-events-none' : ''}`}
            >
              <div className="p-8">
                <div className="qt-icon mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1">{t(item.titleKey)}</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--fg2)' }}>{t(item.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {item.chips.map((chip, i) => (
                    <span key={i} className={`qt-chip qt-chip--${chip.variant}`}>{chip.label}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}