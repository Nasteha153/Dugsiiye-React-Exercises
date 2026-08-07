import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
        />

        <span>
          {todo.text}
        </span>
      </div>

      <button
        onClick={() => dispatch({ type: 'delete', payload: todo.id })}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;