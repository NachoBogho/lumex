import React, { useEffect, useState } from 'react';

const EfectoDesencriptarTexto = ({ text, transitionTime = 2, tickCambioLetra = 150 }) => {
  const [newText, setNewText] = useState('');

  useEffect(() => {
    let contaCiclos = 0;

    const myInterval = setInterval(() => {
      // montamos la porción del titulo real
      const trozoPalabra = text.substring(0, contaCiclos);
      
      // montamos la porcion de titulo encriptado del ciclo
      const tempText = Array.from({ length: text.length - contaCiclos }, () => getRandomCharacter()).join('');

      // actualizamos la palabra que estamos mostrando
      setNewText(trozoPalabra + tempText);

      // incrementamos ciclo
      contaCiclos = contaCiclos + 1;

      if (contaCiclos > text.length) {
        clearInterval(myInterval);
      }
    }, tickCambioLetra);

    return () => clearInterval(myInterval);
  }, [text, tickCambioLetra]);

  const getRandomCharacter = () => {
    const caracteresRandom = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't',  'u', 'v', 'w', 'x', 'y', 'z'];
    const randomIndex = Math.floor(Math.random() * caracteresRandom.length);
    return caracteresRandom[randomIndex];
  };

  return (
    <div>
      <h2 className='encryptClassH2' style={{
        transition: `margin ${transitionTime}s`,
        marginRight: '0',
        fontSize: '1vw',
        fontFamily: 'averox',
        fontWeight: 'bold'
      }}>{newText}</h2>
    </div>
  );
};

export default EfectoDesencriptarTexto;
