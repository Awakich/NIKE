import { FC } from 'react'
import { useAppSelector } from '../../entities/hooks'
import { sortSelector } from '../../entities/slices/filterSlice'
import { inputSelector } from '../../entities/slices/inputSlice'
import { useQuery } from '@apollo/client'
import { ShopItems, Sort } from 'types/models'
import { Sneakers } from '../../entities/apollo/sneakers'
import ShopItem from '../../widgets/ShopItem/ShopItem'
import Footer from '../../shared/Footer/Footer'
import Filter from '../../shared/ui/Filter/Filter'
import Loading from '../../shared/ui/Loading/Loading'
import Error from '../404/Error'
import './shop.scss'

const Shop: FC = ({ }) => {
  const sortTypes: Sort = useAppSelector(sortSelector)
  const value: string = useAppSelector(inputSelector)
  const AllSneakers = Sneakers(sortTypes)

  const { data, loading, error } = useQuery(AllSneakers)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <>
        <Filter />
        <div className='shopitems'>
          {data?.sneakers?.data?.filter((shopitem: ShopItems) => value.toLowerCase() === "" ? shopitem : shopitem.attributes.title.toLowerCase().includes(value.toLowerCase())).map(({ id, attributes, count }: ShopItems) => (
            <ShopItem id={id} key={id} attributes={attributes} count={count} />
          ))}
        </div>
      </>
      <Footer />
    </>
  )
}

export default Shop