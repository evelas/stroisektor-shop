const SET_CATEGORY = '/reducers/filters/SET_CATEGORY';
const SET_SORT_BY = '/reducers/filters/SET_SORT_BY';


const initialState = {
    category: null,
    sortBy: {
      type: 'rating',
      order: 'DESC',
      active: 'rating'
    }
  };

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
          return {
            ...state,
            category: action.category,
          }

        case SET_SORT_BY:
          return {
            ...state,
            sortBy: action.payload,
          }

        default:
            return state;
    }
}


//ActionsCreators
export const setCategory = (category) => ({
    type: SET_CATEGORY,
    category,
  });

export const setSortBy = ({ type, order, active }) => ({
  type: SET_SORT_BY,
  payload: { type, order, active },
});



export default filtersReducer;