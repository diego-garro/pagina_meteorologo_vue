import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ImagenesSatelite from '../views/ImagenesSatelite.vue'

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
    component: ImagenesSatelite
  }
]

const router = new VueRouter({
  routes
})

export default router
