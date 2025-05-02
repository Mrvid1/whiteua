import __nuxt_component_0$1 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white shadow-md py-4 px-8 flex items-center gap-2" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "icon-park:planet",
    class: "text-4xl text-red-500"
  }, null, _parent));
  _push(`<h1 class="text-2xl font-bold text-gray-800">WhiteUA</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=AppHeader.vue.mjs.map
