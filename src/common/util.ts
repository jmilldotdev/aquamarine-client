import { AdaptersContextInterface } from '../contexts/adapters-context'

export const snekKeys = (obj: any) =>
  Object.keys(obj).reduce((acc, key) => {
    const modifiedKey = key.replace(/([A-Z])/g, function f(g) {
      return '_' + g.toLowerCase()
    })
    return {
      ...acc,
      ...{ [modifiedKey]: obj[key] },
    }
  }, {})

export const getActiveAdapterAliases = (adaptersContext: AdaptersContextInterface) => {
  return adaptersContext.adapters.filter(adapter => adapter.isSelected).map(adapter => adapter.alias)
}
