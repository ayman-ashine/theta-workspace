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
            icon: 'https://img.icons8.com/material-outlined/50/FFFFFF/note.png'
        },
        {
            id: 't-todo',
            name: 'Todo List',
            icon: 'https://img.icons8.com/material-outlined/50/FFFFFF/todo-list--v2.png'
        },
        {
            id: 't-timer',
            name: 'Timer',
            icon: 'https://img.icons8.com/material-outlined/50/FFFFFF/retro-alarm-clock.png'
        },
        {
            id: 't-chrono',
            name: 'Chrono',
            icon: 'https://img.icons8.com/material-outlined/50/FFFFFF/time.png'
        },
        {
            id: 't-calendar',
            name: 'Calendar',
            icon: 'https://img.icons8.com/ios/50/FFFFFF/calendar--v1.png'
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
                            icon={option.icon}
                            name={option.name}
                            func={() => add_frame(option.id)}
                        />

                    )

                })
            }

        </Comp_Menu>

    )

}