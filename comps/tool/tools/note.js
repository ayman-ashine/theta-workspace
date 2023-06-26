import { memo, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { WORKSPACE_ACTIONS } from "@/data/modules"

const Note = ({ dt }) => {

    const dispatch = useDispatch()
    const note = useRef()

    function autoGrow() {

        note.current.style.height = "5px"
        note.current.style.height = (note.current.scrollHeight) + "px";

    }

    const update = () => {

        autoGrow()
        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            props: { data: note.current.value }
        }))

    }

    useEffect(autoGrow, [])

    return (

        <textarea

            className='full text-c-dark c-dark-placeholder sm-p'
            placeholder="Write your note..."
            defaultValue={dt.data}
            onInput={update}
            ref={note}
        >
        </textarea>

    )

}

export default memo(Note)