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
      <div v-if="!isOrder" class="btn-item" @click.stop="add2Cart(item)">
     <van-button class="btn" type="danger" size="mini">加入购物车</van-button>    
      
      </div>
    </div>
   </li>
 </ul>
</template>

<script>
import {mapMutations} from 'vuex'
  export default {
    name: 'GoodsList',
    props:{
      list:{
        type: null
      },
      isOrder:{type: Boolean,default(){return false}}
    },
    methods: {
       ...mapMutations(['addGoods']),
      //  加入购物车

      add2Cart(goods){
        this.addGoods(goods)
        this.$dialog.alert({
      message: '成功加入购物车'
    })},
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
.btn-item{
  width 100px
  height 45px
  padding-top 10px
}
.btn{
  
}
ul
  background #fff
  .good-item
     display flex
     height 120px
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