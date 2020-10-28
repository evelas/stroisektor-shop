export const TypesSearch = {
  SET_CATEGORY: '/reducers/filters/SET_CATEGORY',
  SET_SORT_BY: '/reducers/filters/SET_SORT_BY',
};

const Actions = {
  setCategory: (category) => ({
    type: TypesSearch.SET_CATEGORY,
    payload: category,
  }),
  setSortBy: ({ type, order, active }) => ({
    type: TypesSearch.SET_SORT_BY,
    payload: {
      type,
      order,
      active,
    },
  }),
};

export default Actions;
