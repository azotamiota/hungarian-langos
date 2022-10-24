export function updateBasket( order ) {

    return {
        type: "AMEND_BASKET",
        payload: order
    }

}

export function removeFromOrder( item ) {

  return {
      type: "REMOVE_FROM_ORDER",
      payload: item
  }

}

export function basketVisibility(bool) {

  return {
      type: "SET_BASKET_VISIBILITY",
      payload: bool
  }
  
}
