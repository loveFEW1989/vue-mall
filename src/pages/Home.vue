<template>
  <div v-if="recommend">
    <home-header calss="header"></home-header>
    <home-swiper class="swi"></home-swiper>
    <home-panl
      @item="item"
      :category="recommend.category"
      
    ></home-panl>
    <home-recommend :recommend="recommend.recommend"></home-recommend>
    <home-foor :floorName="floorNames[0]" :foor1="recommend.floor1" :num="num"></home-foor>
    <home-foor :floorName="floorNames[1]" :foor1="recommend.floor2" :num="num+1"></home-foor>
    <home-foor :floorName="floorNames[2]" :foor1="recommend.floor3" :num="num+2"></home-foor>
    <homeHot :hot="recommend.hotGoods" />

   
  </div>
</template>

<script>
import url from "@/api.config.js";
import homeHeader from "components/home/homeHeader";
import homeSwiper from "components/home/homeSwiper";
import homePanl from "components/home/homePanl";
import homeRecommend from "components/home/homeRecommend";
import homeFoor from "components/home/homeFoor";
import homeHot from "components/home/homeHot";
import axios from "axios";
export default {
  components: {
    homeHeader,
    homeSwiper,
    homePanl,
    homeRecommend,
    homeFoor,
    homeHot
  },
  data() {
    return {
      recommend: {},
      num: 1,
      floorNames:['休闲食品','新鲜水果','营养奶品']
    };
  },
  methods:{
    item(val,index) {
       this.$router.push({
              name:'Category',
              params:{
                index
              }
            })
    }
  },
  created() {
    if (localStorage.getItem("homedata")) {
      this.recommend = JSON.parse(localStorage.getItem("homedata"));
      console.log(this.recommend)
      return;
    }
    axios.get('/api/home')
      .then(res => {

        console.log(res.data.data);
        if (res.status === 200) {
          this.recommend = res.data.data.data;
           localStorage.setItem("homedata", JSON.stringify(res.data.data.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    console.log('mounted')
    console.log('nextTick')
    // console.log(JSON.parse(localStorage.getItem("homedata")))
    //   this.$nextTick(function() {
    //               this.recommend = JSON.parse(localStorage.getItem("homedata"));
               
    //   });
    
  }
};
</script>

<style lang="stylus" scoped>
.swi {
  margin-top: 2.2rem;
}
</style>