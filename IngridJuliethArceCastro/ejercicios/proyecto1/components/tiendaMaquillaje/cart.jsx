import React from "react";
import './cart.css';
const Cart =({items, onClose}) =>{
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return(
        <div className="modal">
        <div className="cart">
            <span className="cerrarDe" onClick={onClose}>x</span>
            <h1>carrito</h1>
            {items.map((item, index)=>(
                <div key={index}> 
                <p>{item.name} - ${item.price}</p>
                </div>
            ))}
            <p>total: ${total}</p>
        </div>
        </div>
    );
};
export default Cart;