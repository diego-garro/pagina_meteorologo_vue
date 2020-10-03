import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/imagenes-satelite',
    name: 'Imágenes de Satélite',
    component: () => import(/* webpackChunkName: "imagenes"*/'../views/ImagenesSatelite.vue')
  },
  {
    path: '/datos-seguimiento',
    name: 'Datos de Seguimiento',
    component: () => import(/* webpackChunkName: "datos"*/'../views/DatosSeguimiento.vue')
  },
  {
    path: '/huracanes-cnh',
    name: 'Huracanes y Ondas',
    component: () => import(/* webpackChunkName: "huracanes"*/'../views/HuracanesOndas.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
