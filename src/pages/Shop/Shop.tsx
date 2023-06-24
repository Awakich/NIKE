import { FC } from 'react'
import Header from '../../components/Layout/Other/Header/Header'
import Footer from '../../components/Layout/Other/Footer/Footer'
import ShopItem from './ShopItem/ShopItem'
import filter from '../../assets/Filter.svg'
import './shop.scss'

const Shop: FC = ({ }) => {
  return (
    <>
      <Header />
      <>
        <div className='filter'>
          <p className='filter--text'>Sort by</p>
          <img alt="sort-img" src={filter} />
        </div>

        <div className='shopitems'>
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </div>
      </>
      <Footer />
    </>
  )
}

export default Shop