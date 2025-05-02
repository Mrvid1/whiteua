import __nuxt_component_0 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_1 from "../node_modules/nuxt/dist/app/components/client-only.mjs";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
/* empty css                  */
const _sfc_main = {
  __name: "BalanceCard",
  __ssrInlineRender: true,
  emits: ["refresh"],
  setup(__props, { emit: __emit }) {
    const { $api } = useNuxtApp();
    const balance = ref(0);
    const isRefreshing = ref(false);
    ref(null);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] mt-8" }, _attrs))}><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="${ssrRenderClass([{ "rotate-[360deg]": isRefreshing.value }, "p-2 aspect-square max-h-max rounded-lg border border-blue-100 bg-blue-50/50 transition-all duration-300"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:wallet",
        class: "text-blue-600 text-lg"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600"> Баланс </p><div class="relative h-7 overflow-hidden"><div class="${ssrRenderClass([{ "translate-y-[-100%] opacity-0": isRefreshing.value, "translate-y-0 opacity-100": !isRefreshing.value }, "text-xl font-semibold text-gray-800 tracking-tight transition-all duration-500"])}"> ₴${ssrInterpolate(balance.value)}</div><div class="${ssrRenderClass([{ "translate-y-0 opacity-100": isRefreshing.value, "translate-y-[100%] opacity-0": !isRefreshing.value }, "text-xl font-semibold text-blue-500 tracking-tight absolute top-0 left-0 transition-all duration-500"])}"> ₴${ssrInterpolate(balance.value)}</div></div></div></div><button class="p-1.5 rounded-full group transition-all duration-200"${ssrIncludeBooleanAttr(isRefreshing.value) ? " disabled" : ""}><div class="relative flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-path",
        class: ["w-4 h-4 transition-all duration-300", {
          "text-gray-400 group-hover:text-blue-500": !isRefreshing.value,
          "text-blue-500 animate-spin": isRefreshing.value
        }]
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{
        "group-hover:border-blue-200 group-hover:scale-125": !isRefreshing.value,
        "border-blue-200 scale-125": isRefreshing.value
      }, "absolute inset-0 rounded-full border border-transparent transition-all duration-300"])}"></div></div></button></div><div class="mt-3 h-0.5 bg-gray-100 overflow-hidden"><div class="${ssrRenderClass([{ "translate-x-[-100%]": !isRefreshing.value, "translate-x-[100%]": isRefreshing.value }, "h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-1000"])}"></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BalanceCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=BalanceCard.vue.mjs.map
