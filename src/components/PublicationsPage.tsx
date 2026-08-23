import React from 'react';
import { useTranslation } from 'react-i18next';

const publications = [
  {
    id: '6g-communication-2025',
    date: '1 Ağustos 2025',
    readTime: '5 dk',
    category: '6G & İletişim',
    titleKey: 'pub_6g_title',
    descKey: 'pub_6g_desc',
    tags: ['6G', 'Edge Computing', 'Multimodal AI', 'Fiziksel Katman'],
    link: 'blog/6g-communication-2025.html',
  },
  {
    id: 'post-quantum-finance',
    date: '15 Temmuz 2025',
    readTime: '7 dk',
    category: 'Kriptografi & Finans',
    titleKey: 'pub_pq_title',
    descKey: 'pub_pq_desc',
    tags: ['Post-Quantum', 'NIST SP 800-90A', 'Risk Modelleme', 'Monte Carlo'],
    link: 'blog/post-quantum-finance.html',
  },
  {
    id: 'ai-hybrid-trng',
    date: '10 Ağustos 2025',
    readTime: '8 dk',
    category: 'TRNG & AI',
    titleKey: 'pub_trng_title',
    descKey: 'pub_trng_desc',
    tags: ['TRNG', 'AI-Hybrid', 'Entropi Kalitesi', 'NIST 800-90B'],
    link: 'blog/ai-hybrid-trng.html',
  },
  {
    id: 'passguard-zero-cloud',
    date: '20 Ağustos 2025',
    readTime: '6 dk',
    category: 'Güvenlik & Mimari',
    titleKey: 'pub_pg_title',
    descKey: 'pub_pg_desc',
    tags: ['Zero-Knowledge', 'AES-256-GCM', 'Argon2id', 'Flutter'],
    link: 'blog/passguard-zero-cloud.html',
  },
  {
    id: 'mlops-2025',
    date: '5 Haziran 2025',
    readTime: '9 dk',
    category: 'MLOps & Altyapı',
    titleKey: 'pub_mlops_title',
    descKey: 'pub_mlops_desc',
    tags: ['MLOps', 'Kubernetes', 'Kubeflow', 'Donanım Güvenliği'],
    link: 'blog/mlops-2025.html',
  },
  {
    id: 'data-security-2025',
    date: '22 Mayıs 2025',
    readTime: '6 dk',
    category: 'Veri Güvenliği',
    titleKey: 'pub_ds_title',
    descKey: 'pub_ds_desc',
    tags: ['Sıfır Güven', 'Veri Yönetişimi', 'Kuantum Dayanıklılık', 'Şifreleme'],
    link: 'blog/data-security-2025.html',
  },
];

const categories = [
  { key: 'all', labelKey: 'pub_cat_all' },
  { key: '6g', labelKey: 'pub_cat_6g' },
  { key: 'crypto', labelKey: 'pub_cat_crypto' },
  { key: 'trng', labelKey: 'pub_cat_trng' },
  { key: 'security', labelKey: 'pub_cat_security' },
  { key: 'mlops', labelKey: 'pub_cat_mlops' },
];

export function PublicationsPage() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = React.useState('all');

  const filteredPubs = activeCategory === 'all'
    ? publications
    : publications.filter(p => {
        const catMap: Record<string, string[]> = {
          '6g': ['6G', 'Edge Computing', 'Multimodal AI', 'Fiziksel Katman'],
          'crypto': ['Post-Quantum', 'NIST', 'Risk Modelleme', 'Monte Carlo'],
          'trng': ['TRNG', 'AI-Hybrid', 'Entropi', 'NIST 800-90B'],
          'security': ['Zero-Knowledge', 'AES', 'Argon2id', 'Sıfır Güven', 'Veri Yönetişimi', 'Kuantum Dayanıklılık', 'Şifreleme'],
          'mlops': ['MLOps', 'Kubernetes', 'Kubeflow', 'Donanım Güvenliği'],
        };
        return p.tags.some(tag => catMap[activeCategory]?.includes(tag));
      });

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4" style={{ background: 'linear-gradient(135deg, var(--queva-midnight) 0%, #2d2060 50%, var(--queva-midnight) 100%)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="qt-eyebrow mb-4" style={{ color: 'var(--queva-gold)' }}>{t('pub_hero_eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 qt-gradient">{t('pub_hero_title')}</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('pub_hero_subtitle')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center" role="tablist" aria-label={t('pub_filter_label')}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-queva-midnight to-queva-gold text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-queva-gold dark:hover:text-queva-gold border border-gray-200 dark:border-gray-700'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPubs.map((pub) => (
              <article key={pub.id} className="glass-card rounded-2xl overflow-hidden group">
                <div className="w-full h-48 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--queva-midnight) 0%, #2d2060 50%, var(--queva-midnight) 100%)' }}>
                  <div className="absolute inset-0 opacity-15">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pub-pattern-${pub.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="1" fill="var(--queva-gold)" opacity="0.4"/>
                          <line x1="0" y1="15" x2="30" y2="15" stroke="var(--queva-gold)" strokeWidth="0.4" opacity="0.2"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pub-pattern-${pub.id})`} />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    <span className="qt-chip qt-chip--indigo">{t(`pub_cat_${pub.id.split('-')[0]}`) || pub.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs mb-3" style={{ color: 'var(--fg3)' }}>
                    <span>{pub.date}</span>
                    <span className="mx-2">·</span>
                    <span>{pub.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-queva-gold transition-colors">{t(pub.titleKey)}</h3>
                  <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--fg2)' }}>{t(pub.descKey)}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, i) => (
                      <span key={i} className="qt-chip qt-chip--gray text-xs py-1 px-2">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={pub.link}
                    className="glass-button inline-flex items-center px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 group w-full justify-center"
                  >
                    <span>{t('pub_read_more')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}

            {filteredPubs.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">{t('pub_no_results')}</p>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">{t('pub_cta_text')}</p>
            <a href="https://github.com/QuevaTech" target="_blank" rel="noopener noreferrer" className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              {t('pub_cta_github')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}