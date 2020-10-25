import React, {useState} from 'react';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import DonationForm from '../../components/donation-form/donation-form.component'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';



const CheckoutPage = () => {
  const [total, setTotal] = useState("")

  const onChange = (event)=>{
    const value = parseFloat(event.target.value)
    value?
    setTotal(value)
    :
    setTotal(0)
  }

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Thank You For Your Donation</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      <DonationForm onChange={onChange} value={total}/>
      <TotalContainer>Donation Amount: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </WarningContainer>
      {
        total > 0?
          <StripeCheckoutButton price={total} />
        :
        <div></div>
      }
      

    </CheckoutPageContainer>
  )
};

export default CheckoutPage;
