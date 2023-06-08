import { useState } from 'react'
import { IconsComp } from '@/utils/modules'

export default function OptionFormatComp({ name, iconData, func, subMenu }) {

    const [subMenuDisplay, setSubMenuDisplay] = useState(false)

    return (

        <div
            className='col row relative v-center h-space-between hover-effect-option sm-g sm-py md-px'
            onClick={func}
            onMouseEnter={() => setSubMenuDisplay(true)}
            onMouseLeave={() => setSubMenuDisplay(false)}
        >

            {
                iconData
                ? <div className='col-1'><IconsComp data={iconData} /></div>
                : null
            }
            
            <div className='col-8'>{name}</div>

            <div className={subMenu ? 'col-last' : 'hide'}>
                <IconsComp data={{ icon_type: 'start', icon_styles: ['sm-i', 'light-i'] }} />
            </div>

            <div
                className={subMenuDisplay ? '' : 'hide'}
                style={{
                    position: 'absolute',
                    whiteSpace: 'nowrap',
                    top: 'calc( var(--md-un) * -1 )',
                    right: 0,
                    transform: 'translate(100%)',
                }}
            >
                {subMenu}
            </div>

        </div>

    )

}