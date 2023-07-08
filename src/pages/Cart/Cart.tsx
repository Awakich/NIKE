import { FC } from 'react'
import CartItem from '../../widgets/CartItem/CartItem'
import Cartcheck from '../../widgets/Cartcheck/Cartcheck'
import Typography from '../../shared/ui/Typography/Typography'
import './cart.scss'

const Cart: FC = ({ }) => {
  return (
    <section className='cart'>
      <section className='cart--main'>
        <section className='cart--bag'>
          <Typography size='medium' text='Bag' key={Math.random().toFixed(12).toString()} weight='bold' />
          <CartItem />
          <CartItem />
        </section>
        <Cartcheck />
      </section>
    </section>

  )
}

export default Cart