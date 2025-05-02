import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-6700f5f0><p class="text-sm text-slate-500 font-light mb-6" data-v-6700f5f0> Виведення коштів можливе тільки на банківську картку. Будь ласка, зверніть увагу на умови. </p><div class="space-y-4" data-v-6700f5f0><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-6700f5f0><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-6700f5f0>Банківська картка</h3><p class="text-sm text-slate-500 font-light" data-v-6700f5f0>Мінімальна сума виведення: <span class="font-medium text-slate-800" data-v-6700f5f0>1000 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-6700f5f0>Комісія: <span class="font-medium text-slate-800" data-v-6700f5f0>5%</span></p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/withdraw/AppCardInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6700f5f0"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=AppCardInfo.vue.mjs.map
