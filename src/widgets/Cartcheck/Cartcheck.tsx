import { FC } from 'react'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI'
import { Link } from 'react-router-dom'
import Typography from '../../shared/ui/Typography/Typography'
import './cartcheck.scss'

const Cartcheck: FC = ({ }) => {
    return (
        <section className='cartcheck'>
            <h2 className='cartcheck--title'>
                <Typography size='medium' text='Summary' weight='bold' key={Math.random().toFixed(12).toString()} />
            </h2>

            <div className='cartcheck--total'>
                <Typography size='small' text='total' key={Math.random().toFixed(12).toString()} weight='normal' />
                <Typography weight='bold' size='small' text='price' key={Math.random().toFixed(12).toString()} />
            </div>

            <Link to='/'><ButtonUI label='Member Checkout' key={Math.random().toFixed(12).toString()} primary={true} size='large' /></Link>
        </section>
    )
}

export default Cartcheck