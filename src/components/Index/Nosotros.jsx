import React from 'react'
import '../../sass/styles/_nosotros.scss';

const Nosotros = () => {
    return (
        <section className='nosotros-display'>
            <h2 id='nosotros'>Como trabajamos</h2>   
            <div className='trabajo-display'>
                <div className='trabajo-display-res'>
                    <h3>EN LUMEX CREAMOS SOLUCIONES DIGITALES, INNOVADORAS Y EFECTIVAS CON DEDICACION Y EXPERIENCIA</h3> <br/>
                    <h3>TRANSFORMAMOS DESAFIOS EN OPORTUNIDADES Y LLEVAMOS TU NEGOCIO AL FUTURO DIGITAL</h3>
                </div>

                <div className='trabajo-display-md'>
                    <div className='trabajo'>
                        <img src="../../public/img/nosotros/reunion.png" alt="" />
                        <p>REUNIONES PREVIAS</p>
                    </div>
                    <span className='flecha'> <i className="bi bi-arrow-right"></i></span>
                    <div className='trabajo'>
                        <img src="../../public/img/nosotros/cerebro.png" alt="" />
                        <p>GENERACION DE IDEAS</p>
                    </div>
                    <span className='flecha'><i className="bi bi-arrow-right"></i></span>
                    <div className='trabajo' >
                        <img src="../../public/img/nosotros/archivos.png" alt="" />
                        <p>PRIMEROS PROTOTIPOS</p>
                    </div>
                    <span className='flecha'><i className="bi bi-arrow-right"></i></span>
                    <div className='trabajo'>
                        <img src="../../public/img/nosotros/vuelta.png" alt="" />
                        <p>ENTREGA DEL PROYECTO</p>
                    </div>


                </div>
            </div>
            <div className='nosotros-sec'>
            <span className='flecha'><i className="bi bi-arrow-right"></i></span>
            <a href="">SOLICITA UN ASESORAMIENTO <span>GRATIS</span> CON UN ESPECIALISTA</a>
            <span className='flecha'><i className="bi bi-arrow-left"></i></span>   
            </div>
        </section>
    )
}

export default Nosotros