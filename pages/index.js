import { useRouter } from 'next/router'

const Home = () => {

    const app_router = useRouter()
    const YEAR = (new Date()).getFullYear()

    return (

        <div className='flex full v-center h-center relative animation-translateY-long'>

            <div className='con sm-p lg-py'>

                <div className='row-6 v-center'>

                    <div className='col-3 flex v-center sm-g'>
                        <img className='md-i' src="https://img.icons8.com/fluency/200/sticky-notes.png" />
                        <div className='xxl-fw'>Theta Workspace</div>
                    </div>
                    <div className='col-3 flex v-center h-end sm-g'>
                        <div className='shadow-btn'>About</div>
                        <div className='shadow-btn'>Sign in</div>
                        <div className='shadow-btn'>Log in</div>
                    </div>

                </div>

                <div className='row-6 v-center xxl-my'>

                    <div className='col-3 row-6 h-center v-center lg-g animation-translateX-long'>

                        <div className='col-6 title lg-fs'>Welcome to Theta Workspace!</div>
                        <div className='col-6 low-5'>
                            Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                            Take control of your day and embark on a journey towards a more efficient and productive future.
                            Get started now!
                        </div>
                        <div className="col-6 get-started-btn" onClick={() => app_router.push('/app')}>
                            <div>GET STARTED</div>
                            <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                                <path strokeWidth="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                                <path strokeWidth="2" stroke="white" d="M4 12.0601H14.17"></path>
                                <path strokeWidth="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
                            </svg>
                        </div>

                    </div>

                    <div className='col-3 animation-rotate-long'>

                        <img className='full animation-opacity' src="illustrations/hero.png" />

                    </div>

                </div>

                <div className='row-6 v-center light-border-t lg-p xxl-my'>

                    <div className='col-6 flex h-center sm-g'>
                        <div className='xxl-fw'>© { YEAR } Theta Workspace</div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home