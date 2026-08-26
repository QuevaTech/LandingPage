import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

const ytItems = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4b038" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    titleKey: 'yt_item1_title',
    descKey: 'yt_item1_desc',
    bgColor: 'rgba(212,176,56,0.12)',
    borderColor: 'rgba(212,176,56,0.25)',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    titleKey: 'yt_item2_title',
    descKey: 'yt_item2_desc',
    bgColor: 'rgba(79,142,247,0.12)',
    borderColor: 'rgba(79,142,247,0.25)',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    titleKey: 'yt_item3_title',
    descKey: 'yt_item3_desc',
    bgColor: 'rgba(167,139,250,0.12)',
    borderColor: 'rgba(167,139,250,0.25)',
  },
];

export function YouTubeSection() {
  const { t } = useTranslation();

  return (
    <section id="youtube" className="py-20" style={{ background: 'var(--queva-midnight)' }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('youtube_subtitle')}
          title={t('youtube_title')}
          subtitle={t('youtube_subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mt-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: 'radial-gradient(circle at 35% 30%,#34425c,#1b1f3b 70%)', border: '2px solid rgba(245,214,111,0.75)', boxShadow: '0 0 22px rgba(212,176,56,0.35)' }}>
                <img src="/qt-icon.svg" alt="QuevaTech yaprak logosu" className="h-10 w-8 object-contain drop-shadow-[0_2px_3px_rgba(0,0,0,0.38)]" />
              </div>
              <div>
                <p className="font-bold text-lg" style={{ color: '#f4ecdb' }}>QuevaTech</p>
                <a
                  href="https://www.youtube.com/@QuevaTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="QuevaTech YouTube kanalı"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm transition-colors hover:text-[#f4ecdb]"
                  style={{ color: 'rgba(212,176,56,0.7)' }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>@QuevaTech · youtube.com/@QuevaTech</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {ytItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: item.bgColor, border: `1px solid ${item.borderColor}` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#f4ecdb' }}>{t(item.titleKey)}</p>
                    <p className="text-xs" style={{ color: 'rgba(238,230,216,0.5)' }}>{t(item.descKey)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.youtube.com/@QuevaTech?sub_confirmation=1" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#ff0000,#cc0000)', boxShadow: '0 0 25px rgba(255,0,0,0.4),0 0 50px rgba(255,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.2)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>{t('yt_subscribe')}</span>
              </a>
              <a 
                href="https://www.youtube.com/@QuevaTech" 
                target="_blank" 
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-full font-semibold text-sm transition-all duration-300"
                style={{ border: '1px solid rgba(212,176,56,0.35)', color: 'rgba(212,176,56,0.85)' }}
              >
                <span>{t('yt_view_channel')}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="flex justify-center">
              <div className="rounded-2xl overflow-hidden" style={{ width: '315px', border: '1px solid rgba(212,176,56,0.2)', boxShadow: '0 0 40px rgba(212,176,56,0.1)' }}>
                <iframe
                  src="https://www.youtube.com/embed/7FY82HrByiE?rel=0&modestbranding=1"
                  width="315"
                  height="560"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="QuevaTech Short"
                />
              </div>
            </div>
            <p className="text-xs text-center mt-3" style={{ color: 'rgba(238,230,216,0.4)' }}>{t('yt_embed_note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
