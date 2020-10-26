const SET_TOTAL_PRICE = '/reducers/cart/SET_TOTAL_PRICE';
const SET_TOTAL_COUNT = '/reducers/cart/SET_TOTAL_COUNT';
const ADD_PRODUCT_TO_CART = '/reducers/cart/ADD_PRODUCT_TO_CART';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
  };
  const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

  const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
      return val[key];
    }, obj[firstKey]);
  };
  
  const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
      const value = _get(obj, path);
      return sum + value;
    }, 0);
  };
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:{
            const currentPizzaItems = !state.items[action.product.id]
              ? [action.product]
              : [...state.items[action.product.id].items, action.product];
      
            const newItems = {
              ...state.items,
              [action.product.id]: {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          }
            

      

        default:
            return state;
    }
}


//ActionsCreators
export const addProductToCart = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    product
})
 

export default cartReducer;