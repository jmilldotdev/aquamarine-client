import { Button, FormControl, FormLabel, Select, Input, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import { AdapterType } from '../common/types'

interface EditAdaptersFormValues {
  adapterType: AdapterType
  localAdapterPath: string
}

const EditAdaptersForm = () => {
  const [adapterType, setAdapterType] = React.useState<AdapterType>(AdapterType.local)
  const [localAdapterPath, setLocalAdapterPath] = React.useState('')
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (): Promise<void> => {
    const data = {
      path: localAdapterPath,
    }
    console.log(data)
    const response = await fetch('http://localhost:8000/register_adapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const resp = await response.json()
    console.log(resp)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl id="adapterType">
        <FormLabel>Adapter Type</FormLabel>
        <Select value={adapterType}>
          {Object.values(AdapterType).map(adapter => (
            <option key={adapter} value={adapter} onChange={() => setAdapterType(adapter)}>
              {adapter}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl id="localAdapterPath">
        <FormLabel>Local Adapter Path</FormLabel>
        <Input
          value={localAdapterPath}
          placeholder="/path/to/directory"
          onChange={e => setLocalAdapterPath(e.target.value)}
        />
      </FormControl>
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      <Button colorScheme="teal" variant="solid" isLoading={isSubmitting} type="submit">
        Register Adapter
      </Button>
    </form>
  )
}

const EditAdapters: React.FC = () => {
  return (
    <div>
      <EditAdaptersForm />
    </div>
  )
}
export default EditAdapters
