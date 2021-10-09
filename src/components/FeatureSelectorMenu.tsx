import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Feature } from '../types'

type FeatureSelectorMenuProps = {
  selectedFeature: Feature
  featureSelectHandler: (feature: Feature) => void
}

const FeatureSelectorMenu: React.FC<FeatureSelectorMenuProps> = ({ selectedFeature, featureSelectHandler }) => {
  return (
    <Menu>
      <MenuButton as={Button} autoSelect={true} rightIcon={<ChevronDownIcon />}>
        {selectedFeature}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => featureSelectHandler(Feature.highlightSelector)}>{Feature.highlightSelector}</MenuItem>
        <MenuItem onClick={() => featureSelectHandler(Feature.imageSearch)}>{Feature.imageSearch}</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default FeatureSelectorMenu
