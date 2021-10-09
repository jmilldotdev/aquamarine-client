import HighlightSelector from './components/HighlightSelector'
import HighlightScatter from './components/HighlightScatter'
import FeatureSelectorMenu from './components/FeatureSelectorMenu'
import { useState } from 'react'
import { Feature } from './types'

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(Feature.highlightSelector)

  const handleFeatureSelect = (feature: Feature) => {
    setSelectedFeature(feature)
  }
  return (
    <div className="App">
      <FeatureSelectorMenu selectedFeature={selectedFeature} featureSelectHandler={handleFeatureSelect} />
      {selectedFeature === Feature.highlightSelector && <p>Highlight Selector</p>}
      {selectedFeature === Feature.imageSearch && <p>Image Search</p>}
      {/* <HighlightSelector />
      <HighlightScatter /> */}
    </div>
  )
}

export default App
