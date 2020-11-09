import React from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import styled from 'styled-components';
import {Navbar, Nav, } from './style';

// const Styles = styled.div`
//   .navbar { background-color: #fedd9c; }
//   a, .navbar-nav, .navbar-light .nav-link {
      
//     color: #2a0101;
//     &:hover { color: white; }
//   }
// `;

export default class Menu extends React.Component {
  render() {
    return (
      <Navbar>
        <Nav className="menu">
          {/* <NavItem><Item Link = "/homePage">首页</Item></NavItem> 
          <NavItem><Item Link = "/Shop">书店</Item></NavItem> 
          <NavItem><Item Link = "/newBook">新书</Item></NavItem> 
          <NavItem><Item Link = "/">在线拍卖</Item></NavItem> 
          <NavItem><Item Link = "/">社区</Item></NavItem>  */}
        </Nav>
      </Navbar>
    );
  }
}

