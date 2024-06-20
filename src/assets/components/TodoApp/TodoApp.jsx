import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Todo App</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new todo"
              value={newTodo}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddTodo}
            >
              Add Todo
            </button>
          </div>
          <ul className="list-group">
            {todos.map(todo => (
              <li
                key={todo.id}
                className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>{todo.text}</span>
                  <div>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => handleToggleComplete(todo.id)}
                    >
                      {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
