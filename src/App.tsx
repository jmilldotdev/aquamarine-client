import { useState, useEffect } from 'react'
import './App.css'

enum newHighlightMethod {
  RANDOM = 'random',
  SIMILAR = 'similar',
  DIFFERENT = 'different',
}

const App = () => {
  const [highlight, setHighlight] = useState('highlight')

  const newHighlight = async (method: newHighlightMethod) => {
    const data = {
      method,
      highlight,
    }
    console.log(data)
    const response = await fetch('http://localhost:8000/highlight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resp = await response.json()
    setHighlight(resp.highlight)
  }

  useEffect(() => {
    newHighlight(newHighlightMethod.RANDOM)
  }, [])

  return (
    <div>
      <h3>Random Highlight</h3>
      <p>{highlight}</p>
      <button onClick={() => newHighlight(newHighlightMethod.SIMILAR)}>Get Similar Highlight</button>
      <br />
      <button onClick={() => newHighlight(newHighlightMethod.DIFFERENT)}>Get Different Highlight</button>
      <br />
      <button onClick={() => newHighlight(newHighlightMethod.RANDOM)}>Get Random Highlight</button>
    </div>
  )
}

export default App
