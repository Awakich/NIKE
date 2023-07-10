import { FC } from "react"
import { ButtonUI } from "../../shared/ui/Button/ButtonUI"
import { Link } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { notLoading } from "../../entities/apollo/notLoading"
import Typography from "../../shared/ui/Typography/Typography"
import Loading from "../../shared/ui/Loading/Loading"
import './error.scss'

const Error: FC = ({ }) => {

    const { data, loading } = useQuery(notLoading)
    if (loading) return <Loading />

    return (
        <div className="error">
            <img className="error--img" alt="error-img" src={`../../../backend/public${data.notLoading.data.attributes.img.data[0].attributes.url}`} />
            <div className="error--right">
                <div className="error--text">
                    <Typography text={data.notLoading.data.attributes.title} size="h2" key={Math.random().toFixed(12).toString()} weight="bold" />
                    <Typography text={data.notLoading.data.attributes.description} size="small" key={Math.random().toFixed(12).toString()} weight="normal" />
                </div>

                <Link to='/'><ButtonUI label={data.notLoading.data.attributes.Button[0].label} primary={true} key={Math.random().toFixed(12).toString()} size="large" /></Link>
            </div>
        </div>
    )
}

export default Error