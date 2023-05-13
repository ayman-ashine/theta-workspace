import { Tool_Note, Tool_Todo, Tool_Timer, Tool_Chrono } from '@/utils/modules'

export default function Tool(_id, _frame_id, _data) {

    switch(_id) {

        // make tool id const @
        case 'note': return <Tool_Note id={_frame_id} data={_data}/>
        case 'todo': return <Tool_Todo id={_frame_id} data={_data}/>
        case 'timer': return <Tool_Timer id={_frame_id} data={_data}/>
        case 'chrono': return <Tool_Chrono id={_frame_id} data={_data}/>
        default: return null
        
    }

}