import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Comp_Icon, Manager_Data, Generate_Unique_Id } from '@/utils/modules'


export default function Todo(params) {

    const _data = params.data.list ? params.data.list : []
    const [data, setData] = useState(_data)

    useEffect(() => {

        update()

    }, [data])

    const update = () => {

        Manager_Data.update_frame(params.id, { tool_data: { list: data } })

    }

    const add = () => {

        setData(state => [...state, {
            id: Generate_Unique_Id(),
            complete: false,
            show_face: false,
            title: '',
        }])

    }

    const sort = (_id, __id) => {

        let from = 0
        let to = 0

        const swap = () => {

            let c_data = [...data]
            let c_todo = c_data[from]
            c_data[from] = c_data[to]
            c_data[to] = c_todo

            setData(c_data)

        }

        setData(state => state.map((todo, index) => {

            if (todo.id === _id) from = index
            if (todo.id === __id) to = index
            return todo

        }))

        swap()

    }

    const grab = (_id) => {

        let pos_x = 0
        let pos_y = 0

        setData(state => state.map(todo => {
            if (todo.id !== _id) return { ...todo, show_face: true }
            else return todo
        }))

        document.addEventListener('mousemove', move)
        document.addEventListener('mouseup', rest)

        function move(e) {

            pos_x = e.x
            pos_y = e.y

        }

        function rest() {

            let todo = document.elementFromPoint(pos_x, pos_y)
            let __id = todo.getAttribute('id')

            if (__id) sort(_id, __id)

            setData(state => state.map(todo => {
                return { ...todo, show_face: false }
            }))

            document.removeEventListener('mousemove', move)
            document.removeEventListener('mouseup', rest)

        }

    }

    const complete = (_id) => {

        setData(state => state.map(todo => {
            if (todo.id === _id) return { ...todo, complete: !todo.complete }
            else return todo
        }))

    }

    const title = (e, _id) => {

        setData(state => state.map(todo => {
            if (todo.id === _id) return { ...todo, title: e.target.value }
            else return todo
        }))

    }

    const remove = (_id) => {

        setData(state => state.filter(todo => todo.id !== _id))

    }

    return (

        <div className={styles.container}>

            <div className={styles.list}>

                {
                    data.map((todo, index) => {

                        return (

                            <div className={styles.todo} key={index}>

                                <div className={styles.grab} onMouseDown={() => grab(todo.id)}>

                                    <Comp_Icon data={{ icon_type: 'grab', icon_styles: ['sm-icon', 'const-dark-icon'] }} />

                                </div>

                                <div className={styles.complete} onClick={() => complete(todo.id)}>
                                    <Comp_Icon data={{ icon_type: 'checkmark', icon_styles: ['sm-icon', 'const-dark-icon', todo.complete? null : 'unvisible'] }} />
                                </div>

                                <div className={styles.container_input}>
                                    <input
                                        className={styles.input}
                                        value={todo.title}
                                        onChange={(e) => title(e, todo.id)}
                                        type="text"
                                        placeholder="..."
                                    />
                                </div>

                                <div className={styles.remove} onClick={() => remove(todo.id)}>
                                    <Comp_Icon data={{ icon_type: 'remove', icon_styles: ['sm-icon', 'const-dark-icon'] }} />
                                </div>

                                <div className={[styles.face, todo.show_face ? '' : 'hide'].join(' ')} id={todo.id}></div>

                            </div>

                        )

                    })
                }

                <div className={`${styles.add} flex-center br sm-m sm-py`} onClick={add}>

                    <Comp_Icon data={{ icon_type: 'add', icon_styles: ['sm-icon', 'const-dark-icon'] }} />

                </div>

            </div>

        </div>

    )

}