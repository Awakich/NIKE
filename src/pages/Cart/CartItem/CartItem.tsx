import { FC } from 'react'
import './cartitem.scss'
import favourite from '../../../assets/Favourite.svg'
import trashcan from '../../../assets/TrashCan.svg'

const CartItem: FC = ({ }) => {
    return (
        <section className='cartitem'>
            <img alt='cartitem-img' />
            <div className='cartitem--right'>
                <div className='cartitem--text'>
                    <h5 className='cartitem--text--title'>title</h5>
                    <p className='cartitem--text--description'>description</p>
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