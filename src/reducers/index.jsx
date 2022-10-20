const initialStore = {
  band: '',
  songs: [],
  visibleRes: false,
  favourites: [],
  error: ''
  
}

const reducer = (state = initialStore, action) => {
  if (action.type === "ADD_TO_BASKET") {
      return {
          ...state,
          order: [...state['order'], action.payload]
      }
  }
  return state
}

export default reducer