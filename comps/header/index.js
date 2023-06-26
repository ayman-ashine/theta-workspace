import { memo } from 'react'
import { HEADER_DATA } from '@/data/modules'
import { Control, Workspaces, AddWorkspace } from './modules.js'


const Header = () => {

    return (

        <div
            className='row-auto h-start light-border-b bg-primary overflow-hidden overflow-x-auto'
            style={{ height: HEADER_DATA.height }}
        >

            <Control/>
            <Workspaces />
            <AddWorkspace />

        </div>

    )

}

export default memo(Header)