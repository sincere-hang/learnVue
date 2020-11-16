import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Detail from '@/views/detail.vue'
import card from '@/views/card.vue'
Vue.use(Router)


const myrouter=new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail
        },
        {
            path: "/card",
            name: "card",
            component: card
        },
    ],
})

export default myrouter