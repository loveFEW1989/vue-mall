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
       
      />
    </div>
  </div>
</template>
<script>
import { mapMutations ,mapGetters} from 'vuex';

export default {
  data() {
    return {
      searchResult: [],
      areaList: require("js/area.js").default,
      showDelete: false,
      item: this.$route.params.item
    };
  },
  computed:{
...mapGetters(['addressInfo']),
info() {
  return this.item ? this.item : ''
}
  },
  methods: {
...mapMutations(['setAddress']),
    onSave(val) {
      console.log(val);
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
        
      };
       this.$dialog.alert({
          message: "已成功保存该地址"
        });
       this.setAddress(data)
      
    },
     goback() {
        this.$router.go(-1)
      }
  },
  mounted() {
    console.log(this.item)
  }
};
</script>
<style lang="">
</style>