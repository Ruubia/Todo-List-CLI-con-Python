import React from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
    return (
        <li className="todo-item">
            <span>{todo.title}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>✖</button>
        </li>
    );
};

export default TodoItem;
