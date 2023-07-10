import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI';
import jwt_decode from "jwt-decode";
import Nav from '../Nav/Nav'
import logo from '../assets/Logo.svg'
import fav from '../assets/Favourite.svg'
import cart from '../assets/Cart.svg'
import '../Header/header.scss'

const Header: FC = ({ }) => {

  const [logged, setLogged] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<string>("")

  const SuccessHandler = (credentialResponse: any) => {
    const decoded: any = jwt_decode(credentialResponse.credential)
    setLogged(!logged)
    setUserInfo(decoded.picture)
  }

  return (
    <section className='header'>
      <Link to='/'><img alt='logo' src={logo} /></Link>

      <Nav />

      <div className='icons'>
        <Link to='/favourite'><img alt="icon fav" src={fav} className='icons--img' /></Link>
        <Link to='/cart'><img alt="icon cart" src={cart} className='icons--img' /></Link>
        {!logged ? <GoogleLogin onSuccess={(credentialResponse) => SuccessHandler(credentialResponse)} /> :

          <>
            <img alt="user--img" className='user--img' src={userInfo} />
            <ButtonUI onClick={() => setLogged(!logged)} label='Log Out' key={Math.random().toFixed(12).toString()} primary={true} size='small' />
          </>
        }
      </div>

    </section>
  )
}

export default Header