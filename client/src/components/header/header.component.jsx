import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectStockNames } from '../../redux/stock-price/stock-price.selectors.js'
import { signOutStart } from '../../redux/user/user.actions';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  PagesNavContainer
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart,cartItems,stockNames}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <PagesNavContainer>
      <OptionLink to='/news'>NEWS</OptionLink>
      <OptionLink to='/prices'>PRICE</OptionLink>
    </PagesNavContainer>
    <OptionsContainer>
      <OptionLink to='/checkout'>DONATE</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={()=>signOutStart({cartItems:cartItems,stockNames:stockNames})}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  stockNames: selectStockNames

});

const mapDispatchToProps = dispatch => ({
  signOutStart: (stockName) => dispatch(signOutStart(stockName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
