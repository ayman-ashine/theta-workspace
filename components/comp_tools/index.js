import Note from './note'
import Todo from './todo'
import Timer from './timer'
import Chrono from './chrono'

export default function Tool(id, f_id, data) {

    switch(id) {

        // make tool id const @
        case 't-note': return <Note id={f_id} data={data}/>
        case 't-todo': return <Todo id={f_id} data={data}/>
        case 't-timer': return <Timer id={f_id} data={data}/>
        case 't-chrono': return <Chrono id={f_id} data={data}/>
        case 't-calendar': return null
        default: return null
        
    }

}