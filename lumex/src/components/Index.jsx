import React, { useState, useEffect } from 'react';
import '../sass/styles/_inicio.scss';
import EfectoInicio from './EfectoInicio';


const Index = () => {
    const [mostrarSegundoTitulo, setMostrarSegundoTitulo] = useState(false);
  
    const titulo = 'Lo que crees, creas';
    const segundoTitulo = 'Construye tu historia digital';
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setMostrarSegundoTitulo((prev) => !prev);
      }, 7000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className='inicio-display'>
        <div className='texto-display'>
          <div className='titular'>
            <p>Conoce a</p>
            <h1>L u m e x</h1>
          </div>
          <p className='texto-frase'>
            <EfectoInicio
              text={mostrarSegundoTitulo ? segundoTitulo : titulo}
              transitionTime={2}
              tickCambioLetra={80}
            />
          </p>
        </div>
        <img src="../../public/img/mano.png" alt="" />
      </div>
    );
  };
  
  export default Index;
