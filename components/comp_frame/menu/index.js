import styles from './styles.module.css'
import { useState } from 'react'
import { Manager_Data } from '@/utils/modules'

export default function Menu(params) {

    const [data, setData] = useState(params.data)

    const check_color = ( e ) => {

        let prev_color_check = document.querySelector(`.${styles.color_check}`)
        if(prev_color_check) prev_color_check.classList.remove(styles.color_check)
        e.target.classList.add(styles.color_check)

        Manager_Data.update_frame(data.id, {color: e.target.getAttribute('color')})

    }

    const change_title = ( e ) => {

        setData( state => {
            return {
                ...state,
                title: e.target.value
            }
        })

        Manager_Data.update_frame(data.id, {title: e.target.value})

    }

    const hide_frame = () => {

        Manager_Data.update_frame(data.id, { menu: null })

    }

    const remove_frame = () => {

        Manager_Data.remove_frame(data.id)

    }

    const close_menu = () => {

        Manager_Data.update_frame(data.id, { menu: null })

    }

    const stop_propagation = ( e ) => {

        if (e && e.stopPropagation) e.stopPropagation();

    }

    return (

        <div
            className={styles.back}
            onMouseDown={close_menu}
            >

            <div
                className={styles.menu}
                onMouseDown={stop_propagation}
                style={{ left: data.pos_x + 'px', top: data.pos_y + 'px'}}
            >

                <div className={styles.option}>
                    <div className={styles.colors}>
                        <div className={`${styles.color} bkg-red`} color="bkg-red" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-pink`} color="bkg-pink" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-purple`} color="bkg-purple" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-indigo`} color="bkg-indigo" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-blue`} color="bkg-blue" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-cyan`} color="bkg-cyan" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-teal`} color="bkg-teal" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-green`} color="bkg-green" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-yellow`} color="bkg-yellow" onClick={check_color}></div>
                        <div className={`${styles.color} bkg-orange`} color="bkg-orange" onClick={check_color}></div>
                    </div>
                </div>

                <div className={styles.option}>
                    <input className={styles.input} value={data.title} type='text' placeholder='Title' onChange={change_title} />
                </div>

                <div className={styles.option} onClick={hide_frame}>
                    <div className={styles.btn}>
                        Hide
                    </div>
                </div>

                <div className={styles.option} onClick={remove_frame}>
                    <div className={styles.btn}>
                        Remove
                    </div>
                </div>

            </div>

        </div>

    )

}