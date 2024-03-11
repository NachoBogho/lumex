import './App.scss'
import Footer from './components/Footer'
import IndexContainer from './components/Index/IndexContainer'
import NavBar from './components/NavBar'
import Contacto from './components/Contacto/Contacto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './components/Planes/ItemListContainer'



function App() {


  return (

    <div className='page-display'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<IndexContainer/>}></Route>
        <Route path='/planes' element={<ItemListContainer/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>

  )
}

export default App
