import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import { currency } from './currency'

Vue.filter('currency', currency)

new Vue({
    router,
    store,//在根实例中注册 store 
    render: h => h(App)
  }).$mount("#app")//挂在主页面上