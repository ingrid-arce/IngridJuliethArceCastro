import React,{useState} from "react";
import ProductList from "../components/tiendaMaquillaje/productList";
import ProductDetails from "../components/tiendaMaquillaje/productDetails";
import Cart from "../components/tiendaMaquillaje/cart";
import "./index.css";


const App =()=>{

const [products] = useState([

{id:1, name:"lipgloss de Coca-Cola (con color)", price: 7000, description:" lipgloss de cocacola con un lindo color y agradable sabor"},
{id:2, name:"Kit Brocha Trendy Ojos x 6 ", price: 20000, description:"Es un kit básico infaltable para un maquillaje de ojos. Contiene 6 brochas de pelo sintético. Trendy no testea en animales."},
{id:3, name:"Kit de brochas x5", price:15000, description:"Este kit incluye 5 brochas tradicionales, cepillo de cejas, brocha de cejas, brocha plana, brocha de detalle y brocha grande"},
{id:4, name:" Brow fix-Brow kit.", price:12000, description:" Maquillaje el polvo y fijador cremoso con pigmentos naturales que sirve para delinear, rellenar y resaltar el color de tus cejas de una forma natural"},
{id:5, name:"Iluminadores 3 Tonos", price:12000, description:"Iluminador glow me X3 ANYLADY Su alta pigmentación permite conseguir un maquillaje perfecto e iluminado. Viene en 3 tonos"},
{id:6, name:"Pestañina Cat Trendy", price:15000, description:"Todas nuestras referencias son lavables pero no se corren fácil durante el día, puedes usarla incluso en climas cálidos.Todas tienen la fórmula casi igual, lo único que cambia es la presentación, cepillo y empaque"},
{id:7, name:"Pestañina DAY 4D ", price:12000, description:"es aprueba de agua"},
{id:8, name:"Polvos sueltos Matte", price:17000, description:"Tono banana Con micro-componentes translucidos capaces de sellar con éxito tu maquillaje. Polvo banana y traslucido con efecto prolongado y HD. PLUS: Obtén acabados profesionales en el set con nuestro polvo de efecto rebote sobre el flash y luces artificiales"},
{id:9, name:"Primer Serum Watermelon Trendy", price:25000, description:"Su textura en gel te deja un acabado mate gracias a sus partículas en forma de corazón lucirás radiante, juvenil y fresca. Puede usarse en todo tipo de piel pero es ideal para piel grasa. "},
{id:10, name:"Day rubor", price:8000, description:"Rubor de muy buena pigmentación y adherencia a la piel. Sus colores son perfectos para todas los tonos de piel."},
{id:11, name:"Sombra Frutas Trendy - Uva", price:15000, description:"Unidad de empaque (Display) = 12 unidades Paleta monocromática en tonos morados.Tiene una combinación de 9 tonos. De color intenso y de fácil difuminación. Trae sombras mate, metálicas y satinadas El morado es tono en tendencia."},
{id:12, name:"Tónico de Agua de Rosas 240ml ", price:20000, description:"Extracto de rosas y manzanilla en alta concentración, por eso nuestra fórmula se ha posicionado como una de las mejores del mercado, ya que estos dos ingredientes juntos hidratan a profundidad la piel, y controlan brillo durante el día."},
]);

const [selectedProduct, setSelectedProduct]= useState(null);
const [cartItems, setCartItems] = useState([]);
const [productVisible, setProductVisible]= useState(false);
const [cartVisible, setCartVisible]= useState(false);

const visualizarDetalles =(product) =>{
  console.log("producto seleccionado", product)
  setSelectedProduct(product);
  setProductVisible(true);
};


const agregarProducto = (product) =>{
  setCartItems([...cartItems, product]);
  setProductVisible(false);

  setTimeout(()=>{
    setCartVisible(true);

  }, 0);


};

const cerrarDetalles =()=>{
  setProductVisible(false);
};
const cerrarCarrito =()=>{
  setCartVisible(false);
};
return(
  <div className="app-container">

    <h1 className="titulo">Tienda de maquillaje</h1>
    < ProductList products={products} verDetalles={visualizarDetalles}/>
    {productVisible && (
      <div className="modal">
      < ProductDetails product={selectedProduct} añadirCarrito ={agregarProducto}
      onClose={cerrarDetalles}/>
      </div> 
    )}

    {cartVisible && (
      <div className="modal">
    <Cart items ={cartItems}
    onClose={cerrarCarrito}/>
      </div>
    )}

  </div>
);
};
export default App;