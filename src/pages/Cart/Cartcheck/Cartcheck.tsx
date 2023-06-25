import { FC } from 'react'
import './cartcheck.scss'
import { Button } from '../../../components/Layout/UI/Button/Button'
import { Link } from 'react-router-dom'

const Cartcheck: FC = ({ }) => {
    return (
        <section className='cartcheck'>
            <h2 className='cartcheck--title'>Summary</h2>
            <div className='cartcheck--total'>
                <p>total</p>
                <p className='cartcheck--total--price'>price</p>
            </div>
            <Link to='/'><Button label='Member Checkout' key={Math.random().toFixed(12).toString()} primary={true} size='large' /></Link>
        </section>
    )
}

export default Cartcheck