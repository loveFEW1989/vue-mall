<template>
  <div class="container">
   <Title :num="num" v-if="floorName" :floorName="floorName"></Title>
   <div class="foot-wrapper" v-if="foor1&& foor1.length">
    <div class="foot-top">
     <div class="foot-top-left border-right">
       <img :src="foor1[0].image"  alt="">
     </div>
     <div class="foot-top-right">
       <div class="border-bottom" >
         <img :src="foor1[1].image" alt="">
       </div>
       <div class="border-bottom">
         <img :src="foor1[2].image" alt="">
       </div>
     </div>

    </div>
    <div class="foot-bot border-top">
      <div>
        <img :src="foor1[3].image" />
      </div>
      <div class="border-left">
        <img :src="foor1[4].image" alt="">
      </div>
    </div>
    <div v-if="foor1.length>5" class="foot-bot border-top">
      <div>
        <img :src="foor1[5].image" />
      </div>
      <div class="border-left">
        <img :src="foor1[6].image" alt="">
      </div>
    </div>



   </div>
  </div>
</template>

<script>
import Title from 'components/home/Title'
  export default {
    props: ['floorName', 'foor1', 'num'],
    components: {Title}

  }
</script>

<style lang="stylus" scoped>
.foot-wrapper
   display  flex
   flex-direction column
   .foot-top
      display flex
      .foot-top-left, .foot-top-right
        flex 1
      .foot-top-left
         img
           width 100%
      .foot-top-right
         display flex
         flex-direction column
         img
          width 100%
   .foot-bot
      display flex
      div
        flex 1
        img
         width 100%              
</style>