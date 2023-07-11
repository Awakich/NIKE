import { FC, useState } from 'react'
import { ShopItems } from '../../types/models'
import { Link } from 'react-router-dom'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI'
import { useAppDispatch } from '../../entities/hooks'
import { addFavourite } from '../../entities/slices/favouriteSlice'
import { addCart } from '../../entities/slices/cartSlice'
import Typography from '../../shared/ui/Typography/Typography'
import Favourite from '../../shared/assets/Favourite.svg'
import Favourite_add from '../../shared/assets/Favourite_add.svg'
import './shopitem.scss'

const ShopItem: FC<ShopItems> = ({ attributes: { img, title, description, price, Button }, id }) => {
    const [clicked, setClicked] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const AddFavourite = () => {
        setClicked(!clicked)
        const favourite_item = {
            id,
            attributes: {
                description,
                title,
                img,
                price,
                Button
            }
        }
        dispatch(addFavourite(favourite_item));

    }

    const AddItem = () => {
        const cart_item = {
            id,
            attributes: {
                img,
                title,
                price,
                description,
                Button,
            }
        }
        dispatch(addCart(cart_item))
    }

    return (
        <section className='shop__item' >
            <Link to={`/shop/${id}`}>
                <img alt='sneakers-img' className='img' src={`../../../backend/public${img?.data[0].attributes.url}`} />
            </Link>

            <div className='shop__item--text'>

                <div className='shop__item--text--ad'>
                    <Typography text='Just in' size='small' weight='bold' key={Math.random().toFixed(12).toString()} />
                </div>

                <div className='title--block'>
                    <Typography size='medium' text={`${title}`} key={Math.random().toFixed(12).toString()} weight='bold' />
                    <img alt='fav icon' src={clicked ? Favourite_add : Favourite} className='title--block--icon' onClick={AddFavourite} />
                </div>

                <div className='shop__item--text--description'>
                    <Typography size='small' text={`${description}`} key={Math.random().toFixed(12).toString()} weight='normal' />
                    <Typography size='small' text={`$ ${price}`} key={Math.random().toFixed(12).toString()} weight='bold' />
                </div>

                <ButtonUI onClick={AddItem} label={`${Button.label}`} primary={false} size='small' />
            </div>
        </section>
    )
}

export default ShopItem