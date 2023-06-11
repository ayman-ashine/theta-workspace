import { memo, useState } from 'react'
import { MenuAddTool, ToolComp } from '@/utils/modules'

const WorkspaceComp = ({ dt, dis }) => {

  const [ldt, setLdt] = useState({ menu: null })

  const closeMenu = () => setLdt(state => ({ ...state, menu: null }))

  const openMenu = (e) => {

    //if (e.target.id !== 'workspace') return
    e.preventDefault()

    if (ldt.menu) setLdt(state => ({ ...state, menu: null }))
    else if (dt.appData.length) setLdt(state => ({
      ...state,
      menu:
        <MenuAddTool
          disAppData={dis.disAppData}
          closeMenu={closeMenu}
          posX={e.clientX}
          posY={e.clientY}
        />
    }))

  }

  return (

    <>

      <div id='workspace' className='full relative overflow-x-auto' onContextMenu={openMenu}>

        {dt.appData?.map(ws => {

          if (ws.current) {

            return ws.frames.map((dt, index) => {

              return <ToolComp dt={dt} ws={{id: ws.id, activeFrame: ws.activeFrame}} disAppData={dis.disAppData} key={index} />

            })

          }

        })}

      </div>

      {ldt.menu}

    </>

  )

}

export default memo(WorkspaceComp)