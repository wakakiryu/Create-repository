export default defineNuxtConfig({
  modules: ['@vercel/analytics'],
  compatibilityDate: '2025-07-15',
  srcDir: '.',
  // Keep payloads inline to avoid the prerender cache rejecting the root URL.
  experimental: { payloadExtraction: false },
  devtools: { enabled: false },
  css: ['~/assets/editorial.css'],
  app: { head: { htmlAttrs: { lang: 'ja' }, link: [{ rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }] } },
  routeRules: {
    '/category/electronics': { redirect: { to: '/#products', statusCode: 301 } },
    '/category/fashion': { redirect: { to: '/', statusCode: 301 } }
  },
  nitro: { prerender: { crawlLinks: true, routes: ['/', '/guides', '/about', '/editorial-policy'] } }
})