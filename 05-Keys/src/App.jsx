import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Using random uuid Keys - ANTIPATTERN

  // a list of todos, each todo object has a task and an id
  const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
  ];

  function TodoList() {
    return (
      <ul>
        {todos.map((todo) => (
          // here we are using the already generated id as the key.
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    );
  }

  // Using array index as Key
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function MonthList() {
    return (
      <ul>
        {/* here we are using the index as key */}
        {months.map((month, index) => (<li key={index}>{month}</li>))}
      </ul>
    );
  }  
  
}

export default App
