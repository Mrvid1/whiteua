import { _ as _export_sfc, a as __nuxt_component_0, u as useNuxtApp } from './server.mjs';
import { ref, mergeProps, useSSRContext, unref } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_3 } from './AdsBlock.vue.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/unctx/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/h3/dist/index.mjs';
import 'file://F:/sitesVue/uaproject/node_modules/vue-router/dist/vue-router.node.mjs';
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

const _sfc_main$1 = {
  __name: "AppCardInvest",
  __ssrInlineRender: true,
  setup(__props) {
    const sectors = ref([
      { id: 1, icon: "heroicons:currency-dollar", title: "Фондовий ринок", description: "Висока ліквідність, довгострокові перспективи." },
      { id: 2, icon: "heroicons:building-office", title: "Нерухомість", description: "Стабільний дохід від оренди, зростання вартості." },
      { id: 3, icon: "heroicons:server", title: "Технології", description: "Інновації та швидке зростання компаній." },
      { id: 4, icon: "heroicons:globe-alt", title: "Екологічні інвестиції", description: "Стійке майбутнє та підтримка зеленої енергетики." }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-297a83cb><h2 class="text-2xl font-medium text-slate-800 mb-4" data-v-297a83cb>Інвестування у різні напрямки</h2><p class="text-sm text-slate-500 font-light mb-6" data-v-297a83cb> Диверсифікація інвестицій дозволяє знизити ризики та підвищити прибутковість. Ось як це впливає на ринок: </p><div class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-v-297a83cb><!--[-->`);
      ssrRenderList(sectors.value, (sector) => {
        _push(`<div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-297a83cb><div class="flex items-start" data-v-297a83cb><div class="p-3 aspect-square flex items-center rounded-lg bg-white shadow group-hover:shadow-md transition-all" data-v-297a83cb>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: sector.icon,
          class: "text-2xl text-slate-700 group-hover:text-green-600 transition-all"
        }, null, _parent));
        _push(`</div><div class="ml-4 flex-1" data-v-297a83cb><h3 class="text-lg font-medium text-slate-800" data-v-297a83cb>${ssrInterpolate(sector.title)}</h3><p class="text-sm text-slate-500 font-light" data-v-297a83cb>${ssrInterpolate(sector.description)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/AppCardInvest.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-297a83cb"]]);

const investments = [
  { id: 1, title: "Криптовалюта", description: "Bitcoin та Ethereum", amount: 500, profit: 120, time: 2, icon: "icon-park-solid:bitcoin" },
  { id: 2, title: "Акції", description: "Технологічні компанії", amount: 1200, profit: 300, time: 4, icon: "icon-park-solid:stock-market" },
  { id: 3, title: "Нерухомість", description: "Комерційна оренда", amount: 2500, profit: 650, time: 4, icon: "icon-park-solid:building-four" },
  { id: 4, title: "Стартапи", description: "Перспективні проекти", amount: 3e3, profit: 800, time: 4, icon: "icon-park-solid:rocket" },
  { id: 5, title: "Облігації", description: "Державні папери", amount: 7e3, profit: 1750, time: 5, icon: "icon-park-solid:file-protection" },
  { id: 6, title: "Фонди", description: "Довгострокові інвестиції", amount: 15e3, profit: 4e3, time: 7, icon: "icon-park-solid:vertical-timeline" },
  { id: 7, title: "Золото", description: "Фізичні активи", amount: 32e3, profit: 7800, time: 7, icon: "icon-park-solid:gold-medal" },
  { id: 8, title: "Стейкінг", description: "Пасивний дохід", amount: 64e3, profit: 18e3, time: 10, icon: "icon-park-solid:lock" },
  { id: 9, title: "Венчурний капітал", description: "Високоризикові інвестиції", amount: 12e4, profit: 32200, time: 14, icon: "icon-park-solid:trend" }
];

const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_HomeAppCardInvest = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-32db15e8>`);
      _push(ssrRenderComponent(__nuxt_component_3, null, null, _parent));
      _push(`<h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-32db15e8>Доступні інвестиції</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-32db15e8><!--[-->`);
      ssrRenderList(unref(investments), (investment) => {
        _push(`<div class="group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col" data-v-32db15e8><div class="flex items-start mb-5" data-v-32db15e8><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors" data-v-32db15e8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: investment.icon,
          class: "text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12"
        }, null, _parent));
        _push(`</div><div class="ml-4 flex-1" data-v-32db15e8><h2 class="text-xl font-medium text-slate-800 mb-1" data-v-32db15e8>${ssrInterpolate(investment.title)}</h2><p class="text-sm text-slate-500 font-light" data-v-32db15e8>${ssrInterpolate(investment.description)}</p></div></div><div class="space-y-3 pt-4 border-t border-slate-100 mb-4" data-v-32db15e8><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Інвестовано:</span><span class="font-medium text-slate-800" data-v-32db15e8>${ssrInterpolate(investment.amount)} ₴</span></div><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Дохід:</span><span class="font-medium text-green-600" data-v-32db15e8>+${ssrInterpolate(investment.profit)} ₴</span></div><div class="flex justify-between items-center" data-v-32db15e8><span class="text-slate-500" data-v-32db15e8>Період:</span><span class="text-sm text-slate-500" data-v-32db15e8>${ssrInterpolate(investment.time)} дн.</span></div></div><button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 active:scale-95 flex items-center justify-center gap-2" data-v-32db15e8>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "heroicons:arrow-up-right-20-solid",
          class: "text-lg -translate-x-2 group-hover:translate-x-0 transition-all"
        }, null, _parent));
        _push(`<span data-v-32db15e8>Почати інвестувати</span></button><div class="absolute inset-0 border-2 border-transparent group-hover:border-slate-200 rounded-xl pointer-events-none transition-all duration-300" data-v-32db15e8></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_HomeAppCardInvest, { class: "mt-6" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32db15e8"]]);

export { home as default };
//# sourceMappingURL=home.vue.mjs.map
