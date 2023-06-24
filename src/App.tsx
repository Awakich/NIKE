import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shoe from './pages/Shoe/Shoe'
import Shop from './pages/Shop/Shop'
import Upcoming from './pages/Upcoming/Upcoming'
import Cart from './pages/Cart/Cart'
import Favourite from './pages/Favourite/Favourite'
import Error from './pages/404/Error'

// console.log(import.meta.env.VITE_URL)
// Filters (color, price(by minimal))
// Auth

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:id' element={<Shoe />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App