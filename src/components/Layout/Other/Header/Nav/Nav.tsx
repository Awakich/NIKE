import { FC } from 'react'
import './nav.scss'
import { Link } from 'react-router-dom'

const Nav: FC = ({ }) => {
  return (
    <nav className='navigation'>
      <ul className='navigation--list'>
        <li className='navigation--list--item'><Link to='/upcoming'>UpComing</Link></li>
        <li className='navigation--list--item'><Link to='/shop'>Sale</Link></li>
      </ul>
    </nav>
  )
}

export default Nav