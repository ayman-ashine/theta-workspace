import Cmp_Option from './cmp_option'
import Cmp_Menu from './cmp_menu'
import { Manager_Data, LocalSaveData } from '@/utils/modules'

export default function Menu_Main(params) {

    const callback = (func) => func()

    const menu_appearance = () => {

        return (

            <Cmp_Menu>

                <Cmp_Option name={'Low Appearance'}/>
                <Cmp_Option name={'Height Appearance'}/>

            </Cmp_Menu>
        )

    }

    const menu_clean = () => {

        return (

            <Cmp_Menu>

                <Cmp_Option name={'Clean Current Workspace'} func={func_clean_current_workspace}/>
                <Cmp_Option name={'Clean All Workspace'} func={func_clean_all_workspace}/>

            </Cmp_Menu>
        )

    }

    const func_new_tab = () => {

        Manager_Data.add_workspace()
        callback(params.close)

    }

    const func_save = () => {

        Manager_Data.local_save()
        callback(params.close)

    }

    const func_clean_current_workspace = () => {

        Manager_Data.clean_current_workspace()
        close(params.close)

    }

    const func_clean_all_workspace = () => {

        Manager_Data.clean_all_workspace()
        close(params.close)

    }

    return (

        <Cmp_Menu pos_x={params.pos_x} pos_y={params.pos_y} display={params.display}>

            <Cmp_Option name={'New Tab'} func={func_new_tab}/>
            <Cmp_Option name={'Save'} func={func_save}/>
            <Cmp_Option name={'Clean'} sub_menu={menu_clean()}/>
            <Cmp_Option name={'Appearance'} sub_menu={menu_appearance()}/>

        </Cmp_Menu>

    )

}