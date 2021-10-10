import { useState } from 'react'
import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Scatter } from 'recharts'
import { ScatterData } from '../common/types'

interface ScatterDataProps {
  data: ScatterData
  setActiveHighlightIndex: (index: number) => void
}

const ZoomableScatter: React.FC<ScatterDataProps> = ({ data, setActiveHighlightIndex }) => {
  return (
    <ScatterChart
      width={400}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" name="stature" unit="cm" />
      <YAxis type="number" dataKey="y" name="weight" unit="kg" />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Scatter name="A school" data={data} fill="#8884d8" onClick={(e: any) => setActiveHighlightIndex(e.id)} />
    </ScatterChart>
  )
}

export default ZoomableScatter
