import { FC } from 'react'
import { ButtonUI } from '../ui/Button/ButtonUI'
import { Link } from 'react-router-dom'
import { SectionItems } from 'types/models'
import Typography from '../ui/Typography/Typography'
import './section.scss'

const Section: FC<SectionItems> = ({ attributes: { description, pretitle, title, img, Button } }) => {
  return (
    <section className='section'>
      <div className='section--pretitle'>
        <Typography size='medium' text={pretitle} key={Math.random().toFixed(12).toString()} weight='bold' />
      </div>

      <img alt='section img' src={`../../../backend/public${img?.data[0].attributes.url}`} />

      <div className='under_section'>
        <Typography text={title} size='h1' weight='bold' key={Math.random().toFixed(12).toString()} />
        <Typography size='small' text={description} key={Math.random().toFixed(12).toString()} weight='normal' />
        <Link to='/shop'><ButtonUI label={Button[0].label} size='small' primary={true} key={Math.random().toFixed(12).toString()} /></Link>
      </div>
    </section>
  )
}

export default Section