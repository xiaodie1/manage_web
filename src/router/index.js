import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'
import CustomerList from '@/views/main_view/customerList'
import WW from '@/views/main_view/ww'
import Main from '@/views/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [{
        path: '/list',
        name: 'Main22',
        component: CustomerList
      },
      {
        path: '/test2',
        name: 'Main11',
        component: WW
      }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Login
    }
  ]
})
