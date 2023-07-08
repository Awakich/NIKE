import { FC, memo } from "react"
import { Link } from "react-router-dom"
import './footer.scss'
import Typography from "../ui/Typography/Typography"

const Footer: FC = memo(({ }) => {
  return (
    <footer className="footer">
      <ul className="footer--list">
        <li className="footer--list--item"><Link to='/shop'>
          <Typography size="small" text="Find a Store" weight="bold" key={Math.random().toFixed(12).toString()} />
        </Link></li>
        <li className="footer--list--item"><Link to='/upcoming'>
          <Typography size="small" text="Upcoming" weight="bold" key={Math.random().toFixed(12).toString()} />
        </Link></li>
      </ul>

      <p className="copyright">
        <Typography size="small" text="© 2023 Nike, Inc. All Rights Reserved" key={Math.random().toFixed(12).toString()} weight="normal" />
      </p>
    </footer>
  )
})

export default Footer