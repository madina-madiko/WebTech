import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';
import pic1 from './image/pic1.jpg';
import pic2 from './image/pic2.jpg';
import pic3 from './image/pic3.jpg';
import pic4 from './image/pic4.jpg';

class New extends Component {
  render() {
    return (
      <div>
                <header id="fh5co-header" role="banner">
                <nav className="navbar navbar-default" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header"> 
                    <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#fh5co-navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                    <a className="navbar-brand" href="index.html">Ratatouille</a>
                    </div>
                    <div id="fh5co-navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="App.js"><span>Main <span className="border"></span></span></a></li>
							<li ><a href="Rest.js"><span> Restaurants <span className="border"></span></span></a></li>
							<li className="active"><a href="new.js"><span> New <span className="border"></span></span></a></li>
							<li><a href="elements.html"><span> Basket <span className="border"></span></span></a></li>
						</ul>
                    </div>
                </div>
                </nav>
            </header>
		<div className="container-fluid-news" id="fh5co-main">
		<div id="fh5co-features">
			<div className="col-md-8-rest col-md-offset-2">
						<div className="fh5co-owl-text-wrap">
						<div className="fh5co-owl-text text-center to-animate">
						<h1 className="textratat">NEWS</h1>
						<h1 className="textratat-s">Here some news about restaurants</h1>
						<div className="row-pic">
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				
            <img className="img-responsive img-rounded to-animate" src={pic1} alt="pic1"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Terrasa</h4>
						<p className="textofnews">Only this week you have opportunity to get all the dishes of the main menu with -30%. Come and get it</p>
						<p className="textofnews">Read more</p>
						</div>
                 
				</div>
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				
                        <img className="img-responsive img-rounded to-animate" src={pic2} alt="pic2"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Chilli</h4>
						<p className="textofnews">Order 3 pizzas and receive Moscow pizza as a gift!</p>
						<p className="textofnews">Read more</p>
						</div>
				
				</div>
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				      <img className="img-responsive img-rounded to-animate" src={pic3} alt="pic3"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Mezza Luna</h4>
						<p className="textofnews">At the order for the sum more than 3000 tenges - Coca cola 1L as a gift!</p>
						<p className="textofnews">Read more</p>
					</div>
					
				</div>
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
					
            <img className="img-responsive img-rounded to-animate" src={pic4} alt="pic4"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Sliffky</h4>
						<p className="textofnews">Only this week you have opportunity to get all the deserts  with -15%</p>
						<p className="textofnews">Read more</p>
					</div>
					</div>
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

export default New;
