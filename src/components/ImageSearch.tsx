import { Input, FormLabel, Button, FormErrorMessage } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getActiveAdapterAliases, snekKeys } from '../common/util'
import { AdaptersContext } from '../contexts/adapters-context'

interface ImageSearchFormData {
  searchTerm: string
}

const ImageSearch = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([])
  const adaptersContext = useContext(AdaptersContext)
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data: ImageSearchFormData): Promise<void> => {
    console.log(data)
    const options = {
      query: data.searchTerm,
      adapters: getActiveAdapterAliases(adaptersContext),
    }
    console.log(options)
    const response = await fetch('http://localhost:8000/query_images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(snekKeys(options)),
    })
      .then(resp => resp.json())
      .catch(err => {
        console.log(err)
      })
    console.log(response)
    setImagePaths(response.images)
  }

  return (
    <div>
      <h2>Image Search</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Image Search Term</FormLabel>
        <Input {...register('searchTerm')} placeholder="Enter search term..."></Input>
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        <Button colorScheme="teal" variant="solid" isLoading={isSubmitting} type="submit">
          Search
        </Button>
      </form>
      <div className="images">
        {imagePaths.length > 0 && imagePaths.map(path => <img src={`http://localhost:8080${path}`} alt="hey" />)}
      </div>
    </div>
  )
}

export default ImageSearch
