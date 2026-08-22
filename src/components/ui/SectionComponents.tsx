import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`qt-heading qt-heading--${align}`}>
      {eyebrow && <div className="qt-eyebrow">{eyebrow}</div>}
      <h2 className="qt-heading__title qt-gradient">{title}</h2>
      {subtitle && <p className="qt-heading__sub">{subtitle}</p>}
    </div>
  );
}

interface ChipProps {
  children: React.ReactNode;
  variant?: 'indigo' | 'purple' | 'green' | 'sky' | 'gray';
}

export function Chip({ children, variant = 'indigo' }: ChipProps) {
  return <span className={`qt-chip qt-chip--${variant}`}>{children}</span>;
}

interface GlassCardProps {
  icon?: React.ReactNode;
  title?: string;
  desc?: string;
  chips?: Array<{ label: string; variant: ChipProps['variant'] }>;
  children?: React.ReactNode;
  className?: string;
}

export function GlassCard({ icon, title, desc, chips, children, className }: GlassCardProps) {
  return (
    <div className={`qt-card ${className || ''}`}>
      {icon && <div className="qt-card__icon">{icon}</div>}
      {title && <h3 className="qt-card__title">{title}</h3>}
      {desc && <p className="qt-card__desc">{desc}</p>}
      {chips && (
        <div className="qt-card__chips">
          {chips.map((c, i) => (
            <Chip key={i} variant={c.variant}>{c.label}</Chip>
          ))}
        </div>
      )}
      {children}
    </div>
  );
}

interface CaseStudyRowProps {
  tag: string;
  title: string;
  desc: string;
  stat: string;
  statValue: string;
}

export function CaseStudyRow({ tag, title, desc, stat, statValue }: CaseStudyRowProps) {
  return (
    <div className="qt-case">
      <div className="qt-case__copy">
        <div className="qt-eyebrow">{tag}</div>
        <h2 className="qt-case__title qt-gradient">{title}</h2>
        <p className="qt-case__desc">{desc}</p>
      </div>
      <div className="qt-case__stat">
        <div className="qt-case__statValue">{statValue}</div>
        <div className="qt-case__statLabel">{stat}</div>
      </div>
    </div>
  );
}