<template>
  <div>
<img :src="val.image" class="recommend-img">
<p class="name">{{val.name}}</p>
<p class="price"><span class="code">￥</span><span class="mallPrice">{{val.mallPrice}}</span><span class="price-min">{{val.price}}</span></p>
  </div>
</template>

<script>
  export default {
    name: 'good',
    props: {
      val: Object
    }
  }
</script>

<style lang="stylus" scoped>
@import '~css/mixin.styl';
 .recommend-img
            width 80%
        .name
            padding 5px 7.5px 0 7.5px
            color $color
            font-size 14px    
            ellipsis()
        .price
            color $color
            padding-top 5px
            .code
                font-size 13px
            .mallPrice
                font-size 15px    
                color $color
                font-weight 700
            .price-min
                font-size 12px
                text-decoration:line-through
                color #999    
                display inline-block
                margin-left 5px
</style>