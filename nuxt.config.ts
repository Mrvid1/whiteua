import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  css: [
    '~/assets/css/main.css',
    'notivue/notification.css', // Для уведомлений
    'notivue/animations.css',
    'notivue/notification-progress.css'
  ],

  vite: {
    plugins: [tailwindcss()], // tailwindcss() не нужен тут, Nuxt уже поддерживает Tailwind
  },
  
  modules: ['@nuxt/icon', 'notivue/nuxt', '@nuxtjs/google-fonts'],


  notivue: {
    position: 'top-right',
    limit: 4,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
      global: {
        duration: 10000
      }
    }
  },

  googleFonts: {
    families: {
      Tektur: [400, 500, 600, 700], // Выбери нужные веса
    },
    display: 'swap',
    download: false,
    base64: true
  }
});
