import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/security/Login'
import NotFound from '@/components/security/NotFound'
import ResetPassword from '@/components/security/ResetPassword'
import CreateUser from '@/components/user/Create'
import ListUser from '@/components/user/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user/list',
      name: 'ListUser',
      component: ListUser
    },
    {
      path: '*',
      name: 'Login',
      component: Login
    },
    {
      path: '/resetPassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
  ]

})
