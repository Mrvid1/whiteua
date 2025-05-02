<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Виведення коштів</h1>
    <WithdrawAppCardInfo class="mb-8"></WithdrawAppCardInfo>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Левая колонка - Форма вывода -->
      <div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100 mb-6">
        <div class="flex items-start mb-6">
          <div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50">
            <Icon name="icon-park-solid:inbox-out" class="text-2xl text-slate-700" />
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-medium text-slate-800 mb-2">Запит на виведення</h2>
            <p class="text-sm text-slate-500 font-light">Доступний баланс: {{ balanceUser }} ₴</p>
          </div>
        </div>

        <form class="space-y-6" @submit.prevent="handleWithdraw">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Спосіб виведення</label>
            <select
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 transition-all">
              <option>Банківська карта</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Сума виведення</label>
            <div class="relative">
              <input type="number" placeholder="0₴" v-model="WInfo.amount"
                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 pr-16 transition-all">

            </div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Сума до отримання(Комісія 5%):{{ (WInfo.amount
              *
              0.95).toFixed(2) }}₴</label>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Реквізити</label>
            <input type="text" v-model="WInfo.card" placeholder="Введіть дані картки або гаманця"
              class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 transition-all">
          </div>

          <button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium 
                   transition-all duration-300 
                   hover:border-green-500 hover:bg-green-50 hover:text-green-700 
                   active:scale-95
                   flex items-center justify-center gap-2">
            <Icon name="heroicons:arrow-up-right-20-solid"
              class="text-lg  -translate-x-2 group-hover:translate-x-0  transition-all" />
            <span>Виведення коштів</span>
          </button>
        </form>
      </div>

      <!-- Правая колонка - История выводов -->
      <div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
        <div class="flex items-start mb-6 ">
          <div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50">
            <Icon name="icon-park-solid:transaction" class="text-2xl text-slate-700" />
          </div>
          <div class="ml-4">
            <h2 class="text-xl font-medium text-slate-800 mb-2">Останні операції</h2>
            <p class="text-sm text-slate-500 font-light">Історія ваших транзакцій</p>
          </div>
        </div>

        <div class="space-y-4">
          <div v-if="transactions.length === 0" class="text-center text-slate-400 py-6">
            <p class="text-sm">У вас ще немає транзакцій</p>
          </div>
          <div v-for="transaction in transactions" :key="transaction.id"
            class="p-6 border-2 border-slate-100 rounded-lg transition-all hover:border-slate-200">
            <div class="flex justify-between items-center">
              <div>
                <p class="font-medium text-slate-800">{{ transaction.type }} </p>
                <p class="text-sm text-slate-500">{{ transaction.date }}</p>
              </div>
              <div :class="transaction.status === 'Успішно' ? 'text-green-600' : 'text-amber-600'">
                <span class="font-medium">-{{ transaction.amount }} ₴</span>
                <p class="text-xs mt-1">{{ transaction.status }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const { $api } = useNuxtApp();
definePageMeta({
  layout: 'user'
});
// 
const balanceUser = ref(0);
// 
const WInfo = ref({
  amount: 0,
  card: '',
});
// 
const handleWithdraw = async () => {
  if (WInfo.value.amount < 1000) {
    push.error('Мінімальна сума для виведення - 1000 ₴', 'error');
    return;
  }
  if (WInfo.value.amount > balanceUser.value) {
    push.error('Сума для виведення перевищує баланс', 'error');
    return;
  }
  // 
  const cardNumber = WInfo.value.card.replace(/\s/g, '');
  if (isNaN(Number(cardNumber)) || cardNumber.length < 16 || cardNumber.length > 19) {
    push.error('Невірний формат карти', 'error');
    return;
  }
  // 
  const notification = push.promise('Обробка заявки на вивід коштів');
  // 
  try {
    const response = await $api.post('/user/withdraw.php', {
      email: atob(localStorage.getItem('token')),
      amount: WInfo.value.amount,
      wallet: cardNumber,
      type: 'Вивід коштів',
      status: 'В обробці',
      typeTrans: 'withdraw'
    });

    console.log(response.data);

    if (response.status === 200) {
      notification.resolve({
        message: `${cardNumber} буде здійснено платіж в розмірі ${WInfo.value.amount} ₴ , очікуйте надходження`,
        title: 'Заявка в обробці',

      });
      WInfo.value.amount = 0;
      WInfo.value.card = '';
    } else {
      notification.reject('Помилка виведення коштів');
    }
  } catch (error) {
    notification.reject('Помилка виведення коштів');
    console.error('Деталі помилки:', error);
  } finally {
    loadBalance()
  }
};
// 
const loadBalance = async () => {
  const response = await $api.post('/user/balance.php',
    {
      token: atob(localStorage.getItem('token'))
    }
  )
  console.log(response.data);
  balanceUser.value = response.data
}
// 
const loadhistoryWithdraw = async () => {
  const response = await $api.post('/user/historyWithdraw.php',
    {
      email: atob(localStorage.getItem('token')),
      type: 'withdraw'
    }
  )
  console.log(response.data);
  transactions = response.data
}
// 
let transactions = reactive([

]);
// 
onMounted(() => {
  loadBalance();
  loadhistoryWithdraw();
})
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