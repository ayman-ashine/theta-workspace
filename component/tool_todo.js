import styles from '@/styles/Tool_Todo.module.css'
import M_Workspace from '@/component/m_workspace'
import { useEffect, useState } from 'react'
import { Generator } from '@/utils/generator'

export default function Tool_Todo(params) {

    const _id = params.id
    const _data = params.data.list ? params.data.list : []
    const [data, setData] = useState(_data)

    useEffect( () => {

        update()

    }, [data])

    const update = () => {

        M_Workspace.update_frame(_id, { tool_data: { list: data } })

    }

    const add = () => {

        setData( state => [...state, {
            id: Generator(),
            complete: false,
            show_face: false,
            title: '',
        }])

    }

    const grab = (_id) => {

        setData( state => state.map( todo => {
            if(todo.id !== _id) return {...todo, show_face: true}
            else return todo
        }))

        document.addEventListener('mouseup', rest)

        function rest() {

            setData( state => state.map( todo => {
                return {...todo, show_face: false}
            }))

            document.removeEventListener('mouseup', rest)

        }

    }

    const complete = (_id) => {

        setData( state => state.map( todo => {
            if(todo.id === _id) return {...todo, complete: !todo.complete}
            else return todo
        }))

    }

    const title = (e, _id) => {

        setData( state => state.map( todo => {
            if(todo.id === _id) return {...todo, title: e.target.value}
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
                    data.map( (todo, index) => {
                        return (
                            <div className={[styles.todo, todo.show_face?'bkg-low-light':''].join(' ')} key={index}>

                                <div className={[styles.grab, 'circle'].join(' ')} onMouseDown={() => grab(todo.id)}>
                                    <img src="https://img.icons8.com/material-sharp/20/null/menu-2.png"/>
                                </div>
                                <div className={[styles.complete, todo.complete?'bkg-teal':'circle'].join(' ')} onClick={() => complete(todo.id)}>
                                    <img
                                        className={todo.complete?'':'hide'}
                                        src="https://img.icons8.com/material-rounded/20/checkmark--v1.png"
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
                                <div className={[styles.remove, 'circle'].join(' ')} onClick={() => remove(todo.id)}>
                                    <img className={styles.icon} src="https://img.icons8.com/ios-filled/20/null/delete-sign--v1.png"/>
                                </div>

                                <div className={[styles.face, todo.show_face?'hide':'hide'].join(' ')}></div>

                            </div>
                        )
                    })
                }

            </div>

            <div className={styles.add}>

                <p className={[styles.add_icon, 'circle'].join(' ')} onClick={add}>
                    <img src="https://img.icons8.com/ios/20/null/plus-math--v1.png"/>
                </p>

            </div>

        </div>

    )

}