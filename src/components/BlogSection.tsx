import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SectionHeading } from './ui/SectionComponents';

const blogPosts = [
  {
    date: '1 Ağustos 2025',
    readTime: '5 dk okuma',
    titleKey: 'blog1_title',
    descKey: 'blog1_desc',
    imageSrc: '/blog-6g-communications.png',
    imageAltKey: 'blog1_visual_alt',
    chips: [
      { label: '6G', variant: 'indigo' as const },
      { label: 'Edge Computing', variant: 'sky' as const },
      { label: 'Fiziksel Katman', variant: 'purple' as const },
    ],
    link: '/blog/6g-communication-2025.html',
  },
  {
    date: '15 Temmuz 2025',
    readTime: '7 dk okuma',
    titleKey: 'blog2_title',
    descKey: 'blog2_desc',
    imageSrc: '/blog-post-quantum-cryptography.png',
    imageAltKey: 'blog2_visual_alt',
    chips: [
      { label: 'Post-Quantum', variant: 'purple' as const },
      { label: 'NIST SP 800-90A', variant: 'indigo' as const },
      { label: 'Risk Modelleme', variant: 'sky' as const },
    ],
    link: '/blog/post-quantum-finance.html',
  },
  {
    date: '10 Ağustos 2025',
    readTime: '8 dk okuma',
    titleKey: 'blog3_title',
    descKey: 'blog3_desc',
    imageSrc: '/blog-mlops-hardware-security.png',
    imageAltKey: 'blog3_visual_alt',
    chips: [
      { label: 'MLOps', variant: 'indigo' as const },
      { label: 'Donanım Güvenliği', variant: 'sky' as const },
      { label: 'Model Doğrulama', variant: 'green' as const },
    ],
    link: '/blog/mlops-2025.html',
  },
  {
    date: '20 Ağustos 2025',
    readTime: '6 dk okuma',
    titleKey: 'blog4_title',
    descKey: 'blog4_desc',
    imageSrc: '/blog-physical-entropy.png',
    imageAltKey: 'blog4_visual_alt',
    chips: [
      { label: 'TRNG', variant: 'green' as const },
      { label: 'Fiziksel Entropi', variant: 'indigo' as const },
      { label: 'Araştırma', variant: 'sky' as const },
    ],
    link: '/blog/ai-hybrid-trng.html',
  },
];

export function BlogSection() {
  const { t } = useTranslation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollLeft = () => carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

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
    <section id="blog" className="overflow-hidden py-20">
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
            className={`absolute left-0 top-1/2 z-10 -ml-4 hidden -translate-y-1/2 rounded-full p-3 shadow-xl transition-all duration-300 md:flex ${showLeft ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            style={{ background: 'var(--surface)', border: '1px solid rgba(212,176,56,0.25)' }}
            aria-label="Önceki yazılar"
          >
            <svg className="h-6 w-6" style={{ color: 'var(--queva-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            id="blogScrollRight"
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 z-10 -mr-4 hidden -translate-y-1/2 rounded-full p-3 shadow-xl transition-all duration-300 md:flex ${showRight ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            style={{ background: 'var(--surface)', border: '1px solid rgba(212,176,56,0.25)' }}
            aria-label="Sonraki yazılar"
          >
            <svg className="h-6 w-6" style={{ color: 'var(--queva-gold)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            id="blogCarousel"
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {blogPosts.map((post) => (
              <article key={post.titleKey} className="blog-card glass-card snap-start overflow-hidden rounded-2xl">
                <div className="group relative h-48 w-full overflow-hidden bg-[#09182a]">
                  <img
                    src={post.imageSrc}
                    alt={t(post.imageAltKey)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09182a]/55 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center text-xs" style={{ color: 'var(--fg3)' }}>
                    <span>{post.date}</span><span className="mx-2">·</span><span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{t(post.titleKey)}</h3>
                  <p className="mb-4 text-sm" style={{ color: 'var(--fg2)' }}>{t(post.descKey)}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.chips.map((chip) => (
                      <span key={chip.label} className={`qt-chip qt-chip--${chip.variant}`}>{chip.label}</span>
                    ))}
                  </div>
                  <a href={post.link} className="glass-button group inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300">
                    <span>{t('blog_readmore')}</span>
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/publications" className="glass-button group inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-300">
              <span>{t('blog_view_all')}</span>
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
