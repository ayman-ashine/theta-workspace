import { memo } from 'react'
import Frame from './frame'
import Clip from './tools/clip'
import Note from './tools/note'
import Todo from './tools/todo'
import Timer from './tools/timer'
import Chrono from './tools/chrono'

const getToolByType = ({ dt }) => {

    switch (dt.type) {
        case 't-clip': return <Clip dt={dt} />
        case 't-note': return <Note dt={dt} />
        case 't-todo': return <Todo dt={dt} />
        case 't-timer': return <Timer dt={dt} />
        case 't-chrono': return <Chrono dt={dt} />
        case 't-calendar': return null
        default: return null
    }

}

const Tool = ({ dt }) => {

    if (dt.frame) return <Frame dt={dt}> {getToolByType({ dt })} </Frame>
    else return getToolByType({ dt })

}

export default memo(Tool)