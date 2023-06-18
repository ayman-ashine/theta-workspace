import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { generateUniqueId } from '@/utils/modules'
import { WORKSPACE_ACTIONS } from "@/data/modules"
import { Icon } from '@/comps/modules'

export default function TodoComp({ dt }) {

    const dispatch = useDispatch()
    const [ldt, setLdt] = useState((dt.data ? dt.data : []))
    const [gTd, setGTd] = useState(null)

    const addTodo = () => {

        setLdt(state => [...state, {
            id: generateUniqueId(),
            title: '',
            complete: false,
        }])

    }
    const removeTodo = (id) => {

        setLdt(state => state.filter(td => td.id !== id))

    }
    const grabTodo = (td) => {

        const rest = () => {
            document.removeEventListener('mouseup', rest)
            setGTd(null)
        }
        document.addEventListener('mouseup', rest)
        setGTd(td)

    }
    const switchTodo = (std) => {

        if (gTd && gTd.id !== std.id) {
            setLdt(state => state.map(td => {
                if (gTd.id === td.id) return std
                else if (std.id === td.id) return gTd
                else return td
            }))
        }

    }

    const completeTodo = (id) => {

        setLdt(state => state.map(td => {
            return td.id === id ? { ...td, complete: !td.complete } : td
        }))

    }

    const changeTodoTitle = (e, id) => {

        setLdt(state => state.map(td => {
            return td.id === id ? { ...td, title: e.target.value } : td
        }))

    }

    useEffect(() => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({ id: dt.id, props: { data: ldt } }))

    }, [ldt])

    return (

        <div className='full overflow-y-auto sm-p'>

            <div>
                {
                    ldt.map((td, index) => {

                        return (

                            <div
                                className={`row v-center br relative sm-p sm-mb sm-g ${td.complete ? 'bright' : 'bkg-const-low-light'} ${gTd && gTd.id === td.id ? 'low-7' : null}`}
                                style={gTd && gTd.id === td.id ? { zIndex: 0 } : { zIndex: 1 }}
                                key={index}
                                onMouseEnter={() => switchTodo(td)}
                            >

                                <div className='col-1 cursor-grab' onMouseDown={() => grabTodo(td)}>
                                    <Icon type={'grab'} styles={['sm-i', 'const-dark-i']} />
                                </div>

                                <div className='col-1 const-dark-border' onClick={() => completeTodo(td.id)}>
                                    <Icon type={'checkmark'} styles={['sm-i', 'const-dark-i', td.complete ? null : 'unvisible']} />
                                </div>

                                <div className='col-7'>
                                    <input
                                        className='clr-const-dark sm-px'
                                        value={td.title}
                                        onChange={(e) => changeTodoTitle(e, td.id)}
                                        type="text"

                                    />
                                </div>

                                <div className='col-1' onClick={() => removeTodo(td.id)}>
                                    <Icon type={'remove'} styles={['sm-i', 'const-dark-i']} />
                                </div>

                            </div>

                        )

                    })
                }
            </div>

            <div className='sm-mb sm-p br hover-effect-brightness' onClick={addTodo}>
                <div className='flex v-center h-center'>
                    <Icon type={'add'} styles={['sm-i', 'const-dark-i']} effect={false} />
                </div>
            </div>

        </div>

    )

}