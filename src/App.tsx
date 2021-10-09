import HighlightSelector from './components/HighlightSelector'
import HighlightScatter from './components/HighlightScatter'
import FeatureSelectorMenu from './components/FeatureSelectorMenu'
import { useState } from 'react'
import { Feature } from './common/types'
import EditAdapters from './components/EditAdapters'
import ImageSearch from './components/ImageSearch'

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(Feature.editAdapters)

  const handleFeatureSelect = (feature: Feature) => {
    setSelectedFeature(feature)
  }
  return (
    <div className="App">
      <FeatureSelectorMenu selectedFeature={selectedFeature} featureSelectHandler={handleFeatureSelect} />
      {selectedFeature === Feature.highlightSelector && <p>Highlight Selector</p>}
      {selectedFeature === Feature.imageSearch && <ImageSearch />}
      {selectedFeature === Feature.editAdapters && <EditAdapters />}
      {/* <HighlightSelector />
      <HighlightScatter /> */}
    </div>
  )
}

export default App
