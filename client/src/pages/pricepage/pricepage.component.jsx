import React, {useEffect, useState} from 'react';

import { StockPriceContainer } from './pricepage.styles';
import { fetchStockPricesStart } from '../../redux/stock-price/stock-price.actions.js'
import { connect } from 'react-redux';
import { selectStockPrices } from '../../redux/stock-price/stock-price.selectors.js'
import { createStructuredSelector } from 'reselect';

import StockPriceCardListContainer from '../../components/stock-price-card-list/stock-price-card-list.container'
import AddStockForm from '../../components/add-stock-form/add-stock-form.component';
import {getCurrentUser,loadStockFromFireStore} from '../../firebase/firebase.utils'


const PricePage = ({fetchStockPricesStart,stockPrices}) => {
  
  
  const [addField, setAddField] = useState("")

  useEffect( () => {
    const getStocks = async()=>{
      const user = await getCurrentUser();
      const symbols = await loadStockFromFireStore(user)
      for(const symbol of symbols){
        await fetchStockPricesStart(symbol);
      }
    }
    getStocks();

  }, [fetchStockPricesStart]);


  const onChange = (event)=>{
    setAddField(event.target.value.toUpperCase())
  }

  const onSubmit = async(event)=>{
    event.preventDefault();
    await fetchStockPricesStart(addField);
  }


  return (
    <StockPriceContainer>
      <div>
        <div>
          This is suppose to display prices for a stock
        </div>
        <AddStockForm onChange={onChange} onSubmit={onSubmit}/>
        <StockPriceCardListContainer stocks={stockPrices}/>
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
