import { useState, useEffect } from 'react'
import { Highlight } from '../common/types'

import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { ScatterPlot } from '@nivo/scatterplot'

const sampleData = [
  {
    id: 'girls low',
    data: [
      { id: 0, x: 0, y: 2.0, z: 1 },
      { id: 1, x: 1, y: 2.1, z: 2 },
      { id: 2, x: 2, y: 2.3, z: 4 },
      { id: 3, x: 3, y: 2.5, z: 1 },
      { id: 4, x: 4, y: 2.7, z: 3 },
      { id: 5, x: 5, y: 2.9, z: 0 },
      { id: 6, x: 6, y: 3.0, z: 1 },
      { id: 7, x: 7, y: 3.2, z: 3 },
      { id: 8, x: 8, y: 3.3, z: 2 },
      { id: 9, x: 9, y: 3.5, z: 3 },
      { id: 10, x: 10, y: 3.6, z: 0 },
      { id: 11, x: 11, y: 3.8, z: 0 },
      { id: 12, x: 12, y: 3.9, z: 4 },
      { id: 13, x: 13, y: 4.0, z: 1 },
    ],
  },
]

const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 24, right: 24, bottom: 80, left: 80 },
  nodeSize: 8,
  xscale: { type: 'linear', min: -20, max: 20 },
  yscale: { type: 'linear', min: -20, max: 20 },
  blendMode: 'multiply',
  legends: [
    {
      anchor: 'bottom-left',
      direction: 'row',
      translateY: 60,
      itemWidth: 130,
      itemHeight: 12,
      symbolSize: 12,
      symbolShape: 'circle',
    },
  ],
}

const HighlightScatterPlot = ({ data }: any) => {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')

  return (
    <div>
      <ScatterPlot
        {...commonProps}
        data={data}
        onClick={(data: any, e: any) => {
          console.log(data.data.highlight.text)
          setText(data.data.highlight.text)
          setTitle(data.data.highlight.title)
        }}
        tooltip={() => {
          return null
        }}
      />
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}

const HighlightScatter = () => {
  const [tsne, setTsne] = useState<[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/tsne')
      const resp = await response.json()
      setTsne(resp.tsne)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Highlight Scatter</h1>
      <HighlightScatterPlot data={tsne} />
    </div>
  )
}

export default HighlightScatter
