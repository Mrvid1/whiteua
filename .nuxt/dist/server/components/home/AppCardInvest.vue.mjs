import __nuxt_component_0 from "../../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "AppCardInvest",
  __ssrInlineRender: true,
  setup(__props) {
    const sectors = ref([
      { id: 1, icon: "heroicons:currency-dollar", title: "Фондовий ринок", description: "Висока ліквідність, довгострокові перспективи." },
      { id: 2, icon: "heroicons:building-office", title: "Нерухомість", description: "Стабільний дохід від оренди, зростання вартості." },
      { id: 3, icon: "heroicons:server", title: "Технології", description: "Інновації та швидке зростання компаній." },
      { id: 4, icon: "heroicons:globe-alt", title: "Екологічні інвестиції", description: "Стійке майбутнє та підтримка зеленої енергетики." }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-297a83cb><h2 class="text-2xl font-medium text-slate-800 mb-4" data-v-297a83cb>Інвестування у різні напрямки</h2><p class="text-sm text-slate-500 font-light mb-6" data-v-297a83cb> Диверсифікація інвестицій дозволяє знизити ризики та підвищити прибутковість. Ось як це впливає на ринок: </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-297a83cb><!--[-->`);
      ssrRenderList(sectors.value, (sector) => {
        _push(`<div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-297a83cb><div class="flex items-start" data-v-297a83cb><div class="p-3 aspect-square flex items-center rounded-lg bg-white shadow group-hover:shadow-md transition-all" data-v-297a83cb>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: sector.icon,
          class: "text-2xl text-slate-700 group-hover:text-green-600 transition-all"
        }, null, _parent));
        _push(`</div><div class="ml-4 flex-1" data-v-297a83cb><h3 class="text-lg font-medium text-slate-800" data-v-297a83cb>${ssrInterpolate(sector.title)}</h3><p class="text-sm text-slate-500 font-light" data-v-297a83cb>${ssrInterpolate(sector.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AppCardInvest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-297a83cb"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=AppCardInvest.vue.mjs.map
