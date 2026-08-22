import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let w = 0;
    let h = 0;
    let stars: Array<{
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
    }> = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      stars = Array.from({ length: 140 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.15 * devicePixelRatio,
        a: 0.2 + Math.random() * 0.7,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="qt-hero__stars" aria-hidden="true" />;
}

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="qt-hero" aria-labelledby="hero-title">
      <div className="qt-hero__bg" aria-hidden="true" />
      <Starfield />
      <div className="qt-hero__content">
        <div className="qt-hero__eyebrow">{t('eyebrow_academic_rnd')}</div>
        <h1 id="hero-title" className="qt-hero__title qt-glow">
          {t('hero_title')}
        </h1>
        <p className="qt-hero__slogan">{t('hero_slogan')}</p>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-8 text-white/60">
          {t('hero_subtitle')}
        </p>
        <div className="qt-hero__ctas">
          <a href="#platform" className="qt-btn qt-btn--primary">
            {t('hero_cta1')}
          </a>
          <a href="#contact" className="qt-btn qt-btn--glass">
            {t('hero_cta2')}
          </a>
        </div>
      </div>
      <div className="qt-hero__fade" aria-hidden="true" />
    </section>
  );
}