import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { WORKSPACE_ACTIONS, MENU_ACTIONS } from '@/data/modules'
import { Tool } from '@/comps/modules'

const MENU_TYPE = 'MENU_TOOL'

const Workspace = ({dt}) => {

  const [position, setPosition] = useState({posX: dt.posX, posY: dt.posY, zoom: dt.zoom})
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
      setPosition(state => ({...state, posX, posY }))
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

    // !
    const calcShiftPos = () => {

      const shiftX = parseInt( e.target.offsetWidth * dt.zoom )
      const shiftY = parseInt( e.target.offsetHeight * dt.zoom )
      const posX = position.posX - shiftX
      const posY = position.posY - shiftY
      //console.log(shiftX, shiftY, posX, posY)
      return [posX, posY]

    }
    calcShiftPos()

    const calcZoom = () => {

      return e.deltaY > 0 ?
        (dt.zoom <= 0 ? 0 : dt.zoom - 0.05)
        : (dt.zoom >= 2 ? 2 : dt.zoom + 0.05)

    }
    setPosition(state => ({...state, zoom: calcZoom() }))
    dispatch(WORKSPACE_ACTIONS.UPDATE({
      id: dt.id,
      props: {
        zoom: calcZoom(),
        posX: calcShiftPos()[0],
        posY: calcShiftPos()[1],
      }
    }))

  }
  const restWorkspacePosition = () => {

    setPosition({ posX: 0, posY: 0, zoom: 1  })
    dispatch(WORKSPACE_ACTIONS.UPDATE({ id: dt.id, props: { posX: 0, posY: 0, zoom: 1} }))

  }

  return dt ? (

    <div
      className='full cursor-grab bkg-dark-primary overflow-hidden'
      onMouseDown={moveWorkspace}
      onWheel={zoomInOutWorkspace}
      onDoubleClick={restWorkspacePosition}
    >

      <div
        id='workspace'
        className='full relative bkg-dark'
        style={{
          left: position.posX,
          top: position.posY,
          transform: `scale(${position.zoom})`,
          transformOrigin: 'center center',
        }}
        onContextMenu={openMenu}
      >

        { dt ? dt.tools.map((dt, index) => <Tool dt={dt} key={index} />) : null}

      </div>

    </div>

  ) : null

}

export default memo(Workspace)