import { Comp_Icon, Manager_Data } from '@/utils/modules'

export default function Comp_Add_Tab() {

    const add_workspace = () => {

        Manager_Data.current_workspace(Manager_Data.add_workspace())

    }

    return (

        <div className='flex-start sm-p'>

            <div onClick={add_workspace}>

                <Comp_Icon data={{ icon_type: 'add', icon_styles: ['sm-icon', 'light-icon'] }} />
            
            </div>

        </div>

    )

}