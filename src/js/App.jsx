import React, { useState } from 'react';
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import '../styles/index.scss'; // Asegúrate de importar los estilos

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        if (!title.trim()) return; // Evitar tareas vacías
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), title }
        ]);
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app-container">
            <div className="todo-container">
                <h1 className="text-center">TODO List</h1>
                <AddTodo addTodo={addTodo} />
                {todos.length === 0 ? (
                    <p className="no-tasks">No hay tareas!</p>
                ) : (
                    <TodoList todos={todos} deleteTodo={deleteTodo} />
                )}
            </div>
        </div>
    );
};

export default App;
