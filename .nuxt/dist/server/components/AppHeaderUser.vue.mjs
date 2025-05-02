import __nuxt_component_0$1 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import _sfc_main$1 from "./BalanceCard.vue.mjs";
import __nuxt_component_2 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_3 from "./AdsBlock.vue.mjs";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs";
import { useRoute } from "../node_modules/nuxt/dist/app/composables/router.mjs";
import "F:/sitesVue/uaproject/node_modules/destr/dist/index.mjs";
import "F:/sitesVue/uaproject/node_modules/klona/dist/index.mjs";
import "F:/sitesVue/uaproject/node_modules/defu/dist/defu.mjs";
import "#internal/nuxt/paths";
import { useRouter } from "vue-router";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
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
      const _component_BalanceCard = _sfc_main$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeaderUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52eb129d"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=AppHeaderUser.vue.mjs.map
