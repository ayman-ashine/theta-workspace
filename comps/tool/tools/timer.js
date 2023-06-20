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
    const updateTimer = (action) => {

        switch (action) {
            case 'PHOUR':
                setLdt(
                    state => ({
                        ...state,
                        hour: state.hour < 99 ? state.hour + 1 : state.hour
                    }))
                return
            case 'MHOUR':
                setLdt(
                    state => ({
                        ...state,
                        hour: state.hour > 0 ? state.hour - 1 : state.hour
                    }))
                return
            case 'PMIN':
                setLdt(
                    state => ({
                        ...state,
                        min: state.min < 59 ? state.min + 1 : state.min
                    }))
                return
            case 'MMIN':
                setLdt(
                    state => ({
                        ...state,
                        min: state.min > 0 ? state.min - 1 : state.min
                    }))
                return
            case 'PSEC':
                setLdt(
                    state => ({
                        ...state,
                        sec: state.sec < 59 ? state.sec + 1 : state.sec
                    }))
                return
            case 'MSEC':
                setLdt(
                    state => ({
                        ...state,
                        sec: state.sec > 0 ? state.sec - 1 : state.sec
                    }))
                return
        }

    }
    const timerIsDone = () => {

        return ldt.hour || ldt.min || ldt.sec

    }
    clockWorker.onmessage = () => {

        if (timerIsDone()) {
            if (ldt.sec > 0) {
                setLdt(state => ({ ...state, sec: state.sec - 1 }))
            } else if (ldt.min > 0) {
                setLdt(state => ({ ...state, sec: 59, min: state.min - 1 }))
            } else if (ldt.hour > 0) {
                setLdt(state => ({ ...state, min: 59, hour: state.hour - 1 }))
            }
            saveCurrentTime()
        } else {
            resetTimer()
        }

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

    useEffect(() => {

        if (ldt.start) {

            const minusTime = ((ldt.hour * 60 * 60) + (ldt.min * 60) + (ldt.sec)) - (getCurrentTime() - ldt.stockTime)

            if (minusTime < 0) {
                setLdt(state => ({ ...state, start: false, hour: 0, min: 0, sec: 0 }))
            } else {
                const [hour, min, sec] = [
                    Math.floor(minusTime / (60 * 60)),
                    Math.floor((minusTime % (60 * 60)) / 60),
                    Math.floor((minusTime % (60 * 60)) % 60)
                ]
                setLdt(state => ({ ...state, hour, min, sec }))
                clockWorker.postMessage(true)
            }

        }

        return () => {

            clockWorker.postMessage(false)
        }

    }, [])

    useEffect(() => {

        dispatch(WORKSPACE_ACTIONS.UPDATE_TOOL({ id: dt.id, props: { data: ldt } }))

    }, [ldt])

    return (

        <div className='flex v-flex sm-p'>

            <div className='row v-space-between bright br md-px'>

                <div className='col-5 flex v-center h-center sm-p'>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <div className={''} onClick={() => updateTimer('PHOUR')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.hour)}</span>
                        <div className={''} onClick={() => updateTimer('MHOUR')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                    </div>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <div className={''} onClick={() => updateTimer('PMIN')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.min)}</span>
                        <div className={''} onClick={() => updateTimer('MMIN')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                    </div>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <div className='flex v-flex v-center h-center sm-g'>
                        <div className={''} onClick={() => updateTimer('PSEC')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                        <span className='xl-fs normal-f clr-const-dark'>{addZero(ldt.sec)}</span>
                        <div className={''} onClick={() => updateTimer('MSEC')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'const-dark-icon']} />
                        </div>
                    </div>
                </div>

                <div className='col-5 flex v-center h-end sm-g'>

                    <div onClick={startPauseTimer}>
                        <Icon type={'start'} styles={['lg-i', 'const-dark-icon', ldt.start ? 'hide' : null]} />
                        <Icon type={'pause'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'hide']} />
                    </div>

                    <div onClick={lapsChrono}>
                        <Icon type={'save'} styles={['lg-i', 'const-dark-icon', ldt.start ? null : 'low']} />
                    </div>

                    <div onClick={resetTimer}>
                        <Icon type={'reset'} styles={['lg-i', 'const-dark-icon']} />
                    </div>

                </div>

            </div >

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

        </div >

    )

}

export default memo(Timer)