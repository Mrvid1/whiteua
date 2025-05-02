import _sfc_main$1 from "../components/FormInput.vue.mjs";
import _sfc_main$2 from "../components/PrimaryButton.vue.mjs";
import _sfc_main$3 from "../components/SecondaryButton.vue.mjs";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import { push as push$1 } from "../node_modules/notivue/dist/index.mjs";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const inputInfo = ref({
      email: "",
      password: "",
      repeatPassword: "",
      refCode: ""
    });
    const isLogin = ref(true);
    const router = useRouter();
    const handleAuth = () => {
      console.log("handleAuth called");
      if (isLogin.value) {
        login();
      } else {
        register();
      }
    };
    const register = async () => {
      if (inputInfo.value.password !== inputInfo.value.repeatPassword) {
        push$1.error("Паролі не співпадають", "error");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputInfo.value.email)) {
        push$1.error("Введіть коректний email", "error");
        return;
      }
      if (inputInfo.value.password.length < 6) {
        push$1.error("Пароль повинен бути не менше 6 символів", "error");
        return;
      }
      if (inputInfo.value.refCode && inputInfo.value.refCode.length !== 6) {
        push$1.error("Реферальний код повинен містити 6 символів", "error");
        return;
      }
      try {
        push$1.info("Йде реєстрація...", "loading");
        const response = await $api.post("/user/register.php", {
          email: inputInfo.value.email,
          password: inputInfo.value.password,
          refCode: inputInfo.value.refCode || null
        });
        if (!response.data || !response.data.status) {
          push$1.error("Невірний формат відповіді від сервера", "error");
          return;
        }
        const statusHandlers = {
          "success": () => {
            push$1.success("Реєстрація успішно завершена!", "success");
            localStorage.setItem("token", btoa(inputInfo.value.email));
            router.push("/home");
          },
          "error": () => {
            const errorMessages = {
              "Email already exists": "Цей email вже зареєстрований",
              "Invalid referral code": "Невірний реферальний код",
              "Validation error": "Помилка в даних форми",
              "Server error": "Помилка сервера"
            };
            const message = response.data.message || "Невідома помилка";
            push$1.error(errorMessages[message] || message, "error");
          }
        };
        const handler = statusHandlers[response.data.status];
        if (handler) {
          handler();
        } else {
          push$1.error("Невідомий статус відповіді", "error");
        }
      } catch (error) {
        let errorMessage = "Помилка при реєстрації";
        if (error.response) {
          if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message;
          } else {
            errorMessage = `Помилка сервера (${error.response.status})`;
          }
        } else if (error.request) {
          errorMessage = "Сервер не відповідає, спробуйте пізніше";
        }
        push$1.error(errorMessage, "error");
        console.error("Деталі помилки:", error);
      }
    };
    const login = async () => {
      try {
        if (!inputInfo.value.email || !inputInfo.value.password) {
          push$1.error("Заповніть всі поля", "error");
          return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputInfo.value.email)) {
          push$1.error("Будь ласка, введіть коректний email", "error");
          return;
        }
        if (inputInfo.value.password.length < 6) {
          push$1.error("Пароль повинен містити мінімум 6 символів", "error");
          return;
        }
        push$1.info("Виконується вхід...", "loading");
        const response = await $api.post("/user/login.php", {
          email: inputInfo.value.email,
          password: inputInfo.value.password
        });
        if (response.data.status === "success") {
          push$1.success("Вхід виконано успішно!", "success");
          localStorage.setItem("token", btoa(inputInfo.value.email));
          router.push("/home");
          const userData = {
            id: response.data.user.id,
            email: response.data.user.email,
            refcode: response.data.user.refcode
          };
          console.log("Дані користувача:", userData);
        } else {
          const errorMessages = {
            "Invalid email or password": "Невірний email або пароль",
            "Email and password are required": "Заповніть всі поля",
            "Server error": "Помилка сервера"
          };
          const serverMessage = response.data.message || "Помилка входу";
          push$1.error(errorMessages[serverMessage] || serverMessage, "error");
        }
      } catch (error) {
        let errorMessage = "Помилка при вході";
        if (error.response) {
          if (error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message === "Invalid email or password" ? "Невірний email або пароль" : error.response.data.message;
          } else {
            errorMessage = `Помилка сервера (${error.response.status})`;
          }
        } else if (error.request) {
          errorMessage = "Сервер не відповідає, спробуйте пізніше";
        }
        push$1.error(errorMessage, "error");
        console.error("Деталі помилки:", error);
      }
    };
    const toggleAuthMode = () => {
      isLogin.value = !isLogin.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormInput = _sfc_main$1;
      const _component_PrimaryButton = _sfc_main$2;
      const _component_SecondaryButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto mt-10" }, _attrs))}><h1 class="text-2xl font-bold text-gray-800 text-center mb-4">${ssrInterpolate(isLogin.value ? "Вхід" : "Реєстрація")}</h1>`);
      if (!isLogin.value) {
        _push(`<p class="text-sm text-gray-600 text-center mb-4"> Зареєструйтеся, щоб отримати доступ до всіх функцій нашого сайту. Після реєстрації ви зможете використовувати реферальну програму, отримувати бонуси та залишати відгуки. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-4">`);
      _push(ssrRenderComponent(_component_FormInput, {
        modelValue: inputInfo.value.email,
        "onUpdate:modelValue": ($event) => inputInfo.value.email = $event,
        id: "email",
        label: "Електронна пошта",
        type: "email",
        placeholder: "Електронна пошта"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FormInput, {
        modelValue: inputInfo.value.password,
        "onUpdate:modelValue": ($event) => inputInfo.value.password = $event,
        id: "password",
        label: "Пароль",
        type: "password",
        placeholder: "Пароль"
      }, null, _parent));
      if (!isLogin.value) {
        _push(ssrRenderComponent(_component_FormInput, {
          modelValue: inputInfo.value.repeatPassword,
          "onUpdate:modelValue": ($event) => inputInfo.value.repeatPassword = $event,
          id: "repeatPassword",
          label: "Повторіть пароль",
          type: "password",
          placeholder: "Повторіть пароль"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLogin.value) {
        _push(ssrRenderComponent(_component_FormInput, {
          modelValue: inputInfo.value.refCode,
          "onUpdate:modelValue": ($event) => inputInfo.value.refCode = $event,
          id: "refCode",
          label: "Реферальний код",
          type: "text",
          placeholder: "Реферальний код"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-row-reverse gap-2 items-center">`);
      _push(ssrRenderComponent(_component_PrimaryButton, {
        class: "flex-1",
        text: isLogin.value ? "Увійти" : "Зареєструватися",
        onClick: handleAuth
      }, null, _parent));
      _push(ssrRenderComponent(_component_SecondaryButton, {
        class: "flex-1",
        text: isLogin.value ? "Реєстрація" : "Увійти",
        onClick: toggleAuthMode
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index.vue.mjs.map
