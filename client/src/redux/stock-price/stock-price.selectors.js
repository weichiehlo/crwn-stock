import { createSelector } from 'reselect';

const selectStockPrice = state => state.stockPrice;

export const selectStockPrices = createSelector(
  [selectStockPrice],
  stock => stock
);
