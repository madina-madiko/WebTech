import React, { Component } from 'react';
//import './semantic.css';
import '../css/style.css';
import ContactsDashboard from './ContactsDashboard.js'

class App extends Component {
  render() {
    return (
      <div className='down'>
      <div className='container-fluid-fon'>
        <h2 className="navbar-brand-center">
            Contacts
        </h2>
        <ContactsDashboard />
        </div>
        </div>
    );
  }
}

export default App;
