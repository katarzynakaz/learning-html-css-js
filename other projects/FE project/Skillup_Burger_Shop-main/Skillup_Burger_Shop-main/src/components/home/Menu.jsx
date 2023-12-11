// Write all the code here
// Create a menu card of the items with the item number, image source, price, title, a function handler for
// adding to cart, and a delay for animation.

import React from 'react';
import '../../styles/menu.scss'; 

const menuItems = [
    {
      itemNumber: 1,
      imageSrc: 'path_to_image1.jpg',
      price: 10.99,
      title: 'Cheeseburger',
    },
    {
      itemNumber: 2,
      imageSrc: 'path_to_image2.jpg',
      price: 8.99,
      title: 'Veggie Burger',
    },
    // Add more menu items as needed
  ];
  
  const Menu = () => {
    return (
      <div>
        <h1>Menu</h1>
        <div className="menu-container">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.itemNumber}>
              <img src={item.imageSrc} alt={item.title} />
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => alert(`Added ${item.title} to cart`)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Menu;
