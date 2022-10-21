const initialStore = {
  user: {},
  order: {
    products: [],
    total: 0,
  }, 
  isBasketVisible: false
}

const calculateTotal = (array) => {
  let total = 0
  for (let item of array) {
    console.log(item.price * item.amount)
    total += parseFloat(item.price)*parseFloat(item.amount)
    console.log(total.toFixed(2))
  }
  return total.toFixed(2)

}

const reducer = (state = initialStore, action) => {
  if (action.type === "ADD_TO_BASKET") {
    const currentProduct = state.order.products.filter(e => e.name === action.payload.name) //change this to ID to increase accuracy
    console.log('currentProduct: ', currentProduct)
    console.log('action.payload: ', action.payload)
    if (currentProduct.length > 0) {
      currentProduct[0].price = action.payload.price //TODO why price comes in as undefined the first time?
      currentProduct[0].amount = action.payload.amount
      console.log(state)
      return {
        ...state,
        order: {
          products: [...state.order.products],
          total: calculateTotal([...state.order.products])   
        }
      }

    } else {
      return {
        ...state,
        order: {
          products: [...state.order.products, action.payload],
          total: calculateTotal([...state.order.products, action.payload])   
        }
      }
    }
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
