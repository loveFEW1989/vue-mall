<template>
  <div >
    <div class="title border-bottom">商品推荐</div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="val of recommend" :key="val.goodsId" class="recommend-item border-right">
      <img :src="val.image" class="recommend-img" alt="">
      <p class="name">{{val.goodsName}}</p>
      <p class="price">
        <span class="code">￥</span>
        <span class="price-min">{{val.mallPrice}}</span>
        <span class="mallPrice ">{{val.price}}</span>
      </p>
      <div class="panl">
        <div class="left">
          <van-icon  size="20px" name="cart-o"></van-icon>
        </div>
        <div class="right">查看详情</div>
      </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

  export default {
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~css/mixin.styl'
.swiper-wrapper
  margin-top 10px
.title
    height 35px
    line-height 35px
    padding-left 15px
    box-sizing border-box
    font-size 15px
.recommend-item
   margin-top 10px
   width 33.2%
   margin-right 0 !important
   overflow hidden
   text-align center
   padding-bottom 5px
   .recommend-img
     width 80%
   .name
        padding 5px 0px 0 7.5px
        color $color
        font-size 13px
        ellipsis()
        text-align left
   .price
     color $color
     padding 5px 0 0 7.5px
     text-align left
     .code 
       font-size 14px
     .mallPrice
       font-size 15px
     .price-min
       font-size 12px
       text-decoration line-through
       color #999
       display inline-block
      
   .panl
     padding 0 7.5px 0 7.5px
     display flex
     margin-top 10px
     .left
       width 40%
       padding 7.5px
       background #feca3a
       border-radius 5px 0 0 4px
       color #000
       box-sizing border-box
     .right
       width 60%
       text-align center
       padding 10px
       font-size 12px
       background #ff4c38
       color #fff
       border-radius 0 5px 5px 0
       box-sizing border-box      


</style>