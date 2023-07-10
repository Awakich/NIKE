import { FC } from 'react'
import { useAppSelector } from '../../entities/hooks'
import { cartSelector } from '../../entities/slices/cartSlice'
import { CartItems } from 'types/models'
import CartItem from '../../widgets/CartItem/CartItem'
import Cartcheck from '../../widgets/Cartcheck/Cartcheck'
import Typography from '../../shared/ui/Typography/Typography'
import './cart.scss'

const Cart: FC = ({ }) => {

  const cart: CartItems[] = useAppSelector(cartSelector)

  return (
    <section className='cart'>
      <section className='cart--main'>
        <section className='cart--bag'>
          <Typography size='medium' text='Bag' key={Math.random().toFixed(12).toString()} weight='bold' />

          {cart.map(({ id, attributes, count }) => (
            <CartItem count={count} key={id} attributes={attributes} id={id} />
          ))}
        </section>

        <Cartcheck />

      </section>
    </section>

  )
}

export default Cart