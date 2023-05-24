import styles from './styles.module.css'

export default function Cmp_Menu(params) {

    return (

        <div
            className={[styles.menu, params.display?'':'hide'].join(' ')}
            style={{
                left: params.pos_x+'px',
                top: params.pos_y+'px'
            }}
        >

            {params.children}

        </div>

    )

}