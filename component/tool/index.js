import { Note, Todo, Timer, Chrono } from '@/utils/modules'

export default function Tool(_id, _frame_id, _data) {

    switch(_id) {

        // make tool id const @
        case 'note': return <Note id={_frame_id} data={_data}/>
        case 'todo': return <Todo id={_frame_id} data={_data}/>
        case 'timer': return <Timer id={_frame_id} data={_data}/>
        case 'chrono': return <Chrono id={_frame_id} data={_data}/>
        default: return null
        
    }

}