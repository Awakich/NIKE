import { FC } from 'react'
import favourite from '../../shared/assets/Favourite.svg'
import trashcan from '../../shared/assets/TrashCan.svg'
import './cartitem.scss'
import Typography from '../../shared/ui/Typography/Typography'

const CartItem: FC = ({ }) => {
    return (
        <section className='cartitem'>
            <img alt='cartitem-img' />
            <div className='cartitem--right'>
                <div className='cartitem--text'>
                    <Typography size='small' weight='bold' text='title' key={Math.random().toFixed(12).toString()} />
                    <p className='cartitem--text--description'>
                        <Typography size='small' weight='normal' text='description' key={Math.random().toFixed(12).toString()} />
                    </p>
                    <div className='cartitem--icons'>
                        <img alt="fav-icon" src={favourite} className='cartitem--icons--img' />
                        <img alt="trash-icon" src={trashcan} className='cartitem--icons--img' />
                    </div>
                </div>
                <p>price</p>
            </div>
        </section>
    )
}

export default CartItem