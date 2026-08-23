import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let w = 0;
    let h = 0;
    let particles: Array<{
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      a: number;
      phase: number;
    }> = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      const density = Math.max(1, Math.floor((w * h) / 180000));
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 * devicePixelRatio + 0.5,
        vx: (Math.random() - 0.5) * 0.08 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.08 * devicePixelRatio,
        a: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(212, 176, 56, 0.03)';
      ctx.lineWidth = 1 * devicePixelRatio;
      const gridSize = 80 * devicePixelRatio;
      for (let x = 0; x <= w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw particles with subtle pulse
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.003;
        
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const pulse = 1 + Math.sin(p.phase) * 0.15;
        const r = p.r * pulse;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(212, 176, 56, ${p.a * pulse})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        
        // Subtle glow
        if (p.a > 0.3) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(216, 126, 55, ${p.a * 0.15})`;
          ctx.arc(p.x, p.y, r * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={ref} className="qt-hero__particles" aria-hidden="true" />;
}

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="qt-hero" aria-labelledby="hero-title">
      <div className="qt-hero__bg" aria-hidden="true" />
      <ParticleField />
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