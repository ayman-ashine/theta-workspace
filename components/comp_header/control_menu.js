import {
    Comp_Menu_Option,
    Comp_Menu,
    Manager_Data,
    Manager_Settings
} from '@/utils/modules'

export default function Control_Menu(params) {

    const callback = (func) => func()

    const menu_clean = () => {

        return (

            <Comp_Menu>

                <Comp_Menu_Option name={'Clean Current'} func={func_clean_current_workspace}/>
                <Comp_Menu_Option name={'Clean All'} func={func_clean_all_workspace}/>

            </Comp_Menu>
        )

    }

    const menu_lighing = () => {

        return (

            <Comp_Menu>

                <Comp_Menu_Option name={'Dark Mode'} func={func_set_dark_mode}/>
                <Comp_Menu_Option name={'Light Mode'} func={func_set_light_mode}/>

            </Comp_Menu>
        )

    }

    const menu_appearance = () => {

        return (

            <Comp_Menu>

                <Comp_Menu_Option name={'Low Appearance'}/>
                <Comp_Menu_Option name={'Height Appearance'}/>

            </Comp_Menu>
        )

    }

    const func_clean_current_workspace = () => {

        Manager_Data.clean_current_workspace()
        callback(params.close)

    }

    const func_clean_all_workspace = () => {

        Manager_Data.clean_all_workspace()
        callback(params.close)

    }

    const func_set_dark_mode = () => {

        Manager_Settings.set_dark_mode()
        callback(params.close)

    }

    const func_set_light_mode = () => {

        Manager_Settings.set_light_mode()
        callback(params.close)
        
    }

    return (

        <Comp_Menu pos_x={params.pos_x} pos_y={params.pos_y} close={params.close}>

            <Comp_Menu_Option name={'Profile Settings'}/>
            <Comp_Menu_Option name={'Clean'} sub_menu={menu_clean()}/>
            <Comp_Menu_Option name={'Lighting'} sub_menu={menu_lighing()}/>
            <Comp_Menu_Option name={'Appearance'} sub_menu={menu_appearance()}/>

        </Comp_Menu>

    )

}