<template>
  <div class="footer">
    <router-link to="/home">
    <span class="iconfont icon-shouyeshouye"></span>
    首页</router-link>
    <router-link to="/category">
     <span class="iconfont icon-fenlei"></span>
    分类</router-link>
    <router-link to="/shoppingCart">
     <span class="iconfont icon-tuanduicankaoxian-"></span>
    购物车</router-link>
    <router-link to="/my">
     <span class="iconfont icon-wode"></span>
    我的</router-link>
  </div>
</template>

<script>
export default {
  name: 'RouterFooter'
};
</script>

<style lang="stylus" scoped>
a{
  display: inline-flex;
  flex-direction column;
  align-items : center;
  font-size :14px;
  color:#7d7e80;
}
span {
  font-size: 25px;
  margin-bottom:5px
}
.footer
  position fixed
  bottom 0
  left 0
  width 100%
  height 50px
  display flex
  background-color #fff
  justify-content space-around
  .router-link-active
     color red
    
</style>