import { Notivue as _sfc_main$e, Notification as _sfc_main$1, NotificationProgress as _sfc_main$2 } from "./node_modules/notivue/dist/index.mjs";
import __nuxt_component_3 from "./node_modules/nuxt/dist/app/components/nuxt-layout.mjs";
import __nuxt_component_4 from "./node_modules/nuxt/dist/pages/runtime/page.mjs";
import { withCtx, createVNode, createBlock, openBlock, KeepAlive, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _export_sfc from "./_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Notivue = _sfc_main$e;
  const _component_Notification = _sfc_main$1;
  const _component_NotificationProgress = _sfc_main$2;
  const _component_NuxtLayout = __nuxt_component_3;
  const _component_NuxtPage = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c9db6086>`);
  _push(ssrRenderComponent(_component_Notivue, null, {
    default: withCtx((item, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Notification, { item }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NotificationProgress, { item }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Notification, { item }, {
            default: withCtx(() => [
              createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
            ]),
            _: 2
          }, 1032, ["item"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(``);
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock(KeepAlive, null, [
            createVNode(_component_NuxtPage)
          ], 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://t.me/your_telegram_username" target="_blank" class="fixed bottom-6 right-6 z-50 group" aria-label="Техподдержка в Telegram" data-v-c9db6086><div class="relative" data-v-c9db6086><div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-active:scale-95" data-v-c9db6086><svg class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" data-v-c9db6086><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" data-v-c9db6086></path><path d="M8 13L15.5 18L18.5 7L5 11.5L8 13ZM8 13L11 16L15.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c9db6086></path></svg></div><div class="absolute right-16 bottom-1/2 translate-y-1/2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-white px-3 py-1 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-v-c9db6086> Написать в поддержку <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white dark:bg-gray-800 rotate-45" data-v-c9db6086></div></div><div class="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping -z-10 transition-opacity duration-300" data-v-c9db6086></div></div></a></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9db6086"]]);
export {
  AppComponent as default
};
//# sourceMappingURL=app.vue.mjs.map
