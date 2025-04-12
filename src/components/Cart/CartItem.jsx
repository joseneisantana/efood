import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>R$ {item.price.toFixed(2)}</p>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
        }
      />
      <button onClick={() => dispatch(removeItem(item.id))}>
        Remover
      </button>
    </div>
  );
};

export default CartItem;
