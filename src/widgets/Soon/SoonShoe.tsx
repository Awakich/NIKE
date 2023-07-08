import { FC } from "react"
import { Soon } from "types/models"
import Date from "../../shared/ui/Date/Date"
import Typography from "../../shared/ui/Typography/Typography"
import './soonshoe.scss'

const SoonShoe: FC<Soon> = ({ attributes: { Date: { day, month }, description, title, img } }) => {
    return (
        <div className="soonshoe">
            <div className="img--block">
                <img alt="soon img" src={`../../../backend/public${img?.data[0].attributes.url}`} />
                <Date day={day} month={month} />
            </div>

            <Typography key={Math.random().toFixed(12).toString()} text={title} size="small" weight="bold" />
            <Typography key={Math.random().toFixed(12).toString()} text={description} size="medium" weight="normal" />
        </div>
    )
}

export default SoonShoe