import styles from '@/styles/Tool_Timer.module.css'
import { useEffect, useState } from 'react'
import { Manager_Data, Generator } from '@/utils/modules'

export default function Tool_Timer(params) {

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

        setData(state => state.map( (todo, index) => {

            if(todo.id === _id) from = index
            if(todo.id === __id) to = index
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

            if(__id) sort(_id, __id)

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

            <div className={styles.screen}>
                00:00:00
            </div>

            <div className={styles.list}>

            {
                data.map( (timer, index) => {
                    return (
                        <div className={styles.timer} key={index}>

                            <div className={[styles.grab, 'circle'].join(' ')} onMouseDown={() => grab(timer.id)}>
                                <img src="https://img.icons8.com/material-sharp/15/null/menu-2.png"/>
                            </div>
                            <div className={styles.input}>
                                <input
                                    className={styles.title}
                                    value={timer.title}
                                    onChange={(e) => title(e, timer.id)}
                                    type="text"
                                    placeholder="Your title"
                                    />
                            </div>
                            <div className={styles.time}>
                                <input className={styles.time_input} type='number'/>
                                <input className={styles.time_input} type='number'/>
                                <input className={styles.time_input} type='number'/>
                            </div>
                            <div className={[styles.remove, 'circle'].join(' ')} onClick={() => remove(timer.id)}>
                                <img className={styles.icon} src="https://img.icons8.com/ios-filled/15/null/delete-sign--v1.png"/>
                            </div>

                            <div className={[styles.face, timer.show_face?'':'hide'].join(' ')} id={timer.id}></div>

                        </div>
                    )
                })
            }

            </div>

            <div className={styles.add}>

                <p className={[styles.add_icon, 'circle'].join(' ')} onClick={add}>
                    <img src="https://img.icons8.com/ios/20/null/plus-math--v1.png" />
                </p>

            </div>

        </div>

    )

}