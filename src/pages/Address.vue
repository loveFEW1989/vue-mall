<template>
  <div class="address">
    <van-nav-bar title="地址列表" left-arrow @click-left="goback" />
    <Scroll :data="addressList" class="scroll">
      <div>
        <van-address-list
          v-model="chosenAddressId"
          :list="addressList"
          @edit="onEdit"
         @select="onSelect"
        ></van-address-list>
      </div>
      <div v-if="!addressList ||!addressList.length" class="nolist">暂无收货地址</div>
    </Scroll>
    <div class="clear" @click="clear">清空地址列表</div>
    <div class="add" @click="onAdd">新增收货地址</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import Scroll from "components/public/Scroll";
export default {
  name: "address",
  components: { Scroll },
  computed: {
    ...mapGetters(["addressList"])
  },
  data() {
    return {
      list: [],
      chosenAddressId: "0",
      isPay: false
    };
  },
  methods: {
    ...mapMutations(["clearAllAddressList","setSelectedAddress"]),

    clear() {
      if(!this.addressList ||!this.addressList.length){return }
      this.$dialog
        .confirm({
          title: "清空地址列表",
          message: "确认清空所有地址？"
        })
        .then(() => {
          console.log("111");
          this.clearAllAddressList();
        })
        .catch(() => {
          console.log("22");
          return;
        });
    },
    onAdd() {
      this.$router.push({ name: "AddressEdit" });
    },
    onSelect(item) {
     console.log(item)
     this.setSelectedAddress(item)
    },
    onEdit(item, index) {
    this.$router.push({
              name:'AddressEdit',
              params:{
                item
              }
            })
    },
    goback() {
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="stylus" scoped>
.address {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 500;
  background: #fff;

  .scroll {
    position: fixed;
    top: 38px;
    bottom: 50px;
    left: 0;
    right: 0;
    overflow: hidden;

    .nolist {
      text-align: center;
      font-size: 16px;
      letter-spacing: 2px;
      color: #bbb;
      margin-top: 50px;
    }
  }
}

.add {
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1989fa;
  color: #fff;
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 50px;
  z-index: 201;
}

.clear {
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 60px;
  background: #f44;
  color: #fff;
  text-align: center;
  font-size: 15px;
  letter-spacing: 2px;
  line-height: 50px;
  z-index: 201;
}
</style>

