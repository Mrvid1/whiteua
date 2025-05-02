<template>
    <div class="container mx-auto px-4 py-12">

        <h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide">Поповнення рахунку</h1>

        <DepositAppCardInfo class="mb-8"></DepositAppCardInfo>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Левая колонка - Форма пополнения -->
            <div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100 mb-6">
                <div class="flex items-start mb-6">
                    <div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50">
                        <Icon name="material-symbols:account-balance-wallet" class="text-2xl text-slate-700" />
                    </div>
                    <div class="ml-4">
                        <h2 class="text-xl font-medium text-slate-800 mb-2">Нове поповнення</h2>
                        <p class="text-sm text-slate-500 font-light">Доступний баланс: {{ balanceUser }} ₴</p>
                    </div>
                </div>

                <form class="space-y-6" @submit.prevent="handleDeposit">
                    <!-- Спосіб оплати -->
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">Спосіб оплати</label>
                        <select v-model="selectedOption"
                            class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-all">
                            <option v-for="option in selectInput" :key="option.id" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Сума -->
                    <div>
                        <label class="block text-sm font-medium text-slate-700 mb-2">Сума поповнення(введіть нижче щоб
                            розрахувати бонус)</label>
                        <div class="relative">
                            <input type="number" placeholder="0" v-model="DInfo.amount"
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 pr-16 transition-all">
                            <label class="block text-sm font-medium text-slate-700 mt-2">
                                Бонус до поповнення 3%: {{ (DInfo.amount * 0.03).toFixed(2) }} ₴
                            </label>
                        </div>
                    </div>

                    <!-- Банківська карта -->
                    <div v-if="selectedOption === 1"
                        class="text-center border border-yellow-100 p-4 rounded-lg bg-yellow-50">
                        <p class="text-sm text-yellow-700">Для поповнення через банківську карту, зв’яжіться з
                            фінансовим менеджером.</p>
                        <button type="button"
                            class="mt-4 inline-block text-sm text-blue-600 hover:underline hover:text-blue-800">
                            Зв’язатись з менеджером
                        </button>
                    </div>

                    <!-- USDT TRC20 -->
                    <div v-else-if="selectedOption === 2" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Адреса для поповнення
                                (TRC20)</label>
                            <input type="text" readonly value="TP9zvX3v1HgzUQ5HxDHjKnZrHnY91Qxxx"
                                class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-700 select-all" />
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-slate-700 mb-2">Введіть TXID транзакції</label>
                            <input type="text" v-model="DInfo.txid" placeholder="Введіть TXID"
                                class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-all">
                        </div>
                        <span>Курс 1 USDT = 41 ₴</span>
                        <button type="submit"
                            class="mt-2 w-full py-3 px-4 bg-green-600 text-white rounded-lg transition-all hover:bg-green-700 active:scale-95">
                            Підтвердити поповнення
                        </button>
                    </div>
                </form>
            </div>

            <!-- Правая колонка - История пополнений -->
            <div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                <div class="flex items-start mb-6 ">
                    <div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50">
                        <Icon name="material-symbols:history" class="text-2xl text-slate-700" />
                    </div>
                    <div class="ml-4">
                        <h2 class="text-xl font-medium text-slate-800 mb-2">Останні операції</h2>
                        <p class="text-sm text-slate-500 font-light">Історія ваших поповнень</p>
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
                                <p class="font-medium text-slate-800">Депозит</p>
                                <p class="text-sm text-slate-500">{{ transaction.date }}</p>
                            </div>
                            <div :class="transaction.status === 'Успішно' ? 'text-green-600' : 'text-amber-600'">
                                <span class="font-medium">+{{ transaction.amount }} ₴</span>
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
const balanceUser = ref(0);
definePageMeta({
    layout: 'user'
});
const DInfo = ref({
    amount: 0,
    card: '',
    txid: ''
});
// 
const selectInput = ref([
    { id: 1, name: 'Банківська карта' },
    { id: 2, name: 'USDT TRC20' },
]);
// 
const handleDeposit = async () => {
    const notification = push.promise('Обробка заявки на вивід коштів');
    try {
        const response = await $api.post('/user/deposit.php', {
            txid: DInfo.value.txid,
            email: atob(localStorage.getItem('token')),
        })

        if (response.data.status === 200) {
            notification.resolve({
                title: 'Депозит успішний',
                message: `Ваш рахунок поповнено на ${response.data.suma * 41} ₴ та нараховано бонус у розмірі ${(response.data.suma * 41) * 0.03} ₴`,
            })
        } else {
            notification.reject('Помилка при депозиті')
        }
    } catch (error) {
        notification.reject('Помилка при депозиті')

    } finally {
        loadBalance()

    }

}
// 
const selectedOption = ref(1); // По умолчанию выбрана "USDT TRC20"
// 
let transactions = reactive([

]);
// 
const loadhistoryWithdraw = async () => {
    const response = await $api.post('/user/historyWithdraw.php',
        {
            email: atob(localStorage.getItem('token')),
            type: 'deposit'
        }
    )
    console.log(response.data);
    transactions = response.data

}
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
onMounted(() => {
    loadBalance()
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
    box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.1), 0 2px 4px -1px rgba(37, 99, 235, 0.06);
}
</style>