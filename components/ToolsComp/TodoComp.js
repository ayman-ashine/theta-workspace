import { useEffect, useRef, useState } from 'react'
import { AppDataManager, GenerateUniqueId, IconsComp } from '@/utils/modules'

export default function TodoComp({ dataFrame }) {

    const [localData, setLocalData] = useState((dataFrame.data ? dataFrame.data : []))
    const [grabbedTodo, setGrabbedTodo] = useState({ id: null, posY: null, stockOrder: null })

    useEffect(() => {

        AppDataManager.updateFrame(dataFrame.id, { data: localData })

    }, [localData])

    const addTodo = () => {

        setLocalData(state => [...state, {
            id: GenerateUniqueId(),
            title: '',
            complete: false,
            order: state.length + 1
        }])

    }

    const removeTodo = (id) => {

        setLocalData(state => state.filter(td => td.id !== id))

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
            setLocalData(state => state.map(_td => {
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
            setLocalData(state => state.map(_td => {
                if (_td.id === td.id) _td.order = grabbedTodo.stockOrder
                return _td
            }))
            setGrabbedTodo(state => ({ ...state, stockOrder: newStockOrder }))


        }

    }

    const completeTodo = (id) => {

        setLocalData(state => state.map(td => {
            if (td.id === id) td.complete = !td.complete
            return td
        }))

    }

    const changeTodoTitle = (e, id) => {

        setLocalData(state => state.map(td => {
            if (td.id === id) td.title = e.target.value
            return td
        }))

    }

    return (

        <div className='full overflow-hidden overflow-y-auto'>

            <div>
                {
                    localData.map((td, index) => {

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
                                    <IconsComp data={{ icon_type: 'grab', icon_styles: ['sm-i', 'const-dark-i'] }} />
                                </div>

                                <div className='col-1 const-dark-border' onClick={() => completeTodo(td.id)}>
                                    <IconsComp data={{ icon_type: 'checkmark', icon_styles: ['sm-i', 'const-dark-i', td.complete ? null : 'unvisible'] }} />
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
                                    <IconsComp data={{ icon_type: 'remove', icon_styles: ['sm-i', 'const-dark-i'] }} />
                                </div>

                            </div>

                        )

                    })
                }
            </div>

            <div className='row v-center br relative bkg-const-low-light hover-effect-brightness sm-m sm-p' onClick={addTodo}>
                <div className='col flex h-center'>
                    <IconsComp data={{ icon_type: 'add', icon_styles: ['sm-i', 'const-dark-i'] }} />
                </div>
            </div>

            <div className='md-py md-my'></div>

        </div>

    )

}