import styles from '@/styles/Tool_Chrono.module.css'
import { useEffect, useState } from 'react'
import { Manager_Data } from '@/utils/modules'

export default function Tool_Chrono(params) {

    const _id = params.id
    const _data = params.data.chrono ? params.data.chrono : { min: '00', sec: '00', msec: '00', start: false, loop_id: 0 }
    const [data, setData] = useState(_data)

    useEffect(() => {

        update()

    }, [data])

    const update = () => {

        Manager_Data.update_frame(_id, { tool_data: { chrono: data } })

    }

    const add_zero = (num) => {

        return num < 10 ? '0' + num : String(num)

    }

    const start_pause = () => {

        if (data.start) {

            clearInterval(data.loop_id)
            setData(state => { return { ...state, start: false } })
            return

        } else {

            setData(state => { return { ...state, start: true } })

            let min = Number(data.min)
            let sec = Number(data.sec)
            let msec = Number(data.msec)

            let loop_id = setInterval(() => {

                if (msec < 99) {
                    msec += 1
                } else if (sec < 59) {
                    sec += 1
                    msec = 0
                } else if (min < 59) {
                    min += 1
                    sec = 0
                } else {
                    clearInterval(LOOP)
                }

                setData(state => {
                    return { ...state, min: add_zero(min), sec: add_zero(sec), msec: add_zero(msec) }
                })

            }, 10)

            setData(state => {
                return { ...state, loop_id }
            })

        }

    }

    const reset = () => {

        if(data.start) clearInterval(data.loop_id)

        setData(state => {
            return { ...state, min: '00', sec: '00', msec: '00', start: false }
        })

    }

    return (

        <div className={styles.container}>

            <div>

                <div className={styles.screen}>

                    <span className={styles.character}>{data.min}</span>
                    <span className={styles.character}>:</span>
                    <span className={styles.character}>{data.sec}</span>
                    <span className={styles.character}>.</span>
                    <span className={styles.character}>{data.msec}</span>

                </div>

                <div className={styles.control}>

                    <div className={[styles.btn, 'circle'].join(' ')} onClick={start_pause}>
                        <img className={data.start ? 'hide' : ''} src="https://img.icons8.com/material-outlined/40/ffffff/circled-play.png" />
                        <img className={data.start ? '' : 'hide'} src="https://img.icons8.com/material-outlined/40/ffffff/circled-pause.png" />
                    </div>

                    <div className={[styles.btn, 'circle'].join(' ')} onClick={reset}>
                        <img src="https://img.icons8.com/material-outlined/40/ffffff/restart--v1.png" />
                    </div>

                </div>

            </div>

        </div>

    )

}