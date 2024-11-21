import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <p className="no-tasks">No tasks, add a task</p>
            ) : (
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))
            )}
        </ul>
    );
};

export default TodoList;
