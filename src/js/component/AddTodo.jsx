import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask(''); // Limpiar el input
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
                className="new-todo"
            />
        </form>
    );
};

export default AddTodo;
