import './App.scss'
import Index from './components/Index'
import NavBar from './components/NavBar'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'


function App() {


  return (

    <div className='page-display'>
      <NavBar />
      <Index />
      <Servicios/>
      <Nosotros/>

    </div>

  )
}

export default App
