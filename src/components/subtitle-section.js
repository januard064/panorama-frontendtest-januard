
import { COLOR } from "../constants/color"

const SubtitleSection = (props) => {

    const { title } = props

    return (
        <div >
            <p style={{ color: COLOR.NEUTRAL[10], fontSize:32, fontWeight:700 }}>{title}</p>
        </div>
    )
}

export default SubtitleSection