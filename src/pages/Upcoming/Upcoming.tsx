import { FC } from "react"
import { useQuery } from '@apollo/client'
import { Upcomings } from "../../entities/apollo/upcomings"
import { Soon } from "types/models"
import SoonShoe from "../../shared/Soon/SoonShoe"
import Footer from "../../shared/Footer/Footer"
import Loading from "../../shared/ui/Loading/Loading"
import Error from "../../pages/404/Error"
import './upcoming.scss'

const Upcoming: FC = () => {

  const { data, loading, error } = useQuery(Upcomings)
  if (loading) return <Loading />
  if (error) return <Error />

  return (
    <>
      <div className="upcoming">
        {data.upcomings.data.map(({ id, attributes }: Soon) => (
          <SoonShoe key={id} id={id} attributes={attributes} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Upcoming