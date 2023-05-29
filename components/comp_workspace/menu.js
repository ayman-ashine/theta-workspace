import {
    Comp_Menu,
    Comp_Menu_Option,
    Manager_Data,
    Generate_Unique_Id,
} from '@/utils/modules'

const DATA = {

    options: [
        {
            id: 't-note',
            name: 'Note',
            icon_data: { icon_type: 'note', icon_styles: ['md-icon', 'light-icon']}
        },
        {
            id: 't-todo',
            name: 'Todo List',
            icon_data: { icon_type: 'todo', icon_styles: ['md-icon', 'light-icon']}
        },
        {
            id: 't-timer',
            name: 'Timer',
            icon_data: { icon_type: 'timer', icon_styles: ['md-icon', 'light-icon']}
        },
        {
            id: 't-chrono',
            name: 'Chrono',
            icon_data: { icon_type: 'chrono', icon_styles: ['md-icon', 'light-icon']}
        },
        {
            id: 't-calendar',
            name: 'Calendar',
            icon_data: { icon_type: 'calendar', icon_styles: ['md-icon', 'light-icon']}
        },
    ],
}

export default function Menu(params) {

    const callback = (func) => func()

    const add_frame = (_tool_id) => {

        Manager_Data.add_frame({

            id: Generate_Unique_Id(),
            title: null,
            color: 'bkg-blue',
            width: 350,
            height: 350,
            parent: {},
            pos_x: params.pos_x,
            pos_y: params.pos_y,
            menu: null,
            tool_id: _tool_id,
            tool_data: {},

        })

        callback(params.close)

    }

    return (

        <Comp_Menu pos_x={params.pos_x} pos_y={params.pos_y} close={params.close}>

            {
                DATA.options.map(option => {

                    return (

                        <Comp_Menu_Option
                            icon_data={option.icon_data}
                            name={option.name}
                            func={() => add_frame(option.id)}
                        />

                    )

                })
            }

        </Comp_Menu>

    )

}