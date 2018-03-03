import React, { Component } from 'react';

class TodoForm extends Component {

    state={
        title: this.props.title || '',
        priority: this.props.priority || '',
    };

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    handlePriorityChange = (e) => {
        this.setState({
            priority: e.target.value
        });
    };

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            priority: this.state.priority,
        });
    };
    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' value={this.state.title}
                            onChange={this.handleTitleChange}/>
                        </div>
                        <div className='field'>
                            <label>Priority</label>
                            <input type='text' value={this.state.priority}
                            onChange={this.handlePriorityChange}/>
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic blue button' onClick={this.handleSubmit}>{submitText}</button>
                            <button className='ui basic red button' onClick={this.props.onFormClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoForm;