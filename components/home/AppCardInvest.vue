<template>
    <div class="p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100">
      <h2 class="text-2xl font-medium text-slate-800 mb-4">Інвестування у різні напрямки</h2>
      <p class="text-sm text-slate-500 font-light mb-6">
        Диверсифікація інвестицій дозволяє знизити ризики та підвищити прибутковість. Ось як це впливає на ринок:
      </p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="sector in sectors" :key="sector.id" class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors">
          <div class="flex items-start">
            <div class="p-3 aspect-square flex items-center rounded-lg bg-white shadow group-hover:shadow-md transition-all">
              <Icon :name="sector.icon" class="text-2xl text-slate-700 group-hover:text-green-600 transition-all" />
            </div>
            <div class="ml-4 flex-1">
              <h3 class="text-lg font-medium text-slate-800">{{ sector.title }}</h3>
              <p class="text-sm text-slate-500 font-light">{{ sector.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sectors = ref([
    { id: 1, icon: 'heroicons:currency-dollar', title: 'Фондовий ринок', description: 'Висока ліквідність, довгострокові перспективи.' },
    { id: 2, icon: 'heroicons:building-office', title: 'Нерухомість', description: 'Стабільний дохід від оренди, зростання вартості.' },
    { id: 3, icon: 'heroicons:server', title: 'Технології', description: 'Інновації та швидке зростання компаній.' },
    { id: 4, icon: 'heroicons:globe-alt', title: 'Екологічні інвестиції', description: 'Стійке майбутнє та підтримка зеленої енергетики.' }
  ]);
  </script>
  
  <style scoped>
  .shadow-sm {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
  }
  .hover\:shadow-lg:hover {
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
  }
  </style>
  