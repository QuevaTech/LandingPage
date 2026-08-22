import { useTranslation } from 'react-i18next';
import { GlassCard } from './ui/SectionComponents';

export function FounderSection() {
  const { t } = useTranslation();

  return (
    <section id="founder" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-queva-midnight to-queva-gold flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl">
                  HY
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('founder_title')}</h2>
                <h3 className="text-xl qt-icon font-semibold mb-4">{t('founder_name')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t('founder_bio')}</p>
                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                  <a 
                    href="https://www.linkedin.com/in/yigithasan/" 
                    target="_blank"
                    className="social-link-btn flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.328C3.965 1 2 2.985 2 5.337v13.326C2 21.015 3.965 23 6.328 23h11.34c2.363 0 4.328-1.985 4.328-4.337V5.337C22 2.985 20.031 1 17.668 1z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/yigithasan_" 
                    target="_blank"
                    className="social-link-btn flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-gray-800 text-white text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X
                  </a>
                  <a 
                    href="https://www.researchgate.net/profile/Hasan-Yigit-7" 
                    target="_blank"
                    className="social-link-btn flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.364 8.709 8.709 0 0 0-.078.38 3.053 3.053 0 0 0-.05.529c0 .136.006.25.017.34l.019.134h-.032c-.498-.476-1.189-.753-2.05-.753-.728 0-1.362.18-1.906.54-.543.36-.973.853-1.29 1.48a6.6 6.6 0 0 0-.614 1.918c-.129.675-.194 1.29-.194 1.833 0 .867.161 1.6.48 2.2.32.6.755 1.05 1.308 1.35.553.3 1.178.45 1.875.45.64 0 1.185-.13 1.636-.39.45-.26.806-.6 1.068-1.02h.032v.21c0 .283-.013.544-.038.782-.025.238-.085.477-.18.715-.095.24-.252.46-.47.66-.218.2-.52.36-.905.48-.386.12-.85.18-1.394.18-.38 0-.809-.037-1.286-.11A7.03 7.03 0 0 1 8.6 13.15l-.014-.11h-.032v2.82h.032c.45.15.95.27 1.5.35.55.08 1.052.12 1.504.12.803 0 1.52-.103 2.15-.31.63-.206 1.155-.492 1.577-.858.422-.366.737-.792.946-1.28.21-.487.314-1.015.314-1.583v-5.85h-.032c.02-.1.036-.22.05-.36a4.6 4.6 0 0 0 .022-.441c0-.21-.02-.407-.06-.59a2.3 2.3 0 0 0-.172-.495 1.56 1.56 0 0 0-.31-.42 1.2 1.2 0 0 0-.47-.29 1.89 1.89 0 0 0-.65-.103 2.17 2.17 0 0 0-.796.145c-.24.096-.455.24-.648.432a2.41 2.41 0 0 0-.47.64c-.122.236-.21.49-.263.76-.053.27-.08.544-.08.82 0 .283.03.56.09.83.06.27.147.52.263.75.116.23.264.434.445.61.18.176.394.316.64.42.247.104.524.156.833.156.34 0 .64-.063.896-.19.258-.126.473-.303.648-.53.174-.226.305-.49.393-.79.087-.3.131-.62.131-.96 0-.27-.025-.537-.075-.8a2.7 2.7 0 0 0-.215-.693h-.032l.076-.114.066-.115c.35-.62.826-1.11 1.427-1.47.6-.36 1.257-.54 1.968-.54.475 0 .882.056 1.222.168s.62.28.84.504c.22.224.383.5.489.828.106.328.16.7.16 1.116 0 .41-.054.8-.162 1.17-.108.37-.27.7-.486.99-.216.29-.485.523-.808.7-.323.177-.695.265-1.116.265-.26 0-.488-.034-.684-.103a1.41 1.41 0 0 1-.5-.287 1.19 1.19 0 0 1-.315-.44 1.4 1.4 0 0 1-.108-.56c0-.25.054-.47.162-.66.108-.19.262-.34.462-.45.2-.11.44-.165.72-.165.2 0 .38.027.54.08.16.053.294.133.402.24.108.107.191.24.249.4.058.16.087.343.087.55v.05h2.04v-.08c0-.503-.097-.943-.291-1.318a2.514 2.514 0 0 0-.786-.923 3.24 3.24 0 0 0-1.152-.54c-.63 0-1.19.14-1.67.42-.48.28-.87.66-1.17 1.14-.3.48-.45 1.04-.45 1.68 0 .64.15 1.2.45 1.68.48.48 1.04.86 1.67 1.14.48.28 1.04.42 1.67.42.63 0 1.19-.14 1.67-.42.48-.28.87-.66 1.17-1.14.3-.48.45-1.04.45-1.68 0-.64-.15-1.2-.45-1.68-.48-.48-1.04-.86-1.67-1.14-.48-.28-1.04-.42-1.67-.42z" />
                    </svg>
                    ResearchGate
                  </a>
                  <a 
                    href="https://github.com/ygt22" 
                    target="_blank"
                    className="social-link-btn flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-900 text-white text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://gitlab.com/ygt22" 
                    target="_blank"
                    className="social-link-btn flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                    </svg>
                    GitLab
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <blockquote className="text-center italic text-gray-600 dark:text-gray-400">
                <p>{t('founder_quote')}</p>
              </blockquote>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}