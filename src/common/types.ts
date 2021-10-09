export interface Highlight {
  corpusId: number
  contentType: string
  path: string
  title: string
  text: string
  TextEncodingType: string
}

export interface Adapter {
  alias: string
  isSelected: boolean
}

export enum Feature {
  highlightSelector = 'Highlight Selector',
  imageSearch = 'Image Search',
  addAdapter = 'Add Adapter',
  editAdapters = 'Edit Adapters',
}

export enum AdapterType {
  local = 'Local Adapter',
}
