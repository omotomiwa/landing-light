import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue,BootstrapVueIcons)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
