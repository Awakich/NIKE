import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { ButtonUI } from '../../shared/ui/Button/ButtonUI'
import { Link } from 'react-router-dom'
import { Sneaker } from '../../entities/apollo/sneaker'
import Loading from '../../shared/ui/Loading/Loading'
import Error from '../404/Error'
import Typography from '../../shared/ui/Typography/Typography'
import './shoe.scss'

const Shoe: FC = ({ }) => {

  const { id } = useParams()
  const { loading, data, error } = useQuery(Sneaker, {
    variables: { id: id }
  })

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <Link to={'/shop'} className='link--back'>
        <Typography size='medium' text='Back' key={Math.random().toFixed(12).toString()} weight='bold' />
      </Link>
      <section className='shoe'>
        <img className='img' src={`../../../backend/public${data?.sneaker.data.attributes.img.data[0].attributes.url}`} />

        <div className='text--block'>
          <Typography size='h2' text={`${data?.sneaker.data.attributes.title}`} key={Math.random().toFixed(12).toString()} weight='bold' />
          <p className='text--block--description'>
            <Typography weight='normal' size='medium' text={`Color: ${data.sneaker.data.attributes.description}`} key={Math.random().toFixed(12).toString()} />
          </p>

          <ButtonUI size='large' label={data?.sneaker.data.attributes.Button.label} key={data.sneaker.data.id} primary={true} />
        </div>
      </section>
    </>
  )
}

export default Shoe