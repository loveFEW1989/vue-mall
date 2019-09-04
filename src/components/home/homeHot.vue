<template>
    <div  v-if="hot">
        <Title v-if="floorName" :floorName='floorName'/>
        <ul>
            <li class="recommend-item" v-for="val of hot" :key="val.goodsId" @click="details(val)">
            <good :val="val"></good>
            </li>
        </ul>
    </div>
</template>

<script>
import Title from 'components/home/Title'
import good from 'components/home/good'
export default {
  
    props:['hot'],
    data () {
        return {
            floorName:'热销商品',
        }
    },
    components: {
        Title,
        good
    },
}
</script>

<style lang="stylus" scoped>

ul
    display flex
    flex-wrap wrap
    background #eee
    justify-content space-between
    .recommend-item
        flex 0 0 49.9%
        width 50%!important
        margin-right 0!important
        margin-top 1px
        overflow hidden
        text-align center
        background #fff
        padding-bottom 5px
        
</style>

