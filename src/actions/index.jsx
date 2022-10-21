export function addOrderToBasket( order ) {

    return {
        type: "ADD_TO_BASKET",
        payload: order
    }

}

export function removeFromOrder( item ) {

  return {
      type: "REMOVE_FROM_ORDER",
      payload: item
  }

}

export function basketVisibility() {

  return {
      type: "SET_BASKET_VISIBILITY",
  }
  
}
