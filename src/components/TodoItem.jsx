const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-left">
        <button
          type="button"
          className="check-button"
          onClick={() => onToggle(todo.id)}
          aria-label={
            todo.completed ? "Mark task incomplete" : "Mark task complete"
          }
        >
          {todo.completed ? "✓" : ""}
        </button>

        <span className="todo-text">
          {todo.text}
        </span>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;