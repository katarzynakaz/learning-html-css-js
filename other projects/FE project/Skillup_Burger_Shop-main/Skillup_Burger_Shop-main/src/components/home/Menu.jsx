// Write all the code here

// links
import React from 'react';
import '../../styles/menu.scss'; 


// functions
function addedToCart() {
  alert("Added to cart");
  }


// Create a menu card of the items with the item number, image source, price, title, a function handler for
// adding to cart, and a delay for animation.

//create div for menu
/* divs for individual burgers, animation transition added in scss */
// component - menu card

const Menu = () => {
  return (
<div id="menu">
  <h1>Menu</h1>
    <div className="menuCard">
      <h5>Cheeseburger</h5>
      <p>£9.99</p>
      <img src="../../burger1.png" alt="Cheeseburger" />
      <button onClick = {addedToCart}>Buy Now</button>
    </div>

    <div className="menuCard">
      <h5>Double Bacon Cheeseburger</h5>
      <p>£11.99</p>
      <img src="../../burger2.png" alt="Double Bacon Cheeseburger" />
      <button onClick = {addedToCart}>Buy Now</button>
    </div>

    <div className="menuCard">
      <h5>Vegan Burger</h5>
      <p>£10.99</p>
      <img src="../../burger3.png" alt="Vegan Burger" />
      <button onClick = {addedToCart}>Buy Now</button>
    </div>

</div>
  )};

  


