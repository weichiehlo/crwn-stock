import React from 'react'
import {StockPriceContainer, RobotImage, RobotInfo,RobotTitle} from './stock-price-card.styles.jsx'




const StockPriceCard = function({id, name, price, average, max, min}){
    return(
        
        <StockPriceContainer>
            <RobotTitle>{name}</RobotTitle>
            <RobotImage src={`https://robohash.org/${id}?200x200`} alt='robots'></RobotImage>
            <RobotInfo>
                <p>Current Price ${price}</p>
                <p>Daily Average Price ${average}</p>
                <p>Daily High ${max}</p>
                <p>Daily Low ${min}</p>
            </RobotInfo>
        </StockPriceContainer>
    )
}

export default StockPriceCard