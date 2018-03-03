import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router-dom';
import './css/style.css';
import Slider from 'react-slick';
import "./css/slick/slick.css";
import "./css/slick/slick-theme.css";
import Login from './login';
import Restaurants from './Rest';
import New from './new';
import Logsign from './logsign';
import Main from './Main';
import Basket from './bask';
import Menu from './menu';
//import { Switch } from 'react-router';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Router1 extends Component {
  render(){
    return(
      <header id="fh5co-header" role="banner">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header"> 
          <a className="navbar-brand" href="app.js">Ratatouille</a>
          </div>
          <Router>
          <div id="fh5co-navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/"><span> Main <span className="border"></span></span></Link></li>
              <li><Link to="/Rest"><span> Restaurants <span className="border"></span></span></Link></li>
              <li><Link to="/new"><span> New <span className="border"></span></span></Link></li>
              <li><Link to="/menu"> Menu </Link></li>
              <li><Link to="/logsign"> Login </Link></li>
              <li><Link to="/bask"> Basket </Link></li>
            </ul>
            <Route exact path="/" component={Main}/>
            <Route path="/logsign" component={Logsign}/>
            <Route path="/Rest" component={Restaurants}/>
            <Route path="/new" component={New}/>
            <Route path="/menu" component={Menu} />
            <Route path="/bask" component={Basket}/>
          </div>
          </Router>
        </div>
      </nav>
    </header>
    );
  }
}


class App extends Component {
  render(){
    return (
      
      <div>
     <Router1/>  
		</div>
     
    );
  }
}
export default App;





