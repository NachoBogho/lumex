import React from 'react';
import '../../sass/styles/_productos.scss'



const PlanesContainer = ({ products }) => {
  return (
    <div className='productos-section'>
      <div className='productos-display'>
        {products.map((product) => (
          <div key={product.id} className='productos'>
            <h2>{product.nombre}</h2>       
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.descripcion}</p>
            <p className='precio'>PRECIO: <span> ${product.precio} USD</span></p>
            <div className='botones-productos'>
              <a href="">VER MAS</a>
              <a href="">COMPRAR</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanesContainer;

