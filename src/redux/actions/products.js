export const TypesProduct = {
  SET_PRODUCTS: '/reducers/products/SET_PRODUCTS',
  IS_LOADED: '/reducers/products/IS_LOADED',
  IS_LAST_ITEM: '/reducers/products/IS_LAST_ITEM',
  SET_NEW_LIMIT: '/reducers/products/SET_NEW_LIMIT',
  LOAD_DATA: '/reducers/products/LOAD_DATA',
};

const Actions = {
  setProducts: (product) => ({
    type: TypesProduct.SET_PRODUCTS,
    payload: product,
  }),
  isLoadedAction: (isLoaded) => ({
    type: TypesProduct.IS_LOADED,
    payload: isLoaded,
  }),
  isLastItem: (lastItem) => ({
    type: TypesProduct.IS_LAST_ITEM,
    payload: lastItem,
  }),
  setNewLimit: (limit) => ({
    type: TypesProduct.SET_NEW_LIMIT,
    payload: limit,
  }),
  loadData: (category, sortBy, limit) => ({
    type: TypesProduct.LOAD_DATA,
    payload: {
      category,
      sortBy,
      limit,
    },
  }),
};

export default Actions;
