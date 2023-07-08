import { FC } from 'react'
import './favouriteitem.scss'
import Typography from '../../shared/ui/Typography/Typography'

const FavouriteItem: FC = ({ }) => {
    return (
        <section className='favourite__item'>
            <img alt='sneakers-img' />
            <div className='favourite__item--text'>
                <Typography size='small' text='title' weight="bold" key={Math.random().toFixed(12).toString()} />
                <p className='favourite__item--text--description'>
                    <Typography size='small' text='description' weight='normal' key={Math.random().toFixed(12).toString()} />
                </p>
                <p className='favourite__item--text--price'>
                    <Typography size='small' text='$ +price' key={Math.random().toFixed(12).toString()} weight='bold' />
                </p>
            </div>
        </section>
    )
}

export default FavouriteItem