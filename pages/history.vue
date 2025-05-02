<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-semibold text-center text-slate-900 mb-8 tracking-wide">Історія операцій</h1>

        <!-- Статистика -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4">
                <div class="p-3 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="heroicons:calculator" class="text-3xl text-green-600" />
                </div>
                <div>
                    <p class="text-sm text-slate-500">Сума операцій</p>
                    <p class="text-2xl font-semibold text-slate-800">{{ TotalAmountU }} ₴</p>
                </div>
            </div>
        </div>

        <!-- Фильтрация -->


        <!-- Таблица операций -->
        <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto">
            <table class="w-full border-collapse border border-slate-300 text-sm">
                <thead>
                    <tr class="bg-slate-100 text-slate-700">
                        <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Тип операції</th>
                        <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Сума</th>
                        <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Статус</th>
                        <th class="p-3 border border-slate-300 text-left whitespace-nowrap">Дата</th>



                        <th class="p-3 border border-slate-300 text-left whitespace-nowrap">ID операції</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="operation in operations" class="hover:bg-slate-50">
                        <td class="p-3 border border-slate-300 whitespace-nowrap">
                            <span class="font-medium">
                                {{ operation.type }}
                            </span>
                        </td>
                        <td class="p-3 border border-slate-300 whitespace-nowrap font-medium">
                            {{ operation.amount }} ₴
                        </td>
                        <td class="p-3 border border-slate-300 whitespace-nowrap">
                            <span :class="getStatusClass(operation.status)" class="px-2 py-1 rounded-full text-xs">
                                {{ operation.status }}
                            </span>
                        </td>
                        <td class="p-3 border border-slate-300 whitespace-nowrap">{{ formatDate(operation.date) }}</td>



                        <td class="p-3 border border-slate-300 whitespace-nowrap text-slate-500">TX-{{ operation.uuid }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Пустое состояние -->

    </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';

definePageMeta({
    layout: 'user'
});

const { $api } = useNuxtApp();



const operations = ref([]); 
const TotalAmountU = computed(() => {
    return operations.value.reduce((acc, operation) => {
        const amount = parseFloat(operation.amount);
        return acc + (isNaN(amount) ? 0 : amount);
    }, 0).toFixed(2);
});
const statusClasses = {
    'Успішно': 'bg-green-100 text-green-800',
    'В обробці': 'bg-amber-100 text-amber-800',
    'Помилка': 'bg-red-100 text-red-800'
};

const getStatusClass = (status) => {
    return statusClasses[status] || 'bg-gray-100 text-gray-800';
};



const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('uk-UA', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};





const loadHistory = async () => {
    const notification = push.promise('Завантаження історії операцій');
    try {
        const response = await $api.post('/user/history.php', {
            email: atob(localStorage.getItem('token')),
        });

        // Правильный способ обновления reactive массива
        operations.value = response.data
        notification.resolve({
                message: `Успішно завантаженно ${response.data.length} записів`,
            })
    } catch (error) {
        notification.reject('Невідома помилка , перезавантажте сторінку')
    }
};

onMounted(() => {
    loadHistory();
});
</script>

<style scoped>
.container {
    max-width: 1280px;
}

table {
    min-width: 800px;
}

@media (max-width: 640px) {
    .p-3 {
        padding: 0.75rem;
    }
}
</style>