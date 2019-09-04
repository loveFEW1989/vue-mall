<template>
  <div class="panl">
   <ul v-show="category&&category.length">
     <li v-for="(val,index) of category" :key="index">
       <img :src="val.image" alt="">
       <p>{{val.mallCategoryName}}</p>
     </li>
   </ul>
   <div class="ad" >
     <img :src="advertesPicture" alt="" width="100%">
   </div>
  </div>
</template>

<script>
  export default {
    props: {
      category: {
        type:Array,
        default() {
          return []
        }
      },
      advertesPicture:{
        type: String,
        default() {
          return ''
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.panl
  background #eeeeee
  padding .3rem 0 .5rem 0
  ul 
    width 95%
    margin 0 auto
    border-radius .2rem
    padding .3rem 0 .1rem 0
    box-sizing border-box
    display flex
    background #fff
    box-shadow 3px 4px 20px rgba(45,45,45,.15)
    margin-top 10px
    li
      flex 1
      text-align center
      padding 10px
      img  
        width 90%
        margin-bottom .2rem
      p
       font-size 14px
  .ad 
    margin-top 10px 
    padding-bottom 10px 
    
      
      
</style>