<template>
<div>
   <van-nav-bar title="商品分类"  fixed/>
<van-tree-select 
  height="100%" 
  :items="items"
   :main-active-index.sync="activeIndex">
    <template slot="content" class="wrapper"  ref="wrapper">
    
      <div class="item" v-for="(item,index) of items" :key="index" >
         <goods-list :list="item.children" v-if="activeIndex === index"></goods-list>

      </div>
   
      
    </template>
  </van-tree-select>

</div>
  
</template>

<script>
import url from "@/api.config.js";
import axios from "axios";
import goodsList from "components/public/GoodsList";
import Scroll from 'components/public/Scroll'

export default {
  data() {
    return {
      items: [],
      activeId: 1,
      activeIndex: 0,
      listenScroll: true
    };
  },
  created() {
    axios({
      url: url.getCategory,
      method: "GET"
    }).then(res => {
      console.log(res);
     
      this.items = res.data.datalist;
     
    });
  },
  components: { goodsList, Scroll},
  methods: {
    scroll(x,y) {
      conosle.log(x,y)
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-tree-select{
  top: 50px;
}
.van-tree-select__nav-item {
  height: 80px;
  line-height: 80px;
}
.van-tree-select__content{
  height: 700px !important
}
.scroll{
    position: fixed;
  top: 0px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
}
ul {
  background: #fff;

  .good-item {
    display: flex;
    height: 100px;
    box-sizing: border-box;
    position: relative;

    &.list-enter-active, &.list-leave-active {
      transition: all 0.1s linear;
    }

    &.list-enter, &.list-leave-to {
      height: 0;
    }

    &:last-child:before {
      border-bottom: 0;
    }

    .left {
      flex: 0 0 30%;
      width: 30%;
      heigh: 90%;

      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 2px 8px #f0f1f2;
      }
    }

    .right {
      flex: 1;

      p {
        text-align: left;

        padding-left 20px {
          .p1 {
            margin-bottom: 20px;
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 13px;
          }

          .p2 {
            .orl-pic {
              text-decoration: line-through;
              font-size: 13px;
            }

            .pic {
              color: #f00;
              font-weight: 700;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>