import { FC } from 'react'
import './shopitem.scss'

const ShopItem: FC = ({ }) => {
    return (
        <section className='shop__item'>
            <img alt='sneakers-img' />
            <div className='shop__item--text'>
                <p className='shop__item--text--ad'>Just in</p>
                <h3 className='shop__item--text--title'>title</h3>
                <p className='shop__item--text--description'>description</p>
                <p className='shop__item--text--price'>$ +price</p>
            </div>
        </section>
    )
}

export default ShopItem