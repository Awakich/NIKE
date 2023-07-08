import { FC } from "react"
import { ButtonUI } from "../../shared/ui/Button/ButtonUI"
import { Link } from "react-router-dom"
import Typography from "../../shared/ui/Typography/Typography"
import './error.scss'

const Error: FC = ({ }) => {
    return (
        <div className="error">
            <img alt="error-img" />
            <div className="error--right">
                <div className="error--text">
                    <Typography text="title" size="h2" key={Math.random().toFixed(12).toString()} weight="bold" />
                    <Typography text="description" size="small" key={Math.random().toFixed(12).toString()} weight="normal" />
                </div>
                <Link to='/'><ButtonUI label="Return to Main Page" primary={true} key={Math.random().toFixed(12).toString()} size="large" /></Link>
            </div>
        </div>
    )
}

export default Error