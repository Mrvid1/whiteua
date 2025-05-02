import __nuxt_page_meta from "../pages/home.vue2.mjs";
import __nuxt_page_meta$1 from "../pages/team.vue2.mjs";
import __nuxt_page_meta$2 from "../pages/stock.vue2.mjs";
import __nuxt_page_meta$3 from "../pages/deposit.vue2.mjs";
import __nuxt_page_meta$4 from "../pages/history.vue2.mjs";
import __nuxt_page_meta$5 from "../pages/myinvest.vue2.mjs";
import __nuxt_page_meta$6 from "../pages/withdraw.vue2.mjs";
function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "home",
    path: "/home",
    meta: __nuxt_page_meta || {},
    component: () => import("../pages/home.vue.mjs")
  },
  {
    name: "team",
    path: "/team",
    meta: __nuxt_page_meta$1 || {},
    component: () => import("../pages/team.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "stock",
    path: "/stock",
    meta: __nuxt_page_meta$2 || {},
    component: () => import("../pages/stock.vue.mjs")
  },
  {
    name: "deposit",
    path: "/deposit",
    meta: __nuxt_page_meta$3 || {},
    component: () => import("../pages/deposit.vue.mjs")
  },
  {
    name: "history",
    path: "/history",
    meta: __nuxt_page_meta$4 || {},
    component: () => import("../pages/history.vue.mjs")
  },
  {
    name: "myinvest",
    path: "/myinvest",
    meta: __nuxt_page_meta$5 || {},
    component: () => import("../pages/myinvest.vue.mjs")
  },
  {
    name: "withdraw",
    path: "/withdraw",
    meta: __nuxt_page_meta$6 || {},
    component: () => import("../pages/withdraw.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt_F__sitesVue_uaproject_.nuxt_routes.mjs.map
