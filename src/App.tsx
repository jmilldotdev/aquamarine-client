import HighlightSelector from './components/HighlightSelector'
import HighlightScatter from './components/HighlightScatter'
import FeatureSelectorMenu from './components/FeatureSelectorMenu'
import { useEffect, useState } from 'react'
import { Adapter, Feature } from './common/types'
import AddAdapter from './components/AddAdapter'
import ImageSearch from './components/ImageSearch'
import EditAdapters from './components/EditAdapters'
import { AdaptersContext } from './contexts/adapters-context'
import AdapterDisplay from './components/AdapterDisplay'

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(Feature.editAdapters)
  const [adapters, setAdapters] = useState<Adapter[]>([])

  useEffect(() => {
    const fetchAdapters = async () => {
      const response = await fetch('http://localhost:8000/adapters')
      const data = await response.json()
      const adapters = data.adapters.map((adapterAlias: string) => ({
        alias: adapterAlias,
        isSelected: true,
      }))
      setAdapters(adapters)
    }
    fetchAdapters()
  }, [])

  const toggleAdapterSelected = (alias: string) => {
    const newAdapters: Adapter[] = adapters.map(adapter => {
      if (adapter.alias === alias) {
        const toggledAdapter: Adapter = {
          ...adapter,
          isSelected: !adapter.isSelected,
        }
        return toggledAdapter
      }
      return adapter
    })
    console.log(newAdapters)
    setAdapters(newAdapters)
  }

  const handleFeatureSelect = (feature: Feature) => {
    setSelectedFeature(feature)
  }
  return (
    <div className="App">
      <AdaptersContext.Provider value={{ adapters, toggleAdapterSelected }}>
        <AdapterDisplay />
        <FeatureSelectorMenu selectedFeature={selectedFeature} featureSelectHandler={handleFeatureSelect} />
        {selectedFeature === Feature.highlightSelector && <p>Highlight Selector</p>}
        {selectedFeature === Feature.imageSearch && <ImageSearch />}
        {selectedFeature === Feature.addAdapter && <AddAdapter />}
        {selectedFeature === Feature.editAdapters && <EditAdapters />}
        {/* <HighlightSelector />
        <HighlightScatter /> */}
      </AdaptersContext.Provider>
    </div>
  )
}

export default App
