import { _ as _export_sfc, u as useNuxtApp, a as __nuxt_component_0 } from './server.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "history",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const operations = ref([]);
    const TotalAmountU = computed(() => {
      return operations.value.reduce((acc, operation) => {
        const amount = parseFloat(operation.amount);
        return acc + (isNaN(amount) ? 0 : amount);
      }, 0).toFixed(2);
    });
    const statusClasses = {
      "Успішно": "bg-green-100 text-green-800",
      "В обробці": "bg-amber-100 text-amber-800",
      "Помилка": "bg-red-100 text-red-800"
    };
    const getStatusClass = (status) => {
      return statusClasses[status] || "bg-gray-100 text-gray-800";
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleString("uk-UA", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))} data-v-9277b872><h1 class="text-3xl font-semibold text-center text-slate-900 mb-8 tracking-wide" data-v-9277b872>Історія операцій</h1><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-v-9277b872><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center gap-4" data-v-9277b872><div class="p-3 rounded-full bg-green-100 flex items-center justify-center" data-v-9277b872>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:calculator",
        class: "text-3xl text-green-600"
      }, null, _parent));
      _push(`</div><div data-v-9277b872><p class="text-sm text-slate-500" data-v-9277b872>Сума операцій</p><p class="text-2xl font-semibold text-slate-800" data-v-9277b872>${ssrInterpolate(TotalAmountU.value)} ₴</p></div></div></div><div class="p-6 bg-white rounded-2xl shadow-md border border-slate-200 overflow-x-auto" data-v-9277b872><table class="w-full border-collapse border border-slate-300 text-sm" data-v-9277b872><thead data-v-9277b872><tr class="bg-slate-100 text-slate-700" data-v-9277b872><th class="p-3 border border-slate-300 text-left whitespace-nowrap" data-v-9277b872>Тип операції</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap" data-v-9277b872>Сума</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap" data-v-9277b872>Статус</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap" data-v-9277b872>Дата</th><th class="p-3 border border-slate-300 text-left whitespace-nowrap" data-v-9277b872>ID операції</th></tr></thead><tbody data-v-9277b872><!--[-->`);
      ssrRenderList(operations.value, (operation) => {
        _push(`<tr class="hover:bg-slate-50" data-v-9277b872><td class="p-3 border border-slate-300 whitespace-nowrap" data-v-9277b872><span class="font-medium" data-v-9277b872>${ssrInterpolate(operation.type)}</span></td><td class="p-3 border border-slate-300 whitespace-nowrap font-medium" data-v-9277b872>${ssrInterpolate(operation.amount)} ₴ </td><td class="p-3 border border-slate-300 whitespace-nowrap" data-v-9277b872><span class="${ssrRenderClass([getStatusClass(operation.status), "px-2 py-1 rounded-full text-xs"])}" data-v-9277b872>${ssrInterpolate(operation.status)}</span></td><td class="p-3 border border-slate-300 whitespace-nowrap" data-v-9277b872>${ssrInterpolate(formatDate(operation.date))}</td><td class="p-3 border border-slate-300 whitespace-nowrap text-slate-500" data-v-9277b872>TX-${ssrInterpolate(operation.uuid)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const history = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9277b872"]]);

export { history as default };
//# sourceMappingURL=history.vue.mjs.map
