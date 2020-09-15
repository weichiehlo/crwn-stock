import React, {useEffect} from 'react';

import { StockPriceContainer } from './pricepage.styles';
import { fetchStockPricesStart } from '../../redux/stock-price/stock-price.actions.js'
import { connect } from 'react-redux';
import { selectStockPrices } from '../../redux/stock-price/stock-price.selectors.js'
import { createStructuredSelector } from 'reselect';

const PricePage = ({fetchStockPricesStart,stockPrices}) => {
  
  useEffect(() => {
    fetchStockPricesStart('JETS');
  }, [fetchStockPricesStart]);

  console.log('-------------')
  console.log(stockPrices)

  return (
    <StockPriceContainer>
      <div>
        This is suppose to display prices for a stock
      </div>
    </StockPriceContainer>
  );
}


const mapStateToProps = createStructuredSelector({
  stockPrices: selectStockPrices
});

const mapDispatchToProps = dispatch => ({
  fetchStockPricesStart: (symbol) => dispatch(fetchStockPricesStart(symbol))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PricePage);
