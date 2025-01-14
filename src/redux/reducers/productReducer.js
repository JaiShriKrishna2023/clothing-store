import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from "../actions/productAction";

  
  const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, loading: false, products: action.payload };
      case FETCH_PRODUCTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
        case ADD_PRODUCT:
          return { ...state, products:[...state.products, action.payload] };
          case UPDATE_PRODUCT:
            return { ...state, products:[...state.products, action.payload] };
      default:
        return state;
    }
  };
  
  export default productReducer;
  