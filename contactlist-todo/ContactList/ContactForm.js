import React, { Component } from 'react';

class ContactForm extends Component {
    state = {
        full_name: this.props.full_name || '',
        phone: this.props.phone || '',
    };

    handleNameChange = (e) => {
        this.setState({
            full_name: e.target.value
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            full_name: this.state.full_name,
            phone: this.state.phone,
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Name:</label>
                            <input type='text' value={this.state.full_name}
                            onChange={this.handleNameChange}></input>
                        </div>
                        <div className='field'>
                            <label>Phone:</label>
                            <input type='text' value={this.state.phone}
                            onChange={this.handlePhoneChange}></input>
                        </div>
                        <div className='ui two bottom attached buttons'>
                            <button className='ui basic green button'
                            onClick={this.handleSubmit}>{submitText}</button>
                            <button className='ui basic red button'
                            onClick={this.props.onFormClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactForm;