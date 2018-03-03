import React, { Component } from 'react';
import EditableContactList from './EditableContactList.js'
import helpers from './helpers.js';
import '../css/style.css';
import InputForm from './InputForm';


class ContactsDashboard extends Component {
    state = {
        contacts: [{
            id: helpers.guid(),
            full_name: 'Ian Somerholder',
            phone: '+356 705 545 42',
            email: 'ianpuppies@gmail.com',
            address: '090000 Atlanta, Gorden st., 219',
            status: 'Teacher'
        }, {
            id: helpers.guid(),
            full_name: 'Theo Raeken',
            phone: '+356 567 545 12',
            email: 'theo.raeken@gmail.com',
            address: '050000 New York, Torment st., 70',
            status: 'Student'
        }, {
            id: helpers.guid(),
            full_name: 'Will Tudor',
            phone: '+356 705 123 76',
            email: 'will.tudor@gmail.com',
            address: '090000 Kanzas, Verden st., 135',
            status: 'Student'
        }],
    };

    handleEditFormSubmit = (attrs) => {
        this.updateContact(attrs);
    };

    updateContact = (attrs) => {
        this.setState({
            contacts: this.state.contacts.map((contact) => {
                if(contact.id === attrs.id) {
                    return Object.assign({}, contact, {
                        full_name: attrs.full_name,
                        phone: attrs.phone,
                    });
                } else {
                    return contact;
                }
            }),
        });
    };
    handleCreateFormSubmit = (contact) => {
        this.createContact(contact);
    };

    createContact = (contact) => {
        const t = helpers.newContact(contact);
        this.setState({
            contacts: this.state.contacts.concat(t),
        });
    };
    handleTrashClick = (contactId) => {
        this.deleteContact(contactId);
    };

    deleteContact = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(t => t.id !== contactId),
        });
    };

    
    render() {
        return (
            <div className='container-fluid'>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search..."/>
                            <i className="search icon"></i>
                        </div>
                    <div className="results"></div>
                </div>
                <h2> </h2>

                <EditableContactList contacts={this.state.contacts}
                    onFormSubmit={this.handleEditFormSubmit}
                    onTrashClick={this.handleTrashClick}/>
                <InputForm onFormSubmit={this.handleCreateFormSubmit}/>
            </div>
        );
    }
}

export default ContactsDashboard;