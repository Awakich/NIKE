import { FC } from 'react'
import Section from '../../components/Section/Section'
import './home.scss'
import Footer from '../../components/Layout/Other/Footer/Footer'

const Home: FC = ({ }) => {
  return (
    <>
      <div className='sections'>
        <Section />
        <Section />
        <Section />
      </div>
      <Footer />
    </>
  )
}

export default Home