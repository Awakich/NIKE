import { FC } from 'react'
import './favouriteitem.scss'

const FavouriteItem: FC = ({ }) => {
    return (
        <section className='favourite__item'>
            <img alt='sneakers-img' />
            <div className='favourite__item--text'>
                <h3 className='favourite__item--text--title'>title</h3>
                <p className='favourite__item--text--description'>description</p>
                <p className='favourite__item--text--price'>$ +price</p>
            </div>
        </section>
    )
}

export default FavouriteItem