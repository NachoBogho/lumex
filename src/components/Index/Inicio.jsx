import React, { useState, useEffect } from 'react';
import '../../sass/styles/_inicio.scss';
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
      <div className='inicio-display' id='inicio'>
        <div className='texto-display'>
          <div className='titular'>
            <p>Conoce a</p>
            <h1>l u m e x</h1>
          </div>
          <p className='texto-frase'>
            <EfectoInicio
              text={mostrarSegundoTitulo ? segundoTitulo : titulo}
              transitionTime={2}
              tickCambioLetra={80}
            />
          </p>
      <div className='display-flechas'>
          <p className='flecha'><i className="bi bi-chevron-compact-down"></i></p>
      </div>
        </div>  
      </div>
    );
  };
  
  export default Index;
