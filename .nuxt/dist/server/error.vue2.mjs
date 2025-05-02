import __nuxt_component_0 from "./node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { defineComponent, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center" }, _attrs))}><div class="container mx-auto px-4 py-16"><div class="max-w-3xl mx-auto text-center"><div class="text-9xl font-bold text-blue-600 mb-8 animate-bounce"> 4<span class="text-green-600">0</span>4 </div><div class="space-y-6 mb-12"><h1 class="text-5xl font-bold text-gray-800"> Ой! Сторінку не знайдено </h1><p class="text-xl text-gray-600 max-w-xl mx-auto"> Схоже, ви заблукали у цифровому просторі. Давайте повернемося на безпечну орбіту! </p></div><button class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-blue-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:rocket-launch",
        class: "w-6 h-6 mr-3 animate-pulse"
      }, null, _parent));
      _push(`<span class="text-lg font-semibold">Повернутись на головну</span></button><div class="mt-16 max-w-md mx-auto opacity-75 hover:opacity-100 transition-opacity"><svg viewBox="0 0 500 200" class="w-full h-auto"><path fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 8" class="text-blue-200" d="M20,100 Q250,50 480,100"></path><g transform="translate(480 100)" class="animate-float"><circle cx="0" cy="0" r="8" fill="#3B82F6"></circle><path d="M0,-12 L5,0 L0,3 L-5,0 Z" fill="#10B981" transform="rotate(30)"></path></g></svg></div></div></div></div>`);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=error.vue2.mjs.map
