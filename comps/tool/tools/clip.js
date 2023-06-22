import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ACTIONS, WORKSPACE_ACTIONS, FRAME_DATA } from '@/data/modules'
import { Icon } from '@/comps/modules'

const MENU_TYPE = 'MENU_CLIP'

const Clip = ({ dt }) => {

    const [ldt, setLdt] = useState(dt.data ? dt.data : [])
    const [overClip, setOverClip] = useState(false)
    const currentTool = useSelector(state => state.workspace.currentTool)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({ id: dt.id, props: { data: ldt } }))

    }, [ldt])

    useEffect(() => {

        if(ldt.includes(currentTool)) setLdt( state => state.filter( id => id !== currentTool))
        console.log(ldt)
    }, [currentTool])

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

        declip()

        let shiftX = e.clientX - dt.posX
        let shiftY = e.clientY - dt.posY
        let posX = 0
        let posY = 0

        const move = (e) => {
            posX = e.clientX - shiftX
            posY = e.clientY - shiftY
            dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
                id: dt.id,
                props: { posX, posY }
            }))
            ldt?.forEach(id => {
                dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
                    id: id,
                    props: { posX, posY: posY + FRAME_DATA.headHeight }
                }))
            });
        }
        const rest = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', rest)
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', rest)

    }
    const clip = (e) => {

        stopPropagation(e)
        setOverClip(true)
        if(currentTool && !ldt.includes(currentTool)) {
            console.log(currentTool, dt.posX)
            setLdt(state => [...state, currentTool])
            dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
                id: currentTool,
                props: { posX: dt.posX, posY: dt.posY, minimize: true }
            }))
        }
        
    }
    const declip = () => {
        // ldt?.forEach(id => {
        //     dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
        //         id: id,
        //         props: { posX, posY: posY + FRAME_DATA.headHeight }
        //     }))
        // });
        setOverClip(false)
    }
    const stopPropagation = (e) => e.stopPropagation()

    return (
        <>

            <div
                className={`flex v-flex br absolute light-border z-index ${overClip ? 'bright' : null}`}
                style={
                    {
                        left: dt.posX + 'px',
                        top: dt.posY + 'px',
                        width: dt.width,
                        height: 'auto'
                    }
                }
                onMouseEnter={clip}
                onMouseLeave={declip}
                onMouseDown={stopPropagation}
                onDoubleClick={stopPropagation}
                onWheel={stopPropagation}
            >

                <div className='row sm-p' style={{height: FRAME_DATA.headHeight}} onMouseDown={moveClip}>
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