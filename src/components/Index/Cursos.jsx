import React from 'react'
import { Link } from 'react-router-dom'
import '../../sass/styles/_cursos.scss';

const Cursos = () => {
    return (
        <section className='display-cursos'>
            <div className='display-section'>
                <div className='section-cursos-1'>
                    <div className='titulo-cursos'>
                        <h5> Curso de Desarrollo Web FrontEnd</h5>
                        <p>Aseguramos una experiencia de aprendizaje personalizada y enfocada en tu éxito.</p>
                        <div>
                        <p className='oferta'>$199,99 USD</p>
                        <p className='precio'>$179,99 USD | 20% OFF!</p>
                        </div>
                        
                    </div>
                    <p>Ofrecemos una experiencia personalizada al asignar a cada alumno un único profesor. Esta atención individualizada permite al profesor adaptarse a los conocimientos y ritmo de aprendizaje de cada estudiante, creando un ambiente tranquilo y fomentando una conexión sólida entre pares. Cubrimos de manera exhaustiva todos los temas relevantes del desarrollo web front end, aunque es importante destacar que este curso ni ninguno que encuentren por internet va a garantizar la empleabilidad inmediata en este campo.</p>
                    <p>Además, es importante mencionar que la cotización se realiza en dólares para estudiantes extranjeros, pero para residentes en Argentina ofrecemos la opción de abonar en pesos al tipo de cambio del dólar MEP vigente en el día de la compra, lo que brinda una alternativa accesible y conveniente para quienes se encuentran en el país.</p>
                    <Link className="link-cursos" to="/">Inscribirme Ahora</Link>
                </div>
                <div className='section-cursos-2'>
                    <h5>SOBRE EL CURSO</h5>
                    <p>Es una inmersión completa en las tecnologías clave del FrontEnd. <br /> Desde los fundamentos hasta las prácticas avanzadas, los estudiantes explorarán cómo crear experiencias interactivas y atractivas para los usuarios en la web.</p>
                    <h5>QUE INCLUYE</h5>
                    <ul>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> HTML - CSS - JAVASCRIPT</li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> SITIOS RESPONSIVE</li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> BOOTSTRAP | SASS </li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> REACT</li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> GIT | GITHUB</li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> SEO</li>
                        <li className="list-item-curso"><i class="bi bi-check2-circle"></i> CERTIFICADO DE APROBACIÓN</li>
                        

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cursos
