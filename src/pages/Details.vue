<template>
  <div class="goods">
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" @click="goHome" text="店铺" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>

    <Scroll class="scroll" :bounce="bounce" ref="scroll" :pullup="true">
      <div>
        <van-swipe class="goods-swipe" :autoplay="3000" :touchable="false">
          <van-swipe-item>
            <img class="swipe-img" :src="goods.image" ref="swiperImg" />
          </van-swipe-item>
          <van-swipe-item>
            <img :src="goods.image" class="swipe-img" ref="swiperImg2" />
          </van-swipe-item>
        </van-swipe>

        <div class="goods-title border-bottom">{{ goods.name }}</div>
        <div class="goods-price border-bottom">￥{{ goods.present_price }}</div>
        <van-row class="border-bottom">
          <van-col span="8">运费：0</van-col>
          <van-col span="8">剩余：900件</van-col>
          <van-col span="8">
            收藏
            <van-icon name="like-o"></van-icon>
          </van-col>
        </van-row>
        <div class="detail" v-html="goods.detail"></div>
      </div>
    </Scroll>

    <Back />
  </div>
</template>

<script>
import Back from "components/public/Back";
import Scroll from "components/public/Scroll";
export default {
  name: "Details",
  data() {
    return {
      goods: this.$route.params.item,
      bounce: {
        bottom: false
      }
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    }
  },
  computed: {},
  mounted() {
    console.log(this.goods);
  },
  destroyed(){
    console.log('destroyed。。。')
   this.goods = null
  },
  components: { Back, Scroll }
};
</script>

<style lang="stylus" scoped>
.van-goods-action{
  z-index:99
}
.detail {
  font-size: 0px;
}

.scroll {
  position: fixed;
  top: 0px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.goods-swipe {
  width: 100%;
  height: 106vm;
}

.swipe-img {
  width: 100%;
  height: 85%;
}

.goods-title {
  font-size: 20px;
  margin-top: 10px;
  padding-right: 35px;
  line-height: 20px;
  padding: 10px;
}

.goods-price {
  margin-top: 10px;
  color: #ff4444;
  font-size: 22px;
  padding: 10px;
}
.van-row{
  padding: 20px 10px; 
  text-align: center;
  font-size:16px
}
</style>