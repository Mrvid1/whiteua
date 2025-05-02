import { u as useNuxtApp, a as __nuxt_component_0$1, _ as _export_sfc, b as useRoute } from './server.mjs';
import { defineComponent, ref, provide, createElementBlock, mergeProps, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderSlot } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_2 } from './nuxt-link.mjs';
import { _ as __nuxt_component_3 } from './AdsBlock.vue.mjs';
import { useRouter } from 'file://F:/sitesVue/uaproject/node_modules/vue-router/dist/vue-router.node.mjs';
import { _ as __nuxt_component_1$1 } from './AppFooter.vue.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unctx/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/h3/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/radix3/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/defu/dist/defu.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ufo/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/klona/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/axios/index.js';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/utils/lib/css/icon.mjs';
import '../_/renderer.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/server.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/utils.mjs';
import '../_/nitro.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/destr/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ofetch/dist/node.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/node-mock-http/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/scule/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://F:/sitesVue/uaproject/node_modules/pathe/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/@iconify/utils/lib/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/ohash/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/consola/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/drivers/fs.mjs';
import 'file:///F:/sitesVue/uaproject/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://F:/sitesVue/uaproject/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/devalue/index.js';
import 'file://F:/sitesVue/uaproject/node_modules/unhead/dist/plugins.mjs';

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

/* empty css                  */
const _sfc_main$2 = {
  __name: "BalanceCard",
  __ssrInlineRender: true,
  emits: ["refresh"],
  setup(__props, { emit: __emit }) {
    const { $api } = useNuxtApp();
    const balance = ref(0);
    const isRefreshing = ref(false);
    ref(null);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl p-4 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] mt-8" }, _attrs))}><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="${ssrRenderClass([{ "rotate-[360deg]": isRefreshing.value }, "p-2 aspect-square max-h-max rounded-lg border border-blue-100 bg-blue-50/50 transition-all duration-300"])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:wallet",
        class: "text-blue-600 text-lg"
      }, null, _parent));
      _push(`</div><div><p class="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-600"> Баланс </p><div class="relative h-7 overflow-hidden"><div class="${ssrRenderClass([{ "translate-y-[-100%] opacity-0": isRefreshing.value, "translate-y-0 opacity-100": !isRefreshing.value }, "text-xl font-semibold text-gray-800 tracking-tight transition-all duration-500"])}"> ₴${ssrInterpolate(balance.value)}</div><div class="${ssrRenderClass([{ "translate-y-0 opacity-100": isRefreshing.value, "translate-y-[100%] opacity-0": !isRefreshing.value }, "text-xl font-semibold text-blue-500 tracking-tight absolute top-0 left-0 transition-all duration-500"])}"> ₴${ssrInterpolate(balance.value)}</div></div></div></div><button class="p-1.5 rounded-full group transition-all duration-200"${ssrIncludeBooleanAttr(isRefreshing.value) ? " disabled" : ""}><div class="relative flex justify-center items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-path",
        class: ["w-4 h-4 transition-all duration-300", {
          "text-gray-400 group-hover:text-blue-500": !isRefreshing.value,
          "text-blue-500 animate-spin": isRefreshing.value
        }]
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{
        "group-hover:border-blue-200 group-hover:scale-125": !isRefreshing.value,
        "border-blue-200 scale-125": isRefreshing.value
      }, "absolute inset-0 rounded-full border border-transparent transition-all duration-300"])}"></div></div></button></div><div class="mt-3 h-0.5 bg-gray-100 overflow-hidden"><div class="${ssrRenderClass([{ "translate-x-[-100%]": !isRefreshing.value, "translate-x-[100%]": isRefreshing.value }, "h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-1000"])}"></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BalanceCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};

const _sfc_main$1 = {
  __name: "AppHeaderUser",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const menuOpen = ref(false);
    ref(12500);
    const menuItems = ref([
      { text: "Домашня сторінка", icon: "icon-park:home", link: "home" },
      { text: "Мої інвестиції", icon: "icon-park:paper-money", link: "myinvest" },
      { text: "Акції", icon: "icon-park:ticket", link: "stock" },
      { text: "Поповнення рахунку", icon: "icon-park:wallet", link: "deposit" },
      { text: "Виведення коштів", icon: "icon-park:inbox-out", link: "withdraw" },
      { text: "Моя команда", icon: "icon-park:peoples-two", link: "team" },
      { text: "Історія операцій", icon: "icon-park:checklist", link: "history" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_BalanceCard = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_AdsBlock = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative bg-white shadow-md py-4 px-8 flex items-center justify-between" }, _attrs))} data-v-52eb129d><div class="flex items-center gap-2" data-v-52eb129d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park:planet",
        class: "text-4xl text-red-500"
      }, null, _parent));
      _push(`<h1 class="text-2xl font-bold text-gray-800" data-v-52eb129d>WhiteUA</h1></div><button class="focus:outline-none" data-v-52eb129d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park:hamburger-button",
        class: "text-3xl text-gray-800"
      }, null, _parent));
      _push(`</button>`);
      if (menuOpen.value) {
        _push(`<div class="fixed inset-0 bg-black bg-opacity-50 z-40" data-v-52eb129d></div>`);
      } else {
        _push(`<!---->`);
      }
      if (menuOpen.value) {
        _push(`<div class="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-5 flex flex-col" data-v-52eb129d><div class="flex items-center gap-2" data-v-52eb129d>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "icon-park:planet",
          class: "text-4xl text-red-500"
        }, null, _parent));
        _push(`<h1 class="text-2xl font-bold text-gray-800" data-v-52eb129d>WhiteUA</h1></div><button class="absolute top-3 right-3" data-v-52eb129d>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "icon-park:close",
          class: "text-2xl text-gray-800"
        }, null, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_BalanceCard, null, null, _parent));
        _push(`<nav class="space-y-4" data-v-52eb129d><h1 class="text-lg font-semibold text-gray-700" data-v-52eb129d>Навігація</h1><!--[-->`);
        ssrRenderList(menuItems.value, (item) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.text,
            to: item.link,
            class: "transition-all flex items-center w-full px-4 py-3 text-sm text-gray-800 ring-2 ring-gray-200 rounded-lg"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: item.icon,
                  class: "mr-3 text-xl"
                }, null, _parent2, _scopeId));
                _push2(` ${ssrInterpolate(item.text)}`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: item.icon,
                    class: "mr-3 text-xl"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(item.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><button class="transition-all flex items-center w-full px-4 py-3 text-sm text-gray-800 ring-2 ring-gray-200 rounded-lg" data-v-52eb129d>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "icon-park:open-door",
          class: "mr-3 text-xl"
        }, null, _parent));
        _push(` Вихід з аккаунту </button>`);
        _push(ssrRenderComponent(_component_AdsBlock, null, null, _parent));
        _push(`</nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-52eb129d"]]);

const _sfc_main = {
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeaderUser = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeaderUser, { class: "sticky top-0 z-50" }, null, _parent));
      _push(`<main class="flex-grow p-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, { class: "mt-auto" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user.vue.mjs.map
