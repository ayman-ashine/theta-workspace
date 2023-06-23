import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { WORKSPACE_ACTIONS, MENU_ACTIONS } from '@/data/modules'
import { Tool, Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_TOOL'

const Workspace = ({ dt }) => {

  const [position, setPosition] = useState({
    posX: dt.posX,
    posY: dt.posY,
    zoomPosX: 0,
    zoomPosY: 0,
    zoom: dt.zoom
  })
  const dispatch = useDispatch()
  const openMenu = (e) => {

    e.preventDefault()

    dispatch(MENU_ACTIONS.OPEN({
      type: MENU_TYPE,
      posX: e.clientX,
      posY: e.clientY,
      dt: { workspaceId: dt.id }
    }))

  }
  const moveWorkspace = (e) => {

    e.target.classList.add('cursor-grabbing')
    let shiftX = e.clientX - position.posX
    let shiftY = e.clientY - position.posY
    let posX = 0
    let posY = 0

    const move = (e) => {
      posX = (e.clientX - shiftX)
      posY = (e.clientY - shiftY)
      setPosition(state => ({ ...state, posX, posY }))
    }

    const rest = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', rest)
      e.target.classList.remove('cursor-grabbing')
      dispatch(WORKSPACE_ACTIONS.UPDATE({ id: dt.id, props: { posX, posY } }))
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)

  }
  const zoomInOutWorkspace = (e) => {

    const calcShiftPos = () => {

      return [
        e.clientX - (position.posX),
        e.clientY - (position.posY) - 50
      ]

    }
    const calcZoom = () => {

      return e.deltaY > 0 ?
        (position.zoom <= 0 ? 0 : position.zoom - 0.05)
        : (position.zoom >= 2 ? 2 : position.zoom + 0.05)

    }
    setPosition(state => ({
      ...state,
      zoom: calcZoom(),
    }))
    dispatch(WORKSPACE_ACTIONS.UPDATE({
      id: dt.id,
      props: {
        zoom: calcZoom(),
      }
    }))

  }
  const restWorkspacePosition = () => {

    setPosition({ posX: 0, posY: 0, zoom: 1 })
    dispatch(WORKSPACE_ACTIONS.UPDATE({ id: dt.id, props: { posX: 0, posY: 0, zoom: 1 } }))

  }

  return (

    <div
      className='full cursor-grab bkg-dark overflow-hidden'
      onMouseDown={moveWorkspace}
      onWheel={zoomInOutWorkspace}
      onDoubleClick={restWorkspacePosition}
      onContextMenu={openMenu}
    >

      <div
        id='workspace'
        className='full light-border relative h-self-center'
        style={{
          left: position.posX,
          top: position.posY,
          transform: `scale(${position.zoom})`,
          transformOrigin: `center`,
        }}
      >

        {dt.tools.map(t => <Tool dt={t} key={t.id} />)}

      </div>

      <div
        className='absolute bottom-0 right-0 md-m'
        onClick={openMenu}
      >

        <Icon type={'add'} styles={['lg-i', 'light-i']}/>

      </div>

    </div>

  )

}

export default memo(Workspace)