import { memo } from "react"
import { AppDefaultData } from "@/utils/modules"

const IconComp = ({ type, styles, effect = true }) => {

    return (

        <div className={effect ? 'hover-effect-square' : 'flex v-center'}>
            {AppDefaultData.SVG_ICONS[type] ? AppDefaultData.SVG_ICONS[type](styles) : null}
        </div>

    )

}

export default memo(IconComp)