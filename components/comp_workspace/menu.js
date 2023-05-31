import {
    Comp_Menu,
    Comp_Menu_Option,
    Manager_Data,
    Generate_Unique_Id,
} from '@/utils/modules'

const DATA = {

    tools: [
        {
            id: 't-note',
            name: 'Note',
            icon_data: {
                icon_type: 'note',
                icon_styles: ['md-icon', 'light-icon']
            }
        },
        {
            id: 't-todo',
            name: 'Todo List',
            icon_data: {
                icon_type: 'todo',
                icon_styles: ['md-icon', 'light-icon']
            }
        },
        {
            id: 't-timer',
            name: 'Timer',
            icon_data: {
                icon_type: 'timer',
                icon_styles: ['md-icon', 'light-icon']
            }
        },
        {
            id: 't-chrono',
            name: 'Chrono',
            icon_data: {
                icon_type: 'chrono',
                icon_styles: ['md-icon', 'light-icon']
            }
        },
        {
            id: 't-calendar',
            name: 'Calendar',
            icon_data: {
                icon_type: 'calendar',
                icon_styles: ['md-icon', 'light-icon']
            }
        },
    ],

}

export default function Menu({ pos_x, pos_y, close }) {

    const callback = (func) => func()

    const add_frame = (t_id) => {

        Manager_Data.add_frame({

            id: Generate_Unique_Id(),
            title: null,
            color: 'bkg-blue',
            width: 350,
            height: 350,
            parent: {},
            pos_x: pos_x,
            pos_y: pos_y,
            menu: null,
            tool_id: t_id,
            tool_data: {},

        })

        callback(close)

    }

    return (

        <Comp_Menu pos_x={pos_x} pos_y={pos_y} close={close}>
            
            {
                DATA.tools.map(tool => {

                    return (

                        <Comp_Menu_Option
                            icon_data={tool.icon_data}
                            name={tool.name}
                            func={() => add_frame(tool.id)}
                        />

                    )

                })
            }

        </Comp_Menu>

    )

}