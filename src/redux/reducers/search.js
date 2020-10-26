import {productsAPI} from '../../api/api'

const SET_SEARCH_PRODUCT = '/reducers/products/SET_SEARCH_PRODUCT';
 

const initialState = {
    searchProduct: []
  };

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_PRODUCT:
          return {
            ...state,
            searchProduct: action.searchProduct,
          }
        default:
            return state;
    }
}


//ActionsCreators
export const setSearchProduct = (searchProduct) => ({
    type: SET_SEARCH_PRODUCT,
    searchProduct,
  });



export const getSearch = (name) => {
    return async (dispatch) => {
        // dispatch(isLoadedAction(false));
        let response = await productsAPI.getSearch(name);
        console.log(response)
        dispatch(setSearchProduct(response.data.items));
        // dispatch(isLoadedAction(true));
        
    }
}

export default searchReducer;