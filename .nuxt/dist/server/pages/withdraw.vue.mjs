import __nuxt_component_0 from "../components/withdraw/AppCardInfo.vue.mjs";
import __nuxt_component_0$1 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import { ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
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
export {
  withdraw as default
};
//# sourceMappingURL=withdraw.vue.mjs.map
