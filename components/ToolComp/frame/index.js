import { memo, useState } from 'react'
import {
  IconComp,
  MenuFrame
} from '@/utils/modules'

const Frame = ({ dt, ws, disAppData, children }) => {

  const [ldt, setLdt] = useState({ menu: null })

  const closeMenu = () => setLdt(state => ({ ...state, menu: null }))

  const openMenu = (e) => {

    if (e && e.stopPropagation) e.stopPropagation()
    if (ldt.menu) closeMenu()
    else setLdt(state => (
      {
        ...state,
        menu: <MenuFrame
          dt={dt}
          disAppData={disAppData}
          closeMenu={closeMenu}
          posX={e.target.offsetParent.offsetWidth + dt.posX}
          posY={dt.posY}
        />
      }
    ))

  }

  const move = (e) => {
    
    let shiftX = e.clientX - dt.posX
    let shiftY = e.clientY - dt.posY

    const move = (e) => {
      let [posX, posY] = [e.clientX - shiftX, e.clientY - shiftY]
      disAppData({ type: 'UPDATE_FRAME', id: dt.id, props: { posX, posY } })
    }

    const rest = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', rest)
      disAppData({ type: 'UPDATE_WORKSPACE', id: ws.id, props: { activeFrame: null } })
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)
    disAppData({ type: 'UPDATE_WORKSPACE', id: ws.id, props: { activeFrame: dt } })

  }

  return (

    <>

      <div
        className={`flex v-flex br absolute overflow-hidden ${dt.color}`}
        id={dt.id}
        style={
          {
            left: dt.posX + 'px',
            top: dt.posY + 'px',
            width: dt.width + 'px',
            height: dt.minimize ? 'auto' : dt.height + 'px',
          }
        }
      >

        <div className='row bkg-const-low-light sm-p' onMouseDown={move}>
          <div className='col-9 xl-fw clr-const-dark overflow-hidden'>{dt.title}</div>
          <div className='col-1 flex h-end' onMouseDown={openMenu}>
            <IconComp type={'menu-2'} styles={['sm-i', 'const-dark-i']} />
          </div>
        </div>

        <div className='full overflow-hidden' style={{ height: dt.minimize ? 0 : null }}>

          {children}

        </div>

      </div>

      {ldt.menu}

    </>

  )

}

export default memo(Frame)