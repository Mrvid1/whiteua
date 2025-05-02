import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { mergeProps, useSSRContext } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-gray-900 text-white py-8 mt-10" }, _attrs))} data-v-c6dc1474><div class="container mx-auto px-6 text-center" data-v-c6dc1474><div class="mb-6" data-v-c6dc1474><h2 class="text-2xl font-bold tracking-wide text-gray-200" data-v-c6dc1474>WhiteUA</h2><p class="text-sm text-gray-400" data-v-c6dc1474>Надійні фінансові рішення для вашого майбутнього</p></div><div class="flex justify-center gap-6 mb-6" data-v-c6dc1474>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:bank-fill",
    class: "text-4xl text-green-400"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:shield-check-fill",
    class: "text-4xl text-blue-400"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:credit-card-fill",
    class: "text-4xl text-yellow-400"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:lock-fill",
    class: "text-4xl text-red-400"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:chart-line-up-fill",
    class: "text-4xl text-purple-400"
  }, null, _parent));
  _push(`</div><p class="text-xs text-gray-400" data-v-c6dc1474> Фінансові послуги надаються згідно з чинним законодавством України. Будь ласка, ознайомтеся з умовами перед використанням. </p><p class="text-sm mt-4 font-bold text-red-500" data-v-c6dc1474> ВАЖЛИВО! Використання цього сайту дозволено лише особам старше 18 років. </p><p class="text-xs text-gray-500 mt-4" data-v-c6dc1474>© 2024 WhiteUA. Усі права захищені.</p></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c6dc1474"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AppFooter.vue.mjs.map
