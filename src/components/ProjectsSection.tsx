import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard } from './ui/SectionComponents';

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('projects_title')}
          subtitle={t('projects_subtitle')}
        />
        <div className="max-w-4xl mx-auto mt-12">
          <GlassCard className="rounded-3xl overflow-hidden p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <img 
                src="https://raw.githubusercontent.com/QuevaTech/PassGuard/main/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png"
                alt="PassGuard Vault"
                className="w-16 h-16 rounded-2xl flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold">PassGuard Vault</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">Open Source</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">Flutter</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('passguard_tagline')}</p>
              </div>
              <a 
                href="https://github.com/QuevaTech/PassGuard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {t('passguard_desc')}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs px-3 py-1.5 rounded-full bg-queva-gold/10 dark:bg-queva-gold/15 text-queva-gold dark:text-blue-300 font-medium">AES-256-GCM</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-queva-gold/10 dark:bg-queva-gold/15 text-queva-gold dark:text-blue-300 font-medium">Argon2id</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-queva-ember/10 dark:bg-queva-ember/15 text-queva-ember dark:text-purple-300 font-medium">iOS · Android</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-queva-ember/10 dark:bg-queva-ember/15 text-queva-ember dark:text-purple-300 font-medium">macOS · Linux · Windows</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium">Sıfır Bulut</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-medium">Hesap Yok</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 font-medium">AGPL-3.0</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-queva-gold/10 dark:bg-queva-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-queva-gold dark:text-blue-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5">{t('passguard_feature1_title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('passguard_feature1_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-queva-ember/10 dark:bg-queva-ember/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-queva-ember dark:text-purple-400">
                    <rect width="20" height="14" x="2" y="3" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5">{t('passguard_feature2_title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('passguard_feature2_desc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 dark:text-green-400">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5">{t('passguard_feature3_title')}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t('passguard_feature3_desc')}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 mb-8"></div>

            <div className="mb-8">
              <h4 className="font-bold text-base mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-queva-gold dark:text-blue-400">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                {t('passguard_arch_title')}
              </h4>
              <div className="bg-gray-900 dark:bg-black/40 rounded-xl p-4 font-mono text-xs text-green-400 leading-relaxed overflow-x-auto mb-4">
                <div className="text-gray-500 mb-1"># Şifre türetme zinciri</div>
                <div>Ana Şifre</div>
                <div className="text-gray-500 ml-4">│</div>
                <div className="ml-4">▼</div>
                <div className="ml-4 text-yellow-400">Argon2id <span className="text-gray-500">(64MB · 3 iter · 4 lane)</span></div>
                <div className="text-gray-500 ml-4">│</div>
                <div className="ml-4">▼</div>
                <div className="ml-4 text-blue-400">AES-256 Key <span className="text-gray-500">(yalnızca bellekte)</span></div>
                <div className="text-gray-500 ml-4">├─► <span className="text-gray-400">key_hash (SHA-256) → vault header doğrulama</span></div>
                <div className="text-gray-500 ml-4">└─► <span className="text-gray-400">Her giriş → AES-256-GCM + benzersiz IV + auth tag</span></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                  <span className="text-lg">🔑</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Ana şifren <strong>Argon2id</strong> ile türetilir — brute-force saldırılarına karşı en güçlü standart</p>
                </div>
                <div className="flex items-start gap-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                  <span className="text-lg">🧠</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Oluşan anahtar yalnızca <strong>bellekte tutulur</strong> — diskte ya da sunucuda hiç saklanmaz</p>
                </div>
                <div className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  <span className="text-lg">🛡️</span>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Her kayıt <strong>kendi benzersiz anahtarıyla</strong> şifrelenir — biri ele geçse diğerleri güvende</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-base mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-queva-ember dark:text-purple-400">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
                {t('passguard_compare_title')}
              </h4>
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800/60">
                      <th className="text-left p-3 font-semibold text-gray-600 dark:text-gray-300">Özellik</th>
                      <th className="p-3 font-bold text-queva-gold dark:text-blue-400">PassGuard</th>
                      <th className="p-3 font-semibold text-gray-500 dark:text-gray-400">LastPass</th>
                      <th className="p-3 font-semibold text-gray-500 dark:text-gray-400">1Password</th>
                      <th className="p-3 font-semibold text-gray-500 dark:text-gray-400">KeePass</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">Tam Çevrimdışı</td>
                      <td className="p-3 text-center text-green-500 font-bold">✅</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">Hesap Gerektirmez</td>
                      <td className="p-3 text-center text-green-500 font-bold">✅</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">AES-256-GCM</td>
                      <td className="p-3 text-center text-green-500 font-bold">✅</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                      <td className="p-3 text-center text-red-400">❌ CBC</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">Argon2id (varsayılan)</td>
                      <td className="p-3 text-center text-green-500 font-bold">✅</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">Native Mobil Uygulama</td>
                      <td className="p-3 text-center text-green-500 font-bold">✅</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                      <td className="p-3 text-center text-green-500">✅</td>
                      <td className="p-3 text-center text-red-400">❌</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/30">
                      <td className="p-3 text-gray-600 dark:text-gray-300">Güvenlik Olayı</td>
                      <td className="p-3 text-center text-green-500 font-bold">Yok</td>
                      <td className="p-3 text-center text-red-400">Veri İhlali (2022)</td>
                      <td className="p-3 text-center text-green-500">Yok</td>
                      <td className="p-3 text-center text-red-400">CVE-2023-32784</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href="https://github.com/QuevaTech/PassGuard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-queva-midnight to-queva-gold text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>{t('passguard_cta_source')}</span>
              </a>
              <a 
                href="https://github.com/QuevaTech/PassGuard/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-queva-gold dark:border-blue-500 text-queva-gold dark:text-blue-400 text-sm font-semibold hover:bg-queva-gold/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <span>{t('passguard_cta_download')}</span>
              </a>
              <a 
                href="https://github.com/QuevaTech/PassGuard/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span>{t('passguard_cta_feedback')}</span>
              </a>
              <a 
                href="https://www.youtube.com/shorts/VnDrqcxts9g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-400 dark:border-red-500 text-red-500 dark:text-red-400 text-sm font-semibold hover:bg-red-500/5 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>{t('passguard_cta_video')}</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}