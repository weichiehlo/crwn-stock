import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectStockNames } from '../../redux/stock-price/stock-price.selectors.js';
import { signOutStart } from '../../redux/user/user.actions';


import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  PagesNavContainer
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart,stockNames}) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <PagesNavContainer>
      <OptionLink to='/news'>NEWS</OptionLink>
      <OptionLink to='/prices'>PRICE</OptionLink>
    </PagesNavContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={()=>signOutStart(stockNames)}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  stockNames: selectStockNames

});

const mapDispatchToProps = dispatch => ({
  signOutStart: (stockName) => dispatch(signOutStart(stockName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
