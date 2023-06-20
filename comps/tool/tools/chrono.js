import { memo, useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { CHRONO_DATA, WORKSPACE_ACTIONS } from '@/data/modules'
import { generateUniqueId } from '@/utils/modules'
import { Icon } from '@/comps/modules'

const Chrono = ({ dt }) => {

    const clockWorker = useMemo(() => new Worker('./clockWorker.js'), [])
    const dispatch = useDispatch()
    const [ldt, setLdt] = useState(dt.data ? dt.data : CHRONO_DATA.default)

    const startPauseChrono = () => {

        setLdt(state => ({ ...state, start: !state.start }))
        clockWorker.postMessage(!ldt.start)

    }
    const resetChrono = () => {

        setLdt(CHRONO_DATA.default)
        clockWorker.postMessage(false)

    }
    const lapsChrono = () => {

        if (ldt.start) {
            const time = `${addZero(ldt.hour)}:${addZero(ldt.min)}:${addZero(ldt.sec)}`
            setLdt(state => ({
                ...state,
                lapses: [{ id: generateUniqueId(), time: time }, ...state.lapses]
            }))
        }

    }
    const removeLaps = (id) => {

        setLdt(state => ({
            ...state,
            lapses: state.lapses.filter(lp => lp.id !== id)
        }))

    }
    const getCurrentTime = () => {

        const appDate = new Date()
        return Math.floor(appDate.getTime() / 1000)

    }
    const saveCurrentTime = () => {

        setLdt(state => ({ ...state, stockTime: getCurrentTime() }))
    }
    const addZero = (num) => {

        return num < 10 ? '0' + num : String(num)

    }

    useEffect(() => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({ id: dt.id, props: { data: ldt } }))

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
            clockWorker.postMessage(true)

        }

        return () => {

            clockWorker.postMessage(false)
        }

    }, [])

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

    return (

        <div className='flex v-flex sm-p'>

            <div className='row v-space-between bright br sm-p'>

                <div className='col-5 flex v-center h-center sm-p'>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.hour)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.min)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.sec)}</span>
                </div>
                <div className='col-5 flex v-center h-end sm-p sm-g'>

                    <div onClick={startPauseChrono}>
                        <Icon type={'start'} styles={['lg-i', 'const-dark-icon', ldt.start ? 'hide' : null]} />
                        <Icon type={'pause'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'hide']} />
                    </div>

                    <div onClick={lapsChrono}>
                        <Icon type={'save'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'low']} />
                    </div>

                    <div onClick={resetChrono}>
                        <Icon type={'reset'} styles={['lg-i', 'const-dark-icon']} />
                    </div>

                </div>

            </div>

            <div className='row overflow-y-auto'>

                {
                    ldt.lapses?.map((laps, index) => {

                        return (
                            <div className='col row v-center bright br sm-mt sm-p sm-g' key={laps.id}>
                                <div className='col-1 normal-f center-text normal-f clr-const-dark bkg-const-low-light br'>{ldt.lapses.length - index}</div>
                                <div className='col-8 md-fs normal-f center-text clr-const-dark'>{laps.time}</div>
                                <div className='col-1' onClick={() => removeLaps(laps.id)}>
                                    <Icon type={'remove'} styles={['sm-i', 'const-dark-icon']} />
                                </div>
                            </div>
                        )

                    })
                }

            </div>

        </div>

    )

}

export default memo(Chrono)