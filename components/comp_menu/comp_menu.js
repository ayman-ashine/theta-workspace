import styles from './styles.module.css'

export default function Comp_Menu(params) {

    const callback = (func) => func()

    return (

        <>

            {
                params.close?
                <div className={styles.back} onClick={() => callback(params.close)}></div>
                :
                null
            }

            <div
                className={styles.menu}
                style={{left: params.pos_x + 'px', top: params.pos_y + 'px'}}
            >

                {params.children}

            </div>

        </>

    )

}