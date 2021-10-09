import { createContext } from 'react'
import { Adapter } from '../common/types'

export interface AdaptersContextInterface {
  adapters: Adapter[]
  toggleAdapterSelected: (alias: string) => void
}

export const AdaptersContext = createContext<AdaptersContextInterface>({
  adapters: [],
  toggleAdapterSelected: () => {},
})
