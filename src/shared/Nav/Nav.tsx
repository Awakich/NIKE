import { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import Typography from '../ui/Typography/Typography'
import './nav.scss'

const Nav: FC = memo(({ }) => {
  return (
    <nav className='navigation'>
      <ul className='navigation--list'>
        <li className='navigation--list--item'><Link to='/upcoming'>
          <Typography size='small' text='UpComing' key={Math.random().toFixed(12).toString()} weight='bold' />
        </Link>
        </li>

        <li className='navigation--list--item'><Link to='/shop'>
          <Typography size='small' weight='bold' text='Sale' key={Math.random().toFixed(12).toString()} />
        </Link>
        </li>
      </ul>
    </nav>
  )
})

export default Nav