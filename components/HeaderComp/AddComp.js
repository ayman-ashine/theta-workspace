import { AppDataManager, AppDefaultData, GenerateUniqueId, IconsComp } from '@/utils/modules'

export default function AddComp() {

    const addWorkspace = () => {

        const id = GenerateUniqueId()
        AppDataManager.addWorkspace({...AppDefaultData.defaultWorkspaceData, id})
        AppDataManager.currentWorkspace(id)

    }

    return (

        <div className='flex h-start v-center sm-p' >

            <div onClick={addWorkspace}>

                <IconsComp data={{ icon_type: 'add', icon_styles: ['sm-i', 'light-i'] }} />
            
            </div>

        </div>

    )

}