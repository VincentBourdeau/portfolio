import Vue from 'vue'

// import VueDisqus from 'vue-disqus'
import EventHub from 'vue-event-hub'
import VModal from 'vue-js-modal'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'

Vue.config.productionTip = false

// Vue.use(VueDisqus)
Vue.use(VModal)
Vue.use(EventHub)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
