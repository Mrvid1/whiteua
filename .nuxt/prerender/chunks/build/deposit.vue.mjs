import { mergeProps, useSSRContext, ref, reactive, unref } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100" }, _attrs))} data-v-bd632969><p class="text-sm text-slate-500 font-light mb-6" data-v-bd632969> Ви можете поповнити рахунок банківською карткою або криптовалютою USDT TRC20. </p><div class="space-y-4" data-v-bd632969><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-bd632969><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-bd632969>Банківська картка</h3><p class="text-sm text-slate-500 font-light" data-v-bd632969>Мінімальне поповнення: <span class="font-medium text-slate-800" data-v-bd632969>500 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Поповнення через підтримку</p></div><div class="p-4 bg-slate-50 rounded-lg group hover:bg-slate-100 transition-colors" data-v-bd632969><h3 class="text-lg font-medium text-slate-800 mb-2" data-v-bd632969>USDT TRC20</h3><p class="text-sm text-slate-500 font-light" data-v-bd632969>Мінімальне поповнення: <span class="font-medium text-slate-800" data-v-bd632969>25 USDT</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Курс: <span class="font-medium text-slate-800" data-v-bd632969>1 USDT = 41 грн</span></p><p class="text-sm text-slate-500 font-light" data-v-bd632969>Автоматичне зарахування через сайт</p></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/deposit/AppCardInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bd632969"]]);

const _sfc_main = {
  __name: "deposit",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const balanceUser = ref(0);
    const DInfo = ref({
      amount: 0,
      card: "",
      txid: ""
    });
    const selectInput = ref([
      { id: 1, name: "Банківська карта" },
      { id: 2, name: "USDT TRC20" }
    ]);
    const selectedOption = ref(1);
    let transactions = reactive([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DepositAppCardInfo = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-264a4984><h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-264a4984>Поповнення рахунку</h1>`);
      _push(ssrRenderComponent(_component_DepositAppCardInfo, { class: "mb-8" }, null, _parent));
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-264a4984><div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100 mb-6" data-v-264a4984><div class="flex items-start mb-6" data-v-264a4984><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50" data-v-264a4984>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:account-balance-wallet",
        class: "text-2xl text-slate-700"
      }, null, _parent));
      _push(`</div><div class="ml-4" data-v-264a4984><h2 class="text-xl font-medium text-slate-800 mb-2" data-v-264a4984>Нове поповнення</h2><p class="text-sm text-slate-500 font-light" data-v-264a4984>Доступний баланс: ${ssrInterpolate(balanceUser.value)} ₴</p></div></div><form class="space-y-6" data-v-264a4984><div data-v-264a4984><label class="block text-sm font-medium text-slate-700 mb-2" data-v-264a4984>Спосіб оплати</label><select class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-all" data-v-264a4984><!--[-->`);
      ssrRenderList(selectInput.value, (option) => {
        _push(`<option${ssrRenderAttr("value", option.id)} data-v-264a4984${ssrIncludeBooleanAttr(Array.isArray(selectedOption.value) ? ssrLooseContain(selectedOption.value, option.id) : ssrLooseEqual(selectedOption.value, option.id)) ? " selected" : ""}>${ssrInterpolate(option.name)}</option>`);
      });
      _push(`<!--]--></select></div><div data-v-264a4984><label class="block text-sm font-medium text-slate-700 mb-2" data-v-264a4984>Сума поповнення(введіть нижче щоб розрахувати бонус)</label><div class="relative" data-v-264a4984><input type="number" placeholder="0"${ssrRenderAttr("value", DInfo.value.amount)} class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 pr-16 transition-all" data-v-264a4984><label class="block text-sm font-medium text-slate-700 mt-2" data-v-264a4984> Бонус до поповнення 3%: ${ssrInterpolate((DInfo.value.amount * 0.03).toFixed(2))} ₴ </label></div></div>`);
      if (selectedOption.value === 1) {
        _push(`<div class="text-center border border-yellow-100 p-4 rounded-lg bg-yellow-50" data-v-264a4984><p class="text-sm text-yellow-700" data-v-264a4984>Для поповнення через банківську карту, зв’яжіться з фінансовим менеджером.</p><button type="button" class="mt-4 inline-block text-sm text-blue-600 hover:underline hover:text-blue-800" data-v-264a4984> Зв’язатись з менеджером </button></div>`);
      } else if (selectedOption.value === 2) {
        _push(`<div class="space-y-4" data-v-264a4984><div data-v-264a4984><label class="block text-sm font-medium text-slate-700 mb-2" data-v-264a4984>Адреса для поповнення (TRC20)</label><input type="text" readonly value="TP9zvX3v1HgzUQ5HxDHjKnZrHnY91Qxxx" class="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-700 select-all" data-v-264a4984></div><div data-v-264a4984><label class="block text-sm font-medium text-slate-700 mb-2" data-v-264a4984>Введіть TXID транзакції</label><input type="text"${ssrRenderAttr("value", DInfo.value.txid)} placeholder="Введіть TXID" class="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-all" data-v-264a4984></div><span data-v-264a4984>Курс 1 USDT = 41 ₴</span><button type="submit" class="mt-2 w-full py-3 px-4 bg-green-600 text-white rounded-lg transition-all hover:bg-green-700 active:scale-95" data-v-264a4984> Підтвердити поповнення </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div><div class="p-6 bg-white rounded-xl shadow-sm border border-slate-100" data-v-264a4984><div class="flex items-start mb-6" data-v-264a4984><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50" data-v-264a4984>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "material-symbols:history",
        class: "text-2xl text-slate-700"
      }, null, _parent));
      _push(`</div><div class="ml-4" data-v-264a4984><h2 class="text-xl font-medium text-slate-800 mb-2" data-v-264a4984>Останні операції</h2><p class="text-sm text-slate-500 font-light" data-v-264a4984>Історія ваших поповнень</p></div></div><div class="space-y-4" data-v-264a4984>`);
      if (unref(transactions).length === 0) {
        _push(`<div class="text-center text-slate-400 py-6" data-v-264a4984><p class="text-sm" data-v-264a4984>У вас ще немає транзакцій</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(transactions), (transaction) => {
        _push(`<div class="p-6 border-2 border-slate-100 rounded-lg transition-all hover:border-slate-200" data-v-264a4984><div class="flex justify-between items-center" data-v-264a4984><div data-v-264a4984><p class="font-medium text-slate-800" data-v-264a4984>Депозит</p><p class="text-sm text-slate-500" data-v-264a4984>${ssrInterpolate(transaction.date)}</p></div><div class="${ssrRenderClass(transaction.status === "Успішно" ? "text-green-600" : "text-amber-600")}" data-v-264a4984><span class="font-medium" data-v-264a4984>+${ssrInterpolate(transaction.amount)} ₴</span><p class="text-xs mt-1" data-v-264a4984>${ssrInterpolate(transaction.status)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deposit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deposit = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-264a4984"]]);

export { deposit as default };
//# sourceMappingURL=deposit.vue.mjs.map
