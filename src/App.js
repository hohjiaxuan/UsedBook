import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  NavigationBar from './components/header/NavigationBar';
import HeaderSearch from './components/header/HeaderSearch';
import  Menu  from './components/header/Menu';
import Footer from './components/footer/Footer';
import { ContactUs } from './ContactUs';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { About } from './About';
import  HomePage  from './HomePage';
import { Shop } from './Shop';
import { NewBook } from './NewBook';

function App() {
  return (

    <React.Fragment>
      <Router>
        <NavigationBar />
        <HeaderSearch />
        <Menu />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/Shop" component={Shop} />
          <Route exact path="/newBook" component={NewBook} />
          <Route exact path="/" component={About} />
          
        </Switch>

        <Footer></Footer>

      </Router>
    </React.Fragment>
  );
}

export default App;