<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Анимированное число 404 -->
        <div class="text-9xl font-bold text-blue-600 mb-8 animate-bounce">
          4<span class="text-green-600">0</span>4
        </div>

        <!-- Основной контент -->
        <div class="space-y-6 mb-12">
          <h1 class="text-5xl font-bold text-gray-800">
            Ой! Сторінку не знайдено
          </h1>
          <p class="text-xl text-gray-600 max-w-xl mx-auto">
            Схоже, ви заблукали у цифровому просторі. Давайте повернемося на безпечну орбіту!
          </p>
        </div>

        <!-- Интерактивная кнопка -->
        <button 
          @click="handleError"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white 
                rounded-2xl shadow-lg transform transition-all duration-300
                hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-green-700
                focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <Icon name="heroicons:rocket-launch" class="w-6 h-6 mr-3 animate-pulse" />
          <span class="text-lg font-semibold">Повернутись на головну</span>
        </button>

        <!-- Декоративный элемент -->
        <div class="mt-16 max-w-md mx-auto opacity-75 hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 500 200" class="w-full h-auto">
            <path 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-dasharray="10 8"
              class="text-blue-200"
              d="M20,100 Q250,50 480,100"
            />
            <g transform="translate(480 100)" class="animate-float">
              <circle cx="0" cy="0" r="8" fill="#3B82F6" />
              <path 
                d="M0,-12 L5,0 L0,3 L-5,0 Z" 
                fill="#10B981"
                transform="rotate(30)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style>
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px) rotate(-5deg); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Плавное появление страницы */
.page-enter-active {
  transition: all 0.3s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
</style>