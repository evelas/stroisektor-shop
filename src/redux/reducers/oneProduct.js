import { productsAPI } from '../../api/api'

const SET_PRODUCT = '/reducers/oneProduct/SET_PRODUCT';
const IS_LOADED = '/reducers/oneProduct/IS_LOADED';

const initialState = {
    product: {
        id: 1,
        name: '',
        imgLink: '',
        price: 0
    },
    isLoaded: false
}

const oneProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        case IS_LOADED:
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        default:
            return state;
    }
}

// Action Creators
export const setProduct = (product) => ({
    type: SET_PRODUCT,
    product
})

export const isLoadedAction = (isLoaded) => ({
    type: IS_LOADED,
    isLoaded
})

// Thunk Creators
export const getOneProduct = (id) => {
    return async (dispatch) => {
        dispatch(isLoadedAction(false));
        let response = await productsAPI.getProduct(id);
        dispatch(setProduct(response.data));
        dispatch(isLoadedAction(true));
    }
}

export default oneProductReducer;