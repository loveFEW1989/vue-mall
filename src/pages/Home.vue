<template>
  <div>
 <home-header></home-header>
 <home-swiper></home-swiper>
 <home-panl :category='recommend.category' :advertesPicture='recommend.advertesPicture.PICTURE_ADDRESS'></home-panl>
  <home-recommend :recommend='recommend.recommend'></home-recommend>
  <home-foor :floorName="recommend.floorName.floor1" :foor1="recommend.floor1" :num="num"></home-foor>
<home-foor :floorName="recommend.floorName.floor2" :foor1="recommend.floor2" :num="num+1"></home-foor>
<home-foor :floorName="recommend.floorName.floor3" :foor1="recommend.floor3" :num="num+2"></home-foor>
<homeHot :hot='recommend.hotGoods'/>
  </div>
</template>

<script>
import url from '@/api.config.js'
import homeHeader from  'components/home/homeHeader'
import homeSwiper from 'components/home/homeSwiper'
import homePanl from 'components/home/homePanl'
import homeRecommend from 'components/home/homeRecommend'
import homeFoor from 'components/home/homeFoor'
import homeHot from 'components/home/homeHot'
import axios from 'axios'
  export default {
    components: {homeHeader,homeSwiper,homePanl,homeRecommend,homeFoor,homeHot},
    data() {
      return {
        recommend: {},
        num:1
      }
    },
    created() {
      axios({
       url: url.getHome,
       method: 'GET'
      })
      .then((res) => {
        console.log(res.data.data)
         if(res.status===200) {
           this.recommend = res.data.data
         }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>