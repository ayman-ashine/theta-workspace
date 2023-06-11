import { memo } from 'react'
import { MenuFormat, OptionFormat } from './modules'
import { AppDefaultData, generateUniqueId } from '@/utils/modules'

const MenuAddTool = ({ disAppData, closeMenu, posX, posY }) => {

  const addFrame = (tool) => {
    disAppData({
      type: 'ADD_FRAME',
      id: generateUniqueId(),
      frameType: tool.frameType,
      defaultStyle: tool.defaultStyle,
      posX,
      posY,
    }), closeMenu()
  }

  return (

    <MenuFormat posX={posX} posY={posY} closeMenu={closeMenu}>

      {
        AppDefaultData.TOOLS.map((tool, index) => {

          return (
            <OptionFormat
              icon={tool.icon}
              name={tool.name}
              action={() => addFrame(tool)}
              key={index}
            />
          )

        })
      }

    </MenuFormat>

  )

}

export default memo(MenuAddTool)