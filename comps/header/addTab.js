import { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { WORKSPACE_ACTIONS } from '@/data/modules'
import { generateUniqueId } from '@/utils/modules'
import { Icon } from '@/comps/modules'


const AddTab = () => {

    const dispatch = useDispatch()

    const workspaceAdd = () => {

        const id = generateUniqueId()
        dispatch(WORKSPACE_ACTIONS.ADD({ id }))
        dispatch(WORKSPACE_ACTIONS.CURRENT({ id }))

    }

    return (

        <div className='flex h-start v-center sm-p' >

            <div onClick={workspaceAdd}>

                <Icon type={'add'} styles={['sm-i', 'light-i']} />

            </div>

        </div>

    )

}

export default memo(AddTab)