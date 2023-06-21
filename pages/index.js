import { useRouter } from 'next/router'

export default function Home() {

    const app_router = useRouter()

    return (

        <div className='flex v-center h-center'>

            <div className='l-con overflow-hidden light-border br-2 md-p'>

                <div className='row v-center'>

                    <div className='col-5 flex v-center sm-g'>
                        <img className='md-i' src="https://img.icons8.com/fluency/200/sticky-notes.png" />
                        <div className='lg-fw md-fs'>Theta Workspace</div>
                    </div>
                    <div className='col-5 flex v-center h-end sm-g'>
                        <div className='shwbtn'>About</div>
                        <div className='shwbtn'>Sign in</div>
                        <div className='shwbtn'>Log in</div>
                    </div>

                </div>

                <div className='row v-center'>

                    <div className='col-5 flex v-flex h-center v-center md-g'>

                        <div className='md-fw md-fs'>Welcome to Theta Workspace!</div>
                        <div className='low-8 center-text'>
                            Boost your productivity by effortlessly creating, organizing, and prioritizing tasks.
                            Take control of your day and embark on a journey towards a more efficient and productive future.
                            Get started now!
                        </div>
                        <button className="ctabtn w-50" onClick={() => app_router.push('/app')}>
                            <span>Get Started</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>

                    </div>

                    <div className='col-5 flex h-center v-center'>

                        <img className='w-100 h-50 contain-i' src="illustrations/hero.png" />

                    </div>

                </div>

            </div>

        </div>

    )

}