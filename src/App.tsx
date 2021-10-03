import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:8000/')
    const todos = await response.json()
    setTodos(todos.Hello)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div>
      <p>{todos}</p>
    </div>
  )
}

export default App
