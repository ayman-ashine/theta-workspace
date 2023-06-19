import { memo } from "react"
import { useDispatch } from "react-redux"
import { WORKSPACE_ACTIONS } from "@/data/modules"

const Note = ({ dt }) => {

    //const [height, setHeight] = useState(0)
    const dispatch = useDispatch()

    function autoGrow(e) {

        e.target.style.height = "5px"
        e.target.style.height = (e.target.scrollHeight) + "px";

    }

    const update = (e) => {

        autoGrow(e)

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({
            id: dt.id,
            props: { data: e.target.value }
        }))

    }

    return (

        <textarea

            className=' sm-p clr-const-dark const-dark-placeholder'
            placeholder="..."
            defaultValue={dt.data}
            onInput={update}
        >
        </textarea>

    )

}

export default memo(Note)