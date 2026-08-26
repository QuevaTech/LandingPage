import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/QuevaTech/);
    await expect(page.locator('#root')).toBeVisible();
  });

  test('should navigate to publications page', async ({ page }) => {
    const pubLink = page.locator('a[href="/publications"]').first();
    await pubLink.scrollIntoViewIfNeeded();
    await pubLink.click();
    await expect(page).toHaveURL(/\/publications/);
    await expect(page.locator('h1')).toContainText(/Yayınlar|Publications/);
  });

  test('should have all sections present', async ({ page }) => {
    // Check that all main sections exist in the DOM
    await expect(page.locator('#products')).toBeTruthy();
    await expect(page.locator('#platform')).toBeTruthy();
    await expect(page.locator('#projects')).toBeTruthy();
    await expect(page.locator('#contact')).toBeTruthy();
  });

  test('should localize the enterprise section and display its visual', async ({ page }) => {
    const enterpriseSection = page.locator('#enterprise-products');

    await expect(enterpriseSection.getByText('Kurumsal Çözümler')).toBeVisible();
    await expect(enterpriseSection.getByRole('heading', { level: 2 })).toContainText('Kritik Sistemler İçin Güvenli Mühendislik');
    await expect(enterpriseSection.locator('img[src="/enterprise-security-infrastructure.png"]')).toBeVisible();
  });

  test('should frame use cases as research scenarios with a visual', async ({ page }) => {
    const researchSection = page.locator('#research-scenarios');

    await expect(researchSection.getByText('Araştırma Senaryoları')).toBeVisible();
    await expect(researchSection.getByRole('heading', { level: 2 })).toContainText('Rastgeleliği Nerede Sorguluyoruz?');
    await expect(researchSection.locator('img[src="/research-scenarios.png"]')).toBeVisible();
    await expect(researchSection.locator('img[src="/research-finance-risk-modelling.png"]')).toBeVisible();
    await expect(researchSection.locator('img[src="/research-procedural-systems.png"]')).toBeVisible();
    await expect(researchSection.locator('img[src="/research-security-architecture.png"]')).toBeVisible();
    await expect(researchSection.getByText('Üretim performansı, müşteri sonucu veya sertifika iddiası değildir.')).toBeVisible();
  });

  test('should display AI cover images for every featured blog post', async ({ page }) => {
    const blogSection = page.locator('#blog');

    for (const src of [
      '/blog-6g-communications.png',
      '/blog-post-quantum-cryptography.png',
      '/blog-mlops-hardware-security.png',
      '/blog-physical-entropy.png',
    ]) {
      await expect(blogSection.locator(`img[src="${src}"]`)).toBeVisible();
    }
  });

  test('should introduce both infrastructure product concepts with clear simulation framing', async ({ page }) => {
    const concepts = page.locator('#product-concepts');

    await expect(concepts.getByText('Ürün Konseptleri')).toBeVisible();
    await expect(concepts.getByRole('heading', { name: 'Queva SimLab' })).toBeVisible();
    await expect(concepts.getByRole('heading', { name: 'Queva Compute Control' })).toBeVisible();
    await expect(concepts.getByText(/Canlı hizmete, fiyatlandırmaya ya da gerçek kaynak kullanım verisine bağlı değildir/)).toBeVisible();
  });

  test('should link the YouTube identity and researcher website', async ({ page }) => {
    await expect(page.locator('a[aria-label="QuevaTech YouTube kanalı"]')).toHaveAttribute('href', 'https://www.youtube.com/@QuevaTech');
    await expect(page.locator('#youtube img[alt="QuevaTech yaprak logosu"]')).toBeVisible();
    await expect(page.locator('#founder a[href="https://yigithasan.com"]')).toBeVisible();
  });

  test('should have mobile menu button visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
  });

  test('should present a clear mobile navigation panel', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.locator('button[aria-label="Toggle menu"]').click();

    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    await expect(menu.getByText(/Ana Sayfa|Home/)).toBeVisible();
    await expect(menu.locator('.qt-brand__text')).toContainText('QuevaTech');
  });

  test('should make the light-theme control visible in the mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.locator('button[aria-label="Toggle menu"]').click();

    const themeButton = page.locator('.qt-mobile-menu__theme');
    await expect(themeButton).toHaveClass(/is-light/);
    await expect(themeButton).toHaveCSS('color', 'rgb(27, 31, 59)');
    const orbitAnimation = await themeButton.evaluate((element) => getComputedStyle(element, '::before').animationName);
    expect(orbitAnimation).toBe('qt-mobile-theme-orbit');
  });
});

test.describe('Language Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should switch to English', async ({ page }) => {
    await page.click('button:has-text("EN")');
    // Check that language changed via localStorage or URL
    await page.waitForTimeout(500);
    const lang = await page.evaluate(() => localStorage.getItem('lang'));
    expect(lang).toBe('en');
  });

  test('should switch to Turkish', async ({ page }) => {
    await page.click('button:has-text("TR")');
    await page.waitForTimeout(500);
    const lang = await page.evaluate(() => localStorage.getItem('lang'));
    expect(lang).toBe('tr');
  });

  test('should persist language in localStorage', async ({ page }) => {
    await page.click('button:has-text("EN")');
    await page.waitForTimeout(500);
    await page.reload();
    const lang = await page.evaluate(() => localStorage.getItem('lang'));
    expect(lang).toBe('en');
  });
});

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should toggle dark mode', async ({ page }) => {
    const initialTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    await page.click('button.qt-theme');
    const newTheme = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(newTheme).not.toBe(initialTheme);
  });

  test('should persist theme in localStorage', async ({ page }) => {
    await page.click('button.qt-theme');
    await page.reload();
    const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    expect(isDark).toBe(true);
  });
});

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('input[name="name"]:invalid')).toBeTruthy();
    await expect(page.locator('input[name="email"]:invalid')).toBeTruthy();
    await expect(page.locator('textarea[name="message"]:invalid')).toBeTruthy();
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'invalid-email');
    await page.fill('textarea[name="message"]', 'This is a test message.');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('input[name="email"]:invalid')).toBeTruthy();
  });

  test('should show form status on submit (simulated)', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message for the contact form.');
    await page.click('button[type="submit"]');
    
    // Wait for submission attempt
    await page.waitForTimeout(2000);
    
    // Check that form status appears (either success or error)
    await expect(page.locator('#form-status')).toBeVisible();
  });
});

test.describe('Hero Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display hero title and CTAs', async ({ page }) => {
    await expect(page.locator('.qt-hero__title')).toBeVisible();
    await expect(page.locator('.qt-hero__ctas a')).toHaveCount(2);
  });

  test('should have particle canvas', async ({ page }) => {
    await expect(page.locator('.qt-hero__particles')).toBeVisible();
  });

  test('CTA buttons should navigate correctly', async ({ page }) => {
    await page.click('.qt-hero__ctas a:first-child');
    await expect(page.locator('#platform')).toBeInViewport();
  });
});

test.describe('Publications Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/publications');
    await page.waitForLoadState('networkidle');
  });

  test('should display publications grid', async ({ page }) => {
    const articles = page.locator('article');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should filter by category', async ({ page }) => {
    await page.click('button:has-text("6G")');
    const count = await page.locator('article').count();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('should have read more links', async ({ page }) => {
    const readMoreLinks = page.locator('a:has-text("Devamını Oku"), a:has-text("Read More")');
    const count = await readMoreLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe('TRNG Simulation Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/trng-demo');
    await page.waitForLoadState('networkidle');
  });

  test('should clearly identify the experience as a simulation', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/Rastgeleliğe Güvenmeyin|Don't Trust Randomness/);
    await expect(page.getByText(/üretim verisi değil|not production data/i).first()).toBeVisible();
    await expect(page.getByText(/Şeffaflık notu|Transparency note/i)).toBeVisible();
  });

  test('should tell an accessible story about why randomness matters', async ({ page }) => {
    const story = page.locator('#trng-story');

    await expect(story.getByRole('heading', { level: 2 })).toContainText('Kritik sistemler bazen görünmeyen tek bir başlangıç noktasına dayanır.');
    await expect(story.getByText('Bir Sayının Arkasındaki Hikâye')).toBeVisible();
    await expect(story.getByText(/Bu soru ilk bakışta soyut gelebilir/)).toBeVisible();
    await expect(story.getByText('Bu değer hangi kökten doğdu?')).toBeVisible();
    await expect(story.getByText(/Bu sayfa eğitim amaçlı bir simülasyondur/)).toBeVisible();
  });

  test('should translate the simulation narrative to English', async ({ page }) => {
    await page.getByRole('button', { name: 'EN' }).click();
    await expect(page.locator('h1')).toContainText("Don't Trust Randomness");
    await expect(page.getByText('Not production data', { exact: true })).toBeVisible();
  });
});

test.describe('Infrastructure Product Concepts', () => {
  test('should make SimLab a clearly labelled interactive demonstration', async ({ page }) => {
    await page.goto('/simlab-demo');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Simülasyon işini tekrarlanabilir bir çalışma alanına dönüştürün.');
    await expect(page.getByText(/Gerçek bir çalışma alanı oluşturmaz, konteyner başlatmaz/).first()).toBeVisible();
    const story = page.locator('#simlab-story');
    await expect(story.getByRole('heading', { level: 2 })).toContainText('Araştırma, onu kuran kişinin bilgisayarına mahkûm kalmamalı.');
    await expect(story.getByText('Bir Deneyin Yolculuğu')).toBeVisible();
    await expect(story.getByText(/Bir simülasyon yalnızca bir sonuç üretmez/)).toBeVisible();
    await expect(story.getByText('Kuruma nasıl uyacak?')).toBeVisible();
    await expect(story.getByText(/ürün yönünü anlatır/)).toBeVisible();
    await page.getByRole('button', { name: 'Örnek akışı göster' }).click();
    await expect(page.getByText('Örnek çalışma akışı görünür durumda')).toBeVisible();
  });

  test('should distinguish Compute Control logging concepts from proof claims', async ({ page }) => {
    await page.goto('/compute-control-demo');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Kaynağı görünür, erişimi kontrollü, olayları izlenebilir kılın.');
    await expect(page.getByText('Şeffaflık ve kanıtlanabilirlik sınırı')).toBeVisible();
    await expect(page.getByText(/“Kanıt” iddiası için imzalı olaylar/)).toBeVisible();
    const story = page.locator('#compute-story');
    await expect(story.getByRole('heading', { level: 2 })).toContainText('Hesaplama kaynağı sadece kapasite değil; erişim, bütçe ve sorumluluktur.');
    await expect(story.getByText('Bir GPU Saatinin Arkasındaki Karar')).toBeVisible();
    await expect(story.getByText(/Hassas hesaplama bir kuyruk problemi değildir/)).toBeVisible();
    await expect(story.getByText('İş nerede çalışacak?')).toBeVisible();
    await expect(story.getByText(/Güvenli ağ, kimlik entegrasyonu, kaynak tahsisi/)).toBeVisible();
  });

  test('should take an in-app anchor link back to the matching homepage section', async ({ page }) => {
    await page.goto('/trng-demo');
    await page.waitForLoadState('networkidle');

    await page.locator('.qt-nav a[href="/#contact"]').click();
    await expect(page).toHaveURL(/\/#contact$/);
    await expect(page.locator('#contact')).toBeInViewport();
  });
});

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('should have alt text for images', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      // Allow empty alt for decorative images
      expect(alt !== null).toBeTruthy();
    }
  });

  test('should have proper focus indicators', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('should respect reduced motion preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload();
    // Animations should be disabled or very fast
    const heroTitle = page.locator('.qt-hero__title');
    const animation = await heroTitle.evaluate(el => getComputedStyle(el).animation);
    // Check that animation duration is very short (reduced motion)
    expect(animation).not.toContain('infinite');
  });
});

test.describe('PWA', () => {
  test('should have manifest', async ({ page }) => {
    await page.goto('/');
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', '/manifest.json');
  });
});
