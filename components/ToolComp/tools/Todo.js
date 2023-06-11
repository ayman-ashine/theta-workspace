import { useEffect, useRef, useState } from 'react'
import { generateUniqueId, IconComp } from '@/utils/modules'

export default function TodoComp({ dt, disAppData }) {

    const [ldt, setLdt] = useState((dt.data ? dt.data : []))
    const [grabbedTodo, setGrabbedTodo] = useState({ id: null, posY: null, stockOrder: null })

    const addTodo = () => {

        setLdt(state => [...state, {
            id: generateUniqueId(),
            title: '',
            complete: false,
            order: state.length + 1
        }])

    }

    const removeTodo = (id) => {

        setLdt(state => state.filter(td => td.id !== id))

    }

    const grabTodo = (e, td) => {

        let shiftY = e.clientY
        setGrabbedTodo(state => ({ ...state, id: td.id, stockOrder: td.order }))

        const move = (e) => {
            let posY = e.clientY - shiftY
            setGrabbedTodo(state => ({ ...state, posY }))
        }

        const rest = () => {
            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', rest)
            setLdt(state => state.map(_td => {
                if (_td.id === td.id) _td.order = grabbedTodo.stockOrder
                return _td
            }))
            setGrabbedTodo(state => ({ id: null, posY: null, stockOrder: null }))
        }

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', rest)

    }

    const switchTodo = (td) => {

        if (grabbedTodo.id && grabbedTodo.id !== td.id) {

            const newStockOrder = td.order
            setLdt(state => state.map(_td => {
                if (_td.id === td.id) _td.order = grabbedTodo.stockOrder
                return _td
            }))
            setGrabbedTodo(state => ({ ...state, stockOrder: newStockOrder }))


        }

    }

    const completeTodo = (id) => {

        setLdt(state => state.map(td => {
            if (td.id === id) td.complete = !td.complete
            return td
        }))

    }

    const changeTodoTitle = (e, id) => {

        setLdt(state => state.map(td => {
            if (td.id === id) td.title = e.target.value
            return td
        }))

    }

    useEffect(() => {

        disAppData({ type: 'UPDATE_FRAME', id: dt.id, props: { data: ldt } })

    }, [ldt])

    return (

        <div className='full overflow-hidden overflow-y-auto'>

            <div>
                {
                    ldt.map((td, index) => {

                        return (

                            <div
                                className={`row v-center br relative sm-p sm-m sm-g bkg-const-low-light ${td.complete ? 'low' : null}`}
                                style={grabbedTodo.id === td.id ? {
                                    top: grabbedTodo.posY,
                                    zIndex: 1,
                                } : { zIndex: 10, order: td.order }}
                                key={index}
                                onMouseEnter={(e) => switchTodo(e, td)}
                            >

                                <div className='col-1' onMouseDown={(e) => grabTodo(e, td)}>
                                    <IconComp type={'grab'} styles={['sm-i', 'const-dark-i']} />
                                </div>

                                <div className='col-1 const-dark-border' onClick={() => completeTodo(td.id)}>
                                    <IconComp type={'checkmark'} styles={['sm-i', 'const-dark-i', td.complete ? null : 'unvisible']} />
                                </div>

                                <div className='col-7'>
                                    <input
                                        className='clr-const-dark sm-px'
                                        defaultValue={td.title}
                                        onChange={(e) => changeTodoTitle(e, td.id)}
                                        type="text"

                                    />
                                </div>

                                <div className='col-1' onClick={() => removeTodo(td.id)}>
                                    <IconComp type={'remove'} styles={['sm-i', 'const-dark-i']} />
                                </div>

                            </div>

                        )

                    })
                }
            </div>

            <div className='sm-m sm-p' onClick={addTodo}>
                <div className='flex v-center h-center'>
                    <IconComp type={'add'} styles={['md-i', 'const-dark-i']} />
                </div>
            </div>

            <div className='md-py md-my'></div>

        </div>

    )

}