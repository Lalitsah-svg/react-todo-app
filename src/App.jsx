import { useEffect, useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import "./App.css";

const STORAGE_KEY = "react-todo-app-tasks";

const initialTodos = [
  {
    id: 1,
    text: "Learn React components",
    completed: true,
  },
  {
    id: 2,
    text: "Practice props and state",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      return savedTodos ? JSON.parse(savedTodos) : initialTodos;
    } catch {
      return initialTodos;
    }
  });

  const [task, setTask] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  };

  const clearCompleted = () => {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => !todo.completed)
    );
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.text
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !todo.completed) ||
        (filter === "completed" && todo.completed);

      return matchesSearch && matchesFilter;
    });
  }, [todos, search, filter]);

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <span className="eyebrow">REACT PROJECT</span>

          <h1>TaskFlow</h1>

          <p>
            A simple and powerful task manager built with React.
          </p>
        </div>

        <div className="header-badge">
          React + Vite
        </div>
      </header>

      <main className="container">
        <section className="hero-card">
          <div>
            <span className="section-label">TODAY'S WORKSPACE</span>

            <h2>Stay organized. Get things done.</h2>

            <p>
              Manage your tasks with reusable React components,
              props, state, and persistent local storage.
            </p>
          </div>

          <div className="hero-check">
            ✓
          </div>
        </section>

        <TodoStats todos={todos} />

        <section className="workspace">
          <div className="workspace-header">
            <div>
              <span className="section-label">YOUR TASKS</span>
              <h2>Task List</h2>
            </div>

            <button
              type="button"
              className="clear-button"
              onClick={clearCompleted}
              disabled={!todos.some((todo) => todo.completed)}
            >
              Clear completed
            </button>
          </div>

          <TodoForm
            task={task}
            setTask={setTask}
            onAdd={addTodo}
          />

          <div className="controls">
            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <div className="filter-buttons">
              {["all", "active", "completed"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? "active" : ""}
                  onClick={() => setFilter(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Built with React • Components • Props • State
        </p>
      </footer>
    </div>
  );
}

export default App;