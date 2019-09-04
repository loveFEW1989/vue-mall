<template>
  <div class="title" v-show="floorName">
     <span v-show="num" >{{num}}F</span>
     {{floorName}}
  </div>
</template>

<script>
  export default {
    props:['floorName','num']
  }
</script>

<style lang="stylus" scoped>
.title
   background #ededed
   height 1.5rem
   line-height 1.5rem
   text-align center
   color #e0322b
   font-size .33rem
   display flex
   flex-direction row
   justify-content center
   align-items center
   span 
    
  
    margin-left -20px
    
    background #e0322b
    text-align center
    border-radius 50%
    width 15px
    height 15px
    display inline-block
    padding 3px
    line-height 16px
    color #fff
    font-size 12px
</style>