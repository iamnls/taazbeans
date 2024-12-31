import React from 'react';
import MenuItem from '../components/MenuIteam'; // Adjust as per your folder hierarchy


const coffeeItems = [
  { id: 1, name: 'Espresso', description: 'Rich and strong coffee shot', price: '$3' },
  { id: 2, name: 'Latte', description: 'Creamy latte with steamed milk', price: '$4' },
  // Add more items as needed
];

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {coffeeItems.length > 0 ? (
        coffeeItems.map(item => (
          <MenuItem  key={item.id} {...item}/>
        ))
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
}

export default Menu;
