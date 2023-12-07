import React from 'react'
import '../sass/styles/_nosotros.scss';

const Nosotros = () => {
  return (
    <section className='nosotros-display'>
            <h2>Como trabajamos</h2>
            <div className='trabajo-display'>
                <div className='trabajo'>
                    <img src="../../public/img/reunion.png" alt="" />
                    <p>Realizamos una reunión previa para brindarte información detallada sobre el proceso.</p>
                </div>
                <span className='flecha'> ➜ </span>
                <div className='trabajo'>
                    <img src="../../public/img/cerebro.png" alt="" />
                    <p>Generamos ideas y enviamos el contenido de tu sitio web.</p>
                </div>
                <span className='flecha'> ➜ </span>
                <div className='trabajo' >
                    <img src="../../public/img/archivos.png" alt="" />
                    <p>Presentamos prototipos y solicitamos tu opinión para la versión final.</p>
                </div>
                <span className='flecha'> ➜ </span>
                <div className='trabajo'>
                    <img src="../../public/img/vuelta.png" alt="" />
                    <p>Efectuamos una entrega previa con las últimas correcciones.</p>
                </div>
                

        </div>       
    </section>
  )
}

export default Nosotros