<template>
  <div class="swiper-area">
   <van-swipe :autoplay="1500">
    <van-swipe-item v-for="(banner,index) in bannerArray" :key="index">
       <img :src="banner.imageUrl" width="100%" alt="">
    </van-swipe-item>

   </van-swipe>
  </div>
</template>

<script>
  export default {
    name:'vSwiper',
    data() {
      return {
        bannerArray:[
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175040_1780.jpg'},
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175111_9509.jpg'},
                {imageUrl:'http://images.baixingliangfan.cn/advertesPicture/20180407/20180407175142_6947.jpg'},
            ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
.swiper-area
  width 20rem
  clear both
</style>