import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-05b12a21><h2 class="text-2xl font-medium text-slate-800 mb-4" data-v-05b12a21>Поради щодо інвестицій</h2><p class="text-sm text-slate-500 font-light mb-6" data-v-05b12a21> Чим більше ви інвестуєте, тим вищий прибуток отримаєте. Важливо також залучати партнерів для збільшення вашого доходу. </p><div class="space-y-4" data-v-05b12a21><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-05b12a21><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-05b12a21>Сума інвестицій</h3><p class="text-sm text-slate-500 font-light" data-v-05b12a21>Чим більше вкладень, тим більший потенційний прибуток за встановлений термін.</p></div><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-05b12a21><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-05b12a21>Період інвестицій</h3><p class="text-sm text-slate-500 font-light" data-v-05b12a21>Чим довший термін, тим вищі відсотки та стабільніший приріст капіталу.</p></div><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-05b12a21><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-05b12a21>Партнерська програма</h3><p class="text-sm text-slate-500 font-light" data-v-05b12a21>Залучення партнерів 1 та 2 рівня збільшує ваш пасивний дохід та створює стабільну фінансову базу.</p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/myinvest/AppCardAdvice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-05b12a21"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=AppCardAdvice.vue.mjs.map
