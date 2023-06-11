import { memo } from 'react'
import Frame from './frame'
import Clip from './tools/Clip'
import Note from './tools/Note'
import Todo from './tools/Todo'
import Timer from './tools/Timer'
import Chrono from './tools/Chrono'

const getToolType = ({ dt, ws, disAppData }) => {

    switch (dt.frameType) {
        case 't-clip': return <Clip dt={dt} ws={ws} disAppData={disAppData} />
        case 't-note': return <Note dt={dt} disAppData={disAppData} />
        case 't-todo': return <Todo dt={dt} disAppData={disAppData} />
        case 't-timer': return <Timer dt={dt} disAppData={disAppData} />
        case 't-chrono': return <Chrono dt={dt} disAppData={disAppData} />
        case 't-calendar': return null
        default: return null
    }

}

const ToolComp = ({ dt, ws, disAppData }) => {

    if (dt.defaultStyle) {

        return <Frame dt={dt} ws={ws} disAppData={disAppData}>{getToolType({ dt, ws, disAppData })}</Frame>

    } else {

        return getToolType({ dt, ws, disAppData })

    }

}

export default memo(ToolComp)