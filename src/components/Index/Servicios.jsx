import React from 'react'
import '../../sass/styles/_servicios.scss';

const Servicios = () => {
  return (
    <section className='servicios-display' id='servicios'>
      <h3>Que ofrecemos</h3>
      <div className='cards-display'>
        <div className='cards'>
          <h5>One Pages</h5>
          <p>Este es un sitio web para que puedas tener más visibilidad en el mundo del internet donde mostraremos todo el valor de tu negocio.</p>
          <ul>
            <li className="details-list"><span>•</span> Diseño del Sitio</li>
            <li className="details-list"><span>•</span> Dominio unico</li>
            <li className="details-list"><span>•</span> Hosting</li>
            <li className="details-list"><span>•</span> Acceso al codigo</li>
            <li className="details-list"><span>•</span> Mantenimiento Postventa</li>
          </ul>
          <a href="">Ver Planes</a>

        </div>

        <div className='cards'>
          <h5>Landing Pages</h5>
          <p>Este es un sitio web para que puedas tener más visibilidad en el mundo del internet donde mostraremos todo el valor de tu negocio.</p>
          <ul>
            <li className="details-list"><span>•</span> Diseño del Sitio</li>
            <li className="details-list"><span>•</span> Dominio unico</li>
            <li className="details-list"><span>•</span> Hosting</li>
            <li className="details-list"><span>•</span> Acceso al codigo</li>
            <li className="details-list"><span>•</span> Mantenimiento Postventa</li>
          </ul>
          <a href="">Ver Planes</a>


        </div>

        <div className='cards'>
          <h5>E-Commerce</h5>
          <p>Este es un sitio web para que puedas tener más visibilidad en el mundo del internet donde mostraremos todo el valor de tu negocio.</p>
          <ul>
            <li className="details-list"><span>•</span> Diseño del Sitio</li>
            <li className="details-list"><span>•</span> Dominio unico</li>
            <li className="details-list"><span>•</span> Hosting</li>
            <li className="details-list"><span>•</span> Acceso al codigo</li>
            <li className="details-list"><span>•</span> Mantenimiento Postventa</li>
          </ul>
          <a href="">Ver Planes</a>

        </div>


      </div>
    </section>

  )
}

export default Servicios