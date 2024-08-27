import React from "react";

import brillos from '../../src/img/brillos.png';
import brochas from '../../src/img/brochas.png';
import brochas2en1 from '../../src/img/brochas2en1.png';
import cejas from '../../src/img/cejas.png';
import iluminador from '../../src/img/iluminador.png';
import pestañina from '../../src/img/pestañina.png';
import pestañinax2 from '../../src/img/pestañinax2.png';
import polvos from '../../src/img/polvos.png';
import primer from '../../src/img/primer.png';
import rubor from '../../src/img/rubor.png';
import sombras from '../../src/img/sombras.png';

const imagenes={
    1:brillos,
    2:brochas,
    3:brochas2en1,
    4:cejas,
    5:iluminador,
    6:pestañina,
    7:pestañinax2,
    8:polvos,
    9:primer,
    10:rubor,
    11:sombras,
};

const ProductDetails = ({product, añadirCarrito}) =>{

   
    const image = imagenes[product.id];
    return(
        <div>
            <h3>{product.name}</h3>
            <img src={image} alt="product.name" />
            <p>precio: ${product.price}</p>
            <p>product.description</p>
            <button onClick={()=> añadirCarrito(product)}>Agregar al carrito.</button>
        </div>
    );
};
export default ProductDetails;