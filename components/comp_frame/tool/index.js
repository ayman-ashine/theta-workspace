import Note from './note'
import Todo from './todo'
import Timer from './timer'
import Chrono from './chrono'

export default function Tool(_id, _frame_id, _data) {

    switch(_id) {

        // make tool id const @
        case 't-note': return <Note id={_frame_id} data={_data}/>
        case 't-todo': return <Todo id={_frame_id} data={_data}/>
        case 't-timer': return <Timer id={_frame_id} data={_data}/>
        case 't-chrono': return <Chrono id={_frame_id} data={_data}/>
        default: return null
        
    }

}