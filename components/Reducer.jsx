export const initialState = {
  //cart: null,
  cart:[],
  total: null,
  favourites:[],
};

export const actionType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_ITEM_QUANTITY:"UPDATE_ITEM_QUANTITY",
  SET_TOTAL: "SET_TOTAL",
  ADD_TO_FAVOURITES:"ADD_TO_FAVOURITES",
  REMOVE_FROM_FAVOURITES:"REMOVE_FROM_FAVOURITES",
};

const reducer = (state, action) => {
  //console.log(action.total);
  
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.itemId),
      };
    case actionType.UPDATE_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };
    case actionType.ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.item],
      };
    case actionType.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter((item) => item.id !== action.itemId),
      };
    default:
      return state;
  }
  //console.log(cart.state);

};

export default reducer;
