import { createRouter, createWebHashHistory } from 'vue-router'
import ProductosView from '../views/ProductosView.vue'

const routes = [
  {
    path: '/',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/ventas',
    name: 'Ventas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VentasView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
