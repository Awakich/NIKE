import { FC } from 'react'
import './cartcheck.scss'
import { Button } from '../../../components/Layout/UI/Button/Button'

const Cartcheck: FC = ({ }) => {
    return (
        <section className='cartcheck'>
            <h2 className='cartcheck--title'>Summary</h2>
            <div className='cartcheck--total'>
                <p>total</p>
                <p className='cartcheck--total--price'>price</p>
            </div>
            <Button label='Member Checkout' link='/' key={Math.random().toFixed(12).toString()} primary={true} size='large' />
        </section>
    )
}

export default Cartcheck