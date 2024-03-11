import React from 'react';
import Index from './Inicio';
import Nosotros from './Nosotros';
import Cursos from './Cursos';
import ServiciosContainer from './ServiciosContainer';

const IndexContainer = () => {
  return (
    <div>
      <Index />
      <Nosotros/>
      <ServiciosContainer/>
      <Cursos/>
    </div>
  );
};

export default IndexContainer;
