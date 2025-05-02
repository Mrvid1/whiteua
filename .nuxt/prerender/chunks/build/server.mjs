import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, toRef, inject, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, defineAsyncComponent, unref, defineComponent, ref, createElementBlock, markRaw, openBlock, normalizeProps, guardReactiveProps, createElementVNode, mergeDefaults, createBlock, withCtx, createCommentVNode, mergeProps, renderSlot, watch, normalizeStyle, normalizeClass, Fragment, Transition, resolveDynamicComponent, toDisplayString, Teleport, renderList, computed, toRefs, h, Suspense, nextTick, provide, useSSRContext, createVNode, KeepAlive, onServerPrefetch, onErrorCaptured, createApp } from 'file://F:/sitesVue/uaproject/node_modules/vue/index.mjs';
import { createHooks } from 'file://F:/sitesVue/uaproject/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file://F:/sitesVue/uaproject/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode, appendHeader } from 'file://F:/sitesVue/uaproject/node_modules/h3/dist/index.mjs';
import { START_LOCATION, createMemoryHistory, createRouter as createRouter$1, useRoute as useRoute$1, RouterView } from 'file://F:/sitesVue/uaproject/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter } from 'file://F:/sitesVue/uaproject/node_modules/radix3/dist/index.mjs';
import { defu, defuFn } from 'file://F:/sitesVue/uaproject/node_modules/defu/dist/defu.mjs';
import { hasProtocol, joinURL, withQuery, isScriptProtocol } from 'file://F:/sitesVue/uaproject/node_modules/ufo/dist/index.mjs';
import { _api, addAPIProvider, setCustomIconsLoader, getIcon, loadIcon as loadIcon$1, Icon } from 'file://F:/sitesVue/uaproject/node_modules/@iconify/vue/dist/iconify.mjs';
import { klona } from 'file://F:/sitesVue/uaproject/node_modules/klona/dist/index.mjs';
import axios from 'file://F:/sitesVue/uaproject/node_modules/axios/index.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'file://F:/sitesVue/uaproject/node_modules/vue/server-renderer/index.mjs';
import { getIconCSS } from 'file://F:/sitesVue/uaproject/node_modules/@iconify/utils/lib/css/icon.mjs';
import { u as useHead$1, h as headSymbol } from '../_/renderer.mjs';

const appLayoutTransition = false;
const appPageTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";

function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.16.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide && typeof provide === "object") {
      for (const key in provide) {
        nuxtApp.provide(key, provide[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance || (nuxtAppInstance = getNuxtAppCtx(id).tryUse());
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}

const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value || (error2.value = nuxtError);
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};

const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});

const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}

async function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  {
    useNuxtApp().ssrContext._preloadManifest = true;
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: useRuntimeConfig().nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
  }
}

const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");

const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to || (to = "/");
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL(useRuntimeConfig().app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}

const __nuxt_page_meta$6 = {
  layout: "user"
};

const __nuxt_page_meta$5 = {
  layout: "user"
};

const __nuxt_page_meta$4 = {
  layout: "user"
};

const __nuxt_page_meta$3 = {
  layout: "user"
};

const __nuxt_page_meta$2 = {
  layout: "user"
};

const __nuxt_page_meta$1 = {
  layout: "user"
};

const __nuxt_page_meta = {
  layout: "user"
};

function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "home",
    path: "/home",
    meta: __nuxt_page_meta$6 || {},
    component: () => import('./home.vue.mjs')
  },
  {
    name: "team",
    path: "/team",
    meta: __nuxt_page_meta$5 || {},
    component: () => import('./team.vue.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index.vue.mjs')
  },
  {
    name: "stock",
    path: "/stock",
    meta: __nuxt_page_meta$4 || {},
    component: () => import('./stock.vue.mjs')
  },
  {
    name: "deposit",
    path: "/deposit",
    meta: __nuxt_page_meta$3 || {},
    component: () => import('./deposit.vue.mjs')
  },
  {
    name: "history",
    path: "/history",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./history.vue.mjs')
  },
  {
    name: "myinvest",
    path: "/myinvest",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./myinvest.vue.mjs')
  },
  {
    name: "withdraw",
    path: "/withdraw",
    meta: __nuxt_page_meta || {},
    component: () => import('./withdraw.vue.mjs')
  }
];

const _wrapInTransition = (props, children) => {
  return { default: () => {
    var _a;
    return (_a = children.default) == null ? void 0 : _a.call(children);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}

const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}

const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};

const validate = defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});

const manifest_45route_45rule = defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});

const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};

const plugin = defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    let routerBase = useRuntimeConfig().app.baseURL;
    const history = ((_b = (_a = routerOptions).history) == null ? void 0 : _b.call(_a, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter$1({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    handleHotUpdate(router, routerOptions.routes ? routerOptions.routes : (routes2) => routes2);
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d2;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware || (nuxtApp._middleware = {
      global: [],
      named: {}
    });
    useError();
    if (!((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_d = nuxtApp.ssrContext) == null ? void 0 : _d.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2, _c2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules({ path: to.path }));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await ((_c2 = (_b2 = namedMiddleware)[entry]) == null ? void 0 : _c2.call(_b2).then((r) => r.default || r)) : entry;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});

function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}

const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});

const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function () { return index2; }).then((r) => r["default"] || r.default || r));

const lazyGlobalComponents = [
  ["Icon", LazyIcon]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});

const inlineConfig = {
  "nuxt": {},
  "icon": {
    "provider": "iconify",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons"
    ],
    "fetchTimeout": 1500
  }
};
const __appConfig = /* @__PURE__ */ defuFn(inlineConfig);

function useAppConfig() {
  const nuxtApp = useNuxtApp();
  nuxtApp._appConfig || (nuxtApp._appConfig = klona(__appConfig));
  return nuxtApp._appConfig;
}

const plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8 = defineNuxtPlugin({
  name: "@nuxt/icon",
  setup() {
    var _a, _b;
    const configs = useRuntimeConfig();
    const options = useAppConfig().icon;
    _api.setFetch($fetch.native);
    const resources = [];
    if (options.provider === "server") {
      const baseURL = ((_b = (_a = configs.app) == null ? void 0 : _a.baseURL) == null ? void 0 : _b.replace(/\/$/, "")) ?? "";
      resources.push(baseURL + (options.localApiEndpoint || "/api/_nuxt_icon"));
      if (options.fallbackToApi === true || options.fallbackToApi === "client-only") {
        resources.push(options.iconifyApiEndpoint);
      }
    } else {
      resources.push(options.iconifyApiEndpoint);
    }
    async function customIconLoader(icons, prefix) {
      try {
        const data = await $fetch(resources[0] + "/" + prefix + ".json", {
          query: {
            icons: icons.join(",")
          }
        });
        if (!data || data.prefix !== prefix || !data.icons)
          throw new Error("Invalid data" + JSON.stringify(data));
        return data;
      } catch (e) {
        console.error("Failed to load custom icons", e);
        return null;
      }
    }
    addAPIProvider("", { resources });
    for (const prefix of options.customCollections || []) {
      if (prefix)
        setCustomIconsLoader(customIconLoader, prefix);
    }
  }
  // For type portability
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
});

const axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s = defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: "http://192.168.202.68",
    // Задаем базовый URL
    headers: {
      "Content-Type": "application/json"
    }
  });
  api.interceptors.request.use((config) => {
    console.log("Запрос отправлен:", config);
    return config;
  });
  api.interceptors.response.use(
    (response) => {
      console.log("Ответ получен:", response);
      return response;
    },
    (error) => {
      console.error("Ошибка запроса:", error);
      return Promise.reject(error);
    }
  );
  return {
    provide: {
      api
    }
  };
});

function toArray(value) {
  return Array.isArray(value) ? value : [value];
}

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}

let routes;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  useRuntimeConfig().nitro.routeRules;
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a, _b;
    return (_b = (_a = routerOptions).routes) == null ? void 0 : _b.call(_a, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return true;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? void 0 : _a.length) && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}

const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  plugin_MeUvTuoKUi51yb_kBguab6hdcExVXeTtZtTg9TZZBB8,
  axios_noAkUduv0vf78s7vht2Hls1EDqDfAXigM3_vcuRZv2s,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const CLASS_PREFIX = "Notivue__";
const DEFAULT_DURATION = 6e3;
const NotificationTypeKeys = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  PROMISE: "promise",
  PROMISE_RESOLVE: "promise-resolve",
  PROMISE_REJECT: "promise-reject"
};
const success = {
  title: "",
  message: "",
  duration: DEFAULT_DURATION,
  ariaLive: "polite",
  ariaRole: "status"
};
const error = __spreadProps(__spreadValues({}, success), {
  ariaLive: "assertive",
  ariaRole: "alert"
});
const promise = __spreadProps(__spreadValues({}, success), {
  duration: Infinity
});
const warning = __spreadProps(__spreadValues({}, error), {
  ariaLive: "polite"
});
const info = __spreadValues({}, success);
const DEFAULT_NOTIFICATION_OPTIONS = {
  [NotificationTypeKeys.SUCCESS]: success,
  [NotificationTypeKeys.ERROR]: error,
  [NotificationTypeKeys.WARNING]: warning,
  [NotificationTypeKeys.INFO]: info,
  [NotificationTypeKeys.PROMISE]: promise,
  [NotificationTypeKeys.PROMISE_RESOLVE]: success,
  [NotificationTypeKeys.PROMISE_REJECT]: error
};
const DEFAULT_CONFIG = {
  pauseOnHover: true,
  pauseOnTouch: true,
  pauseOnTabChange: true,
  enqueue: false,
  position: "top-center",
  teleportTo: "body",
  notifications: DEFAULT_NOTIFICATION_OPTIONS,
  limit: Infinity,
  avoidDuplicates: false,
  transition: "transform 0.35s cubic-bezier(0.5, 1, 0.25, 1)",
  animations: {
    enter: CLASS_PREFIX + "enter",
    leave: CLASS_PREFIX + "leave",
    clearAll: CLASS_PREFIX + "clearAll"
  }
};
const push$1 = createPushMock();
function createPush(proxies) {
  let createCount = 0;
  function push2(options, type, id = `${createCount++}`) {
    if (typeof unref(options) === "string") {
      options = { message: options };
    }
    proxies.push(__spreadProps(__spreadValues({}, options), { id, type }));
    return {
      id,
      clear: () => proxies.clear(id),
      destroy: () => proxies.clear(id, { isDestroy: true })
    };
  }
  return {
    success: (options) => push2(options, NotificationTypeKeys.SUCCESS),
    error: (options) => push2(options, NotificationTypeKeys.ERROR),
    warning: (options) => push2(options, NotificationTypeKeys.WARNING),
    info: (options) => push2(options, NotificationTypeKeys.INFO),
    promise: (options) => {
      const { id, clear, destroy } = push2(options, NotificationTypeKeys.PROMISE);
      return {
        resolve: (options2) => push2(options2, NotificationTypeKeys.PROMISE_RESOLVE, id),
        reject: (options2) => push2(options2, NotificationTypeKeys.PROMISE_REJECT, id),
        success: (options2) => push2(options2, NotificationTypeKeys.PROMISE_RESOLVE, id),
        error: (options2) => push2(options2, NotificationTypeKeys.PROMISE_REJECT, id),
        clear,
        destroy
      };
    },
    load(options) {
      return this.promise(options);
    },
    clearAll: () => proxies.clearAll(),
    destroyAll: () => proxies.destroyAll()
  };
}
function createPushMock() {
  const noop = new Proxy({}, { get: () => () => {
  } });
  return createPush(noop);
}
const internalKeys = [
  "timeout",
  "resumedAt",
  "remaining",
  // Maybe in future releases these could be exposed
  "animationAttrs",
  "positionStyles"
];
function getSlotItem(item) {
  return Object.fromEntries(
    Object.entries(item).filter(([key]) => !internalKeys.includes(key))
  );
}
const notivueInjectionKey = Symbol();
function useStore() {
  return inject(notivueInjectionKey);
}
function useNotivueInstance() {
  {
    return {
      isRunning: ref(true),
      startInstance: () => {
      },
      stopInstance: () => {
      }
    };
  }
}
function useNotivue() {
  {
    return __spreadProps(__spreadValues({}, toRefs(reactive(DEFAULT_CONFIG))), {
      update: () => {
      },
      isTopAlign: computed(() => true),
      isStreamPaused: ref(false)
    });
  }
}
const DEFAULT_PROPS$1 = {
  listAriaLabel: "Notifications"
};
const NotivueClientOnly = defineComponent({
  setup(_, { slots, attrs }) {
    const isMounted = ref(false);
    return () => {
      var _a;
      if (isMounted.value) return (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createElementBlock("span", attrs, "");
    };
  }
});
const isMouse = (e) => e.pointerType === "mouse";
function getAriaLabel(item) {
  return `${item.title ? `${item.title}: ` : ""}${item.message}`;
}
const _hoisted_1$a = ["role", "aria-live"];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "AriaLive",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const visuallyHidden = {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      border: "0"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: visuallyHidden,
        role: props.item.ariaRole,
        "aria-live": props.item.ariaLive,
        key: `${_ctx.item.id}_${_ctx.item.type}`,
        "aria-atomic": "true"
      }, toDisplayString(unref(getAriaLabel)(props.item)), 9, _hoisted_1$a);
    };
  }
});
function useMouseEvents() {
  const { timeouts, config } = useStore();
  function pauseHover(e) {
    if (isMouse(e)) timeouts.pause();
  }
  function resumeHover(e) {
    if (isMouse(e)) timeouts.resume();
  }
  return computed(
    () => config.pauseOnHover.value && !timeouts.isStreamFocused.value ? {
      onPointerenter: pauseHover,
      onPointerleave: resumeHover
    } : {}
  );
}
function useTouchEvents() {
  const { timeouts, config } = useStore();
  function pauseTouch(e) {
    if (!isMouse(e)) {
      timeouts.clearDebounceTimeout();
      timeouts.pause();
      timeouts.resumeWithDebounce(2e3);
    }
  }
  return computed(
    () => config.pauseOnTouch.value && !timeouts.isStreamFocused.value ? { onPointerdown: pauseTouch } : {}
  );
}
const boxSizing = { boxSizing: "border-box" };
const baseStyles = {
  list: __spreadProps(__spreadValues({}, boxSizing), {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: "0 auto",
    maxWidth: "var(--nv-root-width, 100%)",
    padding: "0",
    pointerEvents: "none",
    position: "fixed",
    zIndex: "var(--nv-z, 500)"
  }),
  listItem: __spreadProps(__spreadValues({}, boxSizing), {
    display: "flex",
    margin: "0",
    position: "absolute",
    transitionProperty: "transform",
    width: "100%"
  }),
  itemContainer: __spreadProps(__spreadValues({}, boxSizing), {
    maxWidth: "100%",
    padding: `0 0 var(--nv-gap, 0.75rem) 0`,
    pointerEvents: "auto"
  })
};
function useNotivueStyles() {
  const { isTopAlign, position } = useNotivue();
  const offset = computed(() => {
    const isTop = isTopAlign.value;
    const inset = [
      `var(--nv-root-top, ${isTop ? "1.25rem" : "0px"})`,
      "var(--nv-root-right, 1.25rem)",
      `var(--nv-root-bottom, ${isTop ? "0px" : "1.25rem"})`,
      "var(--nv-root-left, 1.25rem)"
    ];
    const clipPath = inset.map((v) => `calc(-1 * ${v})`);
    isTop ? clipPath.splice(2, 1, "0px") : clipPath.splice(0, 1, "0px");
    return { inset: inset.join(" "), clipPath: `inset(${clipPath.join(" ")})` };
  });
  const xAlignment = computed(() => ({
    [isTopAlign.value ? "top" : "bottom"]: "0",
    justifyContent: `var(--nv-root-x-align, ${position.value.endsWith("left") ? "flex-start" : position.value.endsWith("right") ? "flex-end" : "center"})`
  }));
  return computed(() => ({
    list: __spreadValues(__spreadValues({}, baseStyles.list), offset.value),
    listItem: __spreadValues(__spreadValues({}, baseStyles.listItem), xAlignment.value),
    itemContainer: baseStyles.itemContainer
  }));
}
function useResizeListObserver(elements, onSizeChange) {
  watch(
    elements,
    (el) => {
      if (el.length > 0) el.forEach((el2) => void 0);
    },
    { flush: "post" }
  );
}
function useSizes() {
  const { elements, animations } = useStore();
  useResizeListObserver(elements.items.value);
}
function useWindowFocus() {
  const { config, timeouts } = useStore();
}
function useReducedMotion() {
  const { animations } = useStore();
  (void 0).matchMedia("(prefers-reduced-motion: reduce)");
}
const _hoisted_1$9 = ["data-notivue-align", "aria-label"];
const _hoisted_2$9 = ["data-notivue-item", "aria-setsize", "aria-posinset"];
const _hoisted_3$6 = ["aria-label", "tabindex", "data-notivue-container"];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "NotivueImpl",
  props: /* @__PURE__ */ mergeDefaults({
    class: {},
    containersTabIndex: {},
    listAriaLabel: {},
    styles: {}
  }, DEFAULT_PROPS$1),
  setup(__props) {
    const props = __props;
    const { config, items, elements } = useStore();
    const styles = useNotivueStyles();
    const mouseEvents = useMouseEvents();
    const touchEvents = useTouchEvents();
    useReducedMotion();
    useWindowFocus();
    useSizes();
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(Teleport, {
        to: unref(config).teleportTo.value === false ? void 0 : unref(config).teleportTo.value,
        disabled: unref(config).teleportTo.value === false
      }, [
        unref(items).entries.value.length > 0 ? (openBlock(), createElementBlock("ol", mergeProps({ key: 0 }, __spreadValues(__spreadValues(__spreadValues({}, unref(mouseEvents)), unref(touchEvents)), unref(elements).rootAttrs.value), {
          "data-notivue-align": unref(config).position.value.split("-")[0],
          "aria-label": props.listAriaLabel,
          ref: unref(elements).root,
          class: props.class,
          style: __spreadValues(__spreadValues({}, unref(styles).list), (_a = props.styles) == null ? void 0 : _a.list)
        }), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items).entries.value, (item, i) => {
            var _a2, _b, _c, _d;
            return openBlock(), createElementBlock("li", {
              tabindex: "-1",
              key: item.id,
              "data-notivue-item": item.id,
              "aria-setsize": unref(items).length,
              "aria-posinset": i + 1,
              ref_for: true,
              ref: unref(elements).items,
              style: normalizeStyle(__spreadValues(__spreadValues(__spreadValues({}, unref(styles).listItem), item.positionStyles), (_a2 = props.styles) == null ? void 0 : _a2.listItem))
            }, [
              item.ariaLiveOnly ? (openBlock(), createBlock(_sfc_main$g, {
                key: 0,
                item
              }, null, 8, ["item"])) : (openBlock(), createElementBlock("div", mergeProps({
                key: 1,
                ref_for: true
              }, item.animationAttrs, {
                "aria-label": unref(getAriaLabel)(item),
                tabindex: (_c = (_b = _ctx.containersTabIndex) == null ? void 0 : _b[item.id]) != null ? _c : -1,
                "data-notivue-container": item.id,
                ref_for: true,
                ref: unref(elements).containers,
                style: __spreadValues(__spreadValues({}, unref(styles).itemContainer), (_d = props.styles) == null ? void 0 : _d.itemContainer)
              }), [
                renderSlot(_ctx.$slots, "default", mergeProps({ ref_for: true }, unref(getSlotItem)(item)))
              ], 16, _hoisted_3$6))
            ], 12, _hoisted_2$9);
          }), 128))
        ], 16, _hoisted_1$9)) : createCommentVNode("", true)
      ], 8, ["to", "disabled"]);
    };
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Notivue",
  props: /* @__PURE__ */ mergeDefaults({
    class: {},
    containersTabIndex: {},
    listAriaLabel: {},
    styles: {}
  }, DEFAULT_PROPS$1),
  setup(__props) {
    const props = __props;
    const { isRunning } = useNotivueInstance();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NotivueClientOnly), null, {
        default: withCtx(() => [
          unref(isRunning) ? (openBlock(), createBlock(_sfc_main$f, normalizeProps(mergeProps({ key: 0 }, props)), {
            default: withCtx((item) => [
              renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(item)))
            ]),
            _: 3
          }, 16)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$8 = /* @__PURE__ */ createElementVNode("path", { d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm3.123,3.989l-3.877,4.616c-0.086,0.102 -0.213,0.162 -0.346,0.164l-0.008,0c-0.131,0 -0.256,-0.055 -0.343,-0.153l-1.662,-1.846c-0.081,-0.085 -0.126,-0.199 -0.126,-0.316c0,-0.254 0.209,-0.462 0.462,-0.462c0.135,0 0.263,0.059 0.35,0.161l1.307,1.451l3.536,-4.209c0.087,-0.101 0.215,-0.159 0.349,-0.159c0.253,-0 0.461,0.208 0.461,0.461c0,0.107 -0.036,0.21 -0.103,0.292Z" }, null, -1);
const _hoisted_2$8 = [
  _hoisted_1$8
];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SuccessIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$8, 16);
    };
  }
});
const _hoisted_1$7 = /* @__PURE__ */ createElementVNode("path", { d: "M6,-0c-3.308,-0 -6,2.692 -6,6c-0,3.308 2.692,6 6,6c3.308,-0 6,-2.692 6,-6c-0,-3.308 -2.692,-6 -6,-6Zm-0,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Zm0.627,-5.802l-0.166,3.519c-0,0.253 -0.208,0.462 -0.462,0.462c-0.253,-0 -0.461,-0.209 -0.461,-0.462l-0.166,-3.518l0,-0.001c-0,-0.009 -0,-0.018 -0,-0.027c-0,-0.344 0.283,-0.627 0.627,-0.627c0.344,0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.018 -0.001,0.027l0.002,-0Z" }, null, -1);
const _hoisted_2$7 = [
  _hoisted_1$7
];
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ErrorIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$7, 16);
    };
  }
});
const _hoisted_1$6 = /* @__PURE__ */ createElementVNode("path", { d: "M6,0c-3.308,0 -6,2.692 -6,6c0,3.308 2.692,6 6,6c3.308,0 6,-2.692 6,-6c0,-3.308 -2.692,-6 -6,-6Zm0,2.46c0.428,0 0.78,0.352 0.78,0.78c-0,0.428 -0.352,0.78 -0.78,0.78c-0.428,0 -0.78,-0.352 -0.78,-0.78c0,-0.428 0.352,-0.78 0.78,-0.78Zm1.44,6.78l-2.64,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.84,0l0,-2.64l-0.48,0c-0.263,0 -0.48,-0.217 -0.48,-0.48c0,-0.263 0.217,-0.48 0.48,-0.48l0.96,0c0.263,0 0.48,0.217 0.48,0.48l0,3.12l0.84,0c0.263,0 0.48,0.217 0.48,0.48c0,0.263 -0.217,0.48 -0.48,0.48Z" }, null, -1);
const _hoisted_2$6 = [
  _hoisted_1$6
];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "InfoIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_2$6, 16);
    };
  }
});
const _hoisted_1$5 = /* @__PURE__ */ createElementVNode("path", { d: "M11.963,6.037c-0,3.292 -2.671,5.963 -5.963,5.963c-3.292,0 -5.963,-2.671 -5.963,-5.963c0,-3.292 2.671,-5.962 5.963,-5.962c3.292,-0 5.963,2.67 5.963,5.962Zm-0.918,0c0,-2.785 -2.26,-5.045 -5.045,-5.045c-2.785,0 -5.045,2.26 -5.045,5.045c-0,2.786 2.26,5.046 5.045,5.046c2.785,-0 5.045,-2.26 5.045,-5.046Z" }, null, -1);
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M8.401,3.449c0.163,-0.194 0.452,-0.219 0.646,-0.056c0.194,0.163 0.219,0.452 0.056,0.646l-3.853,4.587c-0.085,0.101 -0.21,0.161 -0.343,0.163c-0.133,0.003 -0.26,-0.053 -0.349,-0.151l-1.651,-1.835c-0.169,-0.188 -0.154,-0.479 0.034,-0.648c0.188,-0.169 0.479,-0.154 0.648,0.034l1.298,1.443l3.514,-4.183Z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_1$5,
  _hoisted_2$5
];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SuccessOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_3$5, 16);
    };
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createElementVNode("path", { d: "M12, 6c0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.688 -6,-6c0,-3.313 2.688,-6 6,-6c3.313,-0 6,2.687 6,6Zm-0.923,-0c-0,-2.803 -2.274,-5.077 -5.077,-5.077c-2.803,0 -5.077,2.274 -5.077,5.077c0,2.803 2.274,5.077 5.077,5.077c2.803,-0 5.077,-2.274 5.077,-5.077Z" }, null, -1);
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "M5.373,3.426c-0,-0.009 -0,-0.019 -0,-0.028c-0,-0.342 0.279,-0.624 0.621,-0.627c0.002,-0 0.004,-0 0.006,-0c0.344,-0 0.627,0.283 0.627,0.627c-0,0.009 -0,0.019 -0.001,0.028l0,0.001l-0.165,3.518c-0.012,0.246 -0.215,0.44 -0.461,0.44c-0.246,-0 -0.449,-0.194 -0.461,-0.44l-0.166,-3.518l0,-0.001Z" }, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", { d: "M6,9.228c-0.316,0 -0.577,-0.26 -0.577,-0.577c0,-0.316 0.261,-0.577 0.577,-0.577c0.316,0 0.577,0.261 0.577,0.577c-0,0.317 -0.261,0.577 -0.577,0.577Z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_1$4,
  _hoisted_2$4,
  _hoisted_3$4
];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ErrorOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_4$2, 16);
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6, 0c3.313, 0 6, 2.687 6, 6c-0, 3.313 -2.687, 6 -6, 6c-3.313,-0 -6,-2.687 -6,-6c0,-3.313 2.687,-6 6,-6Zm0, 0.96c-2.783, 0 -5.04, 2.257 -5.04, 5.04c0, 2.783 2.257, 5.04 5.04, 5.04c2.783, 0 5.04,-2.257 5.04,-5.04c-0,-2.783 -2.257,-5.04 -5.04,-5.04Z" }, null, -1);
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6.6, 8.28l0.84, 0c0.265, 0 0.48, 0.215 0.48, 0.48c-0, 0.265 -0.215, 0.48 -0.48, 0.48l-2.64,-0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.84, 0l-0,-2.64l-0.48, 0c-0.265, 0 -0.48,-0.215 -0.48,-0.48c-0,-0.265 0.215,-0.48 0.48,-0.48l0.96, 0c0.265, 0 0.48, 0.215 0.48, 0.48l-0, 3.12Z" }, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", { d: "M6, 2.46c-0.428, 0 -0.78, 0.352 -0.78, 0.78c-0, 0.428 0.352, 0.78 0.78, 0.78c0.428, 0 0.78,-0.352 0.78,-0.78c-0,-0.428 -0.352,-0.78 -0.78,-0.78Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_1$3,
  _hoisted_2$3,
  _hoisted_3$3
];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InfoOutlineIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(ionProps))), _hoisted_4$1, 16);
    };
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
  opacity: ".25"
}, null, -1);
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
  class: "Notivue__spinner"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_1$2,
  _hoisted_2$2
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PromiseIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(__spreadProps(__spreadValues({}, unref(svgProps)), { width: 28, height: 28, fill: "currentColor" }))), _hoisted_3$2, 16);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1);
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_1$1,
  _hoisted_2$1
];
const _sfc_main$2$1 = /* @__PURE__ */ defineComponent({
  __name: "CloseIcon",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", normalizeProps(guardReactiveProps(unref(featherProps))), _hoisted_3$1, 16);
    };
  }
});
const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
};
const ionProps = __spreadProps(__spreadValues({}, svgProps), {
  fill: "currentColor",
  viewBox: "0 0 12 12"
});
const featherProps = __spreadProps(__spreadValues({}, svgProps), {
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
});
const filledIcons = {
  [NotificationTypeKeys.SUCCESS]: markRaw(_sfc_main$9),
  [NotificationTypeKeys.ERROR]: markRaw(_sfc_main$8),
  [NotificationTypeKeys.INFO]: markRaw(_sfc_main$7),
  [NotificationTypeKeys.WARNING]: markRaw(_sfc_main$8),
  [NotificationTypeKeys.PROMISE]: markRaw(_sfc_main$3),
  [NotificationTypeKeys.PROMISE_RESOLVE]: markRaw(_sfc_main$9),
  [NotificationTypeKeys.PROMISE_REJECT]: markRaw(_sfc_main$8),
  close: markRaw(_sfc_main$2$1)
};
({
  [NotificationTypeKeys.SUCCESS]: markRaw(_sfc_main$6),
  [NotificationTypeKeys.ERROR]: markRaw(_sfc_main$5),
  [NotificationTypeKeys.INFO]: markRaw(_sfc_main$4),
  [NotificationTypeKeys.WARNING]: markRaw(_sfc_main$5),
  [NotificationTypeKeys.PROMISE]: markRaw(_sfc_main$3),
  [NotificationTypeKeys.PROMISE_RESOLVE]: markRaw(_sfc_main$6),
  [NotificationTypeKeys.PROMISE_REJECT]: markRaw(_sfc_main$5),
  close: markRaw(_sfc_main$2$1)
});
const layout = {
  "--nv-width": "350px",
  "--nv-spacing": "0.625rem",
  "--nv-radius": "0.625rem",
  "--nv-icon-size": "1.25rem",
  "--nv-title-size": "0.925rem",
  "--nv-message-size": "0.925rem",
  "--nv-y-align": "center"
};
const shadow = {
  "--nv-shadow": "rgba(0, 0, 0, 0.06) 0px 4px 6px -1px, rgba(0, 0, 0, 0.03) 0px 2px 4px -1px"
};
const lightTheme = __spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-global-bg": "#FFF",
  "--nv-global-fg": "#171717",
  "--nv-success-accent": "#28B780",
  "--nv-error-accent": "#E74C3C",
  "--nv-warning-accent": "#F59E0B",
  "--nv-info-accent": "#3E8EFF",
  "--nv-promise-accent": "#171717"
});
__spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-success-bg": "#E9FAEF",
  "--nv-success-accent": "#059669",
  "--nv-success-fg": "#057452",
  "--nv-error-bg": "#FEEFEF",
  "--nv-error-accent": "#E6523C",
  "--nv-error-fg": "#C5412C",
  "--nv-warning-bg": "#FFF0D8",
  "--nv-warning-accent": "#F48533",
  "--nv-warning-fg": "#81471D",
  "--nv-info-bg": "#DEF0FA",
  "--nv-info-accent": "#1F70AC",
  "--nv-info-fg": "#1F70AC",
  "--nv-promise-bg": "#FFF",
  "--nv-promise-accent": "#334155",
  "--nv-promise-fg": "#334155"
});
__spreadProps(__spreadValues(__spreadValues({}, layout), shadow), {
  "--nv-global-accent": "#FFF",
  "--nv-global-fg": "#FFF",
  "--nv-success-bg": "#178570",
  "--nv-error-bg": "#C94430",
  "--nv-info-bg": "#117AAE",
  "--nv-warning-bg": "#FFE556",
  "--nv-warning-fg": "#4F5358",
  "--nv-warning-accent": "#4F5358",
  "--nv-promise-bg": "#FFF",
  "--nv-promise-fg": "#334155",
  "--nv-promise-accent": "#64748B"
});
__spreadProps(__spreadValues({}, layout), {
  "--nv-border-width": "1px",
  "--nv-global-bg": "#1F1F1F",
  "--nv-global-border": "#414141",
  "--nv-global-fg": "#D0D0D0",
  "--nv-success-accent": "#8EF997",
  "--nv-error-accent": "#FF7777",
  "--nv-warning-accent": "#FFE554",
  "--nv-info-accent": "#5FD4FF",
  "--nv-promise-accent": "#D0D0D0"
});
__spreadProps(__spreadValues({}, layout), {
  "--nv-border-width": "1px",
  "--nv-global-bg": "#20252E",
  "--nv-global-border": "#353b45",
  "--nv-global-fg": "#dfdfdf",
  "--nv-success-accent": "#34D399",
  "--nv-error-accent": "#FF7777",
  "--nv-warning-accent": "#FFE554",
  "--nv-info-accent": "#5FD4FF",
  "--nv-promise-accent": "#D0D0D0"
});
const Classes = {
  NOTIFICATION: CLASS_PREFIX + "notification",
  ICON: CLASS_PREFIX + "icon",
  CONTENT: CLASS_PREFIX + "content",
  TITLE: CLASS_PREFIX + "content-title",
  MESSAGE: CLASS_PREFIX + "content-message",
  CLOSE: CLASS_PREFIX + "close",
  CLOSE_ICON: CLASS_PREFIX + "close-icon",
  TRANSITION: CLASS_PREFIX + "transition",
  PROGRESS: CLASS_PREFIX + "progress",
  DUPLICATE: CLASS_PREFIX + "duplicate"
};
const DEFAULT_NOTIFICATIONS_PROPS = {
  icons: () => filledIcons,
  theme: () => lightTheme,
  hideClose: false,
  closeAriaLabel: "Close"
};
const _hoisted_1 = ["data-notivue", "data-notivue-has-title"];
const _hoisted_2 = ["aria-live", "role"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["aria-label"];
const _hoisted_6 = ["textContent"];
const _sfc_main$1$1 = /* @__PURE__ */ defineComponent({
  __name: "Notification",
  props: /* @__PURE__ */ mergeDefaults({
    item: {},
    icons: {},
    theme: {},
    closeAriaLabel: {},
    hideClose: { type: Boolean }
  }, DEFAULT_NOTIFICATIONS_PROPS),
  setup(__props) {
    const props = __props;
    const Icon = shallowRef(props.icons[props.item.type]);
    const Close = props.icons.close;
    watch(
      () => props.item.type,
      (t) => Icon.value = props.icons[t],
      { flush: "sync" }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(Classes).NOTIFICATION, { [unref(Classes).DUPLICATE]: _ctx.item.duplicateCount > 0 }]),
        key: _ctx.item.duplicateCount,
        "data-notivue": _ctx.item.type,
        "data-notivue-has-title": Boolean(_ctx.item.title),
        style: normalizeStyle(_ctx.theme)
      }, [
        Icon.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          typeof Icon.value === "object" ? (openBlock(), createBlock(Transition, {
            key: 0,
            name: unref(Classes).TRANSITION,
            mode: "out-in"
          }, {
            default: withCtx(() => [
              typeof Icon.value === "object" ? (openBlock(), createBlock(resolveDynamicComponent(Icon.value), {
                key: 0,
                class: normalizeClass(unref(Classes).ICON),
                "aria-hidden": "true"
              }, null, 8, ["class"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["name"])) : typeof Icon.value === "string" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(Classes).ICON),
            "aria-hidden": "true"
          }, toDisplayString(Icon.value), 3)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        createElementVNode("div", {
          class: normalizeClass(unref(Classes).CONTENT),
          "aria-live": _ctx.item.ariaLive,
          role: _ctx.item.ariaRole,
          "aria-atomic": "true"
        }, [
          _ctx.item.title ? (openBlock(), createElementBlock("h3", {
            key: 0,
            class: normalizeClass(unref(Classes).TITLE),
            textContent: toDisplayString(unref(_ctx.item.title))
          }, null, 10, _hoisted_3)) : createCommentVNode("", true),
          createElementVNode("p", {
            class: normalizeClass(unref(Classes).MESSAGE),
            textContent: toDisplayString(unref(_ctx.item.message))
          }, null, 10, _hoisted_4)
        ], 10, _hoisted_2),
        !props.hideClose && unref(Close) && _ctx.item.type !== "promise" ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: normalizeClass(unref(Classes).CLOSE),
          "aria-label": _ctx.closeAriaLabel,
          type: "button",
          tabindex: "-1",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => _ctx.item.clear && _ctx.item.clear(...args))
        }, [
          typeof unref(Close) === "object" ? (openBlock(), createBlock(resolveDynamicComponent(unref(Close)), {
            key: 0,
            class: normalizeClass(unref(Classes).CLOSE_ICON)
          }, null, 8, ["class"])) : typeof unref(Close) === "string" ? (openBlock(), createElementBlock("div", {
            key: 1,
            "aria-hidden": "true",
            textContent: toDisplayString(unref(Close))
          }, null, 8, _hoisted_6)) : createCommentVNode("", true)
        ], 10, _hoisted_5)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_1);
    };
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NotificationProgress",
  props: {
    item: {}
  },
  setup(__props) {
    const { isStreamPaused } = useNotivue();
    return (_ctx, _cache) => {
      return Number.isFinite(_ctx.item.duration) ? (openBlock(), createElementBlock("div", {
        key: _ctx.item.duplicateCount,
        class: normalizeClass(unref(Classes).PROGRESS),
        style: normalizeStyle({
          animationPlayState: unref(isStreamPaused) ? "paused" : "running",
          "--nv-anim-dur": `${_ctx.item.duration}ms`
        })
      }, null, 6)) : createCommentVNode("", true);
    };
  }
});

const layouts = {
  default: defineAsyncComponent(() => import('./default.vue.mjs').then((m) => m.default || m)),
  user: defineAsyncComponent(() => import('./user.vue.mjs').then((m) => m.default || m))
};

const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_3 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});

const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();

const __nuxt_component_4 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          {
            vnode = h(Suspense, {
              suspensible: true
            }, {
              default: () => {
                const providerVNode = h(RouteProvider, {
                  key: key || void 0,
                  vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || void 0,
                  vnodeRef: pageRef
                });
                return providerVNode;
              }
            });
            return vnode;
          }
        }
      });
    };
  }
});
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Notivue = _sfc_main$e;
  const _component_Notification = _sfc_main$1$1;
  const _component_NotificationProgress = _sfc_main$a;
  const _component_NuxtLayout = __nuxt_component_3;
  const _component_NuxtPage = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c9db6086>`);
  _push(ssrRenderComponent(_component_Notivue, null, {
    default: withCtx((item, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Notification, { item }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_NotificationProgress, { item }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Notification, { item }, {
            default: withCtx(() => [
              createVNode(_component_NotificationProgress, { item }, null, 8, ["item"])
            ]),
            _: 2
          }, 1032, ["item"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(``);
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock(KeepAlive, null, [
            createVNode(_component_NuxtPage)
          ], 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://t.me/your_telegram_username" target="_blank" class="fixed bottom-6 right-6 z-50 group" aria-label="Техподдержка в Telegram" data-v-c9db6086><div class="relative" data-v-c9db6086><div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-active:scale-95" data-v-c9db6086><svg class="w-10 h-10 text-white transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" data-v-c9db6086><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" data-v-c9db6086></path><path d="M8 13L15.5 18L18.5 7L5 11.5L8 13ZM8 13L11 16L15.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-c9db6086></path></svg></div><div class="absolute right-16 bottom-1/2 translate-y-1/2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-white px-3 py-1 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" data-v-c9db6086> Написать в поддержку <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white dark:bg-gray-800 rotate-45" data-v-c9db6086></div></div><div class="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping -z-10 transition-opacity duration-300" data-v-c9db6086></div></div></a></div>`);
}
const _sfc_setup$1 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9db6086"]]);

async function loadIcon(name, timeout) {
  if (!name)
    return null;
  const _icon = getIcon(name);
  if (_icon)
    return _icon;
  let timeoutWarn;
  const load = loadIcon$1(name).catch(() => {
    console.warn(`[Icon] failed to load icon \`${name}\``);
    return null;
  });
  if (timeout > 0)
    await Promise.race([
      load,
      new Promise((resolve) => {
        timeoutWarn = setTimeout(() => {
          console.warn(`[Icon] loading icon \`${name}\` timed out after ${timeout}ms`);
          resolve();
        }, timeout);
      })
    ]).finally(() => clearTimeout(timeoutWarn));
  else
    await load;
  return getIcon(name);
}
function useResolvedName(getName) {
  const options = useAppConfig().icon;
  const collections = (options.collections || []).sort((a, b) => b.length - a.length);
  return computed(() => {
    var _a;
    const name = getName();
    const bare = name.startsWith(options.cssSelectorPrefix) ? name.slice(options.cssSelectorPrefix.length) : name;
    const resolved = ((_a = options.aliases) == null ? void 0 : _a[bare]) || bare;
    if (!resolved.includes(":")) {
      const collection = collections.find((c) => resolved.startsWith(c + "-"));
      return collection ? collection + ":" + resolved.slice(collection.length + 1) : resolved;
    }
    return resolved;
  });
}

function injectHead(nuxtApp) {
  var _a;
  const nuxt = nuxtApp || tryUseNuxtApp();
  return ((_a = nuxt == null ? void 0 : nuxt.ssrContext) == null ? void 0 : _a.head) || (nuxt == null ? void 0 : nuxt.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  }));
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}

const SYMBOL_SERVER_CSS = "NUXT_ICONS_SERVER_CSS";
function escapeCssSelector(selector) {
  return selector.replace(/([^\w-])/g, "\\$1");
}
const NuxtIconCss = /* @__PURE__ */ defineComponent({
  name: "NuxtIconCss",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props) {
    const nuxt = useNuxtApp();
    const options = useAppConfig().icon;
    const cssClass = computed(() => props.name ? options.cssSelectorPrefix + props.name : "");
    const selector = computed(() => "." + escapeCssSelector(cssClass.value));
    function getCSS(icon, withLayer = true) {
      let iconSelector = selector.value;
      if (options.cssWherePseudo) {
        iconSelector = `:where(${iconSelector})`;
      }
      const css = getIconCSS(icon, {
        iconSelector,
        format: "compressed",
        customise: props.customize ?? options.customize
      });
      if (options.cssLayer && withLayer) {
        return `@layer ${options.cssLayer} { ${css} }`;
      }
      return css;
    }
    onServerPrefetch(async () => {
      var _a;
      {
        const configs = useRuntimeConfig().icon || {};
        if (!((_a = configs == null ? void 0 : configs.serverKnownCssClasses) == null ? void 0 : _a.includes(cssClass.value))) {
          const icon = await loadIcon(props.name, options.fetchTimeout).catch(() => null);
          if (!icon)
            return null;
          let ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS];
          if (!ssrCSS) {
            ssrCSS = nuxt.vueApp._context.provides[SYMBOL_SERVER_CSS] = /* @__PURE__ */ new Map();
            nuxt.runWithContext(() => {
              useHead({
                style: [
                  () => {
                    const sep = "";
                    let css = Array.from(ssrCSS.values()).sort().join(sep);
                    if (options.cssLayer) {
                      css = `@layer ${options.cssLayer} {${sep}${css}${sep}}`;
                    }
                    return { innerHTML: css };
                  }
                ]
              }, {
                tagPriority: "low"
              });
            });
          }
          if (props.name && !ssrCSS.has(props.name)) {
            const css = getCSS(icon, false);
            ssrCSS.set(props.name, css);
          }
          return null;
        }
      }
    });
    return () => h("span", { class: ["iconify", cssClass.value] });
  }
});

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a, _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = !((_a = nuxtApp.ssrContext) == null ? void 0 : _a._sharedPrerenderCache) ? _handler : () => {
    const value = nuxtApp.ssrContext._sharedPrerenderCache.get(key);
    if (value) {
      return value;
    }
    const promise = Promise.resolve().then(() => nuxtApp.runWithContext(_handler));
    nuxtApp.ssrContext._sharedPrerenderCache.set(key, promise);
    return promise;
  };
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server ?? (options.server = true);
  options.default ?? (options.default = getDefault);
  options.getCachedData ?? (options.getCachedData = getDefaultCachedData);
  options.lazy ?? (options.lazy = false);
  options.immediate ?? (options.immediate = true);
  options.deep ?? (options.deep = asyncDataDefaults.deep);
  options.dedupe ?? (options.dedupe = "cancel");
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_b = nuxtApp.payload._errors)[key] ?? (_b[key] = asyncDataDefaults.errorValue);
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer(opts.dedupe ?? options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const NuxtIconSvg = /* @__PURE__ */ defineComponent({
  name: "NuxtIconSvg",
  props: {
    name: {
      type: String,
      required: true
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    useNuxtApp();
    const options = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const storeKey = "i-" + name.value;
    if (name.value) {
      {
        useAsyncData(
          storeKey,
          () => loadIcon(name.value, options.fetchTimeout),
          { deep: false }
        );
      }
    }
    return () => h(Icon, {
      icon: name.value,
      ssr: true,
      // Iconify uses `customise`, where we expose `customize` for consistency
      customise: props.customize ?? options.customize
    }, slots);
  }
});

const __nuxt_component_0 = defineComponent({
  name: "NuxtIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots }) {
    const nuxtApp = useNuxtApp();
    const runtimeOptions = useAppConfig().icon;
    const name = useResolvedName(() => props.name);
    const component = computed(
      () => {
        var _a;
        return ((_a = nuxtApp.vueApp) == null ? void 0 : _a.component(name.value)) || ((props.mode || runtimeOptions.mode) === "svg" ? NuxtIconSvg : NuxtIconCss);
      }
    );
    const style = computed(() => {
      const size = props.size || runtimeOptions.size;
      return size ? { fontSize: Number.isNaN(+size) ? size : size + "px" } : null;
    });
    const customize = props.customize || runtimeOptions.customize;
    return () => h(
      component.value,
      {
        ...runtimeOptions.attrs,
        name: name.value,
        class: runtimeOptions.class,
        style: style.value,
        customize
      },
      slots
    );
  }
});

const index2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center" }, _attrs))}><div class="container mx-auto px-4 py-16"><div class="max-w-3xl mx-auto text-center"><div class="text-9xl font-bold text-blue-600 mb-8 animate-bounce"> 4<span class="text-green-600">0</span>4 </div><div class="space-y-6 mb-12"><h1 class="text-5xl font-bold text-gray-800"> Ой! Сторінку не знайдено </h1><p class="text-xl text-gray-600 max-w-xl mx-auto"> Схоже, ви заблукали у цифровому просторі. Давайте повернемося на безпечну орбіту! </p></div><button class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-blue-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons:rocket-launch",
        class: "w-6 h-6 mr-3 animate-pulse"
      }, null, _parent));
      _push(`<span class="text-lg font-semibold">Повернутись на головну</span></button><div class="mt-16 max-w-md mx-auto opacity-75 hover:opacity-100 transition-opacity"><svg viewBox="0 0 500 200" class="w-full h-auto"><path fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 8" class="text-blue-200" d="M20,100 Q250,50 480,100"></path><g transform="translate(480 100)" class="animate-float"><circle cx="0" cy="0" r="8" fill="#3B82F6"></circle><path d="M0,-12 L5,0 L0,3 L-5,0 Z" fill="#10B981" transform="rotate(30)"></path></g></svg></div></div></div></div>`);
    };
  }
});

const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    var _a;
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      (_a = nuxt.payload).error || (_a.error = createError(error));
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: entry$1
});

export { _export_sfc as _, __nuxt_component_0 as a, useRoute as b, useRouter as c, useRuntimeConfig as d, nuxtLinkDefaults as e, navigateTo as n, push$1 as p, resolveRouteObject as r, server as s, useNuxtApp as u };
//# sourceMappingURL=server.mjs.map
