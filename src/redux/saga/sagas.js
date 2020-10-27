import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, setProducts, isLoadedAction, isLastItem } from '../reducers/products';
import { productsAPI } from '../../api/api';

async function getProducts(category, sortBy, limit) {
  const response = await productsAPI.getGoods(category, sortBy, limit);
  return await response.data;
}

function* workerGetProducts(action) {
  console.log('privet from saga');
  const data = yield call(
    getProducts,
    action.payload.category,
    action.payload.sortBy,
    action.payload.limit,
  );
  yield put(isLoadedAction(false));
  yield put(setProducts(data.items));
  yield put(isLastItem(data.lastItem));
  yield put(isLoadedAction(true));
}

export function* watchGetProducts() {
  yield takeEvery(LOAD_DATA, workerGetProducts);
}
