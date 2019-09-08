const state = {
  added : []
}

const getters = {
  // 购物车列表
  cartProducts: state=> state.added
}

const actions = {
  // 添加到购物车
  addToCart({commit},product) {
    commit('add',{
      product
    })
  }
}


const mutations = {
// 添加到购物车
add(state,product) {
  let record = state.added.find((n)=> {
     n.id==product.id
  })
  console.log(record.length)
  if(!record || record.length ==0 ) {
    state.added.push({
      ...product,
      num:1
    })
  } else {
    record.num++
  }
  console.log('加入购物车~~~')
}

}


export default  {
  state,
  getters,
  actions,
  mutations
}