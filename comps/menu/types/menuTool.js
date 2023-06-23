import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { generateUniqueId } from '@/utils/modules'
import { MENU_ACTIONS, MENU_TOOLS_DATA, MENU_DATA, WORKSPACE_ACTIONS } from '@/data/modules'
import { Menu, Option } from './format/modules'


const MenuTool = ({ posX, posY, dt }) => {

  const dispatch = useDispatch()
  const addTool = (tool) => {

    dispatch(WORKSPACE_ACTIONS.ADD_TOOL({
      id: generateUniqueId(),
      type: tool.type,
      frame: tool.frame,
      posX,
      posY,
    }))
    dispatch(MENU_ACTIONS.CLOSE())

  }

  return (

    <Menu posX={posX - MENU_DATA.width} posY={posY - MENU_DATA.width * 1.5}>

      {
        MENU_TOOLS_DATA.map((tool, index) => {

          return (

            <Option icon={tool.icon} name={tool.name} action={() => addTool(tool)} key={index} />

          )

        })
      }

    </Menu>

  )

}

export default memo(MenuTool)