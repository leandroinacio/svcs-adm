import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import CreateUser from '@/components/user/Create'
import ListUser from '@/components/user/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user/create',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user/list',
      name: 'ListUser',
      component: ListUser
    }
  ]

})
