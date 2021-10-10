import { Button, FormControl, FormLabel, Select, Input, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import React from 'react'
import { AdapterType } from '../common/types'

interface AddAdapterFormData {
  localAdapterPath: string
}

const AddAdapterForm = () => {
  const [adapterType, setAdapterType] = React.useState<AdapterType>(AdapterType.local)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data: AddAdapterFormData): Promise<void> => {
    const options = {
      path: data.localAdapterPath,
    }
    const response = await fetch('http://localhost:8000/register_adapter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
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
        <Input placeholder="/path/to/directory" {...register('localAdapterPath')} />
      </FormControl>
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      <Button colorScheme="teal" variant="solid" isLoading={isSubmitting} type="submit">
        Register Adapter
      </Button>
    </form>
  )
}

const AddAdapter: React.FC = () => {
  return (
    <div>
      <AddAdapterForm />
    </div>
  )
}
export default AddAdapter
