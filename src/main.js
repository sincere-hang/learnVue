import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Swiper from 'swiper'


Vue.config.productionTip = false

new Vue({
    router,
    Swiper,
    render: h => h(App),
}).$mount('#app')
