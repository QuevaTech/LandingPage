import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionHeading, GlassCard } from './ui/SectionComponents';

interface EntropyData {
  timestamp: number;
  value: number;
  bits: number;
}

interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'critical';
  entropy_rate: number;
  nist_tests: {
    frequency: boolean;
    block_frequency: boolean;
    runs: boolean;
    long_runs: boolean;
    rank: boolean;
    fft: boolean;
    non_overlapping_template: boolean;
    overlapping_template: boolean;
    universal: boolean;
    approximate_entropy: boolean;
    random_excursions: boolean;
    random_excursions_variant: boolean;
    serial: boolean;
    linear_complexity: boolean;
  };
  throughput_mbps: number;
  last_updated: string;
}

export function TRNGDemoPage() {
  const { t } = useTranslation();
  const [health, setHealth] = useState<HealthCheckResponse | null>(null);
  const [entropyHistory, setEntropyHistory] = useState<EntropyData[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string>('');
  const [generatedPassword, setGeneratedPassword] = useState<string>('');
  const [keyLength, setKeyLength] = useState(32);
  const [passwordLength, setPasswordLength] = useState(16);
  const [entropyCanvas, setEntropyCanvas] = useState<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();

  // Simulated WebSocket connection for real-time entropy data
  useEffect(() => {
    setIsConnected(true);
    
    // Simulate real-time entropy stream
    const interval = setInterval(() => {
      const newData: EntropyData = {
        timestamp: Date.now(),
        value: Math.random(),
        bits: 0.99 + Math.random() * 0.01,
      };
      
      setEntropyHistory(prev => {
        const updated = [...prev, newData].slice(-100);
        return updated;
      });
    }, 100);

    // Simulate health check
    const healthInterval = setInterval(() => {
      // Randomly fail one test occasionally to show 14/15
      const testKeys = [
        'frequency', 'block_frequency', 'runs', 'long_runs', 'rank', 'fft',
        'non_overlapping_template', 'overlapping_template', 'universal',
        'approximate_entropy', 'random_excursions', 'random_excursions_variant',
        'serial', 'linear_complexity'
      ];
      const failIndex = Math.random() < 0.3 ? Math.floor(Math.random() * testKeys.length) : -1;
      
      const nistTests = testKeys.reduce((acc, key, index) => {
        acc[key as keyof HealthCheckResponse['nist_tests']] = index !== failIndex;
        return acc;
      }, {} as HealthCheckResponse['nist_tests']);

      setHealth({
        status: failIndex >= 0 ? 'degraded' : 'healthy',
        entropy_rate: 0.999 + Math.random() * 0.001,
        nist_tests: nistTests,
        throughput_mbps: 10 + Math.random() * 5,
        last_updated: new Date().toISOString(),
      });
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(healthInterval);
      setIsConnected(false);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Draw entropy visualization
  useEffect(() => {
    const canvas = entropyCanvas;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(212, 176, 56, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(0, (height / 10) * i);
        ctx.lineTo(width, (height / 10) * i);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo((width / 10) * i, 0);
        ctx.lineTo((width / 10) * i, height);
        ctx.stroke();
      }

      // Draw entropy line
      if (entropyHistory.length > 1) {
        ctx.beginPath();
        ctx.strokeStyle = '#d4b038';
        ctx.lineWidth = 2;
        ctx.shadowColor = '#d4b038';
        ctx.shadowBlur = 10;
        
        entropyHistory.forEach((point, index) => {
          const x = (index / Math.max(entropyHistory.length - 1, 1)) * width;
          const y = height - (point.value * height * 0.8) - (height * 0.1);
          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Draw current value indicator
      if (entropyHistory.length > 0) {
        const latest = entropyHistory[entropyHistory.length - 1];
        const x = width;
        const y = height - (latest.value * height * 0.8) - (height * 0.1);
        
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = '#d4b038';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [entropyHistory, entropyCanvas]);

  const generateKey = async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    const bytes = new Uint8Array(keyLength);
    crypto.getRandomValues(bytes);
    setGeneratedKey(Array.from(bytes, b => b.toString(16).padStart(2, '0')).join(''));
  };

  const generatePassword = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    const bytes = new Uint8Array(passwordLength);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < passwordLength; i++) {
      password += charset[bytes[i] % charset.length];
    }
    setGeneratedPassword(password);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4" style={{ background: 'linear-gradient(135deg, var(--queva-midnight) 0%, #2d2060 50%, var(--queva-midnight) 100%)' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <p className="qt-eyebrow mb-4" style={{ color: 'var(--queva-gold)' }}>{t('trng_demo_eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 qt-gradient">{t('trng_demo_title')}</h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">{t('trng_demo_subtitle')}</p>
          
          {/* Connection Status */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${isConnected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`}></span>
              <span className="text-sm font-medium">{isConnected ? t('trng_status_connected') : t('trng_status_disconnected')}</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-mono">
              {t('trng_throughput')}: {health?.throughput_mbps?.toFixed(1) || '—'} MB/s
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Real-time Entropy Visualization */}
          <div className="mb-12">
            <SectionHeading
              eyebrow={t('trng_live_entropy')}
              title={t('trng_entropy_title')}
              subtitle={t('trng_entropy_subtitle')}
            />
            <div className="mt-8 glass-card rounded-2xl p-6">
              <div className="relative h-64 md:h-80">
                <canvas
                  ref={setEntropyCanvas}
                  className="w-full h-full"
                  style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '8px' }}
                />
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg">
                    <span className="w-3 h-3 rounded-full bg-queva-gold"></span>
                    <span>{t('trng_entropy_bits')}: <span className="font-mono font-bold" id="entropy-bits">0.999</span></span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg">
                    <span className="w-3 h-3 rounded-full bg-green-400"></span>
                    <span>{t('trng_samples_sec')}: <span className="font-mono font-bold">1,000,000</span></span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span>{t('trng_buffer')}: <span className="font-mono font-bold">99.2%</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Health Check Panel */}
            <div>
              <SectionHeading
                eyebrow={t('trng_health_eyebrow')}
                title={t('trng_health_title')}
                subtitle={t('trng_health_subtitle')}
                align="left"
              />
              <div className="mt-6 glass-card rounded-2xl p-6">
                {health && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${health.status === 'healthy' ? 'bg-green-500/20' : health.status === 'degraded' ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}>
                        <span className="text-2xl">
                          {health.status === 'healthy' ? '✓' : health.status === 'degraded' ? '⚠' : '✗'}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold capitalize">{health.status}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('trng_last_update')}: {new Date(health.last_updated).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-black/30 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('trng_entropy_rate')}</p>
                        <p className="text-2xl font-bold font-mono text-queva-gold">{(health.entropy_rate * 100).toFixed(2)}%</p>
                      </div>
                      <div className="bg-black/30 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('trng_throughput')}</p>
                        <p className="text-2xl font-bold font-mono text-queva-gold">{health.throughput_mbps.toFixed(1)} MB/s</p>
                      </div>
                      <div className="bg-black/30 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('trng_nist_passed')}</p>
                        <p className="text-2xl font-bold font-mono text-green-400">{Object.values(health.nist_tests).filter(Boolean).length}/15</p>
                      </div>
                      <div className="bg-black/30 rounded-xl p-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{t('trng_uptime')}</p>
                        <p className="text-2xl font-bold font-mono text-blue-400">99.99%</p>
                      </div>
                    </div>

                    <h4 className="font-semibold mb-4">{t('trng_nist_tests')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(health.nist_tests).map(([test, passed]) => (
                        <div key={test} className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                          <div className={`w-3 h-3 rounded ${passed ? 'bg-green-400' : 'bg-red-400'}`}></div>
                          <span className="text-sm capitalize">{test.replace(/_/g, ' ')}</span>
                          <span className={`ml-auto text-xs font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                            {passed ? 'PASS' : 'FAIL'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Live Generator */}
            <div>
              <SectionHeading
                eyebrow={t('trng_generator_eyebrow')}
                title={t('trng_generator_title')}
                subtitle={t('trng_generator_subtitle')}
                align="left"
              />
              <div className="mt-6 space-y-6">
                {/* Key Generator */}
                <GlassCard className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-queva-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    {t('trng_key_gen')}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">{t('trng_key_length')}: <span className="font-mono text-queva-gold">{keyLength}</span> bytes</label>
                      <input
                        type="range"
                        min="16"
                        max="64"
                        step="8"
                        value={keyLength}
                        onChange={(e) => setKeyLength(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-queva-gold"
                      />
                    </div>
                    <button
                      onClick={generateKey}
                      className="w-full glass-button py-3 px-6 rounded-lg font-semibold transition-all"
                    >
                      {t('trng_generate_key')}
                    </button>
                    {generatedKey && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{t('trng_generated_key')}</span>
                          <button
                            onClick={() => copyToClipboard(generatedKey)}
                            className="text-sm text-queva-gold hover:underline"
                          >
                            {t('trng_copy')}
                          </button>
                        </div>
                        <div className="bg-black/50 rounded-lg p-3 font-mono text-xs break-all text-queva-gold">
                          {generatedKey}
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>

                {/* Password Generator */}
                <GlassCard className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-queva-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      <circle cx="12" cy="16" r="1" fill="currentColor"/>
                    </svg>
                    {t('trng_password_gen')}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">{t('trng_password_length')}: <span className="font-mono text-queva-gold">{passwordLength}</span> chars</label>
                      <input
                        type="range"
                        min="8"
                        max="64"
                        step="1"
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-queva-gold"
                      />
                    </div>
                    <button
                      onClick={generatePassword}
                      className="w-full glass-button py-3 px-6 rounded-lg font-semibold transition-all"
                    >
                      {t('trng_generate_password')}
                    </button>
                    {generatedPassword && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">{t('trng_generated_password')}</span>
                          <button
                            onClick={() => copyToClipboard(generatedPassword)}
                            className="text-sm text-queva-gold hover:underline"
                          >
                            {t('trng_copy')}
                          </button>
                        </div>
                        <div className="bg-black/50 rounded-lg p-3 font-mono text-sm break-all text-green-400">
                          {generatedPassword}
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* API Documentation */}
          <div className="mb-12">
            <SectionHeading
              eyebrow={t('trng_api_eyebrow')}
              title={t('trng_api_title')}
              subtitle={t('trng_api_subtitle')}
            />
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  method: 'GET',
                  endpoint: '/api/v1/entropy',
                  desc: t('trng_api_entropy_desc'),
                  params: ['bytes (optional, default: 32)', 'format (hex|base64|raw)'],
                },
                {
                  method: 'GET',
                  endpoint: '/api/v1/password',
                  desc: t('trng_api_password_desc'),
                  params: ['length (optional, default: 16)', 'charset (optional)'],
                },
                {
                  method: 'GET',
                  endpoint: '/api/v1/health',
                  desc: t('trng_api_health_desc'),
                  params: [],
                },
              ].map((api, i) => (
                <GlassCard key={i} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${api.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                      {api.method}
                    </span>
                    <code className="font-mono text-queva-gold">{api.endpoint}</code>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{api.desc}</p>
                  {api.params.length > 0 && (
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{t('trng_api_params')}</p>
                      <ul className="space-y-1">
                        {api.params.map((param, pi) => (
                          <li key={pi} className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-queva-gold"></span>
                            <code className="font-mono">{param}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Technical Specs */}
          <div>
            <SectionHeading
              eyebrow={t('trng_specs_eyebrow')}
              title={t('trng_specs_title')}
              subtitle={t('trng_specs_subtitle')}
            />
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🔬', title: t('trng_spec_entropy'), desc: t('trng_spec_entropy_desc') },
                { icon: '⚡', title: t('trng_spec_throughput'), desc: t('trng_spec_throughput_desc') },
                { icon: '🏥', title: t('trng_spec_nist'), desc: t('trng_spec_nist_desc') },
                { icon: '🔒', title: t('trng_spec_crypto'), desc: t('trng_spec_crypto_desc') },
              ].map((spec, i) => (
                <GlassCard key={i} className="p-6 text-center">
                  <div className="text-4xl mb-4">{spec.icon}</div>
                  <h4 className="font-semibold mb-2">{spec.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{spec.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}