import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';
import './css/assets/css/font-awesome.css';
import pasta from './image/pasta.jpg';
import chicken from './image/chiken.jpg';
import briol from './image/briol.jpg';


class Basket extends Component {
    removedish(dishId) {
        this.props.removedish(dishId);
    }
    incAmount(dishId) {
        this.props.incAmount(dishId);
    }
    decAmount(dishId) {
        this.props.decAmount(dishId);
    }
    render() {
        return(
            <div className='down'>
            <header/>
            <div className="container-fluid-log">
            <div className="fh5co-owl-text-wrap">
		    <div className="fh5co-owl-text text-center to-animate">
            <h2 className="textratat">My Basket</h2>
            <div className='hzz'>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30 ">
             <div className='mybasket'>
                <img className="menupic-bask" src={pasta} onerror={pasta}/>
                {this.props.name} {this.props.price}
                 <br />
                 <br />
                 
                 <button className="btn btn-primary-basket" onClick={(e) => this.decAmount(this.props.id)}>-1</button>
                    
                 <button className="btn btn-primary-basket" onClick={(e) => this.incAmount(this.state.id)}>+1</button>
                 <h4 className='textratat-baskk' >count:</h4> {this.props.count} 
                 
                 <button className="btn btn-dele" onClick={(e) => this.removedish(this.props.id)} >Remove</button>
              </div> 
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30 ">
            <div className='mybasket'>
                <img className="menupic-bask" src={chicken} onerror={chicken}/>
                {this.props.name} {this.props.price}
                 <br />
                 <br />
                 
                 <button className="btn btn-primary-basket" onClick={(e) => this.decAmount(this.props.id)}>-1</button>
                    
                 <button className="btn btn-primary-basket" onClick={(e) => this.incAmount(this.props.id)}>+1</button>
                 <h4 className='textratat-baskk' >count:</h4> {this.props.count} 
                 
                 <button className="btn btn-dele" onClick={(e) => this.removedish(this.props.id)} >Remove</button>
               
            </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30 ">
             <div className='mybasket'>
                <img className="menupic-bask" src={briol} onerror={briol}/>
                {this.props.name} {this.props.price}
                 <br />
                 <br />
                 
                 <button className="btn btn-primary-basket" onClick={(e) => this.decAmount(this.props.id)}>-1</button>
                    
                 <button className="btn btn-primary-basket" onClick={(e) => this.incAmount(this.props.id)}>+1</button>
                 <h4 className='textratat-baskk' >count:</h4> {this.props.count} 
                 
                 <button className="btn btn-dele" onClick={(e) => this.removedish(this.props.id)} >Remove</button>
              </div> 
            </div>
            </div>
            </div>
            </div>
            </div>  
            </div>
        );
    }
}
export default Basket;














