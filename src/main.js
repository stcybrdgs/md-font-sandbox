import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Material Icons
import { MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
