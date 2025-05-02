import axios from "axios";
import { defineNuxtPlugin } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s = defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "http://192.168.202.68",
    // Задаем базовый URL
    headers: {
      "Content-Type": "application/json"
    }
  });
  api.interceptors.request.use((config) => {
    console.log("Запрос отправлен:", config);
    return config;
  });
  api.interceptors.response.use(
    (response) => {
      console.log("Ответ получен:", response);
      return response;
    },
    (error) => {
      console.error("Ошибка запроса:", error);
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      api
    }
  };
});
export {
  axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s as default
};
//# sourceMappingURL=axios.mjs.map
