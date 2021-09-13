import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')


const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
