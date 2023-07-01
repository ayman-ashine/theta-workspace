import { useState } from 'react'
import { Icon } from '@/comps/modules'


const Option = ({ icon, name, action, subMenu }) => {

    const [ldt, setLdt] = useState({ menu: false })

    return <>

        <div
            className='col-10 row relative v-center h-space-between effect-option sm-p'
            onClick={action}
            onMouseEnter={() => setLdt(state => ({ ...state, menu: true }))}
            onMouseLeave={() => setLdt(state => ({ ...state, menu: false }))}
        >


            <div className='col-1'>
                {
                    icon ?
                        <Icon type={icon} styles={['sm-i light-i']} effect={false} />
                        : null
                }
            </div>

            <div className='col-8 title md-px'>
                {name}
            </div>

            <div className={`col-1 ${!subMenu ? 'unvisible' : null}`}>

                <Icon type={'start'} styles={['sm-i', 'light-i']} effect={false} />

            </div>

            <div
                className={ldt.menu && subMenu ? null : 'hide'}
                style={{
                    position: 'absolute',
                    top: 'calc( var(--sm-u) * -1 )',
                    right: 0,
                }}
            >
                {subMenu}
            </div>

        </div>

    </>

}

export default Option