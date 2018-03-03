import React, { Component } from 'react';
//import {Router, Route} from 'react-router';
import ReactDOM from 'react-dom';
//import { Router, Route } from 'react-router-dom';
import './css/style.css';
import Slider from 'react-slick';
import "./css/slick/slick.css";
import "./css/slick/slick-theme.css";


class Main extends Component {
  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className='down'>
        <header/>
      <div className="container-fluid-app">
       <div id="fh5co-features">
        <div className="col-md-8 col-md-offset-2">
        <Slider className="slider" {...settings}>
            <div>
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                    <h1 className="textratat">Ratatouille</h1>
                    <h1 className="textratat-s">Here you can order dishes at restaurant from the house, and dishes will be ready to your arrival
                    </h1>
                  </div>
                </div>
            </div>
            <div>
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                  <h1 className="textratat">Restaurant</h1>
                  <h1 className="textratat-s">Choose restaurant and pass to the menu</h1>
                  </div>
                </div>
            </div>
            <div>
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                  <h1 className="textratat">Make an order</h1>
                  <h1 className="textratat-s">Make an order from menu and check the basket</h1>
                  </div>
                </div>
            </div>
            <div>
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                  <h1 className="textratat">Payment</h1>
                  <h1 className="textratat-s">Make a payment and get your order in restaurant</h1>
                  </div>
                </div>
            </div>
          </Slider>	
        </div>
       </div>
      </div>    
     </div>
    );
  }
}
export default Main;





