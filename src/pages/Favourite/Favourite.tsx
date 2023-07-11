import { FC } from "react"
import { useAppSelector } from "../../entities/hooks"
import { favouriteSelector } from "../../entities/slices/favouriteSlice"
import { FavouriteItems } from "types/models"
import { motion } from 'framer-motion'
import FavouriteItem from "../../widgets/FavouriteItem/FavouriteItem"
import Typography from "../../shared/ui/Typography/Typography"
import './favourite.scss'


const Favourite: FC = ({ }) => {
    const favourite: FavouriteItems[] = useAppSelector(favouriteSelector)
    if (!favourite.length) return <Typography weight="bold" size="h2" text="Not found favourite" key={Math.random().toFixed(12).toString()} />

    return (
        <motion.section className="favourite" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            {favourite.map(({ id, attributes, count }) => (
                <FavouriteItem count={count} key={id} attributes={attributes} id={id} />
            ))}
        </motion.section>
    )
}

export default Favourite