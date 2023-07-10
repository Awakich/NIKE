import { FC } from 'react'
import { FavouriteItems } from 'types/models'
import { Link } from 'react-router-dom'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI'
import { addCart } from '../../entities/slices/cartSlice'
import { useAppDispatch } from '../../entities/hooks'
import { removeFavourite } from '../../entities/slices/favouriteSlice'
import Close from '../../shared/assets/Close.svg'
import Typography from '../../shared/ui/Typography/Typography'
import './favouriteitem.scss'

const FavouriteItem: FC<FavouriteItems> = ({ attributes: { description, price, title, img, Button }, id }) => {

    const dispatch = useAppDispatch()

    const AddItem = () => {
        const cart_item = {
            id,
            attributes: {
                img,
                title,
                price,
                description,
                Button
            }
        }
        dispatch(addCart(cart_item))
    }

    const RemoveFavourite = () => {
        dispatch(removeFavourite({
            id
        }))
    }


    return (
        <section className='favourite__item'>
            <Link to={`/shop/${id}`}>
                <img alt='sneakers-img' src={`../../../backend/public${img?.data[0]?.attributes.url}`} className='favourite__item--img' />
            </Link>

            <div className='favourite__item--text'>
                <div className='favourite__item--text--title'>
                    <Typography size='medium' text={title} weight="bold" key={Math.random().toFixed(12).toString()} />
                    <img src={Close} alt="close-img" className='close' onClick={RemoveFavourite} />
                </div>

                <div className='favourite__item--text--description'>
                    <Typography size='small' text={description} weight='normal' key={Math.random().toFixed(12).toString()} />
                    <Typography size='small' text={`$ ${price}`} key={Math.random().toFixed(12).toString()} weight='bold' />
                </div>

                <ButtonUI onClick={AddItem} label={Button.label} key={id} primary={false} size='large' />
            </div>
        </section>
    )
}

export default FavouriteItem