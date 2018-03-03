import React, { Component } from 'react';
import '../css/style.css';

class Todo extends Component {

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };
    render() {
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>ToDo: {this.props.title}
                    <div className='sub header'>Priority: {this.props.priority}</div>
                    </div>
                    
                    <div className='extra content'>
                        <span className='right floated edit icon' onClick={this.props.onEditClick}>
                            <i>edit</i>
                        </span>
                        <br />
                        <span className='right floated trash icon' onClick={this.handleTrashClick}>
                            <i>del</i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;