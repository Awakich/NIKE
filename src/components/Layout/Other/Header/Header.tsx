import { FC } from 'react'
import Nav from './Nav/Nav'
import logo from '../../../../assets/Logo.svg'
import '../Header/header.scss'
import fav from '../../../../assets/Favourite.svg'
import cart from '../../../../assets/Cart.svg'
import { Link } from 'react-router-dom'

const Header: FC = ({ }) => {
  return (
    <section className='header'>
      <Link to='/'><img alt='logo' src={logo} /></Link>

      <Nav />

      <div className='icons'>
        <Link to='/favourite'><img alt="icon fav" src={fav} className='icons--img' /></Link>
        <Link to='/cart'><img alt="icon cart" src={cart} className='icons--img' /></Link>
      </div>

    </section>
  )
}

export default Header