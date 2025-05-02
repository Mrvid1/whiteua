<script setup>
definePageMeta({
  layout: 'user'
});

import { ref, onMounted } from 'vue';
import { investments } from '@/constants/investments'; // Подключаем массив инвестиций

const activeInvestments = ref([]);

// Функция для форматирования даты
const formatDate = (dateString) => {
  // Заменяем пробел на "T" для правильного формата ISO
  const isoDateString = dateString.replace(' ', 'T');
  
  const date = new Date(isoDateString);
  
  // Если дата невалидна, возвращаем строку "Invalid date"
  if (isNaN(date)) {
    return 'Невалідна дата';
  }

  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('uk-UA', options);
};

// Функция получения активных инвестиций
const { $api } = useNuxtApp();
const GetPlans = async () => {
  try {
    const response = await $api.post('/user/myinvest.php', {
      email: atob(localStorage.getItem('token')),  // Декодуємо email з localStorage
    });

    // Обробка отриманих даних
    activeInvestments.value = response.data.list.map((investment) => {
      const investmentData = investments.find(inv => inv.id === parseInt(investment.planId));

      const today = new Date(response.data.datetimeserver);
      const startDate = new Date(investment.startDate.replace(' ', 'T'));
      const endDate = new Date(investment.endDate.replace(' ', 'T'));

      // Тривалість у мілісекундах
      const totalDurationMs = endDate - startDate;
      const elapsedMs = today - startDate;

      // Прогрес у відсотках, обмежений до 100
      const progress = totalDurationMs > 0 
        ? Math.min(Math.round((elapsedMs / totalDurationMs) * 100), 100)
        : 0;

      // Якщо значення пусті або нульові, присвоюємо дефолтні
      const amount = investment.amount > 0 ? investment.amount : investmentData?.amount || 0;
      const earned = investment.earned > 0 ? investment.earned : investmentData?.profit || 0;

      return {
        ...investment,
        title: investmentData?.title || '',
        icon: investmentData?.icon || '',
        amount,
        earned,
        progress,
        startDate: formatDate(investment.startDate),
        endDate: formatDate(investment.endDate),
        status: investment.status || 'inactive',
      };
    });
  } catch (error) {
    console.error('Error fetching plans:', error);
  }
};
const ClaimPlan = async (data)=> {
  try{
    const response = await $api.post('/user/claimplan.php', {
      email: atob(localStorage.getItem('token')),
      id :data.id  // Декодуємо email з localStorage
    });
    if(response.data.status == 'success'){
      push.success(response.data.message)
    } else {
      push.error(response.data.message)

    }
    console.log(response)
  }catch(error){
    // 
  } finally {
    GetPlans()
  }


}

onMounted(() => {
  GetPlans();
});
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <AdsBlock></AdsBlock>
    <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Мої інвестиції</h1>

    <div v-if="activeInvestments.filter(i => i.status === 'В роботі').length === 0" class="text-center py-12">
      <p class="text-slate-500 mb-4">У вас поки що немає активних інвестицій</p>
      <NuxtLink to="/home" class="text-green-600 hover:text-green-700 font-medium">
        Перейти до інвестицій →
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div  v-for="investment in activeInvestments.filter(i => i.status === 'В роботі')" :key="investment.id"
        class="group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col"
        :class="{ 'opacity-75': investment.status === 'completed' }">
        <div class="flex items-start mb-5">
          <div
            class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors">
            <Icon :name="investment.icon"
              class="text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div class="ml-4 flex-1">
            <h2 class="text-xl font-medium text-slate-800 mb-1">{{ investment.title }}</h2>
            <p class="text-sm text-slate-500 font-light">
              Статус:
              <span :class="{
                'text-green-600': investment.status === 'active',
                'text-slate-400': investment.status === 'completed'
              }">
                {{ investment.status }}  <!-- Просто отображаем статус -->
              </span>
            </p>
          </div>
        </div>

        <div class="space-y-3 pt-4 border-t border-slate-100 mb-4">
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Сума інвестиції:</span>
            <span class="font-medium text-slate-800">{{ investment.amount.toLocaleString() }} ₴</span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-slate-500">Нараховано:</span>
            <span class="font-medium text-green-600">+{{ investment.earned }} ₴</span>
          </div>

          <div class="pt-2">
            <div class="flex justify-between text-sm text-slate-500 mb-1">
              <span>Прогрес:</span>
              <span>{{ investment.progress }}%</span>
            </div>
            <div class="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-green-500 transition-all duration-500"
                :style="{ width: `${investment.progress}%` }"></div>
            </div>
          </div>

          <div class="flex justify-between items-center text-sm">
            <span class="text-slate-500">Початок:</span>
            <span class="text-slate-800">{{ investment.startDate }}</span> <!-- Отображаем отформатированную дату -->
          </div>

          <div  class="flex justify-between items-center text-sm">
            <span class="text-slate-500">Кінець:</span>
            <span class="text-slate-800">{{ investment.endDate }}</span> <!-- Отображаем отформатированную дату -->
          </div>
        </div>

        <button @click="ClaimPlan(investment)" v-if="investment.progress == 100" class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium 
                  transition-all duration-300 
                  hover:border-green-500 hover:bg-green-50 hover:text-green-700 
                  active:scale-95
                  flex items-center justify-center gap-2">
          <Icon name="heroicons:bolt-solid"
            class="text-lg -translate-x-2 group-hover:translate-x-0 transition-all" />
          <span>Отримати нарахування</span>
        </button>
      </div>
    </div>
    <!--  -->
    <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Завершені інвестиції</h1>
    <div v-if="activeInvestments.filter(i => i.status === 'Завершено').length === 0" class="text-center py-12">
      <p class="text-slate-500 mb-4">У вас поки що немає завершених інвестицій</p>
      
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div  v-for="investment in activeInvestments.filter(i => i.status === 'Завершено')" :key="investment.id"
        class="group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col"
        :class="{ 'opacity-75': investment.status === 'completed' }">
        <div class="flex items-start mb-5">
          <div
            class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors">
            <Icon :name="investment.icon"
              class="text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div class="ml-4 flex-1">
            <h2 class="text-xl font-medium text-slate-800 mb-1">{{ investment.title }}</h2>
            <p class="text-sm text-slate-500 font-light">
              Статус:
              <span :class="{
                'text-green-600': investment.status === 'active',
                'text-slate-400': investment.status === 'completed'
              }">
                {{ investment.status }}  <!-- Просто отображаем статус -->
              </span>
            </p>
          </div>
        </div>

        <div class="space-y-3 pt-4 border-t border-slate-100 mb-4">
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Отримано доходу:</span>
            <span class="font-medium text-green-600">{{ (investment.amount + investment.earned).toLocaleString() }} ₴</span>
          </div>
          <div  class="flex justify-between items-center text-sm">
            <span class="text-slate-500">Кінець:</span>
            <span class="text-slate-800">{{ investment.endDate }}</span> <!-- Отображаем отформатированную дату -->
          </div>
          

         
          
        </div>

        
      </div>
    </div>
    <MyinvestAppCardAdvice class="mt-6"></MyinvestAppCardAdvice>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
}

button {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
}

button:hover {
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
}
</style>
