import React, { Component } from 'react';

import TimerForm from './TimerForm.js';

import helpers from 'C:/Users/Admin/Desktop/WEB/tracking_timer/src/helpers.js';



class ToggleableTimerForm extends React.Component {

    state ={

      isOpen: false,

    };

  

    handleFormOpen = () => {

      this.setState({ isOpen: true});

    };

  

    handleFormClose = () => {

      this.setState({ isOpen: false});

    };

  

    handleFormSubmit = (timer) => {

      this.props.onFormSubmit(timer);

      this.setState({ isOpen: false});

    };

  

    render() {

      if (this.state.isOpen) {

        return (

          <TimerForm 

            onFormSubmit={this.handleFormSubmit}

            onFormClose={this.handleFormClose}

          />

        );

      } else {

        return (

          <div className='ui basic content center aligned segment'>

            <button className='ui basic button icon'

                    onClick={this.handleFormOpen}>

              <i className='plus icon' />

            </button>

          </div>

        );

      }

    }

  }



  export default ToggleableTimerForm;
