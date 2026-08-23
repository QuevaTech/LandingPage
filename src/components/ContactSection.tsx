import React, { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from './ui/SectionComponents';

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _honey: '' }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Form submission failed');
      }

      setStatus({ type: 'success', message: data.message || t('form_success') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : t('form_error') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-queva-midnight/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('contact_title')}
          subtitle={t('contact_subtitle')}
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <input type="text" name="_honey" style={{ display: 'none' }} autoComplete="off" />

            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">{t('form_name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact-input w-full"
                placeholder={t('form_name_placeholder')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">{t('form_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact-input w-full"
                placeholder={t('form_email_placeholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">{t('form_message')}</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="contact-input w-full"
                placeholder={t('form_placeholder')}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status && (
              <div
                id="form-status"
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              id="send-email-btn"
              disabled={isSubmitting}
              className="glass-button w-full py-4 px-8 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? t('form_sending') : t('form_submit')}</span>
              {isSubmitting && (
                <svg id="form-spinner" className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              )}
            </button>

            <div className="mt-4 p-4 rounded-lg email-fallback-box">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t('form_alt_text')}</p>
              <a 
                href="mailto:info@queva.tech"
                className="email-fallback-btn inline-flex items-center px-4 py-2 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>{t('form_email_direct')}</span>
              </a>
            </div>
          </form>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.123456789!2d28.341234567890123!3d37.02345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be123456789abc%3A0xabcdef123456789!2sAkyaka%2C%20Ula%2FMu%C4%9Fla%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1672851025098!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QuevaTech Konumu - Akyaka, Muğla"
            />
          </div>
        </div>
      </div>
    </section>
  );
}