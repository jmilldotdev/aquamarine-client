import { Checkbox } from '@chakra-ui/react'
import { useContext } from 'react'
import { AdaptersContext } from '../contexts/adapters-context'

const AdapterDisplay = () => {
  const adaptersContext = useContext(AdaptersContext)

  const handleChange = (alias: string) => {
    adaptersContext.toggleAdapterSelected(alias)
  }
  return (
    <div>
      {adaptersContext.adapters.map(adapter => (
        <div key={adapter.alias}>
          <h3>{adapter.alias}</h3>
          <Checkbox isChecked={adapter.isSelected} onChange={() => handleChange(adapter.alias)} />
        </div>
      ))}
    </div>
  )
}

export default AdapterDisplay
