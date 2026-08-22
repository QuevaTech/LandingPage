import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

const stats = [
  { target: 5, suffix: '+', labelKey: 'stats_research_areas' },
  { target: 10, suffix: '+', labelKey: 'stats_publications' },
  { target: 3, suffix: '+', labelKey: 'stats_prototypes' },
  { target: 50, suffix: 'K+', labelKey: 'stats_code_lines' },
];

export function StatsSection() {
  const { t } = useTranslation();
  const countersRef = useRef<HTMLSpanElement[]>([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            countersRef.current.forEach((counter, index) => {
              const target = stats[index].target;
              const duration = 2000;
              const step = target / (duration / 16);
              let current = 0;
              
              const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                  counter.textContent = target.toString();
                  clearInterval(timer);
                } else {
                  counter.textContent = Math.floor(current).toString();
                }
              }, 16);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats');
    if (section) observer.observe(section);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16" style={{ background: 'var(--queva-midnight)' }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('stats_title')}
          subtitle={t('stats_subtitle')}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2 stat-num">
                <span ref={(el) => { countersRef.current[index] = el!; }} className="stat-counter">0</span>
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base" style={{ color: 'rgba(238,230,216,0.65)' }}>
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}