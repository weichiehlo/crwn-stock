import React, {useEffect, useState} from 'react';

import { StockPriceContainer } from './pricepage.styles';
import { fetchStockPricesStart } from '../../redux/stock-price/stock-price.actions.js'
import { connect } from 'react-redux';
import { selectStockPrices } from '../../redux/stock-price/stock-price.selectors.js'
import { createStructuredSelector } from 'reselect';

import StockPriceCardList from '../../components/stock-price-card-list/stock-price-card-list.component'
import AddStockForm from '../../components/add-stock-form/add-stock-form.component'

const PricePage = ({fetchStockPricesStart,stockPrices}) => {
  
  useEffect(() => {
    fetchStockPricesStart('JETS');
    fetchStockPricesStart('TSLA');
  }, [fetchStockPricesStart]);

  const [addField, setAddField] = useState("")

  console.log('-------------')
  console.log(stockPrices);
  console.log('*************')
  //

  const onChange = (event)=>{
    setAddField(event.target.value)
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    fetchStockPricesStart(addField);
    console.log(addField)
  }


  return (
    <StockPriceContainer>
      <div>
        <div>
          This is suppose to display prices for a stock
        </div>
        <AddStockForm onChange={onChange} onSubmit={onSubmit}/>
        <StockPriceCardList stocks={stockPrices}/>
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
