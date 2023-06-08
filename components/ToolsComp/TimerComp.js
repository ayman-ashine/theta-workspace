import { useEffect, useRef, useState } from 'react'
import { AppDataManager, AppDefaultData, IconsComp } from '@/utils/modules'

export default function ChronoComp({ dataFrame }) {

    const clockWorker = useRef(new Worker('./clockWorker.js'))
    const [localData, setLocalData] = useState(dataFrame.data ? dataFrame.data : AppDefaultData.defaultChronoData)

    const startPauseChrono = () => {

        setLocalData(state => ({ ...state, start: !state.start }))
        clockWorker.current.postMessage(!localData.start)

    }

    const resetChrono = () => {

        setLocalData(AppDefaultData.defaultChronoData)
        clockWorker.current.postMessage(false)

    }

    const lapsChrono = () => {

        if (localData.start) {
            const laps = `${addZero(localData.hour)}:${addZero(localData.min)}:${addZero(localData.sec)}`
            setLocalData(state => ({
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

        const appDate = new Date()
        setLocalData(state => ({...state, stockTime: getCurrentTime()}))
    }

    clockWorker.current.onmessage = () => {

        if (localData.sec < 59) {
            setLocalData(state => ({ ...state, sec: state.sec + 1 }))
        } else if (localData.min < 59) {
            setLocalData(state => ({ ...state, sec: 0, min: state.min + 1 }))
        } else if (localData.hour < 24) {
            setLocalData(state => ({ ...state, min: 0, hour: state.hour + 1 }))
        } else resetChrono()

        saveCurrentTime()

    }

    const addZero = (num) => {

        return num < 10 ? '0' + num : String(num)

    }

    useEffect(() => {

        AppDataManager.updateFrame(dataFrame.id, { data: localData })

    }, [localData])

    useEffect(() => {

        if(localData.start) {

            const plusTime = 
                getCurrentTime()
                - localData.stockTime
                + (localData.hour * 60 * 60)
                + (localData.min * 60)
                + (localData.sec)

            const [hour, min, sec] = [
                Math.floor(plusTime/(60 * 60)),
                Math.floor((plusTime%(60 * 60))/60),
                Math.floor((plusTime%(60 * 60))%60)
            ]

            setLocalData(state => ({...state, hour, min, sec}))
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
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(localData.hour)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(localData.min)}</span>
                    <span className='xl-fs normal-f clr-const-dark'>:</span>
                    <span className='xl-fs normal-f clr-const-dark'>{addZero(localData.sec)}</span>
                </div>
                <div className='col flex h-center md-g sm-p'>

                    <div onClick={startPauseChrono}>
                        <IconsComp data={{ icon_type: 'start', icon_styles: ['lg-i', 'const-dark-icon', localData.start ? 'hide' : null] }} />
                        <IconsComp data={{ icon_type: 'pause', icon_styles: ['lg-i', 'const-dark-icon', localData.start ? null : 'hide'] }} />
                    </div>

                    <div onClick={lapsChrono}>
                        <IconsComp data={{ icon_type: 'save', icon_styles: ['lg-i', 'const-dark-icon', localData.start ? null : 'low'] }} />
                    </div>

                    <div onClick={resetChrono}>
                        <IconsComp data={{ icon_type: 'reset', icon_styles: ['lg-i', 'const-dark-icon'] }} />
                    </div>

                </div>
            </div>

            <div className='row overflow-y-auto'>
                {
                    localData.lapses?.map((laps, index) => {

                        return (
                            <div className='col row bkg-const-low-light sm-mt' key={index}>
                                <div className='col-1 md-fs normal-f center-text normal-f const-dark-border-right clr-const-dark sm-p'>{localData.lapses.length-index}</div>
                                <div className='col-9 md-fs normal-f center-text clr-const-dark sm-p'>{laps}</div>
                            </div>
                        )

                    })
                }

            </div>

        </div>

    )

}