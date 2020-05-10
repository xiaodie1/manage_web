// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import ElementUI from 'element-ui' // 引入组件库
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'
import VueParticles from 'vue-particles'

Vue.use(ElementUI)
Vue.use(VueParticles)
Vue.config.productionTip = false
// 挂载全剧
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
