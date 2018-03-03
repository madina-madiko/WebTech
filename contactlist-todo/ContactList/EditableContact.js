import React, { Component } from 'react';
import Contact from './Contact.js';
import ContactForm from './ContactForm.js'

class EditableContact extends Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };
    handleSubmit = (contact) => {
        this.props.onFormSubmit(contact);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({
            editFormOpen: false
        });
    };

    openForm = () => {
        this.setState({
            editFormOpen: true
        });
    };

    render() {
        if(this.state.editFormOpen)
        {
            return (
                <ContactForm
                id={this.props.id}
                full_name={this.props.full_name}
                phone={this.props.phone}
                onFormSubmit={this.handleSubmit}
                onFormClose={this.handleFormClose}
                />
            );
        } else {
            return(
                <Contact 
                    id={this.props.id}
                    full_name={this.props.full_name}
                    phone={this.props.phone}
                    email={this.props.email}
                    address={this.props.address}
                    status={this.props.status}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                />
            );
        }
    }
}

export default EditableContact;