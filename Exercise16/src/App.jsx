import react, {useState} from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

function App(){
  const [CartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCartItems([...CartItems, item]);
  };
  const removeFromCart = (itemId) => {
    setCartItems(CartItems.filter((cartItem) => cartItem.id !== itemId));
  };

  const contextValue = {cartItems: CartItems, addToCart, removeFromCart};
   return (
    <CartContext.Provider value={contextValue}>
      <ProductItem itemId={1} itemName="Widget" price={"10"} />
      <ProductItem itemId={2} itemName="Gadget" price={"30"} />
      <ProductItem itemId={3} itemName="Mouse" price={"5"} />
      <ProductItem itemId={4} itemName="Keyboard" price={"20"} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;


  
 
