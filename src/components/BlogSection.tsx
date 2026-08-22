import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

const blogPosts = [
  {
    date: '1 Ağustos 2025',
    readTime: '5 dk okuma',
    titleKey: 'blog1_title',
    descKey: 'blog1_desc',
    chips: [
      { label: '6G', variant: 'indigo' as const },
      { label: 'Edge Computing', variant: 'sky' as const },
      { label: 'Fiziksel Katman', variant: 'purple' as const },
    ],
    link: 'blog/6g-communication-2025.html',
    bgStyle: 'linear-gradient(135deg, #1b1f3b 0%, #2d2060 50%, #1b1f3b 100%)',
    iconColor: '#d4b038',
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M1 6l5 6-5 6M23 6l-5 6 5 6M8 18l2-12M14 18l2-12"/>
      </svg>
    ),
  },
  {
    date: '15 Temmuz 2025',
    readTime: '7 dk okuma',
    titleKey: 'blog2_title',
    descKey: 'blog2_desc',
    chips: [
      { label: 'Post-Quantum', variant: 'purple' as const },
      { label: 'NIST SP 800-90A', variant: 'indigo' as const },
      { label: 'Risk Modelleme', variant: 'sky' as const },
    ],
    link: 'blog/post-quantum-finance.html',
    bgStyle: 'linear-gradient(135deg, #1b1f3b 0%, #3b1f5e 50%, #1b1f3b 100%)',
    iconColor: '#a78bfa',
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    date: '10 Ağustos 2025',
    readTime: '8 dk okuma',
    titleKey: 'blog3_title',
    descKey: 'blog3_desc',
    chips: [
      { label: 'TRNG', variant: 'indigo' as const },
      { label: 'AI-Hybrid', variant: 'sky' as const },
      { label: 'Entropi Kalitesi', variant: 'green' as const },
    ],
    link: 'blog/ai-hybrid-trng.html',
    bgStyle: 'linear-gradient(135deg, #2a1f0e 0%, #1b1f3b 50%, #2a1f0e 100%)',
    iconColor: '#d4b038',
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    date: '20 Ağustos 2025',
    readTime: '6 dk okuma',
    titleKey: 'blog4_title',
    descKey: 'blog4_desc',
    chips: [
      { label: 'Zero-Knowledge', variant: 'green' as const },
      { label: 'AES-256-GCM', variant: 'indigo' as const },
      { label: 'Argon2id', variant: 'sky' as const },
    ],
    link: 'blog/passguard-zero-cloud.html',
    bgStyle: 'linear-gradient(135deg, #1b1f3b 0%, #1f3b2a 50%, #1b1f3b 100%)',
    iconColor: '#4ade80',
    icon: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect width="18" height="11" x="3" y="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

export function BlogSection() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const checkScroll = () => {
      setShowLeft(carousel.scrollLeft > 10);
      setShowRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 10);
    };

    carousel.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => carousel.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <section id="blog" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('eyebrow_academic_rnd')}
          title={t('blog_title')}
          subtitle={t('blog_subtitle')}
        />

        <div className="relative mt-12">
          <button
            id="blogScrollLeft"
            onClick={scrollLeft}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-xl rounded-full p-3 transition-all duration-300 -ml-4 ${showLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ background: 'var(--surface)', border: '1px solid rgba(212,176,56,0.25)' }}
            aria-label="Önceki yazılar"
          >
            <svg className="w-6 h-6" style={{ color: 'var(--queva-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            id="blogScrollRight"
            onClick={scrollRight}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 shadow-xl rounded-full p-3 transition-all duration-300 -mr-4 ${showRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ background: 'var(--surface)', border: '1px solid rgba(212,176,56,0.25)' }}
            aria-label="Sonraki yazılar"
          >
            <svg className="w-6 h-6" style={{ color: 'var(--queva-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div
            id="blogCarousel"
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card glass-card rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-48 flex items-center justify-center relative overflow-hidden group"
                  style={{ background: post.bgStyle }}
                >
                  <div className="absolute inset-0 opacity-15">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`pg${index + 1}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="1" fill={post.iconColor} opacity="0.4"/>
                          <line x1="0" y1="15" x2="30" y2="15" stroke={post.iconColor} strokeWidth="0.4" opacity="0.2"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#pg${index + 1})`} />
                    </svg>
                  </div>
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300" style={{ color: post.iconColor }}>
                    {post.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs mb-2" style={{ color: 'var(--fg3)' }}>
                    <span>{post.date}</span><span className="mx-2">·</span><span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(post.titleKey)}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--fg2)' }}>{t(post.descKey)}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.chips.map((chip, i) => (
                      <span key={i} className={`qt-chip qt-chip--${chip.variant}`}>{chip.label}</span>
                    ))}
                  </div>
                  <a 
                    href={post.link} 
                    className="glass-button inline-flex items-center px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group"
                  >
                    <span>{t('blog_readmore')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}