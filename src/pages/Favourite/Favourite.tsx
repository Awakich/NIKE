import { FC } from "react"
import './favourite.scss'
import FavouriteItem from "./FavouriteItem/FavouriteItem"
import Footer from "../../components/Layout/Other/Footer/Footer"


const Favourite: FC = ({ }) => {
    return (
        <>
            <section className="favourite">
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
                <FavouriteItem />
            </section>
            <Footer />
        </>
    )
}

export default Favourite