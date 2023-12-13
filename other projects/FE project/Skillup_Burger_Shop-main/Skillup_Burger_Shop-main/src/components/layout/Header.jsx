// Write all the code here

// 1.2 /Task 2: Header on Home page
// You will now be completing the Header of the Burger Shop project.
// Instructions:
// 1. Go to the file - layout/Header.jsx in the “components” folder.
// 2. Create a navigation bar with links to Home, Contact, About, shopping cart, and a menu with links to Login,
// Orders and Logout.

import React from 'react';

const Header = () => {
    return (
      <header>
         <div className="nav">
          <a href="/">Home</a>
          <a href="/contacts">Contact</a>
          <a href="/about">About</a>
          <a href="/cart">Shopping Cart</a>
          <a href="#">Menu</a>
          <button class="dropbtn">Menu</button>
            <div>
              <a href="/login">Login</a>
              <a href="/myOrders">My Orders</a>
              {/* logout <a href="/">Link 3</a> */}
            </div>
        </div>
      </header>
    );
  };

  export default Header;