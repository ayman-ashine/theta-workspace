import { AppDataManager } from '@/utils/modules'

export default function NoteComp({ dataFrame }) {

    const update = ( e ) => {

        AppDataManager.updateFrame(dataFrame.id, { data: e.target.value })

    }

    return (

        <textarea
            className='full sm-p clr-const-dark const-dark-placeholder'
            placeholder="..."
            defaultValue={dataFrame.data}
            onInput={update}
        >
        </textarea>

    )

}