import '../../sass/styles/_servicios.scss';
import React, { useEffect, useState } from 'react';
import { jsonCall } from '../../js/jsonCall';
import { useParams } from 'react-router-dom';
import PlanesContainer from './PlanesContainer';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const category = useParams().category;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ans = await jsonCall();

                if (category) {
                    setProducts(ans.filter((product) => product.category === category));
                } else {
                    setProducts(ans);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);

    return(
      <div className='display-item'>
        <h2>Planes Disponibles</h2>
        <PlanesContainer products={products}/>
      </div>

    )
};
export default ItemListContainer
