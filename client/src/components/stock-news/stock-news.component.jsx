import React from 'react'
import {StockNewsContainer,NewsImage} from  './stock-news.styles'

const StockNews = function({news_url, image_url, title, text, source_name, date}){
    return(
        <StockNewsContainer>
            <NewsImage src={image_url} alt='NewsImages'></NewsImage>
                <h2>{title}</h2>
                <p>{text}</p>
                <a href={news_url}>Click Me</a> 
                <span>Source {source_name}</span>
                <span>Date {date}</span>
        </StockNewsContainer>
    )
}

export default StockNews