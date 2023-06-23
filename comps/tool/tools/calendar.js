import { memo, useEffect, useState } from "react"
import { appDate } from "@/data/modules"
import { generateUniqueId } from "@/utils/modules"

const Calendar = ({ dt }) => {

    const [ldt, setLdt] = useState({})

    const checkDay = (id) => {

        setLdt(state => ({
            ...state, days: state.days.map(d => {
                if (d.id == id) return { ...d, check: !d.check }
                return d
            })
        }))

    }

    useEffect(() => {

        const days = []
        const currentDate = appDate.getCurrentDate()
        const daysCount = appDate.getDays(currentDate.year, currentDate.month)

        for (let i = 0; i < daysCount; i++) {
            days.push({
                id: generateUniqueId(),
                day: i,
                check: false,
                current: i === currentDate.day ? true : false
            })
        }

        setLdt(state => ({ ...state, days, daysName: appDate.getDaysName() }))

    }, [])

    return (

        <div className='full row-7 sm-p sm-g'>
            {
                ldt.daysName?.map((day, index) => {
                    return (

                        <span className='col-1 flex v-center h-center clr-const-dark lg-fw' key={index}>{day}</span>

                    )
                })
            }

            {
                ldt.days?.map( d => {
                    return (
                        <div
                            className={`col-1 flex v-center h-center br bkg-const-low-light hover-effect-brightness sm-p ${d.current ? 'dark-border' : null} ${d.check ? 'bright-2' : null}`}
                            onClick={() => checkDay(d.id)}
                            key={d.id}
                        >
                            <span className='clr-const-dark xl-fw'>{d.day}</span>
                        </div>
                    )
                })
            }

        </div>

    )

}

export default memo(Calendar)