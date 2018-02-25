import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';

class Restaurants extends Component {
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
            <li className="active"><a href="Rest.js"><span> Restaurants <span className="border"></span></span></a></li>
            <li><a href="new.js"><span> New <span className="border"></span></span></a></li>
            <li><a href="elements.html"><span> Basket <span className="border"></span></span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <div className="container-fluid-rest" id="fh5co-main">
		<div id="fh5co-features">
				<div className="row-rest text-center">
					<div className="col-md-8-rest col-md-offset-2">
						<h2 className="textratat" id="list">Restaurants</h2>
            <div className="list-group">
                <a href="hardrock.html" className="list-group-item">Hard Rock</a>
                <a href="#" className="list-group-item">La Pasizhu</a>
                <a href="#" className="list-group-item">Borgo Antico</a>
                <a href="#" className="list-group-item">AmurE</a>
                <a href="#" className="list-group-item">Pirate</a>
                <a href="#" className="list-group-item">Han</a>
                <a href="#" className="list-group-item">Racha Chacha</a>
                <a href="#" className="list-group-item">Barstol & Kok</a>
                <a href="#" className="list-group-item">Korean House</a>
                <a href="#" className="list-group-item">G Balik</a>
                <a href="#" className="list-group-item">DOM</a>
            </div>
				</div>
			</div>
		</div>
  </div>
  </div>
    );
  }
}

export default Restaurants;
