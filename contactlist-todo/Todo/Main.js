import React, { Component } from 'react';
import TodoDashboard from './TodoDashboard.js'
import './semantic.css';
import './App.css';

class Main extends Component {
  render() {
    return (
      <div className='dow'>
      <div className='container-fluid-fon'>
    <TodoDashboard />
    </div>
    </div>
    );
  }
}

export default Main;
