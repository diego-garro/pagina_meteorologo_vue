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
  },
  {
    path: '/oscilaciones',
    name: 'Oscilaciones',
    component: () => import(/* webpackChunkName: "oscilaciones"*/'../views/Oscilaciones.vue')
  },
  {
    path: '/modelos-regionales',
    name: 'Modelos Regionales',
    component: () => import(/* webpackChunkName: "modelos-regionales"*/'../views/ModelosIMN.vue')
  },
  {
    path: '/modelos-globales',
    name: 'Modelos Globales',
    component: () => import(/* webpackChunkName: "modelos-globales"*/'../views/ModelosGlobales.vue')
  },
  {
    path: '/modelos-climaticos',
    name: 'Modelos Climáticos',
    component: () => import(/* webpackChunkName: "modelos-climaticos"*/'../views/ModelosClimaticos.vue')
  },
  {
    path: '/series-tiempo',
    name: 'Series de Tiempo',
    component: () => import(/* webpackChunkName: "series-tiempo"*/'../views/SeriesTiempo.vue')
  },
  {
    path: '/reanalisys-resumen',
    name: 'Reanalisys y Resumen',
    component: () => import(/* webpackChunkName: "reanalisys-resumne"*/'../views/ReanalisysResumen.vue')
  },
  {
    path: '/aeronautica',
    name: 'Aeronáutica',
    component: () => import(/* webpackChunkName: "aeronautica"*/'../views/Aeronautica.vue')
  },
  {
    path: '/marino',
    name: 'Marino',
    component: () => import(/* webpackChunkName: "marino"*/'../views/Marino.vue')
  },
  {
    path: '/incendios-forestales',
    name: 'Incendios Forestales',
    component: () => import(/* webpackChunkName: "incendios-forestales"*/'../views/IncendiosForestales.vue')
  },
  {
    path: '/dispersion-ceniza',
    name: 'Dispersión de Ceniza',
    component: () => import(/* webpackChunkName: "dispersion-ceniza"*/'../views/DispersionCeniza.vue')
  },
  {
    path: '/varios',
    name: 'Varios',
    component: () => import(/* webpackChunkName: "varios"*/'../views/Varios.vue')
  },
  {
    path: '/evaluacion',
    name: 'Evaluación',
    component: () => import(/* webpackChunkName: "evaluacion"*/'../views/Evaluacion.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "contacto"*/'../views/Contacto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
