import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Manager_Data, Generator } from '@/utils/modules'

export default function Timer(params) {

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

        setData( state => [...state, {
            id: Generator(),
            active: false,
            hour: 0,
            min: 0,
            sec: 0
        }])

    }

    const remove = ( _id ) => {

        setData( state => state.filter( timer => timer.id !== _id ))

    }

    const activate = ( _id ) => {

        setData( state => state.map( timer => {

            if(timer.id == _id) return {...timer, active: timer.active ? false : true }
            else return timer

        }))

    }

    const add_zero = (_num) => {

        return _num < 10 ? '0' + _num : String(_num)

    }

    const change_hour = (_id, _value) => {

        setData( state => state.map( timer => {

            if(timer.id == _id) return {...timer, hour: _value}
            else return timer

        }))

    }

    const change_min = (_id, _value) => {

        setData( state => state.map( timer => {

            if(timer.id == _id) return {...timer, min: _value}
            else return timer

        }))

    }

    const change_sec = (_id, _value) => {

        setData( state => state.map( timer => {

            if(timer.id == _id) return {...timer, sec: _value}
            else return timer

        }))

    }

    const get_timers = () => {

        return data.map((timer, index) => {

            return (

                <div className={styles.timer} key={index}>

                    <div className={styles.grab}>

                        <div className="circle">
                            <img src="https://img.icons8.com/material-sharp/20/null/menu-2.png" />
                        </div>

                    </div>
                    
                    <div className={styles.input_container}>

                        <input
                            className={styles.input_number}
                            type='number'
                            value={add_zero(timer.hour)}
                            onChange={(e) => { change_hour(timer.id, e.target.value) }}
                        />
                        <input
                            className={styles.input_number}
                            type='number'
                            value={add_zero(timer.min)}
                            onChange={(e) => { change_min(timer.id, e.target.value) }}
                        />
                        <input
                            className={styles.input_number}
                            type='number'
                            value={add_zero(timer.sec)}
                            onChange={(e) => { change_sec(timer.id, e.target.value) }}
                        />

                    </div>

                    <label className={styles.switch} onClick={() => activate(timer.id)}>
                        {
                            timer.active ?
                            <input className={styles.checkbox} type="checkbox" checked />
                            :
                            <input className={styles.checkbox} type="checkbox"/>
                        }
                        <span className={styles.circle}></span>
                    </label>

                    <div className={styles.remove} onClick={() => remove(timer.id)}>
                        <div className="circle">
                            <img className={styles.icon} src="https://img.icons8.com/ios-filled/20/null/delete-sign--v1.png" />
                        </div>
                    </div>

                </div>
            )

        })

    }

    return (

        <div className={styles.container}>

            { get_timers() }

            <div className={[styles.timer, styles.add].join(' ')} onClick={add}>

                <img src="https://img.icons8.com/ios/25/null/plus-math--v1.png" />

            </div>

        </div>

    )

}