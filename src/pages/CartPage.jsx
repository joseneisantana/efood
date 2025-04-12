import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/CartItem';

const CartPage = () => {
  const { items, total } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1>Seu Carrinho</h1>
      {items.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total: R$ {total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
