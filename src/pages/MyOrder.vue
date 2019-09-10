<template>
  <!-- 我的订单列表 -->
  <div class="order-warp">
    <van-nav-bar title="我的订单" left-arrow @click-left="back" />

    <van-button type="danger" size="large" class="clear-btn" @click="clear">清空所有订单</van-button>
    <Scroll v-show="!showFlag" :data="getmyOrderList" ref="scroll" class="scroll">
      <div class="wap">
        <div v-for="value in getmyOrderList" :key="value.orderId">
          <div class="list-warp">
            <div class="top border-bottom">
              <div>订单编号: {{value.orderId}}</div>
            </div>
            <div class="list" v-for="val in value.list" :key="val._id">
              <img class="good-img" :src="val.image_path" />
              <div class="good-title">{{val.name}}</div>
              <div class="good-count">
                <p>￥{{val.present_price}}</p>
                <p class="count">x{{val.count}}</p>
              </div>
            </div>
            <div class="bottom">收货地址: {{value.address}}</div>
            <div class="bottom">共 {{value.list.length}} 件商品 合计: {{value.price}}</div>
          </div>
        </div>
      </div>
      <div v-if="!getmyOrderList.length " class="null">暂无订单</div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/public/Scroll";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MyOarder",
  computed: {
    ...mapGetters(["getmyOrderList"])
  },
  data() {
    return {
      currentActive: 0,
      list: "",
      showFlag: false,
      tabs: ["全部", "待支付", "待发货", "已完成"]
    };
  },
  components: {
    Scroll
  },
  methods: {
    ...mapMutations(["clearMyOders"]),
    back() {
      this.$router.go(-1);
    },
    clear() {
      this.$dialog
        .confirm({
          title: "清空订单列表",
          message: "确认清空所有订单？"
        })
        .then(() => {
          this.clearMyOders();
        })
        .catch(() => {
          return;
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.null {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.order-warp {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  background: #Fff;

  .scroll {
    position: fixed;
    top: 84px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #F2F2F2;

    .wap {
      padding: 5px 0;

      .list-warp {
        margin: 10px;
        box-sizing: border-box;
        padding: 15px 10px;
        background: #fff;
        border-radius: 10px;

        .top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 10px;

          .order-ok {
            color: #D2591B;
          }
        }

        .list {
          display: flex;
          height: 80px;
          margin-top: 15px;
          font-size: 0;

          .good-img {
            flex: 0 0 80px;
            width: 80px;
            height: 100%;
            border-radius: 10px;
            margin-right: 10px;
            border: 1px solid #eee;
          }

          .good-title {
            flex: 1;
            margin-top: 3px;
            line-height: 1.4;
            font-size: 13px;
            letter-spacing: 0.5px;
            margin-right: 10px;
          }

          .good-count {
            float: 0 0 15%;
            text-align: right;
            margin-top: 5px;
            font-size: 13px;

            .count {
              margin-top: 5px;
              color: #bbb;
            }
          }
        }

        .bottom {
          text-align: right;
          margin-top: 10px;
        }

        .timre {
          margin-top: 10px;
          padding-top: 10px;
        }
      }
    }
  }
}
</style>

