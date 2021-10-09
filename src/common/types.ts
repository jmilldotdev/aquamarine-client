export interface Highlight {
  corpusId: number
  contentType: string
  path: string
  title: string
  text: string
  TextEncodingType: string
}

export enum Feature {
  highlightSelector = 'Highlight Selector',
  imageSearch = 'Image Search',
  editAdapters = 'Edit Adapters'
}

export enum AdapterType {
  local = 'Local Adapter'
}