import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import {render} from 'react-dom'
import './css/style.css';
import fon from './css/image/fon2.jpg';

class Login extends Component {
    render(){
        return(
        <div>
        <header id="fh5co-header" role="banner">
            <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header"> 
                <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#fh5co-navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                <a className="navbar-brand" href="app.js">Ratatouille</a>
                </div>
                <div id="fh5co-navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="app.js"><span> Main <span className="border"></span></span></a></li>
                        <li><a href="#logout"><span> Sign In <span className="border"></span></span></a></li>
                    </ul>
                </div>
            </div>
            </nav>
        </header>
<div className="container-fluid-log">
    <div className="row-log">
        <div className="col-md-8-rest col-md-push-4">    
          <h1 className = "textratat"> Log In</h1>        
            <div className="row-log">
                <form method="post">
                    <div className="col-md-6-log">
                        <div className="form-group">
                            <label for="email" className="sr-only">Email</label>
                            <input placeholder="Email" id="email" type="text" className="form-control input-lg"/>
                        </div>	
                    </div>
                    <div className="col-md-6-log">
                        <div className="form-group">
                            <label for="password" className="sr-only">Password</label>
                            <input placeholder="Password" id="password" type="password" className="form-control input-lg"/>
                        </div>	
                    </div>
                    <div className="col-md-6-log">
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary form-control-btn " value="Log in"/>
                        </div>	
                    </div>
                </form>	
           
           
            </div>

            

            

             </div>


            </div>
        
        </div>

    

    </div>

       );
    }
}
export default Login;