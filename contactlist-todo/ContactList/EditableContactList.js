import React, { Component } from 'react';
import EditableContact from './EditableContact.js'
class EditableContactList extends Component{
    render() {
        const contacts = this.props.contacts.map((contact) => (
            <EditableContact 
                key={contact.id}
                id={contact.id}
                full_name={contact.full_name}
                phone={contact.phone}
                email={contact.email}
                address={contact.address}
                status={contact.status}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                />
        ));
        return(
            <div id='contacts'>
                {contacts}
            </div>
        );
    }
}

export default EditableContactList;