export function addOrderToBasket( show ) {

    return {
        type: "ADD_TO_BASKET",
        payload: show
    }

}

export function removeFromOrder( show ) {

  return {
      type: "REMOVE_FROM_ORDER",
      payload: show
  }

}