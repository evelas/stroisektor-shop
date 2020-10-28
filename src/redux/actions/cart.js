export const TypesCart = {
  ADD_PRODUCT_TO_CART: '/reducers/cart/ADD_PRODUCT_TO_CART',
  PLUS_PRODUCT: '/reducers/cart/PLUS_PRDOUCT',
  MINUS_PRODUCT: '/reducers/cart/MINUS_PRODUCT',
  REMOVE_PRODUCT: '/reducers/cart/REMOVE_PRODUCT',
  CLEAR_ITEMS: '/reducers/cart/CLEAR_ITEMS',
};

const Actions = {
  addProductToCart: (product) => ({
    type: TypesCart.ADD_PRODUCT_TO_CART,
    payload: product,
  }),
  plusItem: (id) => ({
    type: TypesCart.PLUS_PRODUCT,
    payload: id,
  }),
  minusItem: (id) => ({
    type: TypesCart.MINUS_PRODUCT,
    payload: id,
  }),
  removeItemsById: (id) => ({
    type: TypesCart.REMOVE_PRODUCT,
    payload: Number(id),
  }),
  clearAllItems: {
    type: TypesCart.CLEAR_ITEMS,
  },
};

export default Actions;
