import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-bd632969><p class="text-sm text-slate-500 font-light mb-6" data-v-bd632969> Ви можете поповнити рахунок банківською карткою або криптовалютою USDT TRC20. </p><div class="space-y-4" data-v-bd632969><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-bd632969><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-bd632969>Банківська картка</h3><p class="text-sm text-slate-500 font-light" data-v-bd632969>Мінімальне поповнення: <span class="font-medium text-slate-800" data-v-bd632969>500 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Поповнення через підтримку</p></div><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-bd632969><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-bd632969>USDT TRC20</h3><p class="text-sm text-slate-500 font-light" data-v-bd632969>Мінімальне поповнення: <span class="font-medium text-slate-800" data-v-bd632969>25 USDT</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Курс: <span class="font-medium text-slate-800" data-v-bd632969>1 USDT = 41 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Автоматичне зарахування через сайт</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/deposit/AppCardInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bd632969"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=AppCardInfo.vue.mjs.map
