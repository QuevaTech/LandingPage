import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SectionHeading } from './ui/SectionComponents';

type Language = 'tr' | 'en';

const content: Record<Language, {
  eyebrow: string;
  title: string;
  subtitle: string;
  notice: string;
  explore: string;
  simlab: { label: string; title: string; description: string; alt: string; chips: string[] };
  compute: { label: string; title: string; description: string; alt: string; chips: string[] };
}> = {
  tr: {
    eyebrow: 'Ürün Konseptleri',
    title: 'Araştırmadan Kullanılabilir Altyapıya',
    subtitle: 'Simülasyon ekipleri ve kontrollü hesaplama altyapısı için değerlendirdiğimiz iki ürün yönü.',
    notice: 'Bu kartlar ve bağlantılı arayüzler ürün konsepti / etkileşimli simülasyondur. Canlı hizmete, fiyatlandırmaya ya da gerçek kaynak kullanım verisine bağlı değildir.',
    explore: 'Konsepti incele',
    simlab: {
      label: 'Dijital Simülasyon Çalışma Alanı',
      title: 'Queva SimLab',
      description: 'Konteyner tabanlı deney şablonları, tekrarlanabilir koşumlar ve ortak araştırma alanları için tasarım konsepti.',
      alt: 'Konteyner tabanlı simülasyon çalışma alanını anlatan soyut Queva SimLab görseli',
      chips: ['Konteyner şablonları', 'Tekrarlanabilir koşum', 'Çalışma alanı izolasyonu'],
    },
    compute: {
      label: 'Güvenli Hesaplama Dağıtımı',
      title: 'Queva Compute Control',
      description: 'GPU/container kaynaklarının erişim politikaları, kotalar ve izlenebilir olay akışlarıyla yönetimi için tasarım konsepti.',
      alt: 'Güvenli GPU ve konteyner kaynak yönetimini anlatan soyut Queva Compute Control görseli',
      chips: ['Politika tabanlı erişim', 'GPU-saat modeli', 'Olay kayıt mimarisi'],
    },
  },
  en: {
    eyebrow: 'Product Concepts',
    title: 'From Research to Usable Infrastructure',
    subtitle: 'Two product directions we are evaluating for simulation teams and controlled compute infrastructure.',
    notice: 'These cards and linked interfaces are product concepts / interactive simulations. They are not connected to a live service, pricing, or real resource-usage data.',
    explore: 'Explore the concept',
    simlab: {
      label: 'Digital Simulation Workspace',
      title: 'Queva SimLab',
      description: 'A design concept for container-based experiment templates, repeatable runs, and shared research workspaces.',
      alt: 'Abstract Queva SimLab visual representing a container-based simulation workspace',
      chips: ['Container templates', 'Repeatable runs', 'Workspace isolation'],
    },
    compute: {
      label: 'Secure Compute Distribution',
      title: 'Queva Compute Control',
      description: 'A design concept for governing GPU/container resources through access policies, quotas, and traceable event flows.',
      alt: 'Abstract Queva Compute Control visual representing secure GPU and container resource governance',
      chips: ['Policy-based access', 'GPU-hour model', 'Event-log architecture'],
    },
  },
};

export function ProductConceptsSection() {
  const { i18n } = useTranslation();
  const copy = content[i18n.resolvedLanguage === 'en' ? 'en' : 'tr'];
  const products = [
    { ...copy.simlab, image: '/simlab-workspace-concept.png', to: '/simlab-demo' },
    { ...copy.compute, image: '/compute-control-concept.png', to: '/compute-control-demo' },
  ];

  return (
    <section id="product-concepts" className="scroll-mt-24 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.subtitle} />
        <p className="mx-auto mt-6 max-w-4xl rounded-2xl border border-[var(--queva-gold)]/30 bg-[var(--queva-gold)]/10 px-5 py-4 text-center text-sm leading-relaxed text-[var(--fg2)]">
          {copy.notice}
        </p>

        <div className="mt-9 grid gap-7 lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.to} className="group overflow-hidden rounded-3xl border border-[var(--queva-gold)]/20 bg-[#09182a] shadow-[0_24px_60px_rgba(15,23,42,0.16)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img src={product.image} alt={product.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09182a] via-[#09182a]/20 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-5 left-6 rounded-full border border-[#f1c75b]/35 bg-[#09182a]/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#f1c75b] backdrop-blur-sm">
                  {product.label}
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                <p className="mt-3 min-h-14 leading-7 text-slate-300">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.chips.map((chip) => <span key={chip} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200">{chip}</span>)}
                </div>
                <Link to={product.to} className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--queva-gold)] px-5 py-2.5 text-sm font-bold text-[var(--queva-midnight)] transition-transform hover:-translate-y-0.5">
                  {copy.explore}<span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
