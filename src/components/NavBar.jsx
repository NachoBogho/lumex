import React from 'react'
import '../sass/styles/_navbar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar-display'>

      <a href="" className='navbar-logo'><img src="../../public/img/logos/Lumex Banner sin fondo.png" alt="" /></a>
     
      
      <nav className='navbar-list-display'>
        <ul className='navbar-list'>
          <li><Link to="/"><i className="bi bi-house"></i> Inicio</Link></li>
          <li><Link to="#nosotros"><i className="bi bi-person"></i> Nosotros</Link></li>
          <li><Link to="#servicios"><i className="bi bi-briefcase"></i> Servicios</Link></li>
          <li><Link to="#servicios"><i class="bi bi-backpack"></i> Cursos</Link></li>
          <li><Link to="/contacto"><i className="bi bi-phone"></i> Contacto</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar