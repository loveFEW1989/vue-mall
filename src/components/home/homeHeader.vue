<template>
  <div class="search-bar">
     <van-row>
       <van-col span="3" class="item v-icon">
         <i class="iconfont icon-sousuo icon"></i>
       </van-col>
       <van-col span="16" class="item">
          <input type="text" class="search-input"/>
       </van-col>
       <van-col span="5" class="item van-btn">
         <van-button size="mini">搜索</van-button>
       </van-col>
     </van-row>
  </div>
</template>

<script>
  export default {
     name: 'Header'
  }
</script>

<style lang="stylus" scoped>
.search-bar 
  height  2.2rem
  background-color  #e5017d
  line-height 2.2rem
  
  .item

   
    .iconfont
      font-size 1.4rem
      padding-left .5rem
      color #fff
      
    .search-input
      width 100%
      height 1.3rem
      border 0
      border-bottom 2px solid #fff
      background-color #e5017d
      color #fff
  .van-btn
      padding-left 1rem  
     
</style>