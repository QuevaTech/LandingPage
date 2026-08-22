import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['qt-icon.svg', 'robots.txt'],
      manifest: {
        name: 'QuevaTech',
        short_name: 'QuevaTech',
        description: 'Deep Tech, Advanced Engineering, and AI Solutions',
        theme_color: '#1b1f3b',
        background_color: '#eee6d8',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'qt-icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'GitHub',
            url: 'https://github.com/QuevaTech',
            description: 'View our open source projects'
          },
          {
            name: 'Contact',
            url: '/#contact',
            description: 'Get in touch'
          }
        ],
        categories: ['technology', 'developer', 'education'],
        screenshots: [
          {
            src: 'screenshot-wide.png',
            sizes: '1280x720',
            form_factor: 'wide',
            label: 'QuevaTech Landing Page - Desktop'
          },
          {
            src: 'screenshot-narrow.png',
            sizes: '750x1334',
            form_factor: 'narrow',
            label: 'QuevaTech Landing Page - Mobile'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});