import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Comp_Icon, Manager_Data } from '@/utils/modules'

export default function Chrono(params) {

    try {

        const [data, setData] = useState(() => {
            return params.data.chrono ?
                params.data.chrono :
                { start: false, hour: 0, min: 0, sec: 0 }
        })

        const run = () => {

            if (!data.start) setData(state => ({ ...state, start: true }))
            else setData(state => ({ ...state, start: false }))

        }

        const reset = () => {

            setData({ start: false, hour: 0, min: 0, sec: 0 })

        }

        const update = () => {

            Manager_Data.update_frame(params.id, { tool_data: { chrono: data } })

        }

        const add_zero = (num) => {

            return num < 10 ? '0' + num : String(num)

        }

        useEffect(() => update, [data])

        const change = () => {

            let clock = setInterval(() => {

                if(!data.start) clearInterval(clock)
                else {
                    setData(state => {

                        let copy = Object.assign(state, {
                            hour: state.hour + 1,
                            min: state.min + 1,
                            sec: state.sec + 1
                        })
    
                        if (copy.sec > 59) {
    
                            copy.sec = 0
                            copy.min++
    
                        } else if (copy.min > 59) {
    
                            copy.min = 0
                            copy.hour++
    
                        } else if (copy.hour > 24) {
    
                            reset()
    
                        }
    
                        return copy
    
                    })
                }

            }, 1000)

        }


        return (

            <div className={styles.container}>

                <div>

                    <div className={styles.screen}>

                        <span className={styles.character}>{add_zero(data.hour)}</span>
                        <span className={styles.character}>:</span>
                        <span className={styles.character}>{add_zero(data.min)}</span>
                        <span className={styles.character}>:</span>
                        <span className={styles.character}>{add_zero(data.sec)}</span>

                    </div>

                    <div className={styles.control}>

                        <div className={styles.btn} onClick={run}>
                            <Comp_Icon data={{ icon_type: 'start', icon_styles: ['lg-icon', 'const-dark-icon', data.start ? 'hide' : null] }} />
                            <Comp_Icon data={{ icon_type: 'pause', icon_styles: ['lg-icon', 'const-dark-icon', data.start ? null : 'hide'] }} />
                        </div>

                        <div className={styles.btn} onClick={reset}>
                            <Comp_Icon data={{ icon_type: 'reset', icon_styles: ['lg-icon', 'const-dark-icon'] }} />
                        </div>

                    </div>

                </div>

            </div>

        )

    } catch (error) {

        console.log('%sE - Chrono index', { 'color': 'black', 'background': 'red' })

    }

}