import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Container, { NavbarBrand } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from '@bit/react-bootstrap.react-bootstrap.container';
// import Navbar from 'react-bootstrap/Navbar';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUser, faKey, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './App.css';

class App extends React.Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      title: '书',
      headerLinks: [
        { title:'登录 / 注册', path: '/signIn'},
        { title:'购物车', path: '/addToCart'},
        { title:'个人中心', path: '/myAccount'},
        { title:'客服', path: '/contact'},
        { title:'手机版', path: '/phone'}
      ],
      signIn: {
        title: 'Be Relentless',
        subTitle: 'Project the make a difference',
        text: 'Join Us'
      },
      addToCart: {
        title: 'Add The Items To Your Wish List'
      },
      myAccount: {
        title: 'Personal Details And Account Information'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render(){
    return (
      <Router> 
        <Container className="p-0" fluid={true}>

        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand> 书 </Navbar.Brand>
          
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <FontAwesomeIcon icon={faUser} /> <Link className="nav-link" to ="/signIn">登录 / 注册</Link> 
              <FontAwesomeIcon icon={faCartPlus} /> <Link className="nav-link" to ="/addToCart">购物车</Link>
              <FontAwesomeIcon icon={faCartPlus} /> <Link className="nav-link" to ="/myAccount">个人中心</Link>
              <FontAwesomeIcon icon={faKey} /> <Link className="nav-link" to ="/contact">客服</Link>
              <FontAwesomeIcon icon={faPhoneAlt} /> <Link className="nav-link" to ="/phone">手机版</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Footer />

        </Container>
      </Router>
    );
  }     
}

export default App;
