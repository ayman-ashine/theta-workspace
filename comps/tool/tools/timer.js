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

        <div className='flex flex-direction-column sm-p'>

            <div className='row v-space-between bright br sm-p'>

                <div className='col-5 flex v-center h-center md-px'>
                    <div className='flex flex-direction-column v-center h-center'>
                        <div onClick={() => updateTimer('PHOUR')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                        <span className='title xl-fs normal-f text-c-dark'>{addZero(ldt.hour)}</span>
                        <div onClick={() => updateTimer('MHOUR')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                    </div>
                    <span className='title xl-fs normal-f text-c-dark'>:</span>
                    <div className='flex flex-direction-column v-center h-center'>
                        <div onClick={() => updateTimer('PMIN')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                        <span className='title xl-fs normal-f text-c-dark'>{addZero(ldt.min)}</span>
                        <div onClick={() => updateTimer('MMIN')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                    </div>
                    <span className='title xl-fs normal-f text-c-dark'>:</span>
                    <div className='flex flex-direction-column v-center h-center'>
                        <div onClick={() => updateTimer('PSEC')}>
                            <Icon type={'chevron-up'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                        <span className='title xl-fs normal-f text-c-dark'>{addZero(ldt.sec)}</span>
                        <div onClick={() => updateTimer('MSEC')}>
                            <Icon type={'chevron-down'} styles={['sm-i', 'c-dark-i']} />
                        </div>
                    </div>
                </div>

                <div className='col-5 flex v-center h-end sm-g sm-p'>

                    <div onClick={startPauseTimer}>
                        <Icon type={'start'} styles={['xl-i', 'c-dark-i', ldt.start ? 'hide' : null]} />
                        <Icon type={'pause'} styles={['xl-i', 'c-dark-i', ldt.start ? null : 'hide']} />
                    </div>

                    <div onClick={lapsChrono}>
                        <Icon type={'save'} styles={['xl-i', 'c-dark-i', ldt.start ? null : 'low']} />
                    </div>

                    <div onClick={resetTimer}>
                        <Icon type={'reset'} styles={['xl-i', 'c-dark-i']} />
                    </div>

                </div>

            </div >

            <div className='row'>

                {
                    ldt.lapses?.map((laps, index) => {

                        return (
                            <div className='col-10 row v-center bright br sm-mt sm-p sm-g' key={laps.id}>
                                <div className='col-1 normal-f text-center normal-f text-c-dark'>{ldt.lapses.length - index}</div>
                                <div className='col-8 normal-f text-center text-c-dark'>{laps.time}</div>
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