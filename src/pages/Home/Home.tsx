import { FC } from 'react'
import { useQuery } from '@apollo/client'
import { AllSections } from '../../entities/apollo/sections'
import { SectionItems } from '../../types/models'
import Section from '../../shared/Section/Section'
import Footer from '../../shared/Footer/Footer'
import Loading from '../../shared/ui/Loading/Loading'
import Error from '../../pages/404/Error'
import './home.scss'

const Home: FC = () => {

  const { data, loading, error } = useQuery(AllSections)

  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <div className='sections'>
        {data.sections.data.map(({ id, attributes }: SectionItems) => (
          <Section key={id} id={id} attributes={attributes} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Home