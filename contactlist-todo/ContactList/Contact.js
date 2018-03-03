import React, { Component } from 'react';
import ShowMore from './ShowMore.js'

class Contact extends Component {

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    render() {
        return(
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'><h2>{this.props.full_name}</h2></div>
                    <div className='meta'>{this.props.phone}</div>
                    <div className='meta'>...</div>
                    <div className='extra content'>
                        <span className='right floated edit icon'
                        onClick={this.props.onEditClick}>
                            <i>edit</i>
                        </span>
                        <br />
                        <span className='right floated trash icon' onClick={this.handleTrashClick}>
                            <i>del</i>
                        </span>
                    </div>
                </div>
                <ShowMore/>
            </div>
        );
    }
}

export default Contact;