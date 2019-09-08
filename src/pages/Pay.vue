<template>
    <!-- 订单结算和选择商品页面 -->
    <div class="order">
      
        <van-nav-bar
                title="订单结算"
                left-arrow
                @click-left="goBack"
        />
                <div class="address-warp">
                    
                    <div class="address" v-if="selectedAddress"  @click="editAddress">
                        <div class="icon"><van-icon name="location" class="location"/></div>
                        <div class="address-cont">
                            <p class="name">收货人: {{selectedAddress.name }} <span>{{selectedAddress.tel }}</span></p>
                            <p class="address-e">收货地址: {{selectedAddress.address }}</p>
                            <p class="no">(收货不便时,可选择免费待收货服务)</p>
                        </div>
                        <div class="icon2"><van-icon name="arrow" class="location"/></div>

                    </div>
                    <div class="address addnull" v-else  @click="goAddress">
                        点击添加收货地址
                    </div>
                <Scroll :data='allCheckedList' ref="scroll" class="scroll">
                    <div class="goods-list">
                        <GoodsList :list='allCheckedList' :isOrder='true'/>
                    </div>
                </Scroll>
            </div>
        
        <div v-if="allCheckedList && allCheckedList.length">
            <van-submit-bar
                :loading='isLoading'
                :price="price"
                button-text="提交订单"
                @submit="onSubmit"
            />
        </div>
    </div>
</template>

<script>
import GoodsList from 'components/public/GoodsList'
import Scroll from 'components/public/Scroll'
import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: 'Pay',
    data() {
        return {
            
            isLoading: false,
        }
    },
    components:{GoodsList,Scroll},
    computed:{
 ...mapGetters(['allCheckedList','getTotalPrice','selectedAddress']),
 price() {
   let num = 0
   if(this.allCheckedList.length){
     this.allCheckedList.forEach(item=> {
       num+=item.count* item.present_price
     })
     return Number( num.toFixed(2) * 100)
   }
 }
    },
    methods: {
        ...mapMutations(['setMyOder']),
      goBack() {
        this.$router.go(-1)
      },
      goAddress() {
        this.$router.push({name:'Address'})
      },
      editAddress(item) {
          this.$router.push({name:'Address'})
      },
      onSubmit() {
      if(!selectedAddress) {
  this.$toast('请添加收获地址')
                return
      }
      }
    },
    mounted() {
       
    }
 
  }
</script>


<style lang="stylus" scoped>
.order
    position fixed
    top 0px
    left 0
    right 0
    bottom 0px
    z-index 500
    background #fff
    .scroll
        position fixed
        top 148px
        bottom 50px
        left 0
        right 0
        overflow hidden
    .address-warp
        .caitiao
            margin-top -10px
        .addnull
            align-items center
            padding 0!important   
            justify-content center
            font-size 14px
        .address
            display flex
            height 90px
            padding 10px
            padding-bottom 0
            background #fff
            .icon
                flex 0 0 30px 
                width 30px
                align-self center
                margin-right 8px
                .location
                    font-size 24px
            .address-cont
                flex 1
                display flex
                flex-direction column
                justify-content space-around    
                .name
                    font-size 15px
                    span 
                        float right 
                        margin-right 10px
                .address-e
                    font-size 12px
                    margin-right 5px
                    line-height 1.4       
                .no
                    color #F9CC9D
                    font-size 12px     
                    letter-spacing 1px
                    margin-top -5px
            .icon2
                flex 0 0 10px
                align-self center 
        .goods-list
            background #fff                   
</style>