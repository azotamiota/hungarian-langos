const initialStore = {
  user: {},
  order: {
    products: [],
    total: 0,
  }, 
  isBasketVisible: false
}

const reducer = (state = initialStore, action) => {
  if (action.type === "ADD_TO_BASKET") {
    const currentProduct = state.order.products.filter(e => e.name === action.payload.name)
    if (currentProduct.length > 0) {
      currentProduct[0].price = action.payload.price //TODO why price comes in as undefined the first time?
      currentProduct[0].amount = action.payload.amount
      console.log(action.payload)
    } else {
      state.order.products.push(action.payload)

    }
    state.order.total = state.order.products.reduce((total, curr) => {
      return total.price + curr.price
    })[0] // now calculate the total total
    console.log(state.order.products, action.payload)
    return state
  }

  if (action.type === "SET_BASKET_VISIBILITY") {
    return {
        ...state,
        isBasketVisible: action.payload
    }
  }
  return state
}

export default reducer
