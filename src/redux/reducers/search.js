import { TypesSearch } from '../actions/search';

const initialState = {
  searchProduct: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesSearch.SET_SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
