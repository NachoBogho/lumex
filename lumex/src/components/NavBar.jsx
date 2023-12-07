import React from 'react'
import '../sass/styles/_navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar-display'>

      <a href="" className='navbar-logo'><img src="../../public/img/Lumex Banner sin fondo.png" alt="" /></a>
     
      
      <div className='navbar-list-display'>
        <ul className='navbar-list'>
          <li><a href=""><i className="bi bi-house"></i> Inicio</a></li>
          <li><a href="#servicios"><i class="bi bi-briefcase"></i> Servicios</a></li>
          <li><a href=""><i class="bi bi-person"></i> Nosotros</a></li>
          <li><a href=""><i class="bi bi-phone"></i> Contacto</a></li>
    
        </ul>
      </div>
    </div>
  )
}

export default NavBar