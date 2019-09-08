import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Category from 'pages/Category'
import ShoppingCart from 'pages/ShoppingCart'
import My from 'pages/My'
import Details from 'pages/Details'
import Pay from 'pages/Pay'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
    redirect: '/home'
    },
    {
      path: '/home',
      name:'Home',
      component:Home,
      meta: { keepAlive: true }
    },
    {
      path:'/category',
      name:'Category',
      component:Category,
      meta: { keepAlive: true }
    },

    {
      path:'/shoppingCart',
      name:'ShoppingCart',
      component:ShoppingCart
    },
    {
      path:'/my',
      name:'My',
      component:My
    },
    { path: '/details', name: 'Details', component: Details},
    { path: '/pay', name: 'Pay', component: Pay}
  ]
})
