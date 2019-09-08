import Vue from 'vue'
const state = {
  
    goodsList:JSON.parse(localStorage.getItem('cartList') || '[]'), // 商品列表，刚开始为空
    addressList:JSON.parse(localStorage.getItem('addresslist') || '[]'),
    selectedAddress:JSON.parse(localStorage.getItem('selectedaddress') || '{}'),
    myOrderList:JSON.parse(localStorage.getItem('myorderlist') || '[]'),
  }

const getters = {
  addressList(state){
    return state.addressList
  },
  addressInfo(state){
   return state.addressList[state.addressList.length-1]
  },
  selectedAddress(state){
    return state.selectedAddress
  },
  // 购物车列表
  getGoodsList(state){
    return state.goodsList
},
// 总价钱
getTotalPrice: (state,getters)=> {
  let totalPrice = 0
  getters.getGoodsList.forEach(n=> {
    if(n.checked){
      totalPrice+= n.present_price
      *n.count
    }
    
  })
  return totalPrice
},
// // 获取购物车的选择状态
// getGoodsChecked(state) {
//   let temp = {}
//   state.goodsList.forEach(item=> {
//     temp[item.id] = item.checked

//   })
//   return temp
// }

// 获取所有还没有选中的item的数组
notCheckedList(state) {
  return state.goodsList.filter(item=>!item.checked)
},
// 所有选中的商品列表
allCheckedList(state) {
  return state.goodsList.filter(item=> item.checked)
}
}

const actions = {
 
}


const mutations = {
// 添加到购物车

 addGoods(state,goods) {
   const oldGoods = state.goodsList.find(item=>item.id === goods.id)
   if(oldGoods) {
     oldGoods.count++
   } else {
     state.goodsList.push({
       ...goods,
       count:1,
       checked: false
     })
   }
    //保存到本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 },

//  修改购物车商品数量
updateGoodsInfo(state,goodsInfo) {
  state.goodsList.some(item=> {
    if(item.id=== goodsInfo.id) {
      item.count = parseInt(goodsInfo.count)
      return true
    }
  })
     //更新本地存储
     localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},
add(state,good) {
  const oldGoods = state.goodsList.find(item=>item.id === good.id)
  
  
  oldGoods.count++
   //更新本地存储
   localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},
reduce(state,good){
  const oldGoods = state.goodsList.find(item=>item.id === good.id)

  oldGoods.count--
   //更新本地存储
   localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},


// change( state, {id,value} ) {
//   state.goodsList.forEach( ( item, index ) => {
//       if( item.id == id ){
//           item.count = value;
//       }
//   });
// },

// 更新选中状态
updateGoodsChecked(state,val) {

  state.goodsList.forEach(item=> {
     if(item.id == val.id){
       item.checked = !item.checked
     }
     
  })

  
     //更新本地存储
     localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},
// 全选反选切换
updateGettersGoodsChecked(state,data) {

  for(let i in state.goodsList) {
    let item = state.goodsList[i]
     item.checked = data.status 
     Vue.set(state.goodsList,i,item)
    }
 localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},


// updateGettersGoodsChecked(state,boolean) {
//   state.goodsList.forEach(item=> {
//     item.checked = boolean
//   })
  
 
//   localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
// },

//  删除商品
del(state,product) {
  state.goodsList.forEach((n,i) =>{
    if(n.id== product.id){
      state.goodsList.splice(i,1)
    }
  })
   //更新本地存储
   localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},
 //清除购物车
 clearAll(state){
  state.goodsList = []
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
},

// 地址相关
setAddress(state,info) {
  info.id = state.addressList.length
  state.addressList.push(info) 
     //保存到本地存储
     localStorage.setItem('addresslist', JSON.stringify(state.addressList));
 
},
// 删除地址
deleteAddress(state,info){
  state.addressList.forEach((n,i) =>{
    if(n.id== info.id){
      state.addressList.splice(i,1)
    }
  })
   //更新本地存储
   localStorage.setItem('addresslist', JSON.stringify(state.addressList));
 
},
// 清空地址列表
clearAllAddressList(state){
  state.addressList = []
   //更新本地存储
   localStorage.setItem('addresslist', JSON.stringify(state.addressList));
 
},
// 设置选中的地址
setSelectedAddress(state,info) {
  state.addressList.forEach((n,i) =>{
    if(n.id== info.id){
      state.selectedAddress = state.addressList[i]
    }
  })
   //更新本地存储
   localStorage.setItem('selectedaddress', JSON.stringify(state.selectedAddress));
 
},

  // 订单相关

  setMyOder(state,info) {
    
    state.myOrderList.push(info)
    let arr = state.goodsList.filter(n=> {
      return !n.checked 
    })
    state.goodsList = arr

 //更新本地存储
   localStorage.setItem('myorderlist', JSON.stringify(state.myOrderList));
   
   localStorage.setItem('cartList', JSON.stringify(state.goodsList));
 
  }



}



export default  {
  state,
  getters,
  actions,
  mutations
}