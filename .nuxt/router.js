import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f2d0dcd = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _08621acb = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _2caab8cc = () => interopDefault(import('..\\pages\\reserve\\index.vue' /* webpackChunkName: "pages/reserve/index" */))
const _4de59434 = () => interopDefault(import('..\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _0b4a4926 = () => interopDefault(import('..\\pages\\admin\\place\\index.vue' /* webpackChunkName: "pages/admin/place/index" */))
const _26a4626f = () => interopDefault(import('..\\pages\\admin\\placeGroup\\index.vue' /* webpackChunkName: "pages/admin/placeGroup/index" */))
const _48784591 = () => interopDefault(import('..\\pages\\admin\\reserve\\index.vue' /* webpackChunkName: "pages/admin/reserve/index" */))
const _eef3ac8a = () => interopDefault(import('..\\pages\\admin\\zone\\index.vue' /* webpackChunkName: "pages/admin/zone/index" */))
const _d2fd85ec = () => interopDefault(import('..\\pages\\admin\\news\\create.vue' /* webpackChunkName: "pages/admin/news/create" */))
const _f499b350 = () => interopDefault(import('..\\pages\\admin\\place\\create.vue' /* webpackChunkName: "pages/admin/place/create" */))
const _54c793a2 = () => interopDefault(import('..\\pages\\admin\\placeGroup\\create.vue' /* webpackChunkName: "pages/admin/placeGroup/create" */))
const _23769166 = () => interopDefault(import('..\\pages\\admin\\reserve\\create.vue' /* webpackChunkName: "pages/admin/reserve/create" */))
const _a0194f3a = () => interopDefault(import('..\\pages\\admin\\zone\\create.vue' /* webpackChunkName: "pages/admin/zone/create" */))
const _ffe98d34 = () => interopDefault(import('..\\pages\\admin\\news\\_id\\index.vue' /* webpackChunkName: "pages/admin/news/_id/index" */))
const _466bcbb4 = () => interopDefault(import('..\\pages\\admin\\place\\_id\\index.vue' /* webpackChunkName: "pages/admin/place/_id/index" */))
const _590b180b = () => interopDefault(import('..\\pages\\admin\\placeGroup\\_id\\index.vue' /* webpackChunkName: "pages/admin/placeGroup/_id/index" */))
const _0d9c4bae = () => interopDefault(import('..\\pages\\admin\\reserve\\_id\\index.vue' /* webpackChunkName: "pages/admin/reserve/_id/index" */))
const _11de003f = () => interopDefault(import('..\\pages\\admin\\zone\\_id\\index.vue' /* webpackChunkName: "pages/admin/zone/_id/index" */))
const _0e879db0 = () => interopDefault(import('..\\pages\\coffee\\_id\\index.vue' /* webpackChunkName: "pages/coffee/_id/index" */))
const _e997768c = () => interopDefault(import('..\\pages\\food\\_id\\index.vue' /* webpackChunkName: "pages/food/_id/index" */))
const _3e44b3b8 = () => interopDefault(import('..\\pages\\hotel\\_id\\index.vue' /* webpackChunkName: "pages/hotel/_id/index" */))
const _8dc8c740 = () => interopDefault(import('..\\pages\\map\\_id\\index.vue' /* webpackChunkName: "pages/map/_id/index" */))
const _c3c38da2 = () => interopDefault(import('..\\pages\\news\\_id\\index.vue' /* webpackChunkName: "pages/news/_id/index" */))
const _2a8e75ea = () => interopDefault(import('..\\pages\\place\\_id\\index.vue' /* webpackChunkName: "pages/place/_id/index" */))
const _d2eb1714 = () => interopDefault(import('..\\pages\\travel\\_id\\index.vue' /* webpackChunkName: "pages/travel/_id/index" */))
const _33469c04 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _4f2d0dcd,
    name: "login"
  }, {
    path: "/news",
    component: _08621acb,
    name: "news"
  }, {
    path: "/reserve",
    component: _2caab8cc,
    name: "reserve"
  }, {
    path: "/admin/news",
    component: _4de59434,
    name: "admin-news"
  }, {
    path: "/admin/place",
    component: _0b4a4926,
    name: "admin-place"
  }, {
    path: "/admin/placeGroup",
    component: _26a4626f,
    name: "admin-placeGroup"
  }, {
    path: "/admin/reserve",
    component: _48784591,
    name: "admin-reserve"
  }, {
    path: "/admin/zone",
    component: _eef3ac8a,
    name: "admin-zone"
  }, {
    path: "/admin/news/create",
    component: _d2fd85ec,
    name: "admin-news-create"
  }, {
    path: "/admin/place/create",
    component: _f499b350,
    name: "admin-place-create"
  }, {
    path: "/admin/placeGroup/create",
    component: _54c793a2,
    name: "admin-placeGroup-create"
  }, {
    path: "/admin/reserve/create",
    component: _23769166,
    name: "admin-reserve-create"
  }, {
    path: "/admin/zone/create",
    component: _a0194f3a,
    name: "admin-zone-create"
  }, {
    path: "/admin/news/:id",
    component: _ffe98d34,
    name: "admin-news-id"
  }, {
    path: "/admin/place/:id",
    component: _466bcbb4,
    name: "admin-place-id"
  }, {
    path: "/admin/placeGroup/:id",
    component: _590b180b,
    name: "admin-placeGroup-id"
  }, {
    path: "/admin/reserve/:id",
    component: _0d9c4bae,
    name: "admin-reserve-id"
  }, {
    path: "/admin/zone/:id",
    component: _11de003f,
    name: "admin-zone-id"
  }, {
    path: "/coffee/:id",
    component: _0e879db0,
    name: "coffee-id"
  }, {
    path: "/food/:id",
    component: _e997768c,
    name: "food-id"
  }, {
    path: "/hotel/:id",
    component: _3e44b3b8,
    name: "hotel-id"
  }, {
    path: "/map/:id",
    component: _8dc8c740,
    name: "map-id"
  }, {
    path: "/news/:id",
    component: _c3c38da2,
    name: "news-id"
  }, {
    path: "/place/:id",
    component: _2a8e75ea,
    name: "place-id"
  }, {
    path: "/travel/:id",
    component: _d2eb1714,
    name: "travel-id"
  }, {
    path: "/",
    component: _33469c04,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
