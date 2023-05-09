import styles from '@/styles/Frame.module.css'
import Menu from '@/component/menu'
import M_Workspace from '@/component/m_workspace'
import { Tool } from '@/component/tool'

export default function Frame(params) {

  const data = params.data

  //console.log(data.pos_x)

  // Move frame trought workspace
  const move = (e) => {

    let shift_x = e.clientX - data.pos_x
    let shift_y = e.clientY - data.pos_y

    const _move = (e) => {

      let pos_x = e.x - shift_x
      let pos_y = e.y - shift_y

      move_limit(pos_x, pos_y)

    }

    const _rest = () => {

      document.removeEventListener('mousemove', _move)
      document.removeEventListener('mouseup', _rest)

    }

    document.addEventListener('mousemove', _move)
    document.addEventListener('mouseup', _rest)

  }

  // Limit frame move when reach out parent size
  const move_limit = (pos_x, pos_y) => {

    if (pos_x < 0) pos_x = 0
    else if (pos_x > data.parent.width - data.width) pos_x = data.parent.width - data.width

    if (pos_y < 0) pos_y = 0
    else if (pos_y > data.parent.height - data.height) pos_y = data.parent.height - data.height
    
    M_Workspace.update_frame(data.id, { pos_x, pos_y })

  }

  // Open frame menu
  const menu = ( e ) => {

    if (e && e.stopPropagation) e.stopPropagation();

    let menu = <Menu data={{ id: data.id, title: data.title, pos_x: data.width + data.pos_x, pos_y: data.pos_y, display: '' }} key={data.id} />
    M_Workspace.update_frame(data.id, { menu })

  }

  return (

    <>

      <div
        id={data.id}
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
          <span className={styles.menu}>
            <img onMouseDown={menu} src="https://img.icons8.com/windows/25/null/xbox-menu.png" />
          </span>

        </div>

        <div className={styles.body}>

          { Tool(data.tool_id, data.id, data.tool_data) }

        </div>

      </div>

      { data.menu }

    </>

  )

}