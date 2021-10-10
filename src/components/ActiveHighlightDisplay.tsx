import React from 'react'
import { Highlight } from '../common/types'

interface ActiveHighlightDisplayProps {
  activeHighlight: Highlight
}

const ActiveHighlightDisplay: React.FC<ActiveHighlightDisplayProps> = ({ activeHighlight }) => {
  console.log(activeHighlight)
  return (
    <div>
      <h2>{activeHighlight.title}</h2>
      <p>{activeHighlight.text}</p>
    </div>
  )
}

export default ActiveHighlightDisplay
