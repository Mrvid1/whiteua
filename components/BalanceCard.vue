<template>
    <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] mt-8">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
                <!-- Иконка с анимацией при обновлении -->
                <div class="p-2 aspect-square max-h-max rounded-lg border border-blue-100 bg-blue-50/50 transition-all duration-300"
                    :class="{ 'rotate-[360deg]': isRefreshing }">
                    <Icon name="ph:wallet" class="text-blue-600 text-lg" />
                </div>

                <div>
                    <p
                        class="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600">
                        Баланс
                    </p>
                    <!-- Анимация числа при обновлении -->
                    <div class="relative h-7 overflow-hidden">
                        <div class="text-xl font-semibold text-gray-800 tracking-tight transition-all duration-500"
                            :class="{ 'translate-y-[-100%] opacity-0': isRefreshing, 'translate-y-0 opacity-100': !isRefreshing }">
                            ₴{{ balance }}
                        </div>
                        <div class="text-xl font-semibold text-blue-500 tracking-tight absolute top-0 left-0 transition-all duration-500"
                            :class="{ 'translate-y-0 opacity-100': isRefreshing, 'translate-y-[100%] opacity-0': !isRefreshing }">
                            ₴{{ balance }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Кнопка с улучшенной анимацией -->
            <button @click="triggerRefresh" class="p-1.5 rounded-full group transition-all duration-200"
                :disabled="isRefreshing">
                <div class="relative flex justify-center items-center">
                    <Icon name="heroicons:arrow-path" class="w-4 h-4  transition-all duration-300" :class="{
                        'text-gray-400 group-hover:text-blue-500': !isRefreshing,
                        'text-blue-500 animate-spin': isRefreshing
                    }" />
                    <div class="absolute inset-0 rounded-full border border-transparent transition-all duration-300"
                        :class="{
                            'group-hover:border-blue-200 group-hover:scale-125': !isRefreshing,
                            'border-blue-200 scale-125': isRefreshing
                        }"></div>
                </div>
            </button>
        </div>

        <!-- Анимированный индикатор загрузки -->
        <div class="mt-3 h-0.5 bg-gray-100 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-1000"
                :class="{ 'translate-x-[-100%]': !isRefreshing, 'translate-x-[100%]': isRefreshing }"></div>
        </div>
        <ClientOnly>
            <div v-if="token" class=" px-2 py-1 flex items-center rounded-md text-sm font-mono text-gray-700 whitespace-pre-wrap">
                <Icon name="heroicons:at-symbol" class="inline-block mr-1" />
                <span>{{ token }}</span>
            </div>
        </ClientOnly>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { $api } = useNuxtApp();
const balance = ref(0)

const emit = defineEmits(['refresh'])

const isRefreshing = ref(false)
const newBalance = ref(null)
const token = ref('')
const triggerRefresh = async () => {
    if (isRefreshing.value) return

    isRefreshing.value = true
    newBalance.value = null
    try {
        const response = await $api.post('/user/balance.php',
            {
                token: atob(localStorage.getItem('token'))
            }
        )
        console.log(response.data)
        balance.value = response.data // Пример нового значения
    } catch (error) {
        console.error(error)

    } finally {
        emit('refresh')
        // В реальном приложении здесь будет обработка ответа от API

        setTimeout(() => {
            isRefreshing.value = false
        }, 500)
    }
    // Эмулируем загрузку новых данных

}
onMounted(() => {
    triggerRefresh()
    const raw = localStorage.getItem('token')
    token.value = raw ? atob(raw) : 'Не визначено'
})
</script>

<style>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>