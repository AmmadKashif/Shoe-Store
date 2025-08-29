import React from 'react';

const shoes = [
  {
    id: 1,
    name: 'Air Runner',
    price: '$120',
    image: 'img src="img/shoe1.png" alt="Air Runner"',
    description: 'Lightweight and breathable for daily runs.'
  },
  {
    id: 2,
    name: 'Street Flex',
    price: '$95',
    image: 'https://via.placeholder.com/150',
    description: 'Urban style with flexible grip.' 
  },
  {
    id: 3,
    name: 'Trail Blazer',
    price: '$110',
    image: 'https://via.placeholder.com/150',
    description: 'Built for rugged terrain. '
  },
];

function ShoeStore({ onAddToCart }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            width: '180px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
          }}
        >
          <img src={shoe.image} alt={shoe.name} style={{ width: '100%', borderRadius: '4px' }} />
          <h3>{shoe.name}</h3>
          <p style={{ fontWeight: 'bold', color: '#007bff' }}>{shoe.price}</p>
          <p style={{ fontSize: '0.9em', color: '#555' }}>{shoe.description}</p>
          <button
            onClick={() => onAddToCart(shoe)}
            style={{
              padding: '8px 12px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoeStore;
