import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './index.css';


const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div>
        <div></div>
        <h2>My Todo List</h2>

        <TodoForm />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;
