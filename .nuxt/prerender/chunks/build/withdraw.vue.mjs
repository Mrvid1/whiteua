import { mergeProps, useSSRContext, ref, reactive, unref } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, u as useNuxtApp, a as __nuxt_component_0$1 } from './server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-6700f5f0><p class="text-sm text-slate-500 font-light mb-6" data-v-6700f5f0> Виведення коштів можливе тільки на банківську картку. Будь ласка, зверніть увагу на умови. </p><div class="space-y-4" data-v-6700f5f0><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-6700f5f0><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-6700f5f0>Банківська картка</h3><p class="text-sm text-slate-500 font-light" data-v-6700f5f0>Мінімальна сума виведення: <span class="font-medium text-slate-800" data-v-6700f5f0>1000 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-6700f5f0>Комісія: <span class="font-medium text-slate-800" data-v-6700f5f0>5%</span></p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/withdraw/AppCardInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6700f5f0"]]);

const _sfc_main = {
  __name: "withdraw",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const balanceUser = ref(0);
    const WInfo = ref({
      amount: 0,
      card: ""
    });
    let transactions = reactive([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WithdrawAppCardInfo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-b846ec04><h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-b846ec04>Виведення коштів</h1>`);
      _push(ssrRenderComponent(_component_WithdrawAppCardInfo, { class: "mb-8" }, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-b846ec04><div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100 mb-6" data-v-b846ec04><div class="flex items-start mb-6" data-v-b846ec04><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50" data-v-b846ec04>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park-solid:inbox-out",
        class: "text-2xl text-slate-700"
      }, null, _parent));
      _push(`</div><div class="ml-4" data-v-b846ec04><h2 class="text-xl font-medium text-slate-800 mb-2" data-v-b846ec04>Запит на виведення</h2><p class="text-sm text-slate-500 font-light" data-v-b846ec04>Доступний баланс: ${ssrInterpolate(balanceUser.value)} ₴</p></div></div><form class="space-y-6" data-v-b846ec04><div data-v-b846ec04><label class="block text-sm font-medium text-slate-700 mb-2" data-v-b846ec04>Спосіб виведення</label><select class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 transition-all" data-v-b846ec04><option data-v-b846ec04>Банківська карта</option></select></div><div data-v-b846ec04><label class="block text-sm font-medium text-slate-700 mb-2" data-v-b846ec04>Сума виведення</label><div class="relative" data-v-b846ec04><input type="number" placeholder="0₴"${ssrRenderAttr("value", WInfo.value.amount)} class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 pr-16 transition-all" data-v-b846ec04></div><label class="block text-sm font-medium text-slate-700 mb-2" data-v-b846ec04>Сума до отримання(Комісія 5%):${ssrInterpolate((WInfo.value.amount * 0.95).toFixed(2))}₴</label></div><div data-v-b846ec04><label class="block text-sm font-medium text-slate-700 mb-2" data-v-b846ec04>Реквізити</label><input type="text"${ssrRenderAttr("value", WInfo.value.card)} placeholder="Введіть дані картки або гаманця" class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:ring-0 transition-all" data-v-b846ec04></div><button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 active:scale-95 flex items-center justify-center gap-2" data-v-b846ec04>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:arrow-up-right-20-solid",
        class: "text-lg -translate-x-2 group-hover:translate-x-0 transition-all"
      }, null, _parent));
      _push(`<span data-v-b846ec04>Виведення коштів</span></button></form></div><div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100" data-v-b846ec04><div class="flex items-start mb-6" data-v-b846ec04><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50" data-v-b846ec04>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "icon-park-solid:transaction",
        class: "text-2xl text-slate-700"
      }, null, _parent));
      _push(`</div><div class="ml-4" data-v-b846ec04><h2 class="text-xl font-medium text-slate-800 mb-2" data-v-b846ec04>Останні операції</h2><p class="text-sm text-slate-500 font-light" data-v-b846ec04>Історія ваших транзакцій</p></div></div><div class="space-y-4" data-v-b846ec04>`);
      if (unref(transactions).length === 0) {
        _push(`<div class="text-center text-slate-400 py-6" data-v-b846ec04><p class="text-sm" data-v-b846ec04>У вас ще немає транзакцій</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(transactions), (transaction) => {
        _push(`<div class="p-6 border-2 border-slate-100 rounded-lg transition-all hover:border-slate-200" data-v-b846ec04><div class="flex justify-between items-center" data-v-b846ec04><div data-v-b846ec04><p class="font-medium text-slate-800" data-v-b846ec04>${ssrInterpolate(transaction.type)}</p><p class="text-sm text-slate-500" data-v-b846ec04>${ssrInterpolate(transaction.date)}</p></div><div class="${ssrRenderClass(transaction.status === "Успішно" ? "text-green-600" : "text-amber-600")}" data-v-b846ec04><span class="font-medium" data-v-b846ec04>-${ssrInterpolate(transaction.amount)} ₴</span><p class="text-xs mt-1" data-v-b846ec04>${ssrInterpolate(transaction.status)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/withdraw.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const withdraw = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b846ec04"]]);

export { withdraw as default };
//# sourceMappingURL=withdraw.vue.mjs.map
