import { FC } from "react"
import './footer.scss'
import { Link } from "react-router-dom"

const Footer: FC = ({ }) => {
  return (
    <footer className="footer">
      <ul className="footer--list">
        <li className="footer--list--item"><Link to='/shop'>Find a Store</Link></li>
        <li className="footer--list--item"><Link to='/upcoming'>Upcoming</Link></li>
      </ul>

      <p className="copyright">© 2023 Nike, Inc. All Rights Reserved</p>
    </footer>
  )
}

export default Footer