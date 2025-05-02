import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'http://192.168.202.68', // Задаем базовый URL
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Добавляем интерцепторы запросов
  api.interceptors.request.use((config) => {
    console.log('Запрос отправлен:', config);
    return config;
  });

  // Добавляем интерцепторы ответов
  api.interceptors.response.use(
    (response) => {
      console.log('Ответ получен:', response);
      return response;
    },
    (error) => {
      console.error('Ошибка запроса:', error);
      return Promise.reject(error);
    }
  );

  // Добавляем API в глобальный контекст Nuxt
  return {
    provide: {
      api
    }
  };
});
