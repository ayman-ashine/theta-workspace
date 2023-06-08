import { useRouter } from 'next/router'

export default function Home() {

    const app_router = useRouter()

    return (

        <div className='l-con v-self-center flex v-flex lg-g'>

            <hr className='unvisible'/>

            <div className='row'>

                <div className='col-5 flex v-center sm-g'>

                    <img className='md-i' src="/logo.png"/>
                    <div className='title'>Theta Workspace</div>

                </div>

                <div className='col-5 flex v-center h-end sm-g'>

                    <div className='btn'>Contact</div>
                    <div className='btn'>Info</div>
                    <div className='btn'>Login</div>

                </div>

            </div>

            <hr/>

            <div className='row v-center'>

                <div className='col-5 flex v-flex md-g'>

                    <div className='title'>Welcome to Theta Workspace</div>
                    <div className='low'>
                        Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                        Take control of your day and embark on a journey towards a more efficient and productive future.
                        Get started now and unlock your true potential.
                    </div>
                    <div className='btn w-50' onClick={() => app_router.push('/app')}>
                        Get Started
                    </div>

                </div>

                <div className='col-5 flex h-center v-center'>

                    <img className='cover-i' src="illustrations/pc.png"/>

                </div>

            </div>

            <hr/>

            <div className='row v-center bkg-light br md-p'>

                <div className='col-5 flex h-center'>
                    <img className='contain' src="illustrations/illu_3.png"/>
                </div>

                <div className='col-5 title clr-dark'>
                    We provide you with a range of powerful tools to help you effectively manage your time.
                </div>

            </div>

            <div className='row v-center sm-g'>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Note</div>
                    <img className='cover-i full' src='illustrations/note.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Todo List</div>
                    <img className='cover-i full' src='illustrations/todo.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Clock</div>
                    <img className='cover-i full' src='illustrations/clock.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Calendar</div>
                    <img className='cover-i full' src='illustrations/calendar.png'/>
                </div>

            </div>
            
            <hr/>

        </div>

    )

}