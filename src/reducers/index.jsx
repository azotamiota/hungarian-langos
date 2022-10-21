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
    console.log('currentProduct: ', currentProduct)
    console.log('action.payload: ', action.payload)
    if (currentProduct.length > 0) {
      currentProduct[0].price = action.payload.price //TODO why price comes in as undefined the first time?
      currentProduct[0].amount = action.payload.amount
      return {
        ...state,
        order: {
          products: [...state.order.products, currentProduct[0]],
          total: state.order.total + action.payload.price
        }        
      }

    } else {
      return {
        ...state,
        order: {
          products: [...state.order.products, action.payload],
          total: state.order.total + action.payload.price       
      }

      }
    }
  }
  
  if (action.type === "REMOVE_FROM_ORDER") {
    return {
        ...state,
        // logic to remove from order
    }
  }

  if (action.type === "SET_BASKET_VISIBILITY") {
    return {
        ...state,
        isBasketVisible: !state.isBasketVisible
        // logic to remove from order
    }
  }
  return state
}

export default reducer
