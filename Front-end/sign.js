import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import {render} from 'react-dom'
import './css/style.css';

class Sign extends Component {
    render(){
        return(
<div className="container-fluid">
    <div className="row-log">
        <div className="col-md-8-rest col-md-push-4">    
          <h1 className = "textratat-logg"> Sign In</h1>
          <div className="row-l">
                <form method="post">
                    <div className="col-md-6-log">
                        <div className="form-group">
                            <label for="name" className="sr-only">Name</label>
                            <input placeholder="Name" id="name" type="text" className="form-control input-lg"/>
                        </div>
                    </div>
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
                            <label for="gender" className="sr-only">Gender</label>
                            <select className="form-control input-lg" id="gender">
                              <option>--Gender--</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                        </div>	
                    </div>
                    <div className="col-md-6-log">
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary " value="Sign in"/>
                        </div>	
                    </div>
                </form>	
           
           
            </div>

            </div>
        
        </div>

    

    </div>

       );
    }
}
export default Sign;