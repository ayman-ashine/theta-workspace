import { memo, useEffect, useRef, useState } from 'react'
import { AppDefaultData, IconComp } from '@/utils/modules'

const Timer = ({ dt, disAppData }) => {

    const clockWorker = useRef(new Worker('./clockWorker.js'))
    const [ldt, setLdt] = useState(dt.data ? dt.data : AppDefaultData.CHRONO)

    const startPauseChrono = () => {

        setLdt(state => ({ ...state, start: !state.start }))
        clockWorker.current.postMessage(!ldt.start)

    }

    const resetChrono = () => {

        setLdt(AppDefaultData.CHRONO)
        clockWorker.current.postMessage(false)

    }

    const lapsChrono = () => {

        if (ldt.start) {
            const laps = `${addZero(ldt.hour)}:${addZero(ldt.min)}:${addZero(ldt.sec)}`
            setLdt(state => ({
                ...state,
                lapses: [laps, ...state.lapses]
            }))
        }

    }

    const getCurrentTime = () => {

        const appDate = new Date()
        return Math.floor(appDate.getTime() / 1000)

    }

    const saveCurrentTime = () => {

        setLdt(state => ({ ...state, stockTime: getCurrentTime() }))
    }

    clockWorker.current.onmessage = () => {

        if (ldt.sec < 59) {
            setLdt(state => ({ ...state, sec: state.sec + 1 }))
        } else if (ldt.min < 59) {
            setLdt(state => ({ ...state, sec: 0, min: state.min + 1 }))
        } else if (ldt.hour < 24) {
            setLdt(state => ({ ...state, min: 0, hour: state.hour + 1 }))
        } else resetChrono()

        saveCurrentTime()

    }

    const addZero = (num) => {

        return num < 10 ? '0' + num : String(num)

    }

    useEffect(() => {

        disAppData({ type: 'UPDATE_FRAME', id: dt.id, props: { data: ldt } })

    }, [ldt])

    useEffect(() => {

        if (ldt.start) {

            const plusTime =
                getCurrentTime()
                - ldt.stockTime
                + (ldt.hour * 60 * 60)
                + (ldt.min * 60)
                + (ldt.sec)

            const [hour, min, sec] = [
                Math.floor(plusTime / (60 * 60)),
                Math.floor((plusTime % (60 * 60)) / 60),
                Math.floor((plusTime % (60 * 60)) % 60)
            ]

            setLdt(state => ({ ...state, hour, min, sec }))
            clockWorker.current.postMessage(true)

        }

        return () => {

            clockWorker.current.postMessage(false)
        }

    }, [])

    return (

        <div className='flex v-flex sm-p'>

            <div className='row v-space-between bkg-const-low-light md-py'>
                <div className='col flex h-center md-p'>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.hour)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.min)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.sec)}</span>
                </div>
                <div className='col flex h-center md-g sm-p'>

                    <div onClick={startPauseChrono}>
                        <IconComp type={'start'} styles={['lg-i', 'const-dark-icon', ldt.start ? 'hide' : null]} />
                        <IconComp type={'pause'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'hide']} />
                    </div>

                    <div onClick={lapsChrono}>
                        <IconComp type={'save'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'low']} />
                    </div>

                    <div onClick={resetChrono}>
                        <IconComp type={'reset'} styles={['lg-i', 'const-dark-icon']} />
                    </div>

                </div>
            </div>

            <div className='row overflow-y-auto'>
                {
                    ldt.lapses?.map((laps, index) => {

                        return (
                            <div className='col row bkg-const-low-light sm-mt' key={index}>
                                <div className='col-1 md-fs normal-f center-text normal-f const-dark-border-right clr-const-dark sm-p'>{ldt.lapses.length - index}</div>
                                <div className='col-9 md-fs normal-f center-text clr-const-dark sm-p'>{laps}</div>
                            </div>
                        )

                    })
                }

            </div>

        </div>

    )

}

export default memo(Timer)