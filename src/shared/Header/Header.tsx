import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import logo from '../assets/Logo.svg'
import fav from '../assets/Favourite.svg'
import cart from '../assets/Cart.svg'
import '../Header/header.scss'

const Header: FC = memo(({ }) => {
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
})

export default Header