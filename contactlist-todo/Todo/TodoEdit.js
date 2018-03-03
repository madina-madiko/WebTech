import React, { Component } from 'react';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js';

class TodoEdit extends Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = (todo) => {
        this.props.onFormSubmit(todo);
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
        if (this.state.editFormOpen)
        {
            return (
                <TodoForm
                    id={this.props.id}
                    title={this.props.title}
                    priority={this.props.priority}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <Todo
                    id={this.props.id}
                    title={this.props.title}
                    priority={this.props.priority}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                />
            );
        }
    }
}

export default TodoEdit;