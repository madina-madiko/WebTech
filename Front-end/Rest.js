import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';
import Hardrock from './rests/hardrock';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Restaurants extends Component {
  render() {
    return (
      <div className='down'>
      <header/>
        <div className='container-fluid-rest'>
          <div className="row text-center">
            <div className="col-md-8 col-md-offset-2">
              <h2 className="textratat-rest">Restaurants</h2>
              <div className="list-group">
                  <Link to="/rests/hardrock" className="list-group-item">Hard Rock</Link>
                  <Link to="#" className="list-group-item">La Pasizhu</Link>
                  <Link to="#" className="list-group-item">Borgo Antico</Link>
                  <Link to="#" className="list-group-item">AmurE</Link>
                  <Link to="#" className="list-group-item">Pirate</Link>
                  <Link to="#" className="list-group-item">Han</Link>
                  <Link to="#" className="list-group-item">Racha Chacha</Link>
                  <Link to="#" className="list-group-item">Barstol & Kok</Link>
                  <Link to="#" className="list-group-item">Korean House</Link>
                  <Link to="#" className="list-group-item">G Balik</Link>
                  <Link to="#" className="list-group-item">DOM</Link>
              </div>
            </div>
          </div>
        </div>     
      </div>
      
    );
  }
}

export default Restaurants;
