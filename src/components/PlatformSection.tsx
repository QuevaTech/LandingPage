import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard, Chip } from './ui/SectionComponents';

const coreTech = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"></path>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
      </svg>
    ),
    titleKey: 'platform_analytics_title',
    descKey: 'platform_analytics_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.26 4.93L6.93 7.26M4.93 9.26L7.26 6.93M9.26 19.07L6.93 16.74M4.93 14.74L7.26 17.07"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="M21 12h-6m-6 0H3"></path>
      </svg>
    ),
    titleKey: 'platform_ml_title',
    descKey: 'platform_ml_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    titleKey: 'platform_security_title',
    descKey: 'platform_security_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"></path>
      </svg>
    ),
    titleKey: 'platform_trng_title',
    descKey: 'platform_trng_desc',
  },
];

const architecture = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7v10c0 2.21 5.07 4 8 4s8-1.79 8-4V7"></path>
        <ellipse cx="12" cy="7" rx="8" ry="4"></ellipse>
      </svg>
    ),
    titleKey: 'platform_arch_hybrid',
    descKey: 'platform_arch_hybrid_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    titleKey: 'platform_arch_micro',
    descKey: 'platform_arch_micro_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
    titleKey: 'platform_arch_k8s',
    descKey: 'platform_arch_k8s_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
      </svg>
    ),
    titleKey: 'platform_arch_realtime',
    descKey: 'platform_arch_realtime_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"></path>
        <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
        <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
        <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
        <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
      </svg>
    ),
    titleKey: 'platform_arch_secure',
    descKey: 'platform_arch_secure_desc',
  },
];

const techStack = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'C/C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M9 21V9"></path>
      </svg>
    ),
    titleKey: 'platform_feature_dashboard',
    descKey: 'platform_feature_dashboard_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
    titleKey: 'platform_feature_pipeline',
    descKey: 'platform_feature_pipeline_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    titleKey: 'platform_feature_marketplace',
    descKey: 'platform_feature_marketplace_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    titleKey: 'platform_feature_collab',
    descKey: 'platform_feature_collab_desc',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"></path>
        <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
        <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
      </svg>
    ),
    titleKey: 'platform_feature_compliance',
    descKey: 'platform_feature_compliance_desc',
  },
];

const integrations = [
  {
    eyebrowKey: 'eyebrow_data_sources',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    titleKey: 'platform_int_data',
    descKey: 'platform_int_data_desc',
    chips: [
      { label: 'PostgreSQL', variant: 'sky' as const },
      { label: 'Kafka', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_development',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    titleKey: 'platform_int_dev',
    descKey: 'platform_int_dev_desc',
    chips: [
      { label: 'Python', variant: 'indigo' as const },
      { label: 'Rust', variant: 'sky' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_deployment',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    titleKey: 'platform_int_deploy',
    descKey: 'platform_int_deploy_desc',
    chips: [
      { label: 'Docker', variant: 'purple' as const },
      { label: 'FPGA', variant: 'gray' as const },
    ],
  },
  {
    eyebrowKey: 'eyebrow_monitoring',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    titleKey: 'platform_int_monitor',
    descKey: 'platform_int_monitor_desc',
    chips: [
      { label: 'NIST 800-90B', variant: 'green' as const },
    ],
  },
];

export function PlatformSection() {
  const { t } = useTranslation();

  return (
    <section id="platform" className="py-20 bg-white dark:bg-queva-midnight/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('platform_title')}
          subtitle={t('platform_subtitle')}
        />

        <div className="mb-16 mt-12">
          <SectionHeading
            title={t('platform_tech_title')}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8">
            {coreTech.map((tech, index) => (
              <GlassCard key={index} className="p-6">
                <div className="qt-icon mb-4">{tech.icon}</div>
                <h4 className="text-lg font-bold mb-2">{t(tech.titleKey)}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{t(tech.descKey)}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading
            title={t('platform_arch_title')}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
            {architecture.map((arch, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-queva-midnight to-queva-gold text-white p-4 rounded-xl mb-4 mx-auto w-16 h-16 flex items-center justify-center">
                  {arch.icon}
                </div>
                <h4 className="font-semibold mb-2">{t(arch.titleKey)}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(arch.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading
            title={t('tech_stack_title')}
            subtitle={t('tech_stack_subtitle')}
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-logo-badge group" title={tech.name}>
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading
            title={t('platform_features_title')}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="qt-icon mb-4">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{t(feature.titleKey)}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(feature.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            title={t('platform_integration_title')}
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8">
            {integrations.map((int, index) => (
              <GlassCard key={index} className="p-6">
                <div className="qt-eyebrow">{t(int.eyebrowKey)}</div>
                <div className="qt-icon mb-3">{int.icon}</div>
                <h4 className="font-bold mb-1">{t(int.titleKey)}</h4>
                <p className="text-xs" style={{ color: 'var(--fg2)' }}>{t(int.descKey)}</p>
                <div className="mt-3">
                  {int.chips.map((chip, i) => (
                    <Chip key={i} variant={chip.variant}>{chip.label}</Chip>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}