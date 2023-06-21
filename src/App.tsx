// https://fakestoreapi.com/products
import './App.scss'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element='home' />
      <Route path='/:id' element='item' />
      <Route path='/cart' element='cart' />
    </Routes>
  )
}

export default App
