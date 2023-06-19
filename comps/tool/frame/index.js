import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from '@/data/modules'
import { Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_FRAME'

const Frame = ({ dt, children }) => {

  const [position, setPosition] = useState({posX: dt.posX, posY: dt.posY})
  const dispatch = useDispatch()
  const openMenu = (e) => {
    
    e.stopPropagation()

    dispatch(MENU_ACTIONS.OPEN({
      type: MENU_TYPE,
      posX: e.clientX,
      posY: e.clientY,
      dt: dt,
    }))

  }
  const moveFrame = (e) => {

    let shiftX = e.clientX - position.posX
    let shiftY = e.clientY - position.posY
    let posX = 0
    let posY = 0

    const move = (e) => {
      posX = e.clientX - shiftX
      posY = e.clientY - shiftY
      setPosition({ posX, posY })
    }
    const rest = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', rest)
      dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
        id: dt.id,
        props: { posX, posY }
      }))
      dispatch(WORKSPACE_ACTIONS.UPDATE({
        id: dt.workspaceId,
        props: { currentTool: null }
      }))
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)
    dispatch(WORKSPACE_ACTIONS.UPDATE({
      id: dt.workspaceId,
      props: { currentTool: dt }
    }))

  }
  const stopPropagation = (e) => e.stopPropagation()

  return (

    <div
      className={`flex v-flex br absolute overflow-hidden cursor-auto ${dt.color}`}
      id={dt.id}
      style={
        {
          left: position.posX + 'px',
          top: position.posY + 'px',
          width: dt.width + 'px',
          height: 'auto'
        }
      }
      onMouseDown={stopPropagation}
      onMouseEnter={stopPropagation}
      onDoubleClick={stopPropagation}
    >

      <div className='row bright sm-p cursor-grab' onMouseDown={moveFrame}>
        <div className='col-9 xl-fw clr-const-dark overflow-hidden'>{dt.title}</div>
        <div className='col-1 flex h-end' onMouseDown={openMenu}>
          <Icon type={'menu-2'} styles={['sm-i', 'const-dark-i']} />
        </div>
      </div>

      <div className='full overflow-hidden' style={{ height: dt.minimize ? 0 : null }}>

        {children}

      </div>

    </div>

  )

}

export default memo(Frame)