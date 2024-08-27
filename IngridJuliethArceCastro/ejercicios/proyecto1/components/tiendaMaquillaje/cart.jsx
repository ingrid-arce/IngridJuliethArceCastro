import React from "react";

const Cart =({items}) =>{
    const total = items.reduce((sum, item) => sum + item.preci, 0);

    return(
        <div>
            <h1>carrito</h1>
            {items.map((item, index)=>(
                <div key={index}> 
                <p>{item.name} - ${item.price}</p>
                </div>
            ))}
            <p>total: ${total}</p>
        </div>
    );
};
export default Cart;