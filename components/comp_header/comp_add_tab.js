import { Manager_Data } from '@/utils/modules'

export default function Comp_Add_Tab() {

    const add_workspace = () => {

        const _id = Manager_Data.add_workspace()
        Manager_Data.current_workspace(_id)

    }

    return (

        <div className='flex-start sm-p'>
            <div className='hover-effect-square' onClick={add_workspace}>
                <img className='sm-icon' src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"/>
            </div>
        </div>

    )

}