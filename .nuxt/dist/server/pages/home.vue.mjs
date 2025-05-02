import __nuxt_component_0 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_1 from "../components/home/AppCardInvest.vue.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import __nuxt_component_3 from "../components/AdsBlock.vue.mjs";
import { investments } from "../constants/investments.mjs";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_HomeAppCardInvest = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-32db15e8>`);
      _push(ssrRenderComponent(__nuxt_component_3, null, null, _parent));
      _push(`<h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-32db15e8>Доступні інвестиції</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-32db15e8><!--[-->`);
      ssrRenderList(unref(investments), (investment) => {
        _push(`<div class="group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col" data-v-32db15e8><div class="flex items-start mb-5" data-v-32db15e8><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors" data-v-32db15e8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: investment.icon,
          class: "text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12"
        }, null, _parent));
        _push(`</div><div class="ml-4 flex-1" data-v-32db15e8><h2 class="text-xl font-medium text-slate-800 mb-1" data-v-32db15e8>${ssrInterpolate(investment.title)}</h2><p class="text-sm text-slate-500 font-light" data-v-32db15e8>${ssrInterpolate(investment.description)}</p></div></div><div class="space-y-3 pt-4 border-t border-slate-100 mb-4" data-v-32db15e8><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Інвестовано:</span><span class="font-medium text-slate-800" data-v-32db15e8>${ssrInterpolate(investment.amount)} ₴</span></div><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Дохід:</span><span class="font-medium text-green-600" data-v-32db15e8>+${ssrInterpolate(investment.profit)} ₴</span></div><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Період:</span><span class="text-sm text-slate-500" data-v-32db15e8>${ssrInterpolate(investment.time)} дн.</span></div></div><button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 active:scale-95 flex items-center justify-center gap-2" data-v-32db15e8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-up-right-20-solid",
          class: "text-lg -translate-x-2 group-hover:translate-x-0 transition-all"
        }, null, _parent));
        _push(`<span data-v-32db15e8>Почати інвестувати</span></button><div class="absolute inset-0 border-2 border-transparent group-hover:border-slate-200 rounded-xl pointer-events-none transition-all duration-300" data-v-32db15e8></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_HomeAppCardInvest, { class: "mt-6" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32db15e8"]]);
export {
  home as default
};
//# sourceMappingURL=home.vue.mjs.map
