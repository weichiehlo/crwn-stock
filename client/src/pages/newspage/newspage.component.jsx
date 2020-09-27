import React from 'react';

import StockNewsList from '../../components/stock-news-list/stock-news-list.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchStockNewsStart } from '../../redux/stock-news/stock-news.actions'

import { NewsPageContainer } from './newspage.styles';
import { selectStockNews } from '../../redux/stock-news/stock-news.selectors'

const NewsPage = ({fetchStockNewsStart,stockNews}) => {



 console.log(stockNews)
  return (
    <NewsPageContainer>
       <button onClick={()=>fetchStockNewsStart('JETS')}> this is a button</button>
       <StockNewsList symbol={'JETS'} Stocknews={stockNews}/>
    </NewsPageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
    stockNews: selectStockNews
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchStockNewsStart: (symbol) => dispatch(fetchStockNewsStart(symbol))
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewsPage);
