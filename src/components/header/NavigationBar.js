import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
import {HeaderWrapper, Nav, NavItem} from './style';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <Nav className='navigation'>
          <NavItem className='left active'>客服</NavItem>
          <NavItem className='left'>手机版</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>注册</NavItem>
          <NavItem className='right'>个人中心</NavItem>
        </Nav>
      </HeaderWrapper>
    );
  }
}
