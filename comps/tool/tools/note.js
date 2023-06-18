import { memo } from "react"
import { useDispatch } from "react-redux"
import { WORKSPACE_ACTIONS } from "@/data/modules"

const Note = ({ dt }) => {

    const dispatch = useDispatch()

    const update = (e) => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            props: { data: e.target.value }
        }))

    }

    return (

        <textarea
            className='full sm-p clr-const-dark const-dark-placeholder'
            placeholder="..."
            defaultValue={dt.data}
            onInput={update}
        >
        </textarea>

    )

}

export default memo(Note)