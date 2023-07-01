import { memo } from "react"
import { useSelector } from "react-redux"
import { Archive } from '@/comps/modules'

const Aside = () => {

    const aside = useSelector(state => state.aside)

    if(!aside) return

    switch (aside.type) {

        case 'ASIDE_ARCHIVE':
            return <Archive/>

    }

}

export default memo(Aside)