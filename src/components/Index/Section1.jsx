import React from 'react'
import '../../sass/styles/_section1.scss'

const Section1 = () => {
  return (
    <div className='display-section1'>
      <div className='display-beneficios'>
        <h5><i className="bi bi-dash"></i>Servicios Gratis</h5>
        <h3>beneficios exclusivos</h3>
        <p>Agregale valor a tu sitio para tener un futuro exitoso. Trabajamos con las ultimas tecnologias del mercado del diseño web</p>
        <ul>
          <li className="details-list"><span>•</span> WhatsApp Directo</li>
          <li className="details-list"><span>•</span> Diseño Web Responsive</li>
          <li className="details-list"><span>•</span> Enlaces a redes sociales</li>
          <li className="details-list"><span>•</span> Estadisticas de vistas</li>
          <li className="details-list"><span>•</span> Correo Profesional y/o corporativo</li>
        </ul>
      </div>
      <div className='display-boton'>
        <a href="">Ver todos los planes</a>
      </div>
    </div>
  )
}

export default Section1
