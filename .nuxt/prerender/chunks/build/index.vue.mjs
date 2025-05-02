import { computed, mergeProps, useSSRContext, ref } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
import { useRouter } from 'file://F:/sitesVue/uaproject/node_modules/vue-router/dist/vue-router.node.mjs';
import { u as useNuxtApp, p as push$1 } from './server.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unctx/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/h3/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/radix3/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/defu/dist/defu.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ufo/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/klona/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/axios/index.js';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/utils/lib/css/icon.mjs';
import '../_/renderer.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/server.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/destr/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ofetch/dist/node.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/node-mock-http/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://F:/sitesVue/uaproject/node_modules/pathe/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/utils/lib/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ohash/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/consola/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/drivers/fs.mjs';
import 'file:///F:/sitesVue/uaproject/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/devalue/index.js';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/plugins.mjs';

const _sfc_main$3 = {
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", __props.id)} class="block text-gray-700 text-sm font-bold mb-1">${ssrInterpolate(__props.label)}</label><input${ssrRenderAttrs(mergeProps({
        id: __props.id,
        type: __props.type,
        placeholder: __props.placeholder
      }, _ctx.$attrs, {
        value: __props.modelValue,
        class: "w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      }))}></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};

const _sfc_main$2 = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
      }, _attrs))}>${ssrInterpolate(__props.text)}</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrimaryButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "text-blue-500 hover:text-blue-700 text-sm cursor-pointer bg"
      }, _attrs))}>${ssrInterpolate(__props.text)}</button>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SecondaryButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

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
      const _component_FormInput = _sfc_main$3;
      const _component_PrimaryButton = _sfc_main$2;
      const _component_SecondaryButton = _sfc_main$1;
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

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
