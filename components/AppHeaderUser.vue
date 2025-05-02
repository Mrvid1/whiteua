<template>
  <div class="relative bg-white shadow-md py-4 px-8 flex items-center justify-between">
    <!-- Логотип -->
    <div class="flex items-center gap-2">
      <Icon name="icon-park:planet" class="text-4xl text-red-500" />
      <h1 class="text-2xl font-bold text-gray-800">WhiteUA</h1>
    </div>

    <!-- Бургер-меню -->
    <button @click="toggleMenu" class="focus:outline-none">
      <Icon name="icon-park:hamburger-button" class="text-3xl text-gray-800" />
    </button>

    <!-- Затемнение фона -->
    <transition name="fade">
      <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="toggleMenu"></div>
    </transition>

    <!-- Боковое меню -->
    <transition name="slide">
      <div v-if="menuOpen" class="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-5 flex flex-col">
        <div class="flex items-center gap-2">
      <Icon name="icon-park:planet" class="text-4xl text-red-500" />
      <h1 class="text-2xl font-bold text-gray-800">WhiteUA</h1>
    </div>
        <button @click="toggleMenu" class="absolute top-3 right-3">
          <Icon name="icon-park:close" class="text-2xl text-gray-800" />
        </button>

        <!-- Блок с балансом (обновленный) -->
        <BalanceCard></BalanceCard>

        <!-- Навигация -->
        <nav class="space-y-4">
          <h1 class="text-lg font-semibold text-gray-700">Навігація</h1>
          <NuxtLink
            v-for="item in menuItems"
            :key="item.text"
            :to="item.link"
            class="transition-all flex items-center w-full px-4 py-3 text-sm text-gray-800 ring-2 ring-gray-200 rounded-lg"
          >
            <Icon :name="item.icon" class="mr-3 text-xl" /> {{ item.text }}
          </NuxtLink>
          <button
            @click="exitUser"
            class="transition-all flex items-center w-full px-4 py-3 text-sm text-gray-800 ring-2 ring-gray-200 rounded-lg"
          >
            <Icon name="icon-park:open-door" class="mr-3 text-xl" /> Вихід з аккаунту
          </button>
          <AdsBlock></AdsBlock>
        </nav>
      </div>
      
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from '#app';
import { useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter();
const menuOpen = ref(false);
const balance = ref(12500); // В будущем можно заменить API-запросом

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const menuItems = ref([
  { text: 'Домашня сторінка', icon: 'icon-park:home' , link : 'home' },
  { text: 'Мої інвестиції', icon: 'icon-park:paper-money' ,link : 'myinvest' },
  {text:'Акції', icon:'icon-park:ticket',link:'stock'},
  { text: 'Поповнення рахунку', icon: 'icon-park:wallet' , link : 'deposit' },
  { text: 'Виведення коштів', icon: 'icon-park:inbox-out',link:'withdraw' },
  { text: 'Моя команда', icon: 'icon-park:peoples-two',link:'team' },
  { text: 'Історія операцій', icon: 'icon-park:checklist',link: 'history' },
]);

const exitUser = () => {
  // Вызов функции выхода из аккаунта
  push.error("Ви вийшли з аккаунту")
  localStorage.removeItem('token')
  router.push('/')

};
</script>

<style scoped lang="css">
/* Анимация появления меню */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Анимация затемнения фона */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes progress {
  from { width: 0; }
  to { width: 65%; }
}

.animate-progress {
  animation: progress 1.5s ease-out forwards;
}

/* Анимации для кнопок */
button:hover {
  transform: translateY(-1px);
}

</style>
