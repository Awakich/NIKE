import { FC } from 'react'
import ShopItem from './ShopItem/ShopItem'
import './shop.scss'
import Footer from '../../components/Layout/Other/Footer/Footer'
import Filter from './Filter/Filter'
import { useAppSelector } from '../../redux/hooks'
import { sortSelector } from '../../redux/slices/filterSlice'
import { inputSelector } from '../../redux/slices/inputSlice'

const Shop: FC = ({ }) => {
  const sortTypes = useAppSelector(sortSelector)
  const value = useAppSelector(inputSelector)

  const sort = sortTypes.sort
  const input = value ? value : ''
  
  return (
    <>
      <>
        <Filter />
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