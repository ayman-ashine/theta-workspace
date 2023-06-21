import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { MENU_ACTIONS, WORKSPACE_ACTIONS } from '@/data/modules'
import { Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_CLIP'

const Clip = ({ dt }) => {

    const [position, setPosition] = useState({ posX: dt.posX, posY: dt.posY })
    const [ldt, setLdt] = useState(dt.data ? dt.data : [])
    const dispatch = useDispatch()

    const openMenu = (e) => {

        if (e && e.stopPropagation) e.stopPropagation()

        dispatch(MENU_ACTIONS.OPEN({
            type: MENU_TYPE,
            posX: e.clientX,
            posY: e.clientY,
            dt
        }))

    }
    const moveClip = (e) => {

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
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', rest)

    }
    const clip = (e) => { stopPropagation(e) }
    const stopPropagation = (e) => e.stopPropagation()

    return (
        <>

            <div
                className={`flex v-flex br absolute light-border`}
                style={
                    {
                        left: position.posX + 'px',
                        top: position.posY + 'px',
                        width: dt.width,
                        height: 'auto',
                    }
                }
                onMouseEnter={clip}
                onMouseDown={stopPropagation}
                onDoubleClick={stopPropagation}
                onWheel={stopPropagation}
            >

                <div className='row sm-p' onMouseDown={moveClip}>
                    <div className='col-1 flex h-start'>
                        <Icon type={'clip'} styles={['sm-i', 'light-i']} effect={false} />
                    </div>
                    <div className={`col-8 xl-fw clr-light overflow-hidden ${dt.title ? null : 'unvisible'}`}>
                        {dt.title ? dt.title : '.'}
                    </div>
                    <div className='col-1 flex h-end' onMouseDown={openMenu}>
                        <Icon type={'menu-2'} styles={['sm-i', 'light-i']} />
                    </div>
                </div>

                <div className={`full flex`}></div>

            </div>

        </>
    )

}

export default memo(Clip)