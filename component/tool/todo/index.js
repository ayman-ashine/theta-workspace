import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Manager_Data, Generator } from '@/utils/modules'


export default function Todo(params) {

    const _id = params.id
    const _data = params.data.list ? params.data.list : []
    const [data, setData] = useState(_data)

    useEffect(() => {

        update()

    }, [data])

    const update = () => {

        Manager_Data.update_frame(_id, { tool_data: { list: data } })

    }

    const add = () => {

        setData(state => [...state, {
            id: Generator(),
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

    function remove(_id) {

        setData(state => state.filter(todo => todo.id !== _id))

    }

    return (

        <div className={styles.container}>

            <div className={styles.list}>

                {
                    data.map((todo, index) => {
                        return (
                            <div className={styles.todo} key={index}>

                                <div className={styles.grab} >
                                    <div className="circle" onMouseDown={() => grab(todo.id)}>
                                        <img src="https://img.icons8.com/material-sharp/20/null/menu-2.png" />
                                    </div>
                                </div>
                                <div className={[styles.complete, todo.complete ? 'bkg-teal' : 'square'].join(' ')} onClick={() => complete(todo.id)}>
                                    <img
                                        className={todo.complete ? '' : 'hide'}
                                        src="https://img.icons8.com/material-rounded/20/null/checkmark--v1.png"
                                    />
                                </div>
                                <div className={styles.input}>
                                    <input
                                        className={styles.title}
                                        value={todo.title}
                                        onChange={(e) => title(e, todo.id)}
                                        type="text"
                                        placeholder="Your title"
                                    />
                                </div>
                                <div className={styles.remove} onClick={() => remove(todo.id)}>
                                    <div className="circle">
                                        <img className={styles.icon} src="https://img.icons8.com/ios-filled/20/null/delete-sign--v1.png" />
                                    </div>
                                </div>

                                <div className={[styles.face, todo.show_face ? '' : 'hide'].join(' ')} id={todo.id}></div>

                            </div>
                        )
                    })
                }

                <div className={styles.add} onClick={add}>

                    <img src="https://img.icons8.com/ios/25/null/plus-math--v1.png" />

                </div>

            </div>

        </div>

    )

}