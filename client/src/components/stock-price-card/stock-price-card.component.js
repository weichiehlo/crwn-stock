import React from 'react'
import {StockPriceContainer, RobotImage} from './stock-price-card.styles.jsx'




const StockPriceCard = function({id, name, price, average, max, min}){
    return(
        
        <StockPriceContainer>
            <RobotImage src={`https://robohash.org/${id}?200x200`} alt='robots'></RobotImage>
            <div>
                <h2>{name}</h2>
                <p>Current Price ${price}</p>
                <p>Daily Average Price ${average}</p>
                <p>Daily High ${max}</p>
                <p>Daily Low ${min}</p>
            </div>
        </StockPriceContainer>
    )
}

export default StockPriceCard