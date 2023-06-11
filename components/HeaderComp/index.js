import { memo } from 'react'
import { Control, Workspaces, AddWorkspace } from './modules'
import { AppDefaultData } from '@/utils/modules'

const HeaderComp = ({ dt, dis }) => {

    return (

        <div
            className='auto-row h-start bkg-dark-primary'
            style={{
                height: AppDefaultData.HEADER.height
            }}
        >

            <Control disAppData={dis.disAppData} disAppSettings={dis.disAppSettings} />
            <Workspaces appData={dt.appData} disAppData={dis.disAppData} />
            <AddWorkspace disAppData={dis.disAppData} />

        </div>

    )

}

export default memo(HeaderComp)