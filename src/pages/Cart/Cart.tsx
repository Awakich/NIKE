import { FC } from 'react'
import Header from '../../components/Layout/Other/Header/Header'
import './cart.scss'
import CartItem from './CartItem/CartItem'
import Cartcheck from './Cartcheck/Cartcheck'

const Cart: FC = ({ }) => {
  return (
    <section className='cart'>
      <Header />
      <section className='cart--main'>
        <section className='cart--bag'>
          <h2 className='cart--bag--title'>Bag</h2>
          <CartItem />
          <CartItem />
        </section>
        <Cartcheck />
      </section>
    </section>

  )
}

export default Cart