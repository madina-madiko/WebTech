import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router-dom';
import './css/style.css';
import Login from './login';
import Sign from './sign';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Router2 extends Component {
  render(){
    return (
        <div className='down'>
               <div className="container-fluid-log">
                    <Router>
                    <div id="fh5co-navbar" className="navvbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/"><span><input type="submit" className="btn btn-primary form-control-btn " value="Log in"/> <span className="border"></span></span></Link></li>
                        <li><Link to="/sign"><span><input type="submit" className="btn btn-primary form-control-btn " value="Sign in"/><span className="border"></span></span></Link></li>
                    </ul>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/sign" component={Sign}/>
                    </div>
                    </Router>
                </div>
          
     </div>
    );
  }
}

class Logsign extends Component {
    render(){
        return(
            <div>
             <Router2/>  
            </div>
        );
    }
}
export default Logsign;





