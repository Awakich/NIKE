import { FC } from "react"
import { useAppSelector } from "../../entities/hooks"
import { favouriteSelector } from "../../entities/slices/favouriteSlice"
import { FavouriteItems } from "types/models"
import FavouriteItem from "../../widgets/FavouriteItem/FavouriteItem"
import Typography from "../../shared/ui/Typography/Typography"
import './favourite.scss'


const Favourite: FC = ({ }) => {
    const favourite: FavouriteItems[] = useAppSelector(favouriteSelector)
    if (!favourite.length) return <Typography weight="bold" size="h2" text="Not found favourite" key={Math.random().toFixed(12).toString()} />

    return (
        <section className="favourite">
            {favourite.map(({ id, attributes, count }) => (
                <FavouriteItem count={count} key={id} attributes={attributes} id={id} />
            ))}
        </section>
    )
}

export default Favourite