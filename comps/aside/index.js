import { memo } from "react"
import { useSelector } from "react-redux"
import { Archive, Profile } from '@/comps/modules'

const Aside = () => {

    const aside = useSelector(state => state.aside)

    if(!aside) return

    switch (aside.type) {

        case 'ASIDE_ARCHIVE':
            return <Archive/>
        case 'ASIDE_PROFILE':
            return <Profile/>

    }

}

export default memo(Aside)