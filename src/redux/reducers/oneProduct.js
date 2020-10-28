import { TypesOneProduct } from '../actions/oneProduct';

const initialState = {
  product: {
    id: 1,
    name: '',
    imgLink: '',
    price: 0,
  },
  isLoaded: false,
};

const oneProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesOneProduct.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case TypesOneProduct.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default oneProductReducer;
