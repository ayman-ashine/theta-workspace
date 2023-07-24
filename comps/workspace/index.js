import { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WORKSPACE_ACTIONS, MENU_ACTIONS } from '@/data/modules'
import { Tool, Icon, Info } from '@/comps/modules'

const MENU_TYPE = 'MENU_TOOL'

const Workspace = () => {

  // Get current workspace
  const cWs = useSelector(state => {
    if (state.workspace) {
      for (let i in state.workspace.workspaces) {
        if (state.workspace.workspaces[i].current) return state.workspace.workspaces[i]
      }
    } else return null
  })
  const [position, setPosition] = useState({
    posX: cWs.posX,
    posY: cWs.posY,
    zoom: cWs.zoom
  })
  const dispatch = useDispatch()
  const openMenu = (e) => {

    e.preventDefault()

    dispatch(MENU_ACTIONS.OPEN({
      type: MENU_TYPE,
      posX: e.clientX,
      posY: e.clientY,
    }))

  }
  const openMenuSideBR = (e) => {

    dispatch(MENU_ACTIONS.OPEN({
      type: MENU_TYPE,
      posX: e.clientX,
      posY: e.clientY,
      side: 'side-br',
    }))

  }
  const moveWorkspace = (e) => {

    e.target.classList.replace('cursor-grab', 'cursor-grabbing')
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

      e.target.classList.replace('cursor-grabbing', 'cursor-grab')

      dispatch(WORKSPACE_ACTIONS.UPDATE({ id: cWs.id, props: { posX, posY } }))

    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)

  }
  const zoomInOutWorkspace = (e) => {

    const calcZoom = () => {

      return Number(e.deltaY > 0 ?
        (position.zoom <= 0 ? 0 : position.zoom - 0.05).toFixed(2)
        : (position.zoom >= 2 ? 2 : position.zoom + 0.05).toFixed(2)
      )
    }

    // const calcShiftPos = () => {

    //   // const deltaSign = e.deltaY > 0 ? 1 : -1
    //   // const shiftX = ((e.clientX - e.target.offsetWidth / 2) * deltaSign) / 2
    //   // const shiftY = ((e.clientY - e.target.offsetHeight / 2) * deltaSign) / 2

    //   return [
    //     parseInt(position.posX),
    //     parseInt(position.posY)
    //   ]

    // }

    // const [posX, posY] = calcShiftPos()

    setPosition(state => ({
      ...state,
      zoom: calcZoom(),
      // posX,
      // posY
    }))
    dispatch(WORKSPACE_ACTIONS.UPDATE({
      id: cWs.id,
      props: {
        zoom: calcZoom(),
        // posX,
        // posY
      }
    }))

  }
  const restWorkspacePosition = () => {

    setPosition({ posX: 0, posY: 0, zoom: 1 })
    dispatch(WORKSPACE_ACTIONS.UPDATE({ id: cWs.id, props: { posX: 0, posY: 0, zoom: 1 } }))

  }

  return cWs ? (

    <div
      className='full display flex v-center h-center cursor-grab overflow-hidden'
      onMouseDown={moveWorkspace}
      onWheel={zoomInOutWorkspace}
      onDoubleClick={restWorkspacePosition}
      onContextMenu={openMenu}
    >

      <div
        className='relative light-border'
        style={{
          left: position.posX,
          top: position.posY,
          transform: `scale(${position.zoom})`,
        }}
      >

        {cWs.tools.map(t => <Tool dt={t} key={t.id} />)}

      </div>

      <div
        className='absolute b-0 r-0 bg-primary br md-m'
        onClick={openMenuSideBR}
      >

        <Icon type={'add'} styles={['xl-i', 'light-i']} />

      </div>

    </div>

  ) : <Info/>

}

export default memo(Workspace)