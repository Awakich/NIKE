import { FC, useState } from 'react'
import { CartItems } from 'types/models'
import { addFavourite } from '../../entities/slices/favouriteSlice'
import { useAppDispatch } from '../../entities/hooks'
import { removeCart } from '../../entities/slices/cartSlice'
import favourite from '../../shared/assets/Favourite.svg'
import favourite_add from '../../shared/assets/Favourite_add.svg'
import trashcan from '../../shared/assets/TrashCan.svg'
import Typography from '../../shared/ui/Typography/Typography'
import './cartitem.scss'
import { Link } from 'react-router-dom'

const CartItem: FC<CartItems> = ({ count, attributes: { description, title, img, price, Button }, id }) => {

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
                Button,
            }
        }
        dispatch(addFavourite(favourite_item));

    }

    const removeItem = () => {
        dispatch(removeCart({
            id,
        }))
    }

    return (
        <section className='cartitem'>
            <Link to={`/shop/${id}`}>
                <img alt='cartitem--img' className='cartitem--img' src={`../../../backend/public${img?.data[0].attributes.url}`} />
            </Link>
            <div className='cartitem--right'>
                <div className='cartitem--text'>
                    <Typography size='medium' weight='bold' text={title} key={Math.random().toFixed(12).toString()} />
                    <p className='cartitem--text--description'>
                        <Typography size='small' weight='normal' text={description} key={Math.random().toFixed(12).toString()} />
                    </p>

                    <div className='cartitem--text--price'>
                        <Typography size='medium' text={`$ ${price}`} key={Math.random().toFixed(12).toString()} weight='normal' />
                        <Typography size='medium' text={`x ${count}`} key={Math.random().toFixed(12).toString()} weight='normal' />
                    </div>
                </div>

                <div className='cartitem--icons'>
                    <img onClick={AddFavourite} alt="fav-icon" src={clicked ? favourite_add : favourite} className='cartitem--icons--img' />
                    <img onClick={removeItem} alt="trash-icon" src={trashcan} className='cartitem--icons--img' />
                </div>

            </div>
        </section>
    )
}

export default CartItem