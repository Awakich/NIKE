import { FC } from "react"
import Header from "../../components/Layout/Other/Header/Header"
import { Button } from "../../components/Layout/UI/Button/Button"
import './error.scss'

const Error: FC = ({ }) => {
    return (
        <>
            <Header />
            <div className="error">
                <img alt="error-img" />
                <div className="error--right">
                    <div className="error--text">
                        <h3 className="error--text--title">title</h3>
                        <p className="error--text--description">description</p>
                    </div>
                    <Button label="Return to Main Page" primary={true} key={Math.random().toFixed(12).toString()} size="large" link="/" />
                </div>
            </div>
        </>
    )
}

export default Error