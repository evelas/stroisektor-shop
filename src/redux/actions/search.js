export const TypesSearch = {
  SET_SEARCH_PRODUCT: '/reducers/search/SET_SEARCH_PRODUCT',
  LOAD_SEARCH: '/reducers/search/LOAD_SEARCH',
};

const Actions = {
  setSearchProduct: (searchProduct) => ({
    type: TypesSearch.SET_SEARCH_PRODUCT,
    payload: searchProduct,
  }),
  loadSearch: (name) => ({
    type: TypesSearch.LOAD_SEARCH,
    payload: name,
  }),
};

export default Actions;
