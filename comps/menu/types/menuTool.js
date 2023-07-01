import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { generateUniqueId } from '@/utils/modules'
import { MENU_ACTIONS, MENU_TOOLS_DATA, WORKSPACE_ACTIONS } from '@/data/modules'
import { Menu, Option } from './format/modules'


const MenuTool = ({ dt }) => {

  const dispatch = useDispatch()
  const addTool = (tool) => {

    dispatch(WORKSPACE_ACTIONS.ADD_TOOL({
      id: generateUniqueId(),
      type: tool.type,
      frame: tool.frame,
      posX: 0,
      posY: 0,
    }))
    dispatch(MENU_ACTIONS.CLOSE())

  }

  return (

    <Menu posX={dt.posX} posY={dt.posY} side={dt.side}>

      {
        MENU_TOOLS_DATA.map( tool => {

          return (

            <Option icon={tool.icon} name={tool.name} action={() => addTool(tool)} key={tool.name} />

          )

        })
      }

    </Menu>

  )

}

export default memo(MenuTool)