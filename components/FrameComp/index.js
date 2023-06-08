import { useEffect, useState } from 'react'
import {
  AppDataManager,
  AppArchiveManager,
  MenuFormatComp,
  OptionFormatComp,
  IconsComp,
} from '@/utils/modules'

export default function FrameComp({ dataFrame, children }) {

  const [localData, setLocalData] = useState({ menu: null })

  const moveFrame = (e) => {

    let shiftX = e.clientX - dataFrame.posX
    let shiftY = e.clientY - dataFrame.posY

    const move = (e) => {
      let [posX, posY] = [e.clientX - shiftX, e.clientY - shiftY]
      AppDataManager.updateFrame(dataFrame.id, { posX, posY })
    }

    const rest = () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', rest)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', rest)

  }

  const openMenu = (e) => {

    if (e && e.stopPropagation) e.stopPropagation()
    if (dataFrame.menu) closeMenu()
    else setLocalData(state => (
      {
        ...state,
        menu: <MenuComp
          dataFrame={dataFrame}
          closeFunc={closeMenu}
          posX={dataFrame.width + dataFrame.posX - 10}
          posY={dataFrame.posY + 20}
        />
      }
    ))

  }

  const closeMenu = () => {

    setLocalData(state => ({ ...state, menu: null }))

  }

  return (

    <>

      <div
        className={`flex v-flex br absolute overflow-hidden ${dataFrame.color}`}
        style={
          {
            left: dataFrame.posX + 'px',
            top: dataFrame.posY + 'px',
            width: dataFrame.width + 'px',
            height: dataFrame.minimize ? 'auto' : dataFrame.height + 'px',
          }
        }
      >

        <div className='row bkg-const-low-light sm-p' onMouseDown={moveFrame}>
          <div className='col-9 xl-fw clr-const-dark'>{dataFrame.title}</div>
          <div className='flex h-end' onMouseDown={openMenu}>
            <IconsComp data={{ icon_type: 'menu-2', icon_styles: ['sm-i', 'const-dark-i'] }} />
          </div>
        </div>

        <div className='full overflow-hidden' style={{ height: dataFrame.minimize ? 0 : null }}>
          {children}
        </div>

      </div>

      {localData.menu}

    </>

  )

}

export function MenuComp({ dataFrame, closeFunc, posX, posY }) {

  const menuColors = () => {

    return (
      <MenuFormatComp>
        <div className='col row sm-py md-px'>
          <div className={`col-1 hover-effect-brightness bkg-red lg-py`} color="bkg-red" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-pink`} color="bkg-pink" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-purple`} color="bkg-purple" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-indigo`} color="bkg-indigo" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-blue`} color="bkg-blue" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-cyan`} color="bkg-cyan" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-teal`} color="bkg-teal" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-green`} color="bkg-green" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-yellow`} color="bkg-yellow" onClick={funcChangeColor}></div>
          <div className={`col-1 hover-effect-brightness bkg-orange`} color="bkg-orange" onClick={funcChangeColor}></div>
        </div>
      </MenuFormatComp>
    )

  }

  const funcChangeTitle = (e) => {

    AppDataManager.updateFrame(dataFrame.id, { title: e.target.value })

  }

  const funcChangeColor = (e) => {

    AppDataManager.updateFrame(dataFrame.id, { color: e.target.getAttribute('color') })

  }

  const funcMinimize = () => {

    AppDataManager.updateFrame(dataFrame.id, { minimize: !dataFrame.minimize })
    callback(closeFunc)

  }

  const funcArchive = () => {

    AppArchiveManager.archiveFrame(dataFrame)
    funcRemoveFrame()

  }

  const funcRemoveFrame = () => {

    AppDataManager.removeFrame(dataFrame.id)
    callback(closeFunc)

  }

  const callback = (func) => func()

  return (

    <MenuFormatComp pos_x={posX} pos_y={posY} closeFunc={closeFunc}>
      <input
        className='col light-border-bottom sm-py md-p'
        type='text'
        placeholder='Title'
        defaultValue={dataFrame.title}
        onInput={funcChangeTitle}
      />
      <OptionFormatComp name={'Color'} subMenu={menuColors()} />
      <OptionFormatComp name={dataFrame.minimize ? 'Expand' : 'Minimize'} func={funcMinimize} />
      <OptionFormatComp name={'Archive'} func={funcArchive} />
      <OptionFormatComp name={'Delete'} func={funcRemoveFrame} />
    </MenuFormatComp>

  )

}