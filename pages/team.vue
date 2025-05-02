<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-semibold text-center text-slate-900 mb-8 tracking-wide">Моя команда</h1>

        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
                <div class="p-3 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="heroicons:user-group" class="text-3xl text-green-600" />
                </div>
                <div>
                    <p class="text-sm text-slate-500">Реферали 1 рівня (10%)</p>
                    <p class="text-2xl font-semibold text-slate-800">{{ ref1lv.length  }}</p>
                </div>
            </div>
            
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
                <div class="p-3 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="heroicons:user-group" class="text-3xl text-blue-600" />
                </div>
                <div>
                    <p class="text-sm text-slate-500">Реферали 2 рівня (5%)</p>
                    <p class="text-2xl font-semibold text-slate-800">{{  ref2lv.length }}</p>
                </div>
            </div>
            
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
                <div class="p-3 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="heroicons:user-group" class="text-3xl text-purple-600" />
                </div>
                <div>
                    <p class="text-sm text-slate-500">Всього рефералів</p>
                    <p class="text-2xl font-semibold text-slate-800">{{ (ref1lv.length + ref2lv.length) }}</p>
                </div>
            </div>
        </div>

        <!-- Фильтрация -->
        

        <!-- Таблицы рефералов -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto">
                <h2 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Icon name="heroicons:chart-bar" class="text-2xl text-purple-600" /> Рівень 1 (10%)
                </h2>
                <table class="w-full border-collapse border border-slate-300 text-sm">
                    <thead>
                        <tr class="bg-slate-100 text-slate-700">
                         
                            <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Email</th>
                            <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Дата реєстрації</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(ref1, index) in ref1lv" :key="index" class="hover:bg-slate-50">
                       
                            <td class="p-3 border border-slate-300 whitespace-nowrap">{{ ref1.email }}</td>
                            <td class="p-3 border border-slate-300 whitespace-nowrap">{{ ref1.created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto">
                <h2 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Icon name="heroicons:chart-pie" class="text-2xl text-orange-600" /> Рівень 2 (5%)
                </h2>
                <table class="w-full border-collapse border border-slate-300 text-sm">
                    <thead>
                        <tr class="bg-slate-100 text-slate-700">
                            
                            <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Email</th>
                            <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Дата реєстрації</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr  v-for="(ref2, index) in ref2lv" :key="index" class="hover:bg-slate-50">
                           
                            <td class="p-3 border border-slate-300 whitespace-nowrap">{{ ref2.email }}</td>
                            <td class="p-3 border border-slate-300 whitespace-nowrap">{{ ref2.created_at }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Блок с советами -->
        <div class="mt-12 p-6 bg-yellow-100 border border-yellow-300 rounded-xl">
            <h3 class="text-lg font-semibold text-yellow-800">💡 Поради для збільшення рефералів</h3>
            <ul class="list-disc list-inside text-yellow-900 mt-2">
                <li>Запрошуйте друзів через соцмережі.</li>
                <li>Публікуйте відгуки та кейси про заробіток.</li>
                <li>Використовуйте e-mail розсилки для залучення нових користувачів.</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $api } = useNuxtApp();
const ref1lv = ref([]);
const ref2lv = ref([])


const getTeam = async () => {
  try {
    const response = await $api.post('/user/ref.php', {
      email: atob(localStorage.getItem('token')),
    });
    ref1lv.value = Object.values(response.data.referrals.level1);
    ref2lv.value = Object.values(response.data.referrals.level2);


  } catch (error) {
    console.error('Помилка завантаження команди:', error);
  } finally {
    console.log(Array.isArray(ref1lv.value)); // має вивести true, якщо це масив
  }
};

onMounted(() => {
  getTeam();
});

definePageMeta({
  layout: 'user'
});

</script>
