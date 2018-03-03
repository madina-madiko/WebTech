import React, { Component } from 'react';
import TodoForm from './TodoForm.js'

class InputForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    handleFormClose = () => {
        this.setState({
            isOpen: false
        });
    };

    handleFormSubmit = (todo) => {
        this.props.onFormSubmit(todo);
        this.setState({
            isOpen: false
        });
    };

    render() {
        if (this.state.isOpen) {
            return(
                <TodoForm onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}/>
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon' onClick={this.handleFormOpen}>
                        <i className='ui plus icon'></i>
                    </button>
                </div>
            );
        }
    }
}

export default InputForm;