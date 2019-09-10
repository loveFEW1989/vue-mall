<template>
  <div class="card page-tab">
    <van-nav-bar title="购物车"></van-nav-bar>
    <Scroll :DATA="GoodsList" class="scroll" ref="scroll" v-show="GoodsList && GoodsList.length">
      <ul class="ul">
        <li class="li border-bottom" v-for="val in GoodsList" :key="val.id">
          <div class="left" @click="chooseOne(val)">
            <img src="../assets/img/true.png" alt v-if="val.checked " />
            <img src="../assets/img/false.png" v-else alt />
          </div>
          <div class="middle border">
            <img :src="val.image_path" />
          </div>
          <div class="right">
            <p class="name">{{val.name}}</p>
            <div class="del">
              <van-button size="small" type="danger" @click="del(val)">删除</van-button>
            </div>

            <div>
              <p class="one">
                <span>￥</span>
                {{val.present_price }}
              </p>
              <p class="two">
                <i class="iconfont icon-jianhao" @click="reduces(val)"></i>
                <span>{{val.count}}</span>
                <i @click="adds(val)" class="iconfont icon-jiahao"></i>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </Scroll>

    <div class="fixedbot">
      <div class="pics border-bottom">
        <div class="quanxuan" @click="changeAllChooise">
          <img src="../assets/img/true.png" alt v-if=" !notCheckedList.length && GoodsList.length" />
          <img src="../assets/img/false.png" alt v-else />
          <!-- {{allCheck?'全不选':'全选'}} -->
          全选
        </div>
        <div class="totalPrice">合计: ￥{{totalPrice}}</div>

        <div class="confirm">
          <van-button size="small" @click="goToPay" type="primary">去结算</van-button>
        </div>
      </div>
    </div>
    <div class="shop-warpper" v-show="!GoodsList.length ">
      <div class="shop">
        <img :src="noShop" alt />
      </div>
      <p class="desc">您的购物车还是空的额</p>
      <!-- <p class="desc">{{!userName?'请先登录噢~~':'您的购物还是空空的哦'}}</p>
            <p class="desc2" @click="goshop" v-if="userName">去购物</p>
      <p class="desc2" @click="goLogin" v-else>去登录</p>-->
    </div>
  </div>
</template>

<script>
import Scroll from "components/public/Scroll";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      allCheck: false,
      checkList: [],
      checked: false,
      noShop: require("img/shop.png")
    };
  },
  components: { Scroll },
  computed: {
    ...mapGetters({
      GoodsList: "getGoodsList",
      totalPrice: "getTotalPrice",
      notCheckedList: "notCheckedList",
      allCheckedList: "allCheckedList"
    })
  },

  methods: {
    ...mapMutations([
      "del",
      "updateGoodsChecked",
      "add",
      "reduce",
      "updateGettersGoodsChecked"
    ]),
    goToPay() {
      if (!this.allCheckedList.length) {
        this.$dialog.alert({
          title: "没有选择商品"
        });
        return;
      }
      this.$router.push({ name: "Pay" });
    },
    reduces(val) {
      if (val.count <= 1) {
        this.$dialog.alert({
          message: "该商品最少需要购买一件"
        });
        return;
      }
      this.reduce(val);
    },
    adds(val) {
      if (val.count >= 10) {
        this.$dialog.alert({
          message: "该商品最多能购买10件"
        });
        return;
      }
      this.add(val);
    },
    change() {
      this.allCheck = !this.allCheck;
      this.updateGettersGoodsChecked(this.allCheck);
      console.log("选中状态" + this.$refs.checkAll.checked);
    },

    changeAllChooise() {
      this.allCheck = !this.allCheck;

      let data = {};
      if (!this.allCheck) {
        data = {
          status: this.notCheckedList.length ? true : false,
          allCheck: this.allCheck
        };
      } else {
        data = {
          status: this.notCheckedList.length ? true : false,
          allCheck: this.allCheck
        };
      }
      console.log(this.allCheck);
      this.updateGettersGoodsChecked(data);
    },

    chooseOne(val) {
      this.updateGoodsChecked(val);
    }

   
  }
};
</script>

<style lang="stylus" scoped>
@import '~css/mixin.styl';

.fixedbot {
  background: #fff;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 50px;
  border-top: 1px solid #e0322b;
}

.pics {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 10px 10px;
  justify-content: space-around;

  .checkedAll {
    font-size: 15px;
  }

  .totalPrice {
    flex: 1;
    text-align: center;
  }

  .confirm {
    width: 77px;
    margin-right: 10px;
  }

  .quanxuan {
    position: relative;
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;

    .span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      width: 60px;
      left: 25px;
    }
  }

  .total {
    align-content: flex-start;
    font-size: 14px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 145px;

    span {
      color: #e0322b;
      font-weight: bold;
    }
  }
}

.quanxuan img, .left img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.iconfont {
  font-size: 21px;
}

.totalPrice {
  font-size: 18px;
}

.li {
  positon: relative;
}

.del {
  position: absolute;
  right: 10px;
  top: 10px;
}

.card >>> .checkbox-component>input+label>.input-box {
  height: 17px;
  width: 17px;
  border: 1px solid red;
}

.card >>> .checkbox-component>input+label>.input-box>.input-box-tick>path {
  stroke: red;
}

.card {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;

  .scroll {
    position: fixed;
    top: 38px;
    bottom: 110px;
    left: 0;
    right: 0;
    overflow: hidden;
    padding-top: 10px;

    .ul {
      margin: 0 10px;

      li {
        display: flex;
        align-items: center;
        height: 90px;
        padding-bottom: 10px;
        margin-top: 10px;

        .left {
          width: 40px;
          flex: 0 0 40px;
        }

        .middle {
          width: 80px;
          flex: 0 0 80px;
          padding: 1px;
          box-sizing: border-box;

          img {
            width: 100%;
          }
        }

        .right {
          flex: 1;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 0 5px 0 15px;
          box-sizing: border-box;

          .name {
            font-size: 14px;
            color: #e0322b;
            ellipsis();
            width: 125px;
          }

          div {
            display: flex;
            justify-content: space-between;
            padding: 0 20px 0 0;

            .one {
              font-size: 16px;
              color: #e0322b;

              span {
                font-size: 14px;
              }
            }

            .two {
              width: 80px;
              font-size: 19px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              i {
                color: #747474;
              }

              span {
                padding: 0 10px;
                font-size: 16px;
              }
            }
          }
        }
      }

      .confirm {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-top: 5px;
        margin-bottom: 10px;
        margin-right: 30px;

        .notijiao {
          height: 35px;
          padding: 0 15px;
          font-size: 14px;
          margin-right: 5px;
          line-height: 35px;
          border-radius: 2px;
          background: #E5E5E5;
          color: #D3D3D4;
        }

        .delete {
          background: #E6057F;
          color: #fff;
        }
      }
    }
  }

  .shop-warpper {
    width: 100%;
    padding-top: 20px;

    .shop {
      display: flex;
      background: #F2F2F2;
      flex-direction: column;
      justify-content: center;
      margin-top: 40px;
      background: #F6F6F6;
      width: 125px;
      height: 125px;
      border-radius: 50%;
      text-align: center;
      margin: auto;
      position: relative;

      img {
        width: 70%;
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .desc2 {
      height: 40px;
      width: 150px;
      line-height: 40px;
      border: 1px solid #000;
      text-align: center;
      margin: 0 auto;
      border-radius: 25px;
      font-size: 17px;
      margin-top: 35px;
    }

    .desc {
      text-align: center;
      margin-top: 25px;
      font-size: 16px;
      color: #666;
    }
  }
}
</style>
