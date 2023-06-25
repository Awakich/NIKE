import { FC } from "react"
import SoonShoe from "./Soon/SoonShoe"
import './upcoming.scss'
import Footer from "../../components/Layout/Other/Footer/Footer"

const Upcoming: FC = ({ }) => {
  return (
    <>
      <div className="upcoming">
        <SoonShoe />
        <SoonShoe />
        <SoonShoe />
        <SoonShoe />
        <SoonShoe />
        <SoonShoe />
      </div>
      <Footer />
    </>
  )
}

export default Upcoming