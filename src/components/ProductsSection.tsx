import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard } from './ui/SectionComponents';

const products = [
  {
    eyebrowKey: 'eyebrow_security_crypto',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="url(#iconGrad1)" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#iconGrad1)" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1.5" fill="url(#iconGrad1)"/>
        <path d="M9 14h6M12 12v4" stroke="url(#iconGrad1)" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="12" cy="11" r="3" stroke="url(#iconGrad1)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'product1_title',
    descKey: 'product1_desc',
    chips: [
      { label: 'AES-256-GCM', variant: 'indigo' as const },
      { label: 'REST API', variant: 'sky' as const },
      { label: 'NIST SP 800-90A', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_hardware_entropy',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="7" stroke="url(#iconGrad2)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3.5" stroke="url(#iconGrad2)" strokeWidth="1" strokeDasharray="6 4" opacity="0.5"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="url(#iconGrad2)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="url(#iconGrad2)"/>
        <ellipse cx="12" cy="12" rx="5" ry="5" stroke="url(#iconGrad2)" strokeWidth="0.8" strokeDasharray="8 6" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'product2_title',
    descKey: 'product2_desc',
    chips: [
      { label: 'Fiziksel Entropi', variant: 'indigo' as const },
      { label: 'NIST 800-90B', variant: 'purple' as const },
      { label: 'Hardware RNG', variant: 'sky' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_embedded_fpga',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad3" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#iconGrad3)" strokeWidth="1.5"/>
        <rect x="8" y="8" width="8" height="8" rx="1" stroke="url(#iconGrad3)" strokeWidth="1" opacity="0.6"/>
        <rect x="10" y="10" width="4" height="4" rx="0.5" fill="url(#iconGrad3)" opacity="0.8"/>
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" stroke="url(#iconGrad3)" strokeWidth="1.5"/>
        <path d="M6 6h12M6 10h12M6 14h12M6 18h12" stroke="url(#iconGrad3)" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3"/>
      </svg>
    ),
    titleKey: 'product3_title',
    descKey: 'product3_desc',
    chips: [
      { label: 'FPGA', variant: 'sky' as const },
      { label: 'Secure Boot', variant: 'indigo' as const },
      { label: 'PCIe', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_mobile_flutter',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad4" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="url(#iconGrad4)" strokeWidth="1.5"/>
        <rect x="7" y="5" width="10" height="14" rx="1.5" stroke="url(#iconGrad4)" strokeWidth="1" opacity="0.5"/>
        <circle cx="12" cy="18" r="1.5" fill="url(#iconGrad4)"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="url(#iconGrad4)" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="url(#iconGrad4)" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'product4_title',
    descKey: 'product4_desc',
    chips: [
      { label: 'Flutter', variant: 'indigo' as const },
      { label: 'iOS · Android', variant: 'sky' as const },
      { label: 'Zero-Knowledge', variant: 'green' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_ai_entropy',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad5" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
        </defs>
        <path d="M12 2a8 8 0 0 1 8 8v4a8 8 0 0 1-16 0v-4a8 8 0 0 1 8-8z" stroke="url(#iconGrad5)" strokeWidth="1.5"/>
        <path d="M12 2a8 8 0 0 1 8 8v4a8 8 0 0 1-16 0v-4a8 8 0 0 1 8-8z" stroke="url(#iconGrad5)" strokeWidth="0.5" strokeDasharray="6 4" opacity="0.3"/>
        <circle cx="9" cy="9" r="1.5" fill="url(#iconGrad5)"/>
        <circle cx="15" cy="9" r="1.5" fill="url(#iconGrad5)"/>
        <path d="M8 14c0 1.5 2 2.5 4 2.5s4-1 4-2.5" stroke="url(#iconGrad5)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2" stroke="url(#iconGrad5)" strokeWidth="1" opacity="0.4"/>
        <ellipse cx="12" cy="12" rx="6" ry="6" stroke="url(#iconGrad5)" strokeWidth="0.6" strokeDasharray="8 8" opacity="0.2"/>
      </svg>
    ),
    titleKey: 'product5_title',
    descKey: 'product5_desc',
    chips: [
      { label: 'Deep Learning', variant: 'purple' as const },
      { label: 'Entropi QA', variant: 'indigo' as const },
      { label: 'MLOps', variant: 'sky' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_academic_collab',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    titleKey: 'product6_title',
    descKey: 'product6_desc',
    chips: [
      { label: 'Post-Quantum', variant: 'sky' as const },
      { label: 'B2B', variant: 'indigo' as const },
      { label: 'Akademik', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_analysis_sim',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad7" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M3 21h18M3 14h18M3 7h18" stroke="url(#iconGrad7)" strokeWidth="1.5"/>
        <path d="M7 16l4-8 4 6 2-4" stroke="url(#iconGrad7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="16" r="2" fill="url(#iconGrad7)"/>
        <circle cx="11" cy="8" r="2" fill="url(#iconGrad7)"/>
        <circle cx="15" cy="14" r="2" fill="url(#iconGrad7)"/>
        <circle cx="17" cy="10" r="2" fill="url(#iconGrad7)"/>
        <path d="M3 21l18-14" stroke="url(#iconGrad7)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'product7_title',
    descKey: 'product7_desc',
    chips: [
      { label: 'Monte Carlo', variant: 'indigo' as const },
      { label: 'İstatistiksel Modelleme', variant: 'sky' as const },
      { label: 'Sayısal Hesaplama', variant: 'purple' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_arch_devsecops',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad8" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="url(#iconGrad8)" strokeWidth="1.5"/>
        <rect x="6" y="7" width="12" height="10" rx="1" stroke="url(#iconGrad8)" strokeWidth="1" opacity="0.5"/>
        <path d="M8 21h8M12 17v4" stroke="url(#iconGrad8)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 8h4M6 11h3" stroke="url(#iconGrad8)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="7" width="5" height="5" rx="1" fill="url(#iconGrad8)" opacity="0.8"/>
        <path d="M4 5h16M4 9h16M4 13h16M4 17h16" stroke="url(#iconGrad8)" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'product8_title',
    descKey: 'product8_desc',
    chips: [
      { label: 'DevSecOps', variant: 'sky' as const },
      { label: 'Zero-Trust', variant: 'indigo' as const },
      { label: 'Microservices', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_awareness_human',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="iconGrad9" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#iconGrad9)" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="4" stroke="url(#iconGrad9)" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="2.5" stroke="url(#iconGrad9)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"/>
        <path d="M23 11l-4 4-2-2" stroke="url(#iconGrad9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 3a2 2 0 0 1 0 4" stroke="url(#iconGrad9)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 11h10M12 14h10" stroke="url(#iconGrad9)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'product9_title',
    descKey: 'product9_desc',
    chips: [
      { label: 'OSINT', variant: 'purple' as const },
      { label: 'Farkındalık', variant: 'indigo' as const },
      { label: 'Davranışsal Analiz', variant: 'green' as const },
    ],
  },
];

export function ProductsSection() {
  const { t } = useTranslation();

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('eyebrow_academic_rnd')}
          title={t('products_title')}
          subtitle={t('products_subtitle')}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12" style={{ perspective: '1200px' }}>
          {products.map((product, index) => (
            <GlassCard
              key={index}
              icon={product.icon}
              title={t(product.titleKey)}
              desc={t(product.descKey)}
              chips={product.chips}
              className="p-8"
            >
              <div className="qt-eyebrow">{t(product.eyebrowKey)}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}