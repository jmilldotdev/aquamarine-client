import * as React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

function Root() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

render(<Root />, document.getElementById('root'))
