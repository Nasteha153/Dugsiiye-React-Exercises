import { useState } from "react";
 const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div>
      <h1> Simple Shopping Cart</h1>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add to Cart</button>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>

          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <button onClick={() => increaseQuantity(product.id)}>+</button>

          <button onClick={() => removeProduct(product.id)}>
            Remove
          </button>
        </div>
      ))}
      {
        (products.length > 0 ? (
         <p>Your cart is not empty</p>
       ) : (
         <p>Your cart is empty</p>
       ))
      }
    



      <h2>Total: ${totalPrice}</h2>
    </div>
  );
}
export default ShoppingCart;

