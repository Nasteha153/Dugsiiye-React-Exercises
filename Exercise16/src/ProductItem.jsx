import react, { useContext } from 'react';
import CartContext from './CartContext';

function ProductItem({ itemId, itemName, price }) {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart({ id: itemId, name: itemName, price });
  }

  return (
    <div>
      <h3>{itemName}</h3>
      <p>Price: {price}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;