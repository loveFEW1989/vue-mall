import Vue from 'vue'
const state = {

  goodsList: JSON.parse(localStorage.getItem('cartList') || '[]'), // 商品列表，刚开始为空
  addressList: JSON.parse(localStorage.getItem('addresslist') || '[]'), // 地址列表
  selectedAddress: JSON.parse(localStorage.getItem('selectedaddress') || '{}')|| state.addressList[0], //选中的地址列表
  myOrderList: JSON.parse(localStorage.getItem('myorderlist') || '[]'), //订单列表
  defaultAddress: JSON.parse(localStorage.getItem('defaultaddress') || '{}') //默认地址
}

const getters = {
  // 获取到所有的地址列表
  allAddressList(state) {
    return state.addressList.concat(state.selectedAddress)
  },
  // 地址列表（不包括已选中的地址）
  addressList(state) {
    return state.addressList
  },
  addressInfo(state) {
    return state.addressList[state.addressList.length - 1]
  },
  // 已选中的地址
  selectedAddress(state) {
    return state.selectedAddress
  },
  getdefaultAddress(state) {
    return state.defaultAddress
  },
  // 获取订单列表
  getmyOrderList(state) {
    return state.myOrderList
  },
  // 购物车列表
  getGoodsList(state) {
    return state.goodsList
  },
  // 总价钱
  getTotalPrice: (state, getters) => {
    let totalPrice = 0
    getters.getGoodsList.forEach(n => {
      if (n.checked) {
        totalPrice += n.present_price *
          n.count
      }

    })
    return totalPrice
  },
 
  // 获取所有还没有选中的商品的数组
  notCheckedList(state) {
    return state.goodsList.filter(item => !item.checked)
  },
  // 所有选中的商品列表
  allCheckedList(state) {
    return state.goodsList.filter(item => item.checked)
  }
}

const actions = {

}


const mutations = {
  // 把商品添加到购物车

  addGoods(state, goods) {
    const oldGoods = state.goodsList.find(item => item.id === goods.id)
    if (oldGoods) {
      oldGoods.count++
    } else {
      state.goodsList.push({
        ...goods,
        count: 1,
        checked: false
      })
    }
    //保存到本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));
  },

  //  修改购物车商品数量
  updateGoodsInfo(state, goodsInfo) {
    state.goodsList.some(item => {
      if (item.id === goodsInfo.id) {
        item.count = parseInt(goodsInfo.count)
        return true
      }
    })
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },
  // 增加商品数量
  add(state, good) {
    const oldGoods = state.goodsList.find(item => item.id === good.id)
    oldGoods.count++
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },
  // 减少商品数量
  reduce(state, good) {
    const oldGoods = state.goodsList.find(item => item.id === good.id)
   oldGoods.count--
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },

  // 更新单个商品的选中状态
  updateGoodsChecked(state, val) {

    state.goodsList.forEach(item => {
      if (item.id == val.id) {
        item.checked = !item.checked
      }

    })


    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },
  // 更新全选反选切换
  updateGettersGoodsChecked(state, data) {

    for (let i in state.goodsList) {
      let item = state.goodsList[i]
      item.checked = data.status
      Vue.set(state.goodsList, i, item)
    }
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },


 
  //  删除单个商品
  del(state, product) {
    state.goodsList.forEach((n, i) => {
      if (n.id == product.id) {
        state.goodsList.splice(i, 1)
      }
    })
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },
  //清除购物车
  clearAll(state) {
    state.goodsList = []
    //更新本地存储
    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },

  // 地址相关


  // 新增地址
  setAddress(state, info) {
    info.id = state.addressList.length
    state.addressList.push(info)
    //保存到本地存储
    localStorage.setItem('addresslist', JSON.stringify(state.addressList));

  },


  // 编辑地址
  editAddress(state, info) {
    state.addressList.forEach((n, i) => {
      if (n.id == info.id) {
        state.addressList[i] = info
      }
    })
    //保存到本地存储
    localStorage.setItem('addresslist', JSON.stringify(state.addressList));

  },

  // 删除地址
  deleteAddress(state, info) {
    state.addressList.forEach((n, i) => {
      if (n.id == info.id) {
        state.addressList.splice(i, 1)
      }
    })
    //更新本地存储
    localStorage.setItem('addresslist', JSON.stringify(state.addressList));

  },

  // 清空地址列表
  clearAllAddressList(state) {
    state.addressList = []
    //更新本地存储
    localStorage.setItem('addresslist', JSON.stringify(state.addressList));

  },

  // 设置选中的地址
  setSelectedAddress(state, info) {
    state.addressList.forEach((n, i) => {
      if (n.id == info.id) {
        state.selectedAddress = state.addressList[i]
      }
    })
    //更新本地存储
    localStorage.setItem('selectedaddress', JSON.stringify(state.selectedAddress));

  },

  // 设置默认地址
  setDefaultAddress(state, info) {
    state.defaultAddress = info
    //更新本地存储
    localStorage.setItem('defaultaddress', JSON.stringify(state.defaultAddress));

  },
 


  // 订单相关

    // 订单加入到订单列表
  setMyOder(state, info) {

    state.myOrderList.push(info)
    let arr = state.goodsList.filter(n => {
      return !n.checked
    })
    state.goodsList = arr

    //更新本地存储
    localStorage.setItem('myorderlist', JSON.stringify(state.myOrderList));

    localStorage.setItem('cartList', JSON.stringify(state.goodsList));

  },

  // 清空所有订单
  clearMyOders(state) {
    state.myOrderList = []
    //更新本地存储
    localStorage.setItem('myorderlist', JSON.stringify(state.myOrderList));

  }


}



export default {
  state,
  getters,
  actions,
  mutations
}
