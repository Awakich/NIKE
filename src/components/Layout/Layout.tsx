import { FC, ReactNode } from 'react'
import './layout.scss'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <section className='layout'>{children}</section>
  )
}

export default Layout