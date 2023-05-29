import styles from './styles.module.css'
import { useState } from 'react'
import { Comp_Icon, Manager_Data } from '@/utils/modules'

export default function Comp_Tab({ workspace }) {

    const [editMode, setEditMode] = useState(false)

    const current_workspace = (_id) => {

        Manager_Data.current_workspace(_id)

    }

    // @ ----
    const grab_workspace = () => {

    }

    const remove_workspace = (e, _id) => {

        if (e && e.stopPropagation) e.stopPropagation();
        Manager_Data.remove_workspace(_id)

    }

    const rename_workspace = (e, _id) => {

        Manager_Data.rename_workspace(_id, e.target.value)

    }

    const switch_edit_mode = () => {

        setEditMode(state => !state)

    }
    
    return (

        <div className={[styles.tab, workspace.current?styles.current:null].join(' ')} onClick={() => current_workspace(workspace.id)}>
            
            <input
                className={[styles.name, editMode?styles.focus:null].join(' ')}
                value={workspace.name}
                onChange={(e) => rename_workspace(e, workspace.id)}
                disabled={ editMode?null:'disabled' }
            />

            <div className={styles.remove}>
                <div onClick={switch_edit_mode}>
                    {
                        editMode?
                        <Comp_Icon data={{ icon_type: 'checkmark', icon_styles: ['sm-icon', 'light-icon'] }} />
                        :
                        <Comp_Icon data={{ icon_type: 'edit', icon_styles: ['sm-icon', 'light-icon'] }} />
                    }
                </div>
            </div>

            <div className={styles.remove}>
                <div onClick={(e) => remove_workspace(e, workspace.id)}>
                    <Comp_Icon data={{ icon_type: 'remove', icon_styles: ['sm-icon', 'light-icon'] }} />
                </div>
            </div>

        </div>

    )

}