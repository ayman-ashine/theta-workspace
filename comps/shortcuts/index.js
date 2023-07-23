import { memo, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generateUniqueId } from "@/utils/generateUniqueId"
import { WORKSPACE_ACTIONS, ASIDE_ACTIONS } from "@/data/modules"


const ShortCuts = () => {

    //const states = useSelector(state => state)
    const dispatch = useDispatch()
    let isSetup = false

    const addWorkspace = () => {

        const id = generateUniqueId()
        dispatch(WORKSPACE_ACTIONS.ADD({ id }))
        dispatch(WORKSPACE_ACTIONS.CURRENT({ id }))

    }

    const cleanWorkspace = () => {

        dispatch(WORKSPACE_ACTIONS.CLEAN_CURRENT())

    }

    const openProfile = () => {

        dispatch(ASIDE_ACTIONS.OPEN({ type: 'ASIDE_PROFILE' }))

    }

    const openArchive = () => {

        dispatch(ASIDE_ACTIONS.OPEN({ type: 'ASIDE_ARCHIVE' }))

    }

    const setup = () => {

        if (isSetup) return
        else isSetup = true

        document.addEventListener('keydown', (e) => {

            if (!(e.ctrlKey && e.key)) return
            
            switch (e.key) {

                case 'x':
                    addWorkspace()
                    e.preventDefault()
                    break
                case 'u':
                    cleanWorkspace()
                    e.preventDefault()
                    break
                case 'p':
                    openProfile()
                    e.preventDefault()
                    break
                case 'a':
                    openArchive()
                    e.preventDefault()
                    break

            }

        })

    }

    useEffect(setup, [])

    return

}

export default memo(ShortCuts)