import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavbarFinal';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { ProductsSection } from './components/ProductsSection';
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
  const { i18n } = useTranslation();
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
      <div className="min-h-screen">
        <Navbar theme={theme} setTheme={handleThemeChange} lang={lang} setLang={handleLangChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/trng-demo" element={<TRNGDemoPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;