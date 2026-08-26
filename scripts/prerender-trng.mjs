import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';

const sourceDocument = new URL('../dist/index.html', import.meta.url);

const routes = [
  {
    path: 'trng-demo',
    title: 'AI-Hybrid TRNG Simülasyonu | Entropi ve Kriptografik Güvenlik | QuevaTech',
    description: 'Fiziksel entropi, izleme ve kriptografik rastgelelik hakkındaki teknik soruları AI-Hybrid TRNG etkileşimli simülasyonuyla keşfedin. Üretim verisi değildir.',
    keywords: 'TRNG simülasyonu, AI-Hybrid TRNG, fiziksel entropi, kriptografik rastgelelik, kriptografik anahtar üretimi',
    image: 'https://queva.tech/og-trng-simulation.png',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Bu gerçek bir TRNG demosu mu?',
          acceptedAnswer: { '@type': 'Answer', text: 'Hayır. Bu sayfa, AI-Hybrid TRNG yaklaşımını anlatan etkileşimli bir simülasyondur. Fiziksel bir entropi kaynağına, üretim cihazına veya canlı API’ye bağlı değildir.' },
        },
        {
          '@type': 'Question',
          name: 'Buradaki anahtar ya da parolalar kullanılabilir mi?',
          acceptedAnswer: { '@type': 'Answer', text: 'Hayır. Değerler tarayıcıdaki Web Crypto API tarafından yalnızca arayüzü anlatmak için üretilir; QuevaTech TRNG çıktısı veya üretim anahtar materyali değildir.' },
        },
        {
          '@type': 'Question',
          name: 'Bu simülasyonun amacı nedir?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fiziksel entropi, izleme, test sinyalleri ve geliştirici deneyimi hakkındaki teknik tartışmaya somut bir başlangıç noktası sunmaktır.' },
        },
      ],
    },
  },
  {
    path: 'simlab-demo',
    title: 'Queva SimLab Ürün Konsepti | Tekrarlanabilir Simülasyon Çalışma Alanı',
    description: 'Queva SimLab, konteyner tabanlı deney şablonları ve tekrarlanabilir simülasyon koşumları için ürün konseptidir. Canlı hizmet değildir.',
    keywords: 'simülasyon çalışma alanı, konteyner şablonları, Docker, tekrarlanabilir deney, bilimsel hesaplama, ürün konsepti',
    image: 'https://queva.tech/simlab-workspace-concept.png',
  },
  {
    path: 'compute-control-demo',
    title: 'Queva Compute Control Ürün Konsepti | Güvenli GPU ve Konteyner Yönetimi',
    description: 'Queva Compute Control, politika tabanlı GPU/container erişimi ve denetlenebilir kayıt mimarisi için ürün konseptidir. Canlı hizmet değildir.',
    keywords: 'GPU kaynak yönetimi, GPU-saat, konteyner yönetimi, güvenli hesaplama, altyapı yönetişimi, ürün konsepti',
    image: 'https://queva.tech/compute-control-concept.png',
  },
];

const replaceMeta = (document, attribute, value) =>
  document.replace(new RegExp(`(<meta ${attribute}=")[^"]*(")`, 'g'), `$1${value}$2`);

const source = await readFile(sourceDocument, 'utf8');

for (const route of routes) {
  const url = `https://queva.tech/${route.path}`;
  let document = source;
  document = document.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);
  document = replaceMeta(document, 'name="description" content', route.description);
  document = replaceMeta(document, 'name="keywords" content', route.keywords);
  document = document.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  document = document.replace(/\s*<link rel="alternate" hreflang="(?:tr|en|x-default)"[^>]*>/g, '');
  document = replaceMeta(document, 'property="og:url" content', url);
  document = replaceMeta(document, 'property="og:title" content', route.title);
  document = replaceMeta(document, 'property="og:description" content', route.description);
  document = replaceMeta(document, 'property="og:image" content', route.image);
  document = replaceMeta(document, 'name="twitter:url" content', url);
  document = replaceMeta(document, 'name="twitter:title" content', route.title);
  document = replaceMeta(document, 'name="twitter:description" content', route.description);
  document = replaceMeta(document, 'name="twitter:image" content', route.image);
  if (route.schema) document = document.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(route.schema)}</script>\n</head>`);

  const outputDirectory = new URL(`../dist/${route.path}/`, import.meta.url);
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(new URL('index.html', outputDirectory), document);
}

for (const filename of ['privacy-policy.html', 'terms-of-service.html', 'sitemap.xml', 'robots.txt']) {
  await copyFile(new URL(`../${filename}`, import.meta.url), new URL(`../dist/${filename}`, import.meta.url));
}
