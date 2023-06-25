import { FC } from "react"
import { Button } from "../../components/Layout/UI/Button/Button"
import './error.scss'
import { Link } from "react-router-dom"

const Error: FC = ({ }) => {
    return (
        <>
            <div className="error">
                <img alt="error-img" />
                <div className="error--right">
                    <div className="error--text">
                        <h3 className="error--text--title">title</h3>
                        <p className="error--text--description">description</p>
                    </div>
                    <Link to='/'><Button label="Return to Main Page" primary={true} key={Math.random().toFixed(12).toString()} size="large" /></Link>
                </div>
            </div>
        </>
    )
}

export default Error