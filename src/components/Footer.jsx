import React from 'react'
import '../sass/styles/_footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className='footer-page'>
            <div>
                <h5 className='logo-footer'><a href="">Lumex</a></h5>
            </div>
            <nav className='footer-list-display'>
                <ul className='footer-list'>
                    <li><a href="#inicio"><i className="bi bi-house"></i> Inicio</a></li>
                    <li><a href="#nosotros"><i className="bi bi-person"></i> Nosotros</a></li>
                    <li><a href="#servicios"><i className="bi bi-briefcase"></i> Servicios</a></li>
                    <li><Link to="#servicios"><i class="bi bi-backpack"></i> Cursos</Link></li>
                    <li><a href=""><i className="bi bi-phone"></i> Contacto</a></li>
                </ul>
            </nav>
            <nav>
            <ul className='footer-list-social'>
                    <li><a href="#inicio"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#nosotros"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="#servicios"><i className="bi bi-whatsapp"></i></a></li>
                    <li><a href=""><i className="bi bi-phone"></i></a></li>
                </ul>
            </nav>
            </div>
            <div className="derechos-footer">
                <p>© 2024 LUMEX | TODOS LOS DERECHOS RESERVADOS</p>
            </div>
        </footer>
    )
}

export default Footer
