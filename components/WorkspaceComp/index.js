import { useState, useContext, useEffect } from 'react'
import {
  AppDefaultData,
  AppDataManager,
  ToolsComp,
  MenuFormatComp,
  OptionFormatComp,
  GenerateUniqueId,
  appContext
} from '@/utils/modules'

export default function WorkspaceComp() {

  const { appData } = useContext(appContext)
  const [localData, setLocalData] = useState({ menu: null })

  const closeMenu = () => setLocalData(state => ({ ...state, menu: null }))

  const openMenu = (e) => {

    if (e.target.id !== 'workspace') return

    e.preventDefault()

    if (localData.menu) setLocalData(state => ({ ...state, menu: null }))
    else setLocalData(state => ({
      ...state,
      menu: <MenuComp closeFunc={closeMenu} posX={e.clientX} posY={e.clientY}/>
    }))

  }

  return (

    <>

      <div className='full relative overflow-hidden' id='workspace' onContextMenu={openMenu}>

        {appData?.map(ws => {

          if (ws.current) {

            return ws.frames.map((dataFrame, index) => {

              return <ToolsComp dataFrame={dataFrame} key={index} />

            })

          }

        })}

      </div>

      {localData.menu}

    </>

  )

}

export function MenuComp({ closeFunc, posX, posY }) {

  const callback = (func) => func()

  const addFrame = (toolId) => {

    AppDataManager.addFrame({ ...AppDefaultData.defaultFrameData, id: GenerateUniqueId(), toolId, posX, posY, })
    callback(closeFunc)

  }

  return (

    <MenuFormatComp pos_x={posX} pos_y={posY} closeFunc={closeFunc}>

      {
        AppDefaultData.defaultMenuToolsData.map(tool => {

          return (
            <OptionFormatComp
              iconData={tool.iconData}
              name={tool.name}
              func={() => addFrame(tool.id)}
              key={tool.id}
            />
          )

        })
      }

    </MenuFormatComp>

  )

}