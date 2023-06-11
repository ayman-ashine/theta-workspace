import { memo } from 'react'
import { generateUniqueId, IconComp } from '@/utils/modules'

const AddWorkspace = ({ disAppData }) => {

    const addWorkspace = () => {

        const id = generateUniqueId()
        disAppData({type: 'ADD_WORKSPACE', id})
        disAppData({type: 'CURRENT_WORKSPACE', id})

    }

    return (

        <div className='flex h-start v-center sm-p' >

            <div onClick={addWorkspace}>

                <IconComp type={'add'} styles={['sm-i', 'light-i']}/>

            </div>

        </div>

    )

}

export default memo(AddWorkspace)