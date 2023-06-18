import { memo, useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { TIMER_DATA, WORKSPACE_ACTIONS } from '@/data/modules'
import { generateUniqueId } from '@/utils/modules'
import { Icon } from '@/comps/modules'

const Timer = ({ dt }) => {

    const clockWorker = useMemo(() => new Worker('./clockWorker.js'), [])
    const dispatch = useDispatch()
    const [ldt, setLdt] = useState(dt.data ? dt.data : TIMER_DATA.default)

    const addZero = (num) => {

        return num < 10 ? '0' + num : String(num)

    }

    const getCurrentTime = () => {

        const appDate = new Date()
        return Math.floor(appDate.getTime() / 1000)

    }

    const saveCurrentTime = () => {

        setLdt(state => ({ ...state, stockTime: getCurrentTime() }))
    }

    const startPauseTimer = () => {

        setLdt(state => ({ ...state, start: !state.start }))
        clockWorker.postMessage(!ldt.start)

    }
    const resetTimer = () => {

        setLdt(TIMER_DATA.default)
        clockWorker.postMessage(false)

    }

    clockWorker.onmessage = () => {

        if (ldt.sec < 59) {
            setLdt(state => ({ ...state, sec: state.sec + 1 }))
        } else if (ldt.min < 59) {
            setLdt(state => ({ ...state, sec: 0, min: state.min + 1 }))
        } else if (ldt.hour < 24) {
            setLdt(state => ({ ...state, min: 0, hour: state.hour + 1 }))
        } else resetChrono()

        saveCurrentTime()

    }

    // useEffect(() => {

    //     if (ldt.start) {

    //         const plusTime =
    //             getCurrentTime()
    //             - ldt.stockTime
    //             + (ldt.hour * 60 * 60)
    //             + (ldt.min * 60)
    //             + (ldt.sec)

    //         const [hour, min, sec] = [
    //             Math.floor(plusTime / (60 * 60)),
    //             Math.floor((plusTime % (60 * 60)) / 60),
    //             Math.floor((plusTime % (60 * 60)) % 60)
    //         ]

    //         setLdt(state => ({ ...state, hour, min, sec }))
    //         clockWorker.postMessage(true)

    //     }

    //     return () => {

    //         clockWorker.postMessage(false)
    //     }

    // }, [])

    useEffect(() => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({ id: dt.id, props: { data: ldt } }))

    }, [ldt])

    return (

        <div className='row overflow-y-auto sm-p sm-g'>

            <div className='col row v-space-between bright br sm-p'>

                <div className='col-6 flex v-center h-center sm-p'>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.hour)}</span>
                        <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                    </div>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.min)}</span>
                        <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                    </div>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.sec)}</span>
                        <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                    </div>
                </div>

                <div className='col-4 flex v-center h-center sm-g'>

                    <div onClick={startPauseTimer}>
                        <Icon type={'start'} styles={['lg-i', 'const-dark-icon', ldt.start ? 'hide' : null]} />
                        <Icon type={'pause'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'hide']} />
                    </div>

                    <div onClick={resetTimer}>
                        <Icon type={'reset'} styles={['lg-i', 'const-dark-icon']} />
                    </div>

                </div>

            </div>

            <div className='col flex h-center v-center hover-effect-brightness br sm-p'>

                <Icon type={'add'} styles={['sm-i', 'const-dark-icon']} effect={false} />

            </div>

        </div>

    )

}

export default memo(Timer)