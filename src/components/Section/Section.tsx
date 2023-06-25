import { FC } from 'react'
import './section.scss'
import { Button } from '../Layout/UI/Button/Button'
import { Link } from 'react-router-dom'

const Section: FC = ({ }) => {
  return (
    <section className='section'>
      <p className='section--pretitle'>pretitle</p>
      <img alt='section img' />
      <div className='under_section'>
        <h2 className='under_section--title'>title</h2>
        <p className='under_section--description'>description</p>
        <Link to='/shop'><Button label='Shop Air Max' size='small' primary={true} key={Math.random().toFixed(12).toString()} /></Link>
      </div>
    </section>
  )
}

export default Section