export default function LoaderComp({ display }) {

    if(!display) return null

    return (

        <div className='full flex v-center h-center absolute bkg-dark z-index'>
            <img className='lg-i' src="/logo.png"/>
        </div>

    )

}