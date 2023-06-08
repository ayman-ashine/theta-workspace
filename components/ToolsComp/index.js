import NoteComp from './NoteComp'
import TodoComp from './TodoComp'
import TimerComp from './TimerComp'
import ChronoComp from './ChronoComp'
import { FrameComp } from '@/utils/modules'

const Tool = ({dataFrame}) => {

    switch (dataFrame.toolId) {
        case 't-note': return <NoteComp dataFrame={dataFrame} />
        case 't-todo': return <TodoComp dataFrame={dataFrame} />
        case 't-timer': return <TimerComp dataFrame={dataFrame} />
        case 't-chrono': return <ChronoComp dataFrame={dataFrame} />
        case 't-calendar': return null
        default: return null
    }

}

export default function ToolsComp({ dataFrame }) {

    return (

        <FrameComp dataFrame={dataFrame} key={dataFrame.id}>
            <Tool dataFrame={dataFrame}/>
        </FrameComp>

    )

}