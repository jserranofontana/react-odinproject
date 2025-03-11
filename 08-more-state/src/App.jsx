import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Person from './Person'
import Form from './Form'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Person />
      <Form />
      <Counter />
    </>
  )
}

export default App
