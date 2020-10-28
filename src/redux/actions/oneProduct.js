export const TypesOneProduct = {
  SET_PRODUCT: '/reducers/oneProduct/SET_PRODUCT',
  IS_LOADED: '/reducers/oneProduct/IS_LOADED',
  LOAD_PRODUCT: '/reducers/oneProduct/LOAD_PRODUCT',
};

const Actions = {
  setProduct: (product) => ({
    type: TypesOneProduct.SET_PRODUCT,
    payload: product,
  }),
  isLoadedAction: (isLoad) => ({
    type: TypesOneProduct.IS_LOADED,
    payload: isLoad,
  }),
  loadOneProduct: (id) => ({
    type: TypesOneProduct.LOAD_PRODUCT,
    payload: id,
  }),
};

export default Actions;
