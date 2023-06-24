import { FC } from 'react'
import Footer from '../../components/Layout/Other/Footer/Footer'
import Header from '../../components/Layout/Other/Header/Header'
import Section from '../../components/Section/Section'
import './home.scss'

const Home: FC = ({ }) => {
  return (
    <main>
      <Header />
      <div className='sections'>
        <Section />
        <Section />
        <Section />
      </div>
      <Footer />
    </main>
  )
}

export default Home