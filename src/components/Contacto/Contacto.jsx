import React from 'react'
import '../../sass/styles/_contacto.scss'

const Contacto = () => {
  return (
    <div className='display-contacto'>
      <h2>Contacto</h2>

      <div className='display-formulario-c'>
        <ul className='lista-datos-contacto'>
          <h3>Datos de Contacto</h3>
          <div>
            <h4>WhatsApp</h4>
            <li className="datos-contacto">+54 9 11 35003719</li>
          </div>
          <div>
            <h4>Correo Electronico</h4>
            <li className="datos-contacto">boghossianignacio@gmail.com</li>
          </div>
          <div>
            <h4>Horarios de Atención</h4>
            <li className="datos-contacto">10:00 AM - 20:00 PM Argentina</li>
          </div>
        </ul>

        <form className='display-form' id='formulario'>
          <input type="text" placeholder='Nombre' name="user_name" required />
          <input type="email" placeholder='Email' name="user_email" required />
          <input type="text" placeholder='Asunto' name="date" required />
          <textarea placeholder='Mensaje' name="message" />
          <input type="submit" value="Enviar" className='button-send' />
        </form>
      </div>
    </div>
  )
}

export default Contacto
