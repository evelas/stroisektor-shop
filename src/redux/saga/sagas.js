import { takeEvery, put, call, all } from 'redux-saga/effects';
import { productsAPI } from '../../api/api';
import { TypesProduct } from '../actions/products';
import { TypesSearch } from '../actions/search';
import { TypesOneProduct } from '../actions/oneProduct';
import { productActions, searchActions, oneProductActions } from '../actions';

// Загрузка продуктов
async function getProducts(category, sortBy, limit) {
  const response = await productsAPI.getGoods(category, sortBy, limit);
  return await response.data;
}

function* workerGetProducts(action) {
  try {
    const data = yield call(
      getProducts,
      action.payload.category,
      action.payload.sortBy,
      action.payload.limit,
    );
    yield put(productActions.isLoadedAction(false));
    yield put(productActions.setProducts(data.items));
    yield put(productActions.isLastItem(data.lastItem));
    yield put(productActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

function* watchGetProducts() {
  // следим за каждым type LOAD_DATA, как только он сработал в action, то отрабатывает worker
  // takeEvery - обрабатывать каждый LOAD_DATA
  yield takeEvery(TypesProduct.LOAD_DATA, workerGetProducts);
}

// Поиск
async function getSearch(name) {
  const response = await productsAPI.getSearch(name);
  return await response.data;
}

function* workerGetSearch(action) {
  try {
    const data = yield call(getSearch, action.payload);
    yield put(productActions.isLoadedAction(false));
    yield put(searchActions.setSearchProduct(data.items));
    yield put(productActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

function* watchSearchProducts() {
  yield takeEvery(TypesSearch.LOAD_SEARCH, workerGetSearch);
}

// Загрузка одного продукта
async function getOneProduct(id) {
  const response = await productsAPI.getProduct(id);
  return await response.data;
}

function* workerGetOneProduct(action) {
  try {
    const data = yield call(getOneProduct, action.payload);
    yield put(oneProductActions.isLoadedAction(false));
    yield put(oneProductActions.setProduct(data));
    yield put(oneProductActions.isLoadedAction(true));
  } catch (e) {
    console.log(e);
  }
}

function* watchOneProduct() {
  yield takeEvery(TypesOneProduct.LOAD_PRODUCT, workerGetOneProduct);
}

export default function* rootSaga() {
  yield all([watchGetProducts(), watchSearchProducts(), watchOneProduct()]);
}
