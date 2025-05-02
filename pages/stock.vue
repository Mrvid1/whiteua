<template>
    <div class="container mx-auto px-4 py-12">
        <AdsBlock></AdsBlock>
        <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Акційні пропозиції</h1>

        <!-- Акційні пропозиції -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="promo in promotions" :key="promo.id"
                class="group relative p-0 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col overflow-hidden">

                <!-- Бейдж акції -->
                <div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Акція
                </div>

                <!-- Головне зображення -->
                <div class="relative h-48 w-full overflow-hidden">
                    <img :src="promo.image" :alt="promo.title"
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>

                <!-- Контент -->
                <div class="p-5 flex-1 flex flex-col">
                    <div class="mb-3">
                        <h2 class="text-xl font-medium text-slate-800 mb-2">{{ promo.title }}</h2>
                        <p class="text-sm text-slate-500 font-light line-clamp-2">{{ promo.description }}</p>
                    </div>

                    <div class="mt-auto pt-3 border-t border-slate-100">
                        <div class="flex justify-between items-center">
                            <span class="text-xs text-slate-400">Діє до:</span>
                            <span class="text-sm font-medium text-slate-700">{{ promo.expiryDate }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AdsBlock from '~/components/AdsBlock.vue';
import depositImage from '~/assets/images/deposit.webp';
import refImage from '~/assets/images/ref.webp';

definePageMeta({
    layout: 'user'
});

const promotions = ref([
  {
    id: 1,
    title: 'Бонус за перший депозит',
    description: 'Отримайте додаткові 10% до суми внеску на ваш рахунок від 3000₴',
    image: depositImage,
    expiryDate: '22.07.2025'
  },
  {
    id: 2,
    title: 'Реферальна програма',
    description: 'Запрошуйте друзів та отримуйте 10% та 5% від їхніх інвестицій',
    image: refImage,
    expiryDate: 'Без терміну'
  },
]);

</script>

<style scoped>
.container {
    max-width: 1280px;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>