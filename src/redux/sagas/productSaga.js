import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/productAction';
import products from '../../appData/product.json'; 

//actual api
//const fetchProductsFromApi = () => axios.get('https://fakestoreapi.com/products');

function* fetchProductsSaga() {
  try {

    //with actual api
    // const response = yield call(fetchProductsFromApi);
    // yield put(fetchProductsSuccess(response.data));

    //with mock json
    yield new Promise(resolve => setTimeout(resolve, 1000));  // Mock delay
    yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });

  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default productSaga;
