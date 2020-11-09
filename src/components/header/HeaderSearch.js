import React from 'react';
// import { Navbar, Form, FormControl } from 'react-bootstrap';
import {HeaderWrapper, Logo, Nav, NavSearch } from './style';


// const Styles = styled.div`
//   .navbar { background-color: #FFFFFF; }

//   .form-center {
//     position: relative;
//     ${'' /* items-align: center; */}
//   }
//   .form-center-input {
//     background-color: #fc9f4d;
//     width: 500px;
    
//   }
// `;

// export const HeaderWrapper = styled.div`
//     position: relative;
//     height: 100%;
// `;

// export const Block = styled.div`
//     width: 1200px;
//     height: 100%;
//     margin: 0 auto;
//     display: flex;
//     margin-top: 50px;
//     background-color: orange;
// `;


export default class HeaderSearch extends React.Component {
  render() {
    return (
      <HeaderWrapper >
        <Logo href='/' /> 
        <Nav> <NavSearch></NavSearch> </Nav>
      </HeaderWrapper>
    );
  }
}