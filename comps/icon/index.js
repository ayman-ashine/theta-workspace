import { memo } from "react"
import { SVG_DATA } from "@/data/modules"

const Icon = ({ type, styles, effect = true }) => {

    return (

        <div className={effect ? 'effect-square' : 'effect-none'}>
            {SVG_DATA[type] ? SVG_DATA[type](styles) : null}
        </div>

    )

}

export default memo(Icon)