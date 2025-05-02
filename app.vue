<template>
  <div>
    <!-- Ваш существующий код -->
    <Notivue v-slot="item">
      <Notification :item="item">
        <NotificationProgress :item="item" />
      </Notification>
    </Notivue>
    
    <NuxtLayout>
      <keep-alive><NuxtPage /></keep-alive>
    </NuxtLayout>

    <!-- Красивая кнопка поддержки в Telegram -->
    <a
      href="https://t.me/your_telegram_username"
      target="_blank"
      class="fixed bottom-6 right-6 z-50 group"
      aria-label="Техподдержка в Telegram"
    >
      <div class="relative">
        <!-- Основной круг с градиентом и тенями -->
        <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-active:scale-95">
          <!-- Иконка Telegram с "живым" эффектом -->
          <svg class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 13L15.5 18L18.5 7L5 11.5L8 13ZM8 13L11 16L15.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        
        <!-- Всплывающий текст -->
        <div class="absolute right-16 bottom-1/2 translate-y-1/2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-white px-3 py-1 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Написать в поддержку
          <!-- Треугольный указатель -->
          <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white dark:bg-gray-800 rotate-45"></div>
        </div>
        
        <!-- Эффект пульсации (по желанию) -->
        <div class="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping -z-10 transition-opacity duration-300"></div>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* Дополнительные анимации */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.group:hover div:first-child {
  animation: float 2s ease-in-out infinite;
}
</style>