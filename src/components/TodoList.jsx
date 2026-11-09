import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>
        <h3>No tasks found</h3>
        <p>Add a new task to get started.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;