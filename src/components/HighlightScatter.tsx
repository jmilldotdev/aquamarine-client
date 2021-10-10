import { useEffect, useState } from 'react'
import { getHighlightScatterData } from '../common/api'
import { ScatterData, Highlight } from '../common/types'
import ZoomableScatter from './ZoomableScatter'
import ActiveHighlightDisplay from './ActiveHighlightDisplay'

const HighlightScatter = () => {
  const [scatterData, setScatterData] = useState<ScatterData>([])
  const [highlights, setHighlights] = useState<Highlight[]>([])
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null)

  useEffect(() => {
    const fetchHighlightScatterData = async () => {
      const data = await getHighlightScatterData()
      console.log(data)
      setScatterData(data.scatterData)
      setHighlights(data.highlights)
    }
    fetchHighlightScatterData()
  }, [])

  return (
    <div>
      <ZoomableScatter data={scatterData} setActiveHighlightIndex={setActiveHighlightIndex} />
      {activeHighlightIndex && <ActiveHighlightDisplay activeHighlight={highlights[activeHighlightIndex]} />}
    </div>
  )
}

export default HighlightScatter
