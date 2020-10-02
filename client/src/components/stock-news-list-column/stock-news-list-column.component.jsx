import React from 'react'
import StockNewsList from '../stock-news-list/stock-news-list.component'
import { StockPriceListColumnContainer } from './stock-news-list-column.styles'

const StockNewsListColoumn = function ({StocknewsInfo}){
    return(
        <StockPriceListColumnContainer>
            {
                StocknewsInfo.map((stock, i) => {
                    return <StockNewsList key= {i} symbol={stock.addField} Stocknews={stock.stockNews}/>
                    })
            }  
        </StockPriceListColumnContainer>
    );
} 

export default StockNewsListColoumn