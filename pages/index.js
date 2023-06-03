import { useRouter } from 'next/router'

export default function Home() {

    const app_router = useRouter()

    return (

        <div className='container v-self-center flex v-flex lg-g'>

            <hr className='unvisible'/>

            <div className='row'>

                <div className='col-5 flex v-center'>

                    <img className='md-icon' src="/logo.png"/>
                    <span className='title sm-mx'>Theta Workspace</span>

                </div>

                <div className='col-5 flex v-center h-end sm-g'>

                    <span className='btn'>Contact</span>
                    <span className='btn'>Info</span>
                    <span className='btn'>Login</span>

                </div>

            </div>

            <hr/>

            <div className='row v-center'>

                <div className='col-5 flex v-flex md-g'>

                    <span className='title'>Welcome to Theta Workspace</span>
                    <p>
                        Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                        Take control of your day and embark on a journey towards a more efficient and productive future.
                        Get started now and unlock your true potential.
                    </p>
                    <span className='btn w-50' onClick={() => app_router.push('/app')}>
                        Get Started
                    </span>

                </div>

                <div className='col-5 flex h-center v-center'>

                    <img className='contain' src="illustrations/pc.png"/>

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
                    <img className='contain w-100' src='illustrations/note.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Todo List</div>
                    <img className='contain w-100' src='illustrations/todo.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Clock</div>
                    <img className='contain w-100' src='illustrations/clock.png'/>
                </div>

                <div className='col-2 flex v-flex v-center h-space-between bkg-light br hover-effect-brightness sm-g sm-p'>
                    <div className='title clr-dark'>Calendar</div>
                    <img className='contain w-100' src='illustrations/calendar.png'/>
                </div>

            </div>
            
            <hr/>

        </div>

    )

}