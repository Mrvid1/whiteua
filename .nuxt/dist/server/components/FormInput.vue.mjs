import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    id: String,
    label: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", __props.id)} class="block text-gray-700 text-sm font-bold mb-1">${ssrInterpolate(__props.label)}</label><input${ssrRenderAttrs(mergeProps({
        id: __props.id,
        type: __props.type,
        placeholder: __props.placeholder
      }, _ctx.$attrs, {
        value: __props.modelValue,
        class: "w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      }))}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FormInput.vue.mjs.map
