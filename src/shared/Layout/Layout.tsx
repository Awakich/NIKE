import { FC, ReactNode } from 'react'
import './layout.scss'

type Layout =  {
  children: ReactNode
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <section className='layout'>{children}</section>
  )
}

export default Layout