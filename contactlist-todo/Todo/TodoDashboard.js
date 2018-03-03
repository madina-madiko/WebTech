import React, { Component } from 'react';
import Search from './Search.js'
import helpers from './helpers.js';
import TodoEditList from './TodoEditList.js';
import InputForm from './InputForm.js';

class TodoDashboard extends Component {
    state ={
        todos: [{
            title: 'Create web app',
            priority: '1',
            id: helpers.guid(),
        }, {
            title: 'to eat',
            priority: '2',
            id: helpers.guid(),
        }],
    };

    handleCreateFormSubmit = (todo) => {
        this.createTodo(todo);
    };

    createTodo = (todo) => {
        const t = helpers.newTodo(todo);
        this.setState({
            todos: this.state.todos.concat(t),
        });
    };

    handleEditFormSubmit =(attrs) => {
        this.updateTodo(attrs);
    };

    updateTodo = (attrs) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if(todo.id === attrs.id) {
                    return Object.assign({}, todo,{
                        title: attrs.title,
                        priority: attrs.priority,
                    });
                } else {
                    return todo;
                }
            }),
        });
    };

    handleTrashClick = (todoId) => {
        this.deleteTodo(todoId);
    };

    deleteTodo = (todoId) => {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== todoId),
        });
    };

    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <h2 className='ui centered header'>
                        <div className='content'>
                        <h2 className='navbar-brand-center'>
                        To Do List </h2>
                        <div className='sub header'>Manage your todos</div>
                        </div>
                    </h2>
                    <Search />
                    <h2> </h2>
                    <TodoEditList todos={this.state.todos}
                    onFormSubmit={this.handleEditFormSubmit}
                    onTrashClick={this.handleTrashClick}/>
                    <InputForm onFormSubmit={this.handleCreateFormSubmit}/>
                </div>
            </div>
        );
    }
}

export default TodoDashboard;