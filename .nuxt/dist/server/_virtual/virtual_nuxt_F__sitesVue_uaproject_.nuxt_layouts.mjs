import { defineAsyncComponent } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("../layouts/default.vue.mjs").then((m) => m.default || m)),
  user: defineAsyncComponent(() => import("../layouts/user.vue.mjs").then((m) => m.default || m))
};
export {
  layouts as default
};
//# sourceMappingURL=virtual_nuxt_F__sitesVue_uaproject_.nuxt_layouts.mjs.map
