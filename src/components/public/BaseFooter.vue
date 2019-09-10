<template>
<van-tabbar  active-color="#e0322b"
  inactive-color="#000" route v-model="active">
  <van-tabbar-item icon="shop-o" to="/Home">商城</van-tabbar-item>
  <van-tabbar-item icon="wap-nav" to="/Category">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to="/ShoppingCart">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact" to="/My">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
    // props:{
    //     active:{
    //         type:null,
    //         default:0
    //     }
    // },

    data() {
        return {
            tabArr: [
                { id: 1, title: "商城", icon: "shop-o",page:'Home' },
                { id: 2, title: "分类", icon: "wap-nav",page:'Category' },
                { id: 3, title: "购物车", icon: "shopping-cart-o",page:'ShoppingCart' },
                { id: 4, title: "我的", icon: "contact",page:'My' }
            ],
            active:0

        }
    },
}
</script>
