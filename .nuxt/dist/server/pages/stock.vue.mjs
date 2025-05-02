import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import __nuxt_component_3 from "../components/AdsBlock.vue.mjs";
import depositImage from "../assets/images/deposit.webp.mjs";
import refImage from "../assets/images/ref.webp.mjs";
import "F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    const promotions = ref([
      {
        id: 1,
        title: "Бонус за перший депозит",
        description: "Отримайте додаткові 10% до суми внеску на ваш рахунок від 3000₴",
        image: depositImage,
        expiryDate: "22.07.2025"
      },
      {
        id: 2,
        title: "Реферальна програма",
        description: "Запрошуйте друзів та отримуйте 10% та 5% від їхніх інвестицій",
        image: refImage,
        expiryDate: "Без терміну"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-773507e2>`);
      _push(ssrRenderComponent(__nuxt_component_3, null, null, _parent));
      _push(`<h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-773507e2>Акційні пропозиції</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-773507e2><!--[-->`);
      ssrRenderList(promotions.value, (promo) => {
        _push(`<div class="group relative p-0 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col overflow-hidden" data-v-773507e2><div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10" data-v-773507e2> Акція </div><div class="relative h-48 w-full overflow-hidden" data-v-773507e2><img${ssrRenderAttr("src", promo.image)}${ssrRenderAttr("alt", promo.title)} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-v-773507e2></div><div class="p-5 flex-1 flex flex-col" data-v-773507e2><div class="mb-3" data-v-773507e2><h2 class="text-xl font-medium text-slate-800 mb-2" data-v-773507e2>${ssrInterpolate(promo.title)}</h2><p class="text-sm text-slate-500 font-light line-clamp-2" data-v-773507e2>${ssrInterpolate(promo.description)}</p></div><div class="mt-auto pt-3 border-t border-slate-100" data-v-773507e2><div class="flex justify-between items-center" data-v-773507e2><span class="text-xs text-slate-400" data-v-773507e2>Діє до:</span><span class="text-sm font-medium text-slate-700" data-v-773507e2>${ssrInterpolate(promo.expiryDate)}</span></div></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/stock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-773507e2"]]);
export {
  stock as default
};
//# sourceMappingURL=stock.vue.mjs.map
