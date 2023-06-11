import { memo, useRef, useState } from "react"
import { IconComp, MenuClip, ToolComp } from '@/utils/modules'

const Clip = ({ dt, ws, disAppData }) => {

    const [ldt, setLdt] = useState({ menu: null })
    const BODY = useRef()

    const closeMenu = () => setLdt(state => ({ ...state, menu: null }))

    const openMenu = (e) => {

        if (e && e.stopPropagation) e.stopPropagation()
        if (ldt.menu) closeMenu()
        else setLdt(state => (
            {
                ...state,
                menu: <MenuClip
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
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', rest)

    }

    const clip = () => {

        // if (ws.activeFrame && ws.activeFrame.defaultStyle) {
        //     disAppData({type: 'ADD_TO_CLIP', id: dt.id, item: ws.activeFrame})
        // }

        if (ws.activeFrame && ws.activeFrame.defaultStyle) {
            const FRAME = document.querySelector(`#${ws.activeFrame.id}`)
            BODY.current.appendChild(FRAME.cloneNode(true))
        }

    }

    return (
        <>

            <div
                className={`flex v-flex br absolute light-border`}
                style={
                    {
                        left: dt.posX + 'px',
                        top: dt.posY + 'px',
                        width: 'auto',
                        height: 'auto',
                    }
                }
                onMouseEnter={clip}
            >

                <div className='row sm-p' onMouseDown={move}>
                    <div className='col-1 flex h-start'>
                        <IconComp type={'clip'} styles={['sm-i', 'light-i']} effect={false} />
                    </div>
                    <div className='col-8 xl-fw clr-light overflow-hidden'>{dt.title}</div>
                    <div className='col-1 flex h-end' onMouseDown={openMenu}>
                        <IconComp type={'menu-2'} styles={['sm-i', 'light-i']} />
                    </div>
                </div>

                <div className={`full flex`} ref={BODY}></div>

            </div>

            {ldt.menu}

        </>
    )

}

export default memo(Clip)