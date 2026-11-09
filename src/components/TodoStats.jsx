const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <section className="todo-stats">
      <div className="stat-card">
        <span className="stat-label">Total</span>
        <strong>{total}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <strong>{completed}</strong>
      </div>

      <div className="stat-card">
        <span className="stat-label">Remaining</span>
        <strong>{remaining}</strong>
      </div>

      <div className="progress-card">
        <div className="progress-header">
          <span>Progress</span>
          <strong>{progress}%</strong>
        </div>

        <div className="progress-track">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default TodoStats;