<template>
  <!-- 新增和编辑地址 -->
  <div class="address-edit">
    <van-nav-bar :title="this.item? '编辑地址':'新建地址'" left-arrow @click-left="goback" />
    <div>
      <van-address-edit
        :area-list="areaList"
        :show-delete="showDelete"
        show-set-default
        show-search-result
        :addressInfo="info"
        :search-result="searchResult"
        @save="onSave"
        @change-default="setDefault"
      />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      searchResult: [],
      areaList: require("js/area.js").default,
      showDelete: false,
      item: this.$route.params.item,
      isDefault: false
    };
  },
  computed: {
    ...mapGetters(["addressInfo"]),
    info() {
      if(this.item){
        return this.item
      }
    
    }
  },
  methods: {
    ...mapMutations(["setAddress", "editAddress", "setDefaultAddress"]),
    onSave(val) {
      let data = {
        name: val.name,
        tel: val.tel,
        address: val.province + val.city + val.county + val.addressDetail,
        isDefault: val.isDefault,
        province: val.province,
        city: val.city,
        county: val.county,
        addressDetail: val.addressDetail,
        areaCode: val.areaCode,
        id: this.item ? this.item.id : null
      };
      this.$dialog.alert({
        message: "已成功保存该地址"
      });
      if (this.item) {
        this.editAddress(data);
        if (this.isDefault) {
          this.setDefaultAddress(data);
        }
      } else {
        this.setAddress(data);
        if (this.isDefault) {
          this.setDefaultAddress(data);
        }
      }
    },
    goback() {
      this.$router.go(-1);
    },
    setDefault() {
      this.isDefault = !this.isDefault;
    }
    
  },
  mounted() {
    console.log(this.item);
  }
};
</script>
<style lang="">
</style>