<template>
    <div class="p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100">
      <p class="text-sm text-slate-500 font-light mb-6">
        Ви можете поповнити рахунок банківською карткою або криптовалютою USDT TRC20.
      </p>
      
      <div class="space-y-4">
        <div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors">
          <h3 class="text-lg font-medium text-slate-800 mb-2">Банківська картка</h3>
          <p class="text-sm text-slate-500 font-light">Мінімальне поповнення: <span class="font-medium text-slate-800">500 грн</span></p>
          <p class="text-sm text-slate-500 font-light">Поповнення через підтримку</p>
        </div>
        
        <div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors">
          <h3 class="text-lg font-medium text-slate-800 mb-2">USDT TRC20</h3>
          <p class="text-sm text-slate-500 font-light">Мінімальне поповнення: <span class="font-medium text-slate-800">25 USDT</span></p>
          <p class="text-sm text-slate-500 font-light">Курс: <span class="font-medium text-slate-800">1 USDT = 41 грн</span></p>
          <p class="text-sm text-slate-500 font-light">Автоматичне зарахування через сайт</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .shadow-sm {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
  }
  .hover\:shadow-lg:hover {
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
  }
  </style>
  