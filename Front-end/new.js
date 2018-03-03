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
      <div className='down'>
		<div className="container-fluid-news">
			<div className="col-md-8-neew col-md-offset-2">
						<div className="fh5co-owl-text-wrap">
						<div className="fh5co-owl-text text-center to-animate">
						<h1 className="textratat-news">Here some news about restaurants</h1>
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

					<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				
            <img className="img-responsive img-rounded to-animate" src={pic1} alt="pic1"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Terrasa</h4>
						<p className="textofnews">Only this week you have opportunity to get all the dishes of the main menu with -30%. Come and get it</p>
						<p className="textofnews">Read more</p>
						</div>
                 
				</div>
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				
            <img className="img-responsive img-rounded to-animate" src={pic1} alt="pic1"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Terrasa</h4>
						<p className="textofnews">Only this week you have opportunity to get all the dishes of the main menu with -30%. Come and get it</p>
						<p className="textofnews">Read more</p>
						</div>
                 
				</div>
				<div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-mb30">
				
            <img className="img-responsive img-rounded to-animate" src={pic1} alt="pic1"/>
						<div  className="list-group-item-new">
						<h4 className = "textofname">Terrasa</h4>
						<p className="textofnews">Only this week you have opportunity to get all the dishes of the main menu with -30%. Come and get it</p>
						<p className="textofnews">Read more</p>
						</div>
                 
				</div>
				</div>			

						</div>
						
			
				</div>
			</div>
			<h7>.</h7>
		</div>
		
    </div>
    );
  }
}

export default New;
