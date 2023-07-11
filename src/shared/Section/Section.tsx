import { FC } from 'react'
import { ButtonUI } from '../ui/Button/ButtonUI'
import { Link } from 'react-router-dom'
import { SectionItems } from 'types/models'
import { motion } from 'framer-motion'
import Typography from '../ui/Typography/Typography'
import './section.scss'

const Section: FC<SectionItems> = ({ attributes: { description, pretitle, title, img, Button } }) => {
  return (
    <motion.section className='section' initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} >
      <div className='section--pretitle'>
        <Typography size='medium' text={pretitle} key={Math.random().toFixed(12).toString()} weight='bold' />
      </div>

      <img alt='section img' src={`../../../backend/public${img?.data[0].attributes.url}`} />

      <div className='under_section'>
        <Typography text={title} size='h1' weight='bold' key={Math.random().toFixed(12).toString()} />
        <Typography size='small' text={description} key={Math.random().toFixed(12).toString()} weight='normal' />
        <Link to='/shop'><ButtonUI label={Button[0].label} size='small' primary={true} key={Math.random().toFixed(12).toString()} /></Link>
      </div>
    </motion.section>
  )
}

export default Section