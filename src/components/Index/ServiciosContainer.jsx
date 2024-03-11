import React from 'react'
import Planes from './Planes'
import Section1 from './Section1'
import '../../sass/styles/_servicios.scss';

const ServiciosContainer = () => {
  return (
    <div className='servicios-container'>
      <Planes/>
      <Section1/>
    </div>
  )
}

export default ServiciosContainer
