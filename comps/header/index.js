import { memo } from 'react'
import { HEADER_DATA } from '@/data/modules'
import { Control, Tabs, AddTab } from './modules.js'


const Header = () => {

    return (

        <div
            className='row-auto h-start bg-primary overflow-hidden overflow-x-auto'
            style={{ height: HEADER_DATA.height }}
        >

            <Control/>
            <Tabs />
            <AddTab />

        </div>

    )

}

export default memo(Header)