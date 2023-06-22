import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { MENU_ACTIONS, WORKSPACE_ACTIONS, FRAME_DATA } from '@/data/modules'
import { Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_FRAME'

const Frame = ({ dt, children }) => {

  const dispatch = useDispatch()
  const stopPropagation = (e) => e.stopPropagation()
  const openMenu = (e) => {

    e.stopPropagation()

    dispatch(MENU_ACTIONS.OPEN({
      type: MENU_TYPE,
      posX: e.clientX,
      posY: e.clientY,
      dt: dt,
    }))

  }
  const moveFrame = useCallback((e) => {

    let shiftX = e.clientX - dt.posX
    let shiftY = e.clientY - dt.posY
    let posX = 0
    let posY = 0

    const move = (e) => {

      //if (dt.clip) rest()
      //else {
        posX = e.clientX - shiftX
        posY = e.clientY - shiftY
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
          id: dt.id,
          props: { posX, posY }
        }))
      //}

    }

    const rest = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', rest)
      dispatch(WORKSPACE_ACTIONS.CURRENT_TOOL({ id: null }))
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)
    dispatch(WORKSPACE_ACTIONS.CURRENT_TOOL({ id: dt.id }))

  }, [dt])

  return (

    <div
      className={`flex v-flex br absolute overflow-hidden cursor-auto ${dt.color} ${dt.clip ? 'skew-5' : null}`}
      id={dt.id}
      style={
        {
          left: dt.posX + 'px',
          top: dt.posY + 'px',
          width: dt.width + 'px',
          height: 'auto'
        }
      }
      onMouseDown={stopPropagation}
      onMouseEnter={stopPropagation}
      onDoubleClick={stopPropagation}
    >

      <div className='row bright sm-p cursor-grab' style={{ height: FRAME_DATA.headHeight }} onMouseDown={moveFrame}>
        <div className={`col-9 lg-fw clr-const-dark overflow-hidden`}>
          {dt.title}
        </div>
        <div className='col-1 flex h-end' onMouseDown={openMenu}>
          <Icon type={'menu-2'} styles={['sm-i', 'const-dark-i']} />
        </div>
      </div>

      <div className='full overflow-hidden' style={{ height: dt.minimize ? 0 : 'auto' }}>

        {children}

      </div>

    </div>

  )

}

export default memo(Frame)