import { FC, Fragment } from 'react'
import { Sneaker } from '../../types/models'
import { Link } from 'react-router-dom'
import Typography from '../../shared/ui/Typography/Typography'
import './shopitem.scss'

const ShopItem: FC<Sneaker> = ({ attributes: { img, title, description, price }, id }) => {
    return (
        <Fragment>
            <section className='shop__item'>
                <Link to={`/shop/${id}`}>
                    <img alt='sneakers-img' className='img' src={`../../../backend/public${img?.data[0].attributes.url}`} />
                </Link>
                <div className='shop__item--text'>

                    <div className='shop__item--text--ad'>
                        <Typography text='Just in' size='small' weight='bold' key={Math.random().toFixed(12).toString()} />
                    </div>

                    <Typography size='medium' text={`${title}`} key={Math.random().toFixed(12).toString()} weight='bold' />

                    <div className='shop__item--text--description'>
                        <Typography size='small' text={`${description}`} key={Math.random().toFixed(12).toString()} weight='normal' />
                    </div>

                    <Typography size='small' text={`$ ${price}`} key={Math.random().toFixed(12).toString()} weight='bold' />
                </div>
            </section>
        </Fragment>

    )
}

export default ShopItem