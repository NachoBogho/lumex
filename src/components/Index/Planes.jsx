import React from 'react';
import '../../sass/styles/_planes.scss';

const Planes = () => {
  return (
    <div className='planes-display'>
      <div className='planes-titulo'>
        <h3>Digitaliza tu historia </h3>
        <p>Que te ofrecemos</p>
      </div>
      <div className='planes-display-servicios'>
        <div className='display-servicio'>
          <div>
            <i className="bi bi-file"></i>
            <h5>One Page</h5>
            <a href="">Ver Planes</a>
          </div>
          <div>
            <i className="bi bi-display"></i>
            <h5>Landing Page</h5>
            <a href="">Ver Planes</a>
          </div>

        </div>
        <div className='display-servicio'>
          <div>
            <i className="bi bi-cart"></i>
            <h5>E-commerce</h5>
            <a href="">Ver Planes</a>
          </div>
          <div>
            <i className="bi bi-wordpress"></i>
            <h5>wordpress</h5>
            <a href="">Ver Planes</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Planes
