import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/security/Login'
import NotFound from '@/components/security/NotFound'
import ResetPassword from '@/components/security/ResetPassword'
import CreateUser from '@/components/user/Create'
import ListUser from '@/components/user/List'
import CreateArticle from '@/components/article/Create'
import ListArticle from '@/components/article/List'
import MainMenu from '@/components/menu/MainMenu'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu,
      children: [
        {
          path: '/user', name: 'UserList', component: ListUser
        },
        {
          path: '/user/create', name: 'UserCreate', component: CreateUser
        },
        {
          path: '/article', name: 'ArticleList', component: ListArticle
        },
        {
          path: '/article/create', name: 'ArticleCreate', component: CreateArticle
        }
      ]
    }
  ]

})
