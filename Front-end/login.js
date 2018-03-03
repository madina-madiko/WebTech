import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';
import fon from './css/image/fon2.jpg';
import Sign from './sign';

class Login extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row-log">
                    <div className="col-md-8-rest col-md-push-4">    
                    <h1 className = "textratat-logg"> Log In</h1>        
                        <div className="row-l">
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
                        <h7>.</h7>
                    </div>

    


       );
    }
}
export default Login;