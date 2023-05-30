import styles from './styles.module.css'
import Menu from './menu'
import Tool from './tool'
import { Comp_Icon, Manager_Data } from '@/utils/modules'

export default function Comp_Frame(params) {

  const data = params.data

  const move = (e) => {

    let shift_x = e.clientX - data.pos_x
    let shift_y = e.clientY - data.pos_y

    const _move = (e) => {

      let pos_x = e.x - shift_x
      let pos_y = e.y - shift_y

      Manager_Data.update_frame(data.id, { pos_x, pos_y })

    }

    const _rest = () => {

      document.removeEventListener('mousemove', _move)
      document.removeEventListener('mouseup', _rest)
    }

    document.addEventListener('mousemove', _move)
    document.addEventListener('mouseup', _rest)

  }

  const open_menu = (e) => {

    if (e && e.stopPropagation) e.stopPropagation();

    Manager_Data.update_frame(data.id, {
      menu: <Menu data={{
        id: data.id,
        title: data.title,
        pos_x: data.width + data.pos_x - 10,
        pos_y: data.pos_y + 20,
      }} />
    })

  }

  return (

    <>

      <div
        className={[styles.container, data.color].join(' ')}
        style={
          {
            left: data.pos_x + 'px',
            top: data.pos_y + 'px',
            width: data.width + 'px',
            height: data.height + 'px',
          }
        }
      >

        <div className={styles.head} onMouseDown={move}>

          <span className={styles.title}>
            {data.title}
          </span>

          <span onClick={open_menu}>
            <Comp_Icon data={{ icon_type: 'menu-2', icon_styles: ['sm-icon', 'const-dark-icon'] }} />
          </span>

        </div>

        <div className={styles.body}>

          {Tool(data.tool_id, data.id, data.tool_data)}

        </div>

      </div>

      {data.menu}

    </>

  )

}