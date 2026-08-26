import { mkdir, readFile, writeFile } from 'node:fs/promises';

const outputDirectory = new URL('../dist/trng-demo/', import.meta.url);
const sourceDocument = new URL('../dist/index.html', import.meta.url);

const metadata = {
  title: 'AI-Hybrid TRNG Simülasyonu | Entropi ve Kriptografik Güvenlik | QuevaTech',
  description: 'Fiziksel entropi, izleme ve kriptografik rastgelelik hakkındaki teknik soruları AI-Hybrid TRNG etkileşimli simülasyonuyla keşfedin. Üretim verisi değildir.',
  url: 'https://queva.tech/trng-demo',
  image: 'https://queva.tech/og-trng-simulation.png',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bu gerçek bir TRNG demosu mu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır. Bu sayfa, AI-Hybrid TRNG yaklaşımını anlatan etkileşimli bir simülasyondur. Fiziksel bir entropi kaynağına, üretim cihazına veya canlı API’ye bağlı değildir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Buradaki anahtar ya da parolalar kullanılabilir mi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hayır. Değerler tarayıcıdaki Web Crypto API tarafından yalnızca arayüzü anlatmak için üretilir; QuevaTech TRNG çıktısı veya üretim anahtar materyali değildir.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bu simülasyonun amacı nedir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fiziksel entropi, izleme, test sinyalleri ve geliştirici deneyimi hakkındaki teknik tartışmaya somut bir başlangıç noktası sunmaktır.',
      },
    },
  ],
};

const replaceMeta = (document, attribute, value) =>
  document.replace(new RegExp(`(<meta ${attribute}=")[^"]*(")`, 'g'), `$1${value}$2`);

let document = await readFile(sourceDocument, 'utf8');

document = document.replace(/<title>[\s\S]*?<\/title>/, `<title>${metadata.title}</title>`);
document = replaceMeta(document, 'name="description" content', metadata.description);
document = replaceMeta(document, 'name="keywords" content', 'TRNG simülasyonu, AI-Hybrid TRNG, fiziksel entropi, kriptografik rastgelelik, kriptografik anahtar üretimi');
document = document.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${metadata.url}$2`);
document = document.replace(/\s*<link rel="alternate" hreflang="(?:tr|en|x-default)"[^>]*>/g, '');
document = replaceMeta(document, 'property="og:url" content', metadata.url);
document = replaceMeta(document, 'property="og:title" content', metadata.title);
document = replaceMeta(document, 'property="og:description" content', metadata.description);
document = replaceMeta(document, 'property="og:image" content', metadata.image);
document = replaceMeta(document, 'name="twitter:url" content', metadata.url);
document = replaceMeta(document, 'name="twitter:title" content', metadata.title);
document = replaceMeta(document, 'name="twitter:description" content', metadata.description);
document = replaceMeta(document, 'name="twitter:image" content', metadata.image);
document = document.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>\n</head>`);

await mkdir(outputDirectory, { recursive: true });
await writeFile(new URL('index.html', outputDirectory), document);
