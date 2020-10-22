import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSatellite, faDatabase, faPooStorm, faWaveSquare, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy, faGlobeAmericas, faTemperatureLow, faChartArea, faPlaneDeparture} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHome,
  faSatellite,
  faDatabase,
  faPooStorm,
  faWaveSquare,
  faCloudShowersHeavy,
  faGlobeAmericas,
  faTemperatureLow,
  faChartLine,
  faChartArea,
  faPlaneDeparture,
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
