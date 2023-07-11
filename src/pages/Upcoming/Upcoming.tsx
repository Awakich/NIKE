import { FC } from "react"
import { useQuery } from '@apollo/client'
import { Upcomings } from "../../entities/apollo/upcomings"
import { Soon } from "types/models"
import { motion } from 'framer-motion'
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
      <motion.div className="upcoming" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        {data.upcomings.data.map(({ id, attributes }: Soon) => (
          <SoonShoe key={id} id={id} attributes={attributes} />
        ))}
      </motion.div>
      <Footer />
    </>
  )
}

export default Upcoming