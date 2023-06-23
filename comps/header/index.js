import { memo } from 'react'
import { HEADER_DATA } from '@/data/modules'
import { Control, Workspaces, AddWorkspace } from './modules.js'


const Header = () => {

    return (

        <div
            className='auto-row h-start light-border-bottom bkg-dark-primary overflow-hidden overflow-h-auto'
            style={{ height: HEADER_DATA.height }}
        >

            <Control/>
            <Workspaces />
            <AddWorkspace />

        </div>

    )

}

export default memo(Header)