import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/NavbarFinal';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { Footer } from './components/Footer';
import { EnterpriseProductsSection } from './components/EnterpriseProductsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsSection } from './components/StatsSection';
import { PlatformSection } from './components/PlatformSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TrustSection } from './components/TrustSection';
import { BlogSection } from './components/BlogSection';
import { YouTubeSection } from './components/YouTubeSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { PublicationsPage } from './components/PublicationsPage';
import { TRNGDemoPage } from './components/TRNGDemoPage';

function HomePage() {
  return (
    <main>
      <Hero />
      <ProductsSection />
      <EnterpriseProductsSection />
      <ProjectsSection />
      <StatsSection />
      <PlatformSection />
      <CaseStudiesSection />
      <TrustSection />
      <BlogSection />
      <YouTubeSection />
      <FounderSection />
      <ContactSection />
    </main>
  );
}

export function App() {
  const { i18n, t } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const savedLang = localStorage.getItem('lang') as 'tr' | 'en' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    
    if (savedLang) {
      setLang(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleLangChange = (newLang: 'tr' | 'en') => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="min-h-screen">
          <Navbar theme={theme} setTheme={handleThemeChange} lang={lang} setLang={handleLangChange} />
          <Routes>
            <Route path="/" element={
              <>
                <Helmet>
                  <title>QuevaTech | Yapay Zekâ ile Geleceği Şekillendiriyoruz</title>
                  <meta name="description" content="QuevaTech - Yapay zeka, elektronik ve yazılım mühendisliği alanlarında çözümler üreten derin teknoloji girişimi. Alanlarımızdan biri: AI-Hybrid TRNG (gerçek rastgele sayı üretimi)." />
                  <meta name="keywords" content="QuevaTech, yapay zeka, elektronik, yazılım mühendisliği, simülasyon, hesaplamalı mühendislik, TRNG, rastgele sayı üretimi, akademik araştırma, deep tech" />
                  <meta property="og:title" content="QuevaTech | Deep Tech, Advanced Engineering, AI Solutions" />
                  <meta property="og:description" content="Deep-tech venture building AI-based software, electronics, and computational simulation solutions — including AI-Hybrid TRNG (true random number generation) technology." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <HomePage />
              </>
            } />
            <Route path="/publications" element={
              <>
                <Helmet>
                  <title>QuevaTech | Yayınlar ve Araştırmalar</title>
                  <meta name="description" content="QuevaTech'in akademik yayınları, teknik raporları ve araştırma makaleleri. 6G, pós-kuantum kriptografi, AI-Hybrid TRNG ve daha fazlası." />
                  <meta name="keywords" content="QuevaTech, yayınlar, araştırma, 6G, pós-kuantum, TRNG, AI-Hybrid, akademik" />
                  <meta property="og:title" content="QuevaTech | Yayınlar ve Araştırmalar" />
                  <meta property="og:description" content="QuevaTech'in akademik yayınları, teknik raporları ve araştırma makaleleri. 6G, pós-kuantum kriptografi, AI-Hybrid TRNG ve daha fazlası." />
                  <meta property="og:type" content="website" />
                </Helmet>
                <PublicationsPage />
              </>
            } />
            <Route path="/trng-demo" element={
              <>
                <Helmet>
                  <title>{t('trng_meta_title')}</title>
                  <meta name="description" content={t('trng_meta_description')} />
                  <meta name="keywords" content="TRNG simülasyonu, AI-Hybrid TRNG, fiziksel entropi, kriptografik rastgelelik, kriptografik anahtar üretimi, entropy simulation" />
                  <link rel="canonical" href="https://queva.tech/trng-demo" />
                  <meta property="og:url" content="https://queva.tech/trng-demo" />
                  <meta property="og:title" content={t('trng_meta_title')} />
                  <meta property="og:description" content={t('trng_meta_description')} />
                  <meta property="og:type" content="website" />
                  <meta property="og:image" content="https://queva.tech/og-trng-simulation.png" />
                  <meta property="og:image:width" content="1200" />
                  <meta property="og:image:height" content="630" />
                  <meta property="og:image:alt" content={t('trng_og_alt')} />
                  <meta name="twitter:card" content="summary_large_image" />
                  <meta name="twitter:title" content={t('trng_meta_title')} />
                  <meta name="twitter:description" content={t('trng_meta_description')} />
                  <meta name="twitter:image" content="https://queva.tech/og-trng-simulation.png" />
                  <script type="application/ld+json">
                    {JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'FAQPage',
                      mainEntity: [1, 2, 3].map((number) => ({
                        '@type': 'Question',
                        name: t(`trng_faq_${number}_q`),
                        acceptedAnswer: {
                          '@type': 'Answer',
                          text: t(`trng_faq_${number}_a`),
                        },
                      })),
                    })}
                  </script>
                </Helmet>
                <TRNGDemoPage />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
