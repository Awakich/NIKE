import { FC } from "react"
import './soonshoe.scss'

const SoonShoe: FC = ({ }) => {
    return (
        <div className="soonshoe">
            <img alt="soon img" />
            <div className="soonshoe--text">
                <p className="soonshoe--text--title">title</p>
                <h4 className="soonshoe--text--color">color</h4>
            </div>
        </div>
    )
}

export default SoonShoe