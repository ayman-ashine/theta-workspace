
export default function NoteComp({ dt, disAppData }) {

    const update = (e) => {

        disAppData({ type: 'UPDATE_FRAME', id: dt.id, props: { data: e.target.value } })

    }

    return (

        <textarea
            className='full sm-p clr-const-dark const-dark-placeholder'
            placeholder="..."
            defaultValue={dt.data}
            onInput={update}
        >
        </textarea>

    )

}