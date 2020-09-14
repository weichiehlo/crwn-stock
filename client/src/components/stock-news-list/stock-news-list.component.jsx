import React from 'react'
import StockNews from  '../stock-news/stock-news.component'
import {StockNewsListContainer} from './stock-news-list.styles'

const StockNewsList = function({symbol, Stocknews}){
    return(
        <StockNewsListContainer>
            <h1>Stock News for {symbol}</h1>
            {
                Stocknews.map((news,index)=>{
                    const {news_url, image_url, title, text, source_name, date} = news;
                    return (
                        <StockNews key = {index} news_url={news_url} image_url={image_url} 
                        title={title} text={text} source_name={source_name} date={date}/>
                    )
                })
            }
        </StockNewsListContainer>
    )
}

export default StockNewsList