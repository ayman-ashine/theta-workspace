import { useContext } from 'react'
import ControlComp from './ControlComp'
import TabsComp from './TabsComp'
import AddComp from './AddComp'
import { appContext } from '@/utils/modules'

export default function HeaderComp() {

    const { appData } = useContext(appContext)

    return (

        <div className='auto-row h-start bkg-dark-primary' style={{ height: 50 }}>

            <ControlComp />
            <TabsComp appData={appData} />
            <AddComp />

        </div>

    )

}