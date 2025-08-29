import React, { useState } from 'react';
import ShoeStore from './ShoeStore';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>👟 Splashy Shoe Store</h1>
      <p style={{ textAlign: 'center' }}>🛒 Cart Items: {cart.length}</p>

      <a href="https://airtm.com/send-money" target="_blank" rel="noopener noreferrer">
        <button style={{
          margin: '10px auto',
          display: 'block',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}>
          Proceed to Payment
        </button>
      </a>

      <ShoeStore onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
