import __nuxt_component_3 from "../components/AdsBlock.vue.mjs";
import __nuxt_component_2 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import __nuxt_component_0 from "../node_modules/_nuxt/icon/dist/runtime/components/index2.mjs";
import __nuxt_component_3$1 from "../components/myinvest/AppCardAdvice.vue.mjs";
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useNuxtApp } from "../node_modules/nuxt/dist/app/nuxt.mjs";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "myinvest",
  __ssrInlineRender: true,
  setup(__props) {
    const activeInvestments = ref([]);
    const { $api } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdsBlock = __nuxt_component_3;
      const _component_NuxtLink = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0;
      const _component_MyinvestAppCardAdvice = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-d4970ac4>`);
      _push(ssrRenderComponent(_component_AdsBlock, null, null, _parent));
      _push(`<h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-d4970ac4>Мої інвестиції</h1>`);
      if (activeInvestments.value.filter((i) => i.status === "В роботі").length === 0) {
        _push(`<div class="text-center py-12" data-v-d4970ac4><p class="text-slate-500 mb-4" data-v-d4970ac4>У вас поки що немає активних інвестицій</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/home",
          class: "text-green-600 hover:text-green-700 font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Перейти до інвестицій → `);
            } else {
              return [
                createTextVNode(" Перейти до інвестицій → ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-d4970ac4><!--[-->`);
        ssrRenderList(activeInvestments.value.filter((i) => i.status === "В роботі"), (investment) => {
          _push(`<div class="${ssrRenderClass([{ "opacity-75": investment.status === "completed" }, "group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col"])}" data-v-d4970ac4><div class="flex items-start mb-5" data-v-d4970ac4><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors" data-v-d4970ac4>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: investment.icon,
            class: "text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12"
          }, null, _parent));
          _push(`</div><div class="ml-4 flex-1" data-v-d4970ac4><h2 class="text-xl font-medium text-slate-800 mb-1" data-v-d4970ac4>${ssrInterpolate(investment.title)}</h2><p class="text-sm text-slate-500 font-light" data-v-d4970ac4> Статус: <span class="${ssrRenderClass({
            "text-green-600": investment.status === "active",
            "text-slate-400": investment.status === "completed"
          })}" data-v-d4970ac4>${ssrInterpolate(investment.status)}</span></p></div></div><div class="space-y-3 pt-4 border-t border-slate-100 mb-4" data-v-d4970ac4><div class="flex justify-between items-center" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Сума інвестиції:</span><span class="font-medium text-slate-800" data-v-d4970ac4>${ssrInterpolate(investment.amount.toLocaleString())} ₴</span></div><div class="flex justify-between items-center" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Нараховано:</span><span class="font-medium text-green-600" data-v-d4970ac4>+${ssrInterpolate(investment.earned)} ₴</span></div><div class="pt-2" data-v-d4970ac4><div class="flex justify-between text-sm text-slate-500 mb-1" data-v-d4970ac4><span data-v-d4970ac4>Прогрес:</span><span data-v-d4970ac4>${ssrInterpolate(investment.progress)}%</span></div><div class="h-2 bg-slate-100 rounded-full overflow-hidden" data-v-d4970ac4><div class="h-full bg-green-500 transition-all duration-500" style="${ssrRenderStyle({ width: `${investment.progress}%` })}" data-v-d4970ac4></div></div></div><div class="flex justify-between items-center text-sm" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Початок:</span><span class="text-slate-800" data-v-d4970ac4>${ssrInterpolate(investment.startDate)}</span></div><div class="flex justify-between items-center text-sm" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Кінець:</span><span class="text-slate-800" data-v-d4970ac4>${ssrInterpolate(investment.endDate)}</span></div></div>`);
          if (investment.progress == 100) {
            _push(`<button class="mt-auto w-full py-3 px-4 bg-transparent border-2 border-slate-200 rounded-lg text-slate-700 font-medium transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:text-green-700 active:scale-95 flex items-center justify-center gap-2" data-v-d4970ac4>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "heroicons:bolt-solid",
              class: "text-lg -translate-x-2 group-hover:translate-x-0 transition-all"
            }, null, _parent));
            _push(`<span data-v-d4970ac4>Отримати нарахування</span></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`<h1 class="text-3xl font-light text-center text-slate-800 mb-8 tracking-wide" data-v-d4970ac4>Завершені інвестиції</h1>`);
      if (activeInvestments.value.filter((i) => i.status === "Завершено").length === 0) {
        _push(`<div class="text-center py-12" data-v-d4970ac4><p class="text-slate-500 mb-4" data-v-d4970ac4>У вас поки що немає завершених інвестицій</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-d4970ac4><!--[-->`);
        ssrRenderList(activeInvestments.value.filter((i) => i.status === "Завершено"), (investment) => {
          _push(`<div class="${ssrRenderClass([{ "opacity-75": investment.status === "completed" }, "group relative p-6 bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border border-slate-100 flex flex-col"])}" data-v-d4970ac4><div class="flex items-start mb-5" data-v-d4970ac4><div class="p-3 aspect-square flex items-center rounded-lg bg-slate-50 group-hover:bg-slate-100 transition-colors" data-v-d4970ac4>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: investment.icon,
            class: "text-2xl text-slate-700 transition-transform duration-300 group-hover:rotate-12"
          }, null, _parent));
          _push(`</div><div class="ml-4 flex-1" data-v-d4970ac4><h2 class="text-xl font-medium text-slate-800 mb-1" data-v-d4970ac4>${ssrInterpolate(investment.title)}</h2><p class="text-sm text-slate-500 font-light" data-v-d4970ac4> Статус: <span class="${ssrRenderClass({
            "text-green-600": investment.status === "active",
            "text-slate-400": investment.status === "completed"
          })}" data-v-d4970ac4>${ssrInterpolate(investment.status)}</span></p></div></div><div class="space-y-3 pt-4 border-t border-slate-100 mb-4" data-v-d4970ac4><div class="flex justify-between items-center" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Отримано доходу:</span><span class="font-medium text-green-600" data-v-d4970ac4>${ssrInterpolate((investment.amount + investment.earned).toLocaleString())} ₴</span></div><div class="flex justify-between items-center text-sm" data-v-d4970ac4><span class="text-slate-500" data-v-d4970ac4>Кінець:</span><span class="text-slate-800" data-v-d4970ac4>${ssrInterpolate(investment.endDate)}</span></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_MyinvestAppCardAdvice, { class: "mt-6" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/myinvest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const myinvest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4970ac4"]]);
export {
  myinvest as default
};
//# sourceMappingURL=myinvest.vue.mjs.map
