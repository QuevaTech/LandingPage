import { useTranslation } from 'react-i18next';

const caseStudies = [
  {
    tagKey: 'case_study_tag',
    titleKey: 'case_study_title',
    descKey: 'case_study_desc',
    statKey: 'case_study_stat',
    statValueKey: 'case_study_stat_value',
    illustration: (
      <svg viewBox="0 0 600 400" role="img" className="w-full h-full block">
        <defs>
          <linearGradient id="finFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d4b038" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#d87e37" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        <g stroke="#eee6d8" strokeOpacity="0.12">
          <line x1="60" y1="60" x2="60" y2="330"/>
          <line x1="60" y1="330" x2="550" y2="330"/>
        </g>
        <g fill="#d4b038" fillOpacity="0.55">
          <circle cx="100" cy="120" r="4"/><circle cx="130" cy="200" r="4"/><circle cx="150" cy="90" r="4"/>
          <circle cx="180" cy="240" r="4"/><circle cx="210" cy="150" r="4"/><circle cx="230" cy="270" r="4"/>
          <circle cx="260" cy="180" r="4"/><circle cx="290" cy="220" r="4"/><circle cx="320" cy="195" r="4"/>
          <circle cx="350" cy="210" r="4"/><circle cx="380" cy="200" r="4"/><circle cx="410" cy="205" r="4"/>
        </g>
        <path d="M80 260 C 180 260, 220 190, 300 200 S 460 205, 520 202" fill="none" stroke="url(#finFade)" strokeWidth="4" strokeLinecap="round"/>
        <g fill="#eee6d8" fillOpacity="0.25">
          <circle cx="440" cy="203" r="3"/><circle cx="470" cy="200" r="3"/><circle cx="500" cy="204" r="3"/>
        </g>
      </svg>
    ),
    reverse: false,
  },
  {
    tagKey: 'gaming_case_study_tag',
    titleKey: 'gaming_case_study_title',
    descKey: 'gaming_case_study_desc',
    statKey: 'gaming_case_study_stat',
    statValueKey: 'gaming_case_study_stat_value',
    illustration: (
      <svg viewBox="0 0 600 400" role="img" className="w-full h-full block">
        <g stroke="#eee6d8" strokeOpacity="0.15" strokeWidth="2">
          <rect x="60" y="60" width="150" height="100" rx="10" fill="#d4b038" fillOpacity="0.35"/>
          <rect x="225" y="60" width="150" height="100" rx="10" fill="#d87e37" fillOpacity="0.5"/>
          <rect x="390" y="60" width="150" height="100" rx="10" fill="#d4b038" fillOpacity="0.2"/>
          <rect x="60" y="175" width="150" height="100" rx="10" fill="#d87e37" fillOpacity="0.25"/>
          <rect x="225" y="175" width="150" height="100" rx="10" fill="#d4b038" fillOpacity="0.6"/>
          <rect x="390" y="175" width="150" height="100" rx="10" fill="#d87e37" fillOpacity="0.4"/>
          <rect x="60" y="290" width="150" height="70" rx="10" fill="#d4b038" fillOpacity="0.45"/>
          <rect x="225" y="290" width="150" height="70" rx="10" fill="#d87e37" fillOpacity="0.2"/>
          <rect x="390" y="290" width="150" height="70" rx="10" fill="#d4b038" fillOpacity="0.3"/>
        </g>
        <g fill="#eee6d8" fillOpacity="0.7">
          <circle cx="135" cy="110" r="4"/>
          <circle cx="300" cy="225" r="4"/><circle cx="285" cy="210" r="4"/>
          <circle cx="465" cy="325" r="4"/><circle cx="450" cy="310" r="4"/><circle cx="480" cy="310" r="4"/>
        </g>
      </svg>
    ),
    reverse: true,
  },
  {
    tagKey: 'security_case_study_tag',
    titleKey: 'security_case_study_title',
    descKey: 'security_case_study_desc',
    statKey: 'security_case_study_stat',
    statValueKey: 'security_case_study_stat_value',
    illustration: (
      <svg viewBox="0 0 600 400" role="img" className="w-full h-full block">
        <g stroke="#eee6d8" strokeOpacity="0.15" strokeWidth="1.5" fill="none">
          <path d="M40 100 H 220"/><path d="M40 140 H 260"/><path d="M40 180 H 200"/>
          <path d="M40 220 H 240"/><path d="M40 260 H 210"/><path d="M40 300 H 250"/>
        </g>
        <g fontFamily="monospace" fontSize="13" fill="#d4b038" fillOpacity="0.5">
          <text x="45" y="104">01001101</text>
          <text x="45" y="144">11000101</text>
          <text x="45" y="184">00110110</text>
          <text x="45" y="224">10101100</text>
          <text x="45" y="264">01110010</text>
          <text x="45" y="304">11011001</text>
        </g>
        <circle cx="400" cy="200" r="90" fill="#1b1f3b"/>
        <circle cx="400" cy="200" r="90" fill="none" stroke="url(#secRing)" strokeWidth="3"/>
        <defs>
          <linearGradient id="secRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <g transform="translate(400,200)">
          <rect x="-28" y="-6" width="56" height="46" rx="8" fill="#eee6d8"/>
          <path d="M -16 -6 V -22 A 16 16 0 0 1 16 -22 V -6" fill="none" stroke="#eee6d8" strokeWidth="8"/>
          <circle cx="0" cy="16" r="6" fill="#1b1f3b"/>
        </g>
      </svg>
    ),
    reverse: false,
  },
];

export function CaseStudiesSection() {
  const { t } = useTranslation();

  return (
    <>
      {caseStudies.map((study, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? '' : 'bg-white dark:bg-queva-midnight/50'} overflow-hidden`}>
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${study.reverse ? 'md:grid-cols-2' : ''}`}>
              <div className={study.reverse ? 'md:order-2' : 'md:order-1'} data-aos={study.reverse ? 'fade-left' : 'fade-right'}>
                <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg,#1b1f3b,#2a2f56)' }}>
                  {study.illustration}
                </div>
              </div>
              <div className={study.reverse ? 'md:order-1' : 'md:order-2'} data-aos={study.reverse ? 'fade-right' : 'fade-left'}>
                <span className="qt-icon font-bold">{t(study.tagKey)}</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{t(study.titleKey)}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{t(study.descKey)}</p>
                <div className="bg-queva-light dark:bg-queva-dark p-6 rounded-2xl">
                  <span className="text-5xl font-bold qt-icon">{t(study.statValueKey)}</span>
                  <p className="mt-2 font-semibold">{t(study.statKey)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}