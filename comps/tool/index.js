import { memo } from 'react'
import Frame from './frame'
import Clip from './tools/clip'
import Note from './tools/note'
import Todo from './tools/todo'
import Timer from './tools/timer'
import Chrono from './tools/chrono'
import Calendar from './tools/calendar'

const getToolByType = ({ dt }) => {

    switch (dt.type) {
        case 'T_CLIP': return <Clip dt={dt} />
        case 'T_NOTE': return <Note dt={dt} />
        case 'T_TODO': return <Todo dt={dt} />
        case 'T_TIMER': return <Timer dt={dt} />
        case 'T_CHRONO': return <Chrono dt={dt} />
        case 'T_CALENDAR': return <Calendar dt={dt} />
        default: return null
    }

}

const Tool = ({ dt }) => {

    if (dt.frame) return <Frame dt={dt}> {getToolByType({ dt })} </Frame>
    else return getToolByType({ dt })

}

export default memo(Tool)