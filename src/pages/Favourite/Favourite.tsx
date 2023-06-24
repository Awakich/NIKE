import { FC } from "react"
import './favourite.scss'
import Header from "../../components/Layout/Other/Header/Header"
import Footer from "../../components/Layout/Other/Footer/Footer"
import FavouriteItem from "./FavouriteItem/FavouriteItem"

const Favourite: FC = ({ }) => {
    return (
        <>
            <Header />
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