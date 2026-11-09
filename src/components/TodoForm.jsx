const TodoForm = ({ task, setTask, onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.trim()) {
      return;
    }

    onAdd(task);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;