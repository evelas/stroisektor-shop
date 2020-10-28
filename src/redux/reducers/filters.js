import { TypesSearch } from '../actions/filters';

const initialState = {
  category: null,
  sortBy: {
    type: 'rating',
    order: 'DESC',
    active: 'rating',
  },
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesSearch.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case TypesSearch.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
