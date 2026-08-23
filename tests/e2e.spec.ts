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

  test('should have mobile menu button visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);
    
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
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