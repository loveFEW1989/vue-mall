// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/reset.css'
import 'css/iconfont.css'
import 'vant/lib/index.css'
import 'css/border.css'
import 'swiper/dist/css/swiper.css'
import store from './store'

import {Button,Row,Col,Swipe,SwipeItem, Icon, Tabbar, TabbarItem,TreeSelect,NavBar, GoodsAction,
  GoodsActionIcon,GoodsActionButton,Cell, CellGroup, SubmitBar ,AddressList,AddressEdit,Dialog, Loading,Toast,Tab, Tabs   } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Icon).use(Tabbar).use(TabbarItem).use(TreeSelect)
.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(NavBar).use(Cell).use(CellGroup).use( SubmitBar)
.use(AddressList).use(AddressEdit ).use(Dialog).use( Loading ).use(Toast).use(Tab ).use(Tabs )

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
