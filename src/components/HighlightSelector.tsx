import { useState, useEffect } from 'react'
import { Highlight } from '../common/types'

enum newHighlightMethod {
  RANDOM = 'random',
  SIMILAR = 'similar',
  DIFFERENT = 'different',
}

const HighlightSelector = () => {
  const [highlight, setHighlight] = useState<Highlight | undefined>(undefined)

  const newHighlight = async (method: newHighlightMethod) => {
    const highlightText = highlight ? highlight.text : ''
    const data = {
      method,
      highlight: highlightText,
    }
    const response = await fetch('http://localhost:8000/highlight', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resp = await response.json()
    console.log(resp.highlight)
    const responseHighlight: Highlight = {
      corpusId: resp.highlight.corpus_id,
      contentType: resp.highlight.content_type,
      path: resp.highlight.path,
      title: resp.highlight.title,
      text: resp.highlight.text,
      TextEncodingType: resp.highlight.text_encoding,
    }
    console.log(responseHighlight)
    setHighlight(responseHighlight)
  }

  useEffect(() => {
    newHighlight(newHighlightMethod.RANDOM)
  }, [])

  return (
    <div>
      <h3>Highlight Explorer</h3>
      {highlight && (
        <div>
          <p>{highlight.title}</p>
          <p>{highlight.text}</p>
        </div>
      )}
      <button onClick={() => newHighlight(newHighlightMethod.SIMILAR)}>Get Similar Highlight</button>
      <br />
      <button onClick={() => newHighlight(newHighlightMethod.DIFFERENT)}>Get Different Highlight</button>
      <br />
      <button onClick={() => newHighlight(newHighlightMethod.RANDOM)}>Get Random Highlight</button>
    </div>
  )
}

export default HighlightSelector
