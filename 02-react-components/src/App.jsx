import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'

function App() {
  const [message, setMessage] = useState("Hello World!");

  const changeMessage = () => {
    setMessage("Welcome to React!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Greeting message={message}/>
      <button 
        onClick={changeMessage} 
        style={{
          padding: "10px 20px", 
          fontSize: "16px", 
          backgroundColor: "#4CAF50", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        Click Me!
      </button>
    </div>
  )
}

export default App
