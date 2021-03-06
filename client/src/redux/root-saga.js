import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { stockPricesSagas } from './stock-price/stock-price.sagas'
import { stockNewsSagas } from './stock-news/stock-news.sagas'

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas), call(stockPricesSagas), call(stockNewsSagas)]);
}
