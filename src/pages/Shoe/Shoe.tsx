import { FC, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI'
import { Link } from 'react-router-dom'
import { Sneaker } from '../../entities/apollo/sneaker'
import { addCart } from '../../entities/slices/cartSlice'
import { useAppDispatch } from '../../entities/hooks'
import { addFavourite } from '../../entities/slices/favouriteSlice'
import Loading from '../../shared/ui/Loading/Loading'
import Error from '../404/Error'
import Typography from '../../shared/ui/Typography/Typography'
import Favourite from '../../shared/assets/Favourite.svg'
import Favourite_add from '../../shared/assets/Favourite_add.svg'
import './shoe.scss'

const Shoe: FC = ({ }) => {

  const { id } = useParams()
  const [clicked, setClicked] = useState<boolean>(false)
  const dispatch = useAppDispatch()


  const { loading, data, error } = useQuery(Sneaker, {
    variables: { id: id }
  })

  if (loading) return <Loading />
  if (error) return <Error />

  const AddItem = () => {
    const cart_item = {
      id,
      attributes: {
        img: data.sneaker.data.attributes.img,
        title: data.sneaker.data.attributes.title,
        price: data.sneaker.data.attributes.price,
        description: data.sneaker.data.attributes.description,
      }
    }
    dispatch(addCart(cart_item))
  }

  const AddFavourite = () => {
    setClicked(!clicked)
    const favourite_item = {
      id,
      attributes: {
        description: data.sneaker.data.attributes.description,
        title: data.sneaker.data.attributes.title,
        img: data.sneaker.data.attributes.img,
        price: data.sneaker.data.attributes.price,
        Button: data.sneaker.data.attributes.Button
      }
    }
    dispatch(addFavourite(favourite_item));

  }

  return (
    <>
      <Link to={'/shop'} className='link--back'>
        <Typography size='medium' text='Back' key={Math.random().toFixed(12).toString()} weight='bold' />
      </Link>
      <section className='shoe'>
        <img className='img' src={`../../../backend/public${data?.sneaker.data.attributes.img.data[0].attributes.url}`} />

        <div className='text--block'>
          <Typography size='h2' text={`${data?.sneaker.data.attributes.title}`} key={Math.random().toFixed(12).toString()} weight='bold' />

          <div className='text--block--description'>
            <Typography weight='normal' size='medium' text={`Color: ${data.sneaker.data.attributes.description}`} key={Math.random().toFixed(12).toString()} />
            <img alt='favourite-icon' className='text--block--description--icon' src={clicked ? Favourite_add : Favourite} onClick={AddFavourite} />
          </div>

          <ButtonUI onClick={AddItem} size='large' label={data?.sneaker.data.attributes.Button.label} key={data.sneaker.data.id} primary={true} />
        </div>
      </section>
    </>
  )
}

export default Shoe