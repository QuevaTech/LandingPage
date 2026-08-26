import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard, Chip } from './ui/SectionComponents';

const coreTech = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="platGrad1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M3 21h18M3 14h18M3 7h18" stroke="url(#platGrad1)" strokeWidth="1.5"/>
        <path d="M7 16l4-8 4 6 2-4" stroke="url(#platGrad1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="16" r="2" fill="url(#platGrad1)"/>
        <circle cx="11" cy="8" r="2" fill="url(#platGrad1)"/>
        <circle cx="15" cy="14" r="2" fill="url(#platGrad1)"/>
        <circle cx="17" cy="10" r="2" fill="url(#platGrad1)"/>
        <path d="M3 21l18-14" stroke="url(#platGrad1)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'platform_analytics_title',
    descKey: 'platform_analytics_desc',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="platGrad2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="8" stroke="url(#platGrad2)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="url(#platGrad2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="url(#platGrad2)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="url(#platGrad2)"/>
        <ellipse cx="12" cy="12" rx="6" ry="6" stroke="url(#platGrad2)" strokeWidth="0.6" strokeDasharray="8 8" opacity="0.2"/>
      </svg>
    ),
    titleKey: 'platform_ml_title',
    descKey: 'platform_ml_desc',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="platGrad3" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="url(#platGrad3)" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#platGrad3)" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="2" fill="url(#platGrad3)"/>
        <path d="M9 14h6M12 12v4" stroke="url(#platGrad3)" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <circle cx="12" cy="11" r="3.5" stroke="url(#platGrad3)" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'platform_security_title',
    descKey: 'platform_security_desc',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="platGrad4" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#0EA5E9"/>
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="8" stroke="url(#platGrad4)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke="url(#platGrad4)" strokeWidth="1" strokeDasharray="4 4" opacity="0.4"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="url(#platGrad4)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="url(#platGrad4)"/>
        <ellipse cx="12" cy="12" rx="6" ry="6" stroke="url(#platGrad4)" strokeWidth="0.6" strokeDasharray="8 8" opacity="0.2"/>
      </svg>
    ),
    titleKey: 'platform_trng_title',
    descKey: 'platform_trng_desc',
  },
];

const architecture = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="archGrad1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M4 17v10c0 2.21 5.07 4 8 4s8-1.79 8-4V17" stroke="url(#archGrad1)" strokeWidth="1.5"/>
        <ellipse cx="12" cy="17" rx="8" ry="4" stroke="url(#archGrad1)" strokeWidth="1.5" fill="none"/>
        <path d="M4 17l8-10 8 10" stroke="url(#archGrad1)" strokeWidth="1" opacity="0.4" strokeDasharray="4 4"/>
      </svg>
    ),
    titleKey: 'platform_arch_hybrid',
    descKey: 'platform_arch_hybrid_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="archGrad2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <path d="M12 2L2 10l10 6 10-6-10-6z" stroke="url(#archGrad2)" strokeWidth="1.5"/>
        <path d="M2 18l10 6 10-6" stroke="url(#archGrad2)" strokeWidth="1" opacity="0.5"/>
        <path d="M2 13l10 6 10-6" stroke="url(#archGrad2)" strokeWidth="1" opacity="0.5"/>
        <circle cx="12" cy="12" r="3" stroke="url(#archGrad2)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'platform_arch_micro',
    descKey: 'platform_arch_micro_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="archGrad3" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#archGrad3)" strokeWidth="1.5"/>
        <path d="M3 12h18" stroke="url(#archGrad3)" strokeWidth="1.5"/>
        <path d="M12 3v18" stroke="url(#archGrad3)" strokeWidth="1.5"/>
        <rect x="7" y="7" width="10" height="10" rx="1" stroke="url(#archGrad3)" strokeWidth="1" opacity="0.4"/>
        <path d="M3 12l18 0" stroke="url(#archGrad3)" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'platform_arch_k8s',
    descKey: 'platform_arch_k8s_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="archGrad4" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" stroke="url(#archGrad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="15" cy="21" r="2" fill="url(#archGrad4)"/>
        <circle cx="9" cy="3" r="2" fill="url(#archGrad4)"/>
        <path d="M12 12l-3 9" stroke="url(#archGrad4)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'platform_arch_realtime',
    descKey: 'platform_arch_realtime_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="archGrad5" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M9 12l2 2 4-4" stroke="url(#archGrad5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="7" stroke="url(#archGrad5)" strokeWidth="1.5"/>
        <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#archGrad5)" strokeWidth="1" opacity="0.4"/>
        <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#archGrad5)" strokeWidth="1" opacity="0.4"/>
        <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#archGrad5)" strokeWidth="1" opacity="0.4"/>
        <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#archGrad5)" strokeWidth="1" opacity="0.4"/>
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="url(#archGrad5)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
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
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="featGrad1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#featGrad1)" strokeWidth="1.5"/>
        <path d="M3 12h18" stroke="url(#featGrad1)" strokeWidth="1.5"/>
        <path d="M12 3v18" stroke="url(#featGrad1)" strokeWidth="1.5"/>
        <rect x="7" y="7" width="10" height="10" rx="1" stroke="url(#featGrad1)" strokeWidth="1" opacity="0.4"/>
        <circle cx="12" cy="12" r="2" fill="url(#featGrad1)"/>
      </svg>
    ),
    titleKey: 'platform_feature_dashboard',
    descKey: 'platform_feature_dashboard_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="featGrad2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="url(#featGrad2)" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="5" stroke="url(#featGrad2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'platform_feature_pipeline',
    descKey: 'platform_feature_pipeline_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="featGrad3" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <circle cx="9" cy="21" r="1.5" fill="url(#featGrad3)"/>
        <circle cx="20" cy="21" r="1.5" fill="url(#featGrad3)"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="url(#featGrad3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#featGrad3)" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
    titleKey: 'platform_feature_marketplace',
    descKey: 'platform_feature_marketplace_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="featGrad4" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="url(#featGrad4)" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="4" stroke="url(#featGrad4)" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="2" stroke="url(#featGrad4)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="url(#featGrad4)" strokeWidth="1.5"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#featGrad4)" strokeWidth="1.5"/>
        <path d="M12 12l-6 6" stroke="url(#featGrad4)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
      </svg>
    ),
    titleKey: 'platform_feature_collab',
    descKey: 'platform_feature_collab_desc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="featGrad5" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M9 12l2 2 4-4" stroke="url(#featGrad5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="7" stroke="url(#featGrad5)" strokeWidth="1.5"/>
        <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#featGrad5)" strokeWidth="1" opacity="0.4"/>
        <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="url(#featGrad5)" strokeWidth="1" opacity="0.4"/>
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="url(#featGrad5)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="intGrad1" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="url(#intGrad1)" strokeWidth="1.5"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="url(#intGrad1)" strokeWidth="1.5"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="url(#intGrad1)" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" stroke="url(#intGrad1)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="intGrad2" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#0EA5E9"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <polyline points="16 18 22 12 16 6" stroke="url(#intGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="url(#intGrad2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="5" stroke="url(#intGrad2)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="intGrad3" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d87e37"/>
            <stop offset="100%" stopColor="#d4b038"/>
          </linearGradient>
        </defs>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="url(#intGrad3)" strokeWidth="1.5" fill="none"/>
        <rect x="6" y="6" width="12" height="12" rx="2" stroke="url(#intGrad3)" strokeWidth="1" opacity="0.4"/>
        <path d="M12 6v12M6 12h12" stroke="url(#intGrad3)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
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
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="intGrad4" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#d4b038"/>
            <stop offset="100%" stopColor="#d87e37"/>
          </linearGradient>
        </defs>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="url(#intGrad4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="6" stroke="url(#intGrad4)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
        <circle cx="12" cy="12" r="2" fill="url(#intGrad4)"/>
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
      <span id="solutions" className="block h-0 scroll-mt-24" aria-hidden="true" />
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
                <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
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
              <GlassCard key={index} className="p-6 text-center">
                <div className="qt-icon mb-4">{feature.icon}</div>
                <h4 className="font-semibold mb-2">{t(feature.titleKey)}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{t(feature.descKey)}</p>
              </GlassCard>
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
