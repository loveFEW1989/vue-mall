<template>
 <ul >
   <li v-for="item in list" :key="item._id ||item.id" class="good-item border-bottom" @click="details(item)">
    <div class="border left" >
      <img :src="item.image || item.image_path" alt="">
    </div>
    <div class="right">
      <p class='p1'>{{item.name}}</p>
      <p class='p2'>

        <span class="pic" >￥{{item.present_price}}</span>
       <span class="old-pic">{{item.orl_price}}</span>
              
      </p>
    </div>
   </li>
 </ul>
</template>

<script>
  export default {
    name: 'GoodsList',
    props:{
      list:{
        type: null
      }
    },
    methods: {
       // 跳转到商品详情页
        details(val) {
           
            this.$router.push({
              name:'Details',
              params:{
                item:val
              }
            })
        }
    }
  }
</script>

<style lang="stylus" scoped>
ul
  background #fff
  .good-item
     display flex
     height 110px
     box-sizing border-box
     position relative
     &.list-enter-active, &.list-leave-active 
            transition all .1s linear
     &.list-enter, &.list-leave-to
            height 0
     &:last-child:before
            border-bottom 0  
     .left
       flex 0 0 30%
       width 35%
       heigh 100%
       img
         width 100%
         height 80%
         box-shadow 0 2px 8px #f0f1f2  
     .right
       flex 1
       margin 10px 0 0 10px
      
       .p1
            margin-bottom 20px
            line-height 1.4
            overflow:hidden; 
            text-overflow:ellipsis
            display:-webkit-box
            -webkit-box-orient:vertical
            -webkit-line-clamp:2
            font-size 13px
           
          .old-pic
              text-decoration: line-through
              font-size 13px
            
          .pic
              color #f00
              font-weight 700
              margin-right 5px 


</style>