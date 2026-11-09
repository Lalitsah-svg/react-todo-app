# TaskFlow - React Todo App

A professional and responsive Todo application built with React and Vite.

This project converts a traditional JavaScript Todo application into a React application using reusable components, props, state management, event handling, and browser local storage.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Search tasks
- Filter tasks by:
  - All
  - Active
  - Completed
- Clear completed tasks
- Task statistics
- Completion progress indicator
- Persistent data using localStorage
- Responsive design for desktop and mobile
- Reusable React components

## React Concepts Used

### Components

The application is divided into small reusable components:

- `TodoForm` - Handles task input and task creation
- `TodoItem` - Displays an individual task
- `TodoList` - Renders the task collection
- `TodoStats` - Displays task statistics and progress
- `App` - Manages the main application state and logic

### Props

Props are used to pass data and functions between components.

Examples include:

- Passing the current task to `TodoForm`
- Passing task data to `TodoItem`
- Passing toggle and delete functions to child components
- Passing the complete Todo array to `TodoStats`

### State

React `useState` is used to manage:

- Todo items
- New task input
- Search text
- Current filter

### Effects

React `useEffect` is used to save Todo data to `localStorage` whenever the task list changes.

### Derived Data

`useMemo` is used to efficiently calculate the filtered task list based on the current search and filter settings.

## Project Structure

```text
react-todo-app/
│
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoStats.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── package-lock.json
└── README.md