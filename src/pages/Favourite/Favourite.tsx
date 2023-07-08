import { FC } from "react"
import FavouriteItem from "../../widgets/FavouriteItem/FavouriteItem"
import Footer from "../../shared/Footer/Footer"
import './favourite.scss'


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