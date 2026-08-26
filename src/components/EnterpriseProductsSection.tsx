import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard } from './ui/SectionComponents';

const enterpriseProducts = [
  {
    eyebrowKey: 'eyebrow_enterprise_security',
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
    titleKey: 'enterprise_product1_title',
    descKey: 'enterprise_product1_desc',
    chips: [
      { label: 'Enterprise Grade', variant: 'indigo' as const },
      { label: 'API-First', variant: 'sky' as const },
      { label: 'SOC 2 Compliant', variant: 'gray' as const },
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
    titleKey: 'enterprise_product2_title',
    descKey: 'enterprise_product2_desc',
    chips: [
      { label: 'Hardware Root of Trust', variant: 'indigo' as const },
      { label: 'FIPS 140-2', variant: 'purple' as const },
      { label: 'HSM Available', variant: 'sky' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_cloud_infrastructure',
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
    titleKey: 'enterprise_product3_title',
    descKey: 'enterprise_product3_desc',
    chips: [
      { label: 'Multi-Cloud', variant: 'sky' as const },
      { label: 'Kubernetes Native', variant: 'indigo' as const },
      { label: 'Zero Trust', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_developer_platform',
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
    titleKey: 'enterprise_product4_title',
    descKey: 'enterprise_product4_desc',
    chips: [
      { label: 'SDKs Available', variant: 'indigo' as const },
      { label: 'Documentation', variant: 'sky' as const },
      { label: 'Community Support', variant: 'green' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_ai_ml_ops',
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
    titleKey: 'enterprise_product5_title',
    descKey: 'enterprise_product5_desc',
    chips: [
      { label: 'MLOps Ready', variant: 'purple' as const },
      { label: 'Model Verification', variant: 'indigo' as const },
      { label: 'Audit Trails', variant: 'sky' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_education_research',
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    titleKey: 'enterprise_product6_title',
    descKey: 'enterprise_product6_desc',
    chips: [
      { label: 'Academic Licensing', variant: 'sky' as const },
      { label: 'Research Grants', variant: 'indigo' as const },
      { label: 'Student Programs', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_analysis_simulation',
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
    titleKey: 'enterprise_product7_title',
    descKey: 'enterprise_product7_desc',
    chips: [
      { label: 'Monte Carlo', variant: 'indigo' as const },
      { label: 'Statistical Modeling', variant: 'sky' as const },
      { label: 'Numerical Computation', variant: 'purple' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_devsecops_architecture',
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
    titleKey: 'enterprise_product8_title',
    descKey: 'enterprise_product8_desc',
    chips: [
      { label: 'DevSecOps', variant: 'sky' as const },
      { label: 'Zero-Trust', variant: 'indigo' as const },
      { label: 'Microservices', variant: 'gray' as const },
    ],
  },
];

export function EnterpriseProductsSection() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.resolvedLanguage === 'en';
  const heading = {
    eyebrow: t('eyebrow_enterprise_solutions', {
      defaultValue: isEnglish ? 'Enterprise Solutions' : 'Kurumsal Çözümler',
    }),
    title: t('enterprise_products_title', {
      defaultValue: isEnglish ? 'Secure Engineering for Critical Systems' : 'Kritik Sistemler İçin Güvenli Mühendislik',
    }),
    subtitle: t('enterprise_products_subtitle', {
      defaultValue: isEnglish
        ? 'We design scalable, auditable approaches across security, infrastructure, and AI operations.'
        : 'Güvenlik, altyapı ve yapay zekâ operasyonlarında ölçeklenebilir, denetlenebilir yaklaşımlar tasarlıyoruz.',
    }),
  };

  return (
    <section id="enterprise-products" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={heading.eyebrow}
          title={heading.title}
          subtitle={heading.subtitle}
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-[#d4b038]/25 bg-[#09182a] shadow-[0_24px_60px_rgba(15,23,42,0.18)] dark:border-[#d4b038]/20">
          <div className="grid items-stretch lg:grid-cols-2">
            <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
              <div className="qt-eyebrow !text-[#f1c75b]">{t('enterprise_visual_eyebrow')}</div>
              <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t('enterprise_visual_title')}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                {t('enterprise_visual_desc')}
              </p>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#d4b038] to-transparent" aria-hidden="true" />
            </div>
            <figure className="relative min-h-[280px] overflow-hidden lg:min-h-full">
              <img
                src="/enterprise-security-infrastructure.png"
                alt={t('enterprise_visual_alt')}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09182a]/75 via-[#09182a]/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#d4b038] via-[#d87e37] to-[#0ea5e9]" aria-hidden="true" />
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8" style={{ perspective: '1200px' }}>
          {enterpriseProducts.map((product, index) => (
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
