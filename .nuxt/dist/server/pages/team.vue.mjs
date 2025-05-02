import __nuxt_component_0 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
const _sfc_main = {
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const ref1lv = ref([]);
    const ref2lv = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><h1 class="text-3xl font-semibold text-center text-slate-900 mb-8 tracking-wide">Моя команда</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4"><div class="p-3 rounded-full bg-green-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:user-group",
        class: "text-3xl text-green-600"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-slate-500">Реферали 1 рівня (10%)</p><p class="text-2xl font-semibold text-slate-800">${ssrInterpolate(ref1lv.value.length)}</p></div></div><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4"><div class="p-3 rounded-full bg-blue-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:user-group",
        class: "text-3xl text-blue-600"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-slate-500">Реферали 2 рівня (5%)</p><p class="text-2xl font-semibold text-slate-800">${ssrInterpolate(ref2lv.value.length)}</p></div></div><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4"><div class="p-3 rounded-full bg-purple-100 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:user-group",
        class: "text-3xl text-purple-600"
      }, null, _parent));
      _push(`</div><div><p class="text-sm text-slate-500">Всього рефералів</p><p class="text-2xl font-semibold text-slate-800">${ssrInterpolate(ref1lv.value.length + ref2lv.value.length)}</p></div></div></div><div class="grid grid-cols-1 gap-8 lg:grid-cols-2"><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto"><h2 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chart-bar",
        class: "text-2xl text-purple-600"
      }, null, _parent));
      _push(` Рівень 1 (10%) </h2><table class="w-full border-collapse border border-slate-300 text-sm"><thead><tr class="bg-slate-100 text-slate-700"><th class="p-3 border border-slate-300 text-left whitespace-nowrap">Email</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap">Дата реєстрації</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(ref1lv.value, (ref1, index) => {
        _push(`<tr class="hover:bg-slate-50"><td class="p-3 border border-slate-300 whitespace-nowrap">${ssrInterpolate(ref1.email)}</td><td class="p-3 border border-slate-300 whitespace-nowrap">${ssrInterpolate(ref1.created_at)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto"><h2 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:chart-pie",
        class: "text-2xl text-orange-600"
      }, null, _parent));
      _push(` Рівень 2 (5%) </h2><table class="w-full border-collapse border border-slate-300 text-sm"><thead><tr class="bg-slate-100 text-slate-700"><th class="p-3 border border-slate-300 text-left whitespace-nowrap">Email</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap">Дата реєстрації</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(ref2lv.value, (ref2, index) => {
        _push(`<tr class="hover:bg-slate-50"><td class="p-3 border border-slate-300 whitespace-nowrap">${ssrInterpolate(ref2.email)}</td><td class="p-3 border border-slate-300 whitespace-nowrap">${ssrInterpolate(ref2.created_at)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="mt-12 p-6 bg-yellow-100 border border-yellow-300 rounded-xl"><h3 class="text-lg font-semibold text-yellow-800">💡 Поради для збільшення рефералів</h3><ul class="list-disc list-inside text-yellow-900 mt-2"><li>Запрошуйте друзів через соцмережі.</li><li>Публікуйте відгуки та кейси про заробіток.</li><li>Використовуйте e-mail розсилки для залучення нових користувачів.</li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=team.vue.mjs.map
