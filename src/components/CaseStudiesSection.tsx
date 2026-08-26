import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

const researchScenarios = [
  {
    tagKey: 'research_finance_tag',
    titleKey: 'research_finance_title',
    descKey: 'research_finance_desc',
    focusKey: 'research_finance_focus',
    imageSrc: '/research-finance-risk-modelling.png',
    imageAltKey: 'research_finance_visual_alt',
  },
  {
    tagKey: 'research_procedural_tag',
    titleKey: 'research_procedural_title',
    descKey: 'research_procedural_desc',
    focusKey: 'research_procedural_focus',
    imageSrc: '/research-procedural-systems.png',
    imageAltKey: 'research_procedural_visual_alt',
  },
  {
    tagKey: 'research_security_tag',
    titleKey: 'research_security_title',
    descKey: 'research_security_desc',
    focusKey: 'research_security_focus',
    imageSrc: '/research-security-architecture.png',
    imageAltKey: 'research_security_visual_alt',
  },
];

export function CaseStudiesSection() {
  const { t } = useTranslation();

  return (
    <section id="research-scenarios" className="bg-white py-20 dark:bg-queva-midnight/50 sm:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow={t('case_studies_eyebrow')}
          title={t('case_studies_title')}
          subtitle={t('case_studies_subtitle')}
        />

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-[#d4b038]/20 bg-[#09182a] shadow-[0_24px_60px_rgba(15,23,42,0.18)] lg:grid-cols-[1.2fr_0.8fr]">
          <figure className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
            <img
              src="/research-scenarios.png"
              alt={t('case_studies_visual_alt')}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09182a]/65 via-transparent to-transparent" aria-hidden="true" />
          </figure>
          <div className="flex flex-col justify-center px-7 py-10 sm:px-10 lg:px-12">
            <div className="qt-eyebrow !text-[#f1c75b]">{t('case_studies_note_eyebrow')}</div>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t('case_studies_note_title')}
            </h3>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              {t('case_studies_note_desc')}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {researchScenarios.map((scenario, index) => (
            <article key={scenario.tagKey} className="rounded-2xl border border-[#d4b038]/15 bg-white p-7 shadow-[0_12px_32px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-900/50">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold tracking-[0.18em] text-[#d4b038]">0{index + 1}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-[#d4b038]/60 to-transparent" aria-hidden="true" />
              </div>
              {scenario.imageSrc && scenario.imageAltKey && (
                <figure className="mt-6 overflow-hidden rounded-xl border border-[#d4b038]/15 bg-[#09182a]">
                  <img
                    src={scenario.imageSrc}
                    alt={t(scenario.imageAltKey)}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              )}
              <div className="mt-6 text-xs font-bold tracking-[0.14em] text-[#a66c1f] dark:text-[#f1c75b]">
                {t(scenario.tagKey)}
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                {t(scenario.titleKey)}
              </h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {t(scenario.descKey)}
              </p>
              <div className="mt-6 border-t border-[#d4b038]/15 pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                  {t('case_studies_focus_label')}
                </span>
                <p className="mt-2 font-medium text-slate-800 dark:text-slate-100">{t(scenario.focusKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
