import produce from 'immer';
import { reduce } from 'lodash';

const ADD_PRODUCT_TO_CART = '/reducers/cart/ADD_PRODUCT_TO_CART';
const MINUS_PRODUCT = '/reducers/cart/MINUS_PRODUCT';
const PLUS_PRDOUCT = '/reducers/cart/PLUS_PRDOUCT';
const REMOVE_PRODUCT = '/reducers/cart/REMOVE_PRODUCT';
const CLEAR_ITEMS = '/reducers/cart/CLEAR_ITEMS';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
        if (!draft.items[action.product.id]) {
          draft.items[action.product.id] = [];
        }
        draft.items[action.product.id].push(action.product);
        break;
      case PLUS_PRDOUCT:
        draft.items[action.id].push(draft.items[action.id][0]);
        //console.log(JSON.stringify(draft.items[action.id]));
        break;
      case MINUS_PRODUCT:
        if (draft.items[action.id].length > 1) {
          draft.items[action.id].shift();
        }
        break;
      case REMOVE_PRODUCT:
        delete draft.items[action.id];
        break;
      case CLEAR_ITEMS:
        draft.items = {};
        break;
      default:
    }
    // обычный reduce нельзя применять на объекте {}
    // соединяем предыдущий объект с действующим, начинаем с пустого []

    const resultArr = reduce(
      draft.items,
      function (prev, current) {
        return prev.concat(current);
      },
      [],
    );
    // reduce не из lodash
    draft.totalPrice = resultArr.reduce((total, obj) => obj.price + total, 0);
    draft.totalCount = resultArr.length;
  });
};

//ActionsCreators
export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const plusItem = (id) => ({
  type: PLUS_PRDOUCT,
  id,
});

export const minusItem = (id) => ({
  type: MINUS_PRODUCT,
  id,
});

export const removeItemById = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const clearAllItems = () => ({
  type: CLEAR_ITEMS,
});

export default cartReducer;
