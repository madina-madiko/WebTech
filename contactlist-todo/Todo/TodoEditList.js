import React, { Component } from 'react';
import TodoEdit from './TodoEdit.js';

class TodoEditList extends Component {
    render() {
        const todos = this.props.todos.map((todo) => (
            <TodoEdit
                key={todo.id}
                id={todo.id}
                title={todo.title}
                priority={todo.priority}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
            />
        ));
        return (
            <div id='todos'>
                {todos}
            </div>
        );
    }
}

export default TodoEditList;