<template>
  <div class="container mx-auto px-4 py-12">
     <AdsBlock></AdsBlock>
    <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Доступні інвестиції</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="investment in investments" :key="investment.id"
        class="group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col">
        <div class="flex items-start mb-5">
          <div
            class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors">
            <Icon :name="investment.icon"
              class="text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div class="ml-4 flex-1">
            <h2 class="text-xl font-medium text-slate-800 mb-1">{{ investment.title }}</h2>
            <p class="text-sm text-slate-500 font-light">{{ investment.description }}</p>
          </div>
        </div>

        <div class="space-y-3 pt-4 border-t border-slate-100 mb-4">
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Інвестовано:</span>
            <span class="font-medium text-slate-800">{{ investment.amount }} ₴</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Дохід:</span>
            <span class="font-medium text-green-600">+{{ investment.profit }} ₴</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-slate-500">Період:</span>
            <span class="text-sm text-slate-500">{{ investment.time }} дн.</span>
          </div>
        </div>

        <button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium 
                   transition-all duration-300 
                   hover:border-green-500 hover:bg-green-50 hover:text-green-700 
                   active:scale-95
                   flex items-center justify-center gap-2">
          <Icon name="heroicons:arrow-up-right-20-solid"
            class="text-lg  -translate-x-2 group-hover:translate-x-0  transition-all" />
          <span @click="InvestNew(investment)">Почати інвестувати</span>
        </button>

        <div
          class="absolute inset-0 border-2 border-transparent group-hover:border-slate-200 rounded-xl pointer-events-none transition-all duration-300">
        </div>
      </div>
    </div>
    <HomeAppCardInvest class="mt-6"></HomeAppCardInvest>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AdsBlock from '~/components/AdsBlock.vue';
import {investments} from '~/constants/investments';

const { $api } = useNuxtApp();

definePageMeta({
  layout: 'user'
});

const InvestNew = async (data) => {
  try {
    const response = await $api.post('/user/newinvest.php', {
      email: atob(localStorage.getItem('token')),
      plan: data
    });
    if(response.data.status == 'success'){
      push.success(response.data.message)
    } else {
      push.error(response.data.message)

    }
  } catch (error) {

  } finally{

  }
}


</script>

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