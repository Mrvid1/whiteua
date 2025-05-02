<template>
    <footer class="bg-gray-900 text-white py-8 mt-10">
      <div class="container mx-auto px-6 text-center">
        <!-- Логотип и название компании -->
        <div class="mb-6">
          <h2 class="text-2xl font-bold tracking-wide text-gray-200">WhiteUA</h2>
          <p class="text-sm text-gray-400">Надійні фінансові рішення для вашого майбутнього</p>
        </div>
  
        <!-- Иконки преимуществ -->
        <div class="flex justify-center gap-6 mb-6">
          <Icon name="ph:bank-fill" class="text-4xl text-green-400" />
          <Icon name="ph:shield-check-fill" class="text-4xl text-blue-400" />
          <Icon name="ph:credit-card-fill" class="text-4xl text-yellow-400" />
          <Icon name="ph:lock-fill" class="text-4xl text-red-400" />
          <Icon name="ph:chart-line-up-fill" class="text-4xl text-purple-400" />
        </div>
  
        <!-- Политика компании -->
        <p class="text-xs text-gray-400">
          Фінансові послуги надаються згідно з чинним законодавством України. Будь ласка, ознайомтеся з умовами перед використанням.
        </p>
  
        <!-- Ограничение 18+ -->
        <p class="text-sm mt-4 font-bold text-red-500">
          ВАЖЛИВО! Використання цього сайту дозволено лише особам старше 18 років.
        </p>
  
        <!-- Копирайт -->
        <p class="text-xs text-gray-500 mt-4">© 2024 WhiteUA. Усі права захищені.</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  footer {
    border-top: 2px solid rgba(255, 255, 255, 0.15);
  }
  </style>
  