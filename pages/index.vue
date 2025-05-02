<template>
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-10">
        <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">
            {{ isLogin ? 'Вхід' : 'Реєстрація' }}
        </h1>
        <p class="text-sm text-gray-600 text-center mb-4" v-if="!isLogin">
            Зареєструйтеся, щоб отримати доступ до всіх функцій нашого сайту. Після реєстрації ви зможете
            використовувати реферальну програму, отримувати бонуси та залишати відгуки.
        </p>

        <div class="space-y-4">
            <FormInput v-model="inputInfo.email" id="email" label="Електронна пошта" type="email"
                placeholder="Електронна пошта" />
            <FormInput v-model="inputInfo.password" id="password" label="Пароль" type="password" placeholder="Пароль" />

            <FormInput v-if="!isLogin" v-model="inputInfo.repeatPassword" id="repeatPassword"
                label="Повторіть пароль" type="password" placeholder="Повторіть пароль" />
            <FormInput v-if="!isLogin" v-model="inputInfo.refCode" id="refCode" label="Реферальний код" type="text"
                placeholder="Реферальний код" />

            

            <div class="flex flex-row-reverse gap-2 items-center">
                <PrimaryButton class="flex-1" :text="isLogin ? 'Увійти' : 'Зареєструватися'" @click="handleAuth" />
                <SecondaryButton class="flex-1" :text="isLogin ? 'Реєстрація' : 'Увійти'" @click="toggleAuthMode" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const { $api } = useNuxtApp();
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';


const inputInfo = ref({
    email: '',
    password: '',
    repeatPassword: '',
    refCode: ''
});

const isLogin = ref(true);
const router = useRouter();
const handleAuth =  () => {
  console.log("handleAuth called");

  if (isLogin.value) {
     login();
  } else {
     register();
  }
};


const register = async () => {
  // 1. Валідація на клієнті перед відправкою
  if (inputInfo.value.password !== inputInfo.value.repeatPassword) {
    push.error('Паролі не співпадають', 'error');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputInfo.value.email)) {
    push.error('Введіть коректний email', 'error');
    return;
  }

  if (inputInfo.value.password.length < 6) {
    push.error('Пароль повинен бути не менше 6 символів', 'error');
    return;
  }

  if (inputInfo.value.refCode && inputInfo.value.refCode.length !== 6) {
    push.error('Реферальний код повинен містити 6 символів', 'error');
    return;
  }

  try {
    // 2. Показуємо індикатор завантаження
    push.info('Йде реєстрація...', 'loading');

    // 3. Відправка запиту
    const response = await $api.post('/user/register.php', {
      email: inputInfo.value.email,
      password: inputInfo.value.password,
      refCode: inputInfo.value.refCode || null
    });

    // 4. Перевіряємо структуру відповіді
    if (!response.data || !response.data.status) {
      push.error('Невірний формат відповіді від сервера', 'error');
      return;
    }

    // 5. Обробка відповіді відповідно до PHP-скрипту
    const statusHandlers = {
      'success': () => {
        push.success('Реєстрація успішно завершена!', 'success');
        localStorage.setItem('token', btoa(inputInfo.value.email));
        
        router.push('/home');
        // Додаткові дії після реєстрації...
      },
      'error': () => {
        const errorMessages = {
          'Email already exists': 'Цей email вже зареєстрований',
          'Invalid referral code': 'Невірний реферальний код',
          'Validation error': 'Помилка в даних форми',
          'Server error': 'Помилка сервера'
        };
        
        const message = response.data.message || 'Невідома помилка';
        push.error(errorMessages[message] || message, 'error');
      }
    };

    // Викликаємо відповідний обробник
    const handler = statusHandlers[response.data.status];
    if (handler) {
      handler();
    } else {
      push.error('Невідомий статус відповіді', 'error');
    }

  } catch (error) {
    // 6. Обробка мережевих/технічних помилок
    let errorMessage = 'Помилка при реєстрації';
    
    if (error.response) {
      // Якщо сервер відповів з помилкою
      if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else {
        errorMessage = `Помилка сервера (${error.response.status})`;
      }
    } else if (error.request) {
      errorMessage = 'Сервер не відповідає, спробуйте пізніше';
    }

    push.error(errorMessage, 'error');
    console.error('Деталі помилки:', error);
  }
};


const login = async () => {
  try {
    // Перевірка заповненості полів
    if (!inputInfo.value.email || !inputInfo.value.password) {
      push.error('Заповніть всі поля', 'error');
      return;
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputInfo.value.email)) {
      push.error('Будь ласка, введіть коректний email', 'error');
      return;
    }

    // Валідація пароля (мінімум 6 символів)
    if (inputInfo.value.password.length < 6) {
      push.error('Пароль повинен містити мінімум 6 символів', 'error');
      return;
    }

    // Показуємо індикатор завантаження
    push.info('Виконується вхід...', 'loading');

    // Відправка запиту на сервер
    const response = await $api.post('/user/login.php', {
      email: inputInfo.value.email,
      password: inputInfo.value.password
    });

    // Обробка відповіді сервера
    if (response.data.status === 'success') {
      push.success('Вхід виконано успішно!', 'success')
      localStorage.setItem('token', btoa(inputInfo.value.email));
      router.push('/home');
      // Зберігаємо дані користувача (приклад)
      const userData = {
        id: response.data.user.id,
        email: response.data.user.email,
        refcode: response.data.user.refcode
      };
      
      console.log('Дані користувача:', userData);
      
      // Перенаправлення або інші дії після входу
      // window.location.href = '/dashboard';
      
    } else {
      // Обробка помилок від сервера
      const errorMessages = {
        'Invalid email or password': 'Невірний email або пароль',
        'Email and password are required': 'Заповніть всі поля',
        'Server error': 'Помилка сервера'
      };
      
      const serverMessage = response.data.message || 'Помилка входу';
      push.error(errorMessages[serverMessage] || serverMessage, 'error');
    }
    
  } catch (error) {
    // Обробка мережевих помилок
    let errorMessage = 'Помилка при вході';
    
    if (error.response) {
      // Помилка від сервера (4xx, 5xx)
      if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message === 'Invalid email or password' 
          ? 'Невірний email або пароль' 
          : error.response.data.message;
      } else {
        errorMessage = `Помилка сервера (${error.response.status})`;
      }
    } else if (error.request) {
      // Запит був відправлений, але відповідь не отримана
      errorMessage = 'Сервер не відповідає, спробуйте пізніше';
    }

    push.error(errorMessage, 'error');
    console.error('Деталі помилки:', error);
  }
};




// Переключение между регистрацией и логином
const toggleAuthMode = () => {
    isLogin.value = !isLogin.value;
};
onMounted(() => {
  console.log("Component mounted");
});
</script>

<style scoped></style>
