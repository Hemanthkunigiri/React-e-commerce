import React, { useState } from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (searchQuery.trim()) {
      // Define a mapping of search terms to their respective routes
      const searchMapping = {
        "mobiles": "/mobiles",
        "mobile": "/mobiles",
        "computers": "/computers",
        "computer": "/computers",
        "watches": "/watch",
        "watch": "/watch",
        "men":"/men",
        "men wear":"/men",
        "women":"/women",
        "women wear":"/women",
        "tv": "/tv",
        "TV":"/tv",
        "AC":"/ac",
        "ac":"/ac",
        "kitchen":"/kitchen",
        "kit":"/kitchen",
        "fridge":"/fridge",
        "fri":"/fridge",
        "speaker":"/speaker",
        "Speaker":"/speaker",
        
      };

      // Check if the search query matches any of the keys in the mapping
      const route = searchMapping[searchQuery.toLowerCase()];
      if (route) {
        navigate(route); // Navigate to the specific page
      } else {
        // Optionally handle the case where the search term does not match any route
        alert("No matching product found!");
      }

      setSearchQuery(""); // Clear the search input after submission
    }
  };

  return (
    <div className="navbar-section">
      <div className="navSection">
        <Link to='/' className="custom-link">
          <div className="title">
            <h2>E-SHOPPING CART</h2>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="submit" style={{ display: 'none' }}>Search</button> {/* Optional: Hidden button for form submission */}
        </form>

        <div className="user">
          <NavLink to='/login'><p>Login</p></NavLink>
          <NavLink to='/singup'><p>Signup</p></NavLink>
        </div>

        <NavLink to='/cart'>
          <div className="cart">Cart
            <span>
              {cartItems.length}
            </span>
          </div>
        </NavLink>
      </div>
      <div className="subMenu">
     
        <ul>
          <NavLink to="/mobiles" className="custom-link">
            <li>Mobiles</li>
          </NavLink>

          <NavLink to="/computers" className="custom-link">
            <li>Computers</li>
          </NavLink>

          <NavLink to="/watch" className="custom-link">
            <li>Watches</li>
          </NavLink>

          <NavLink to="/men" className="custom-link">
            <li>Mens Wear</li>
          </NavLink>

          <NavLink to="/woman" className="custom-link">
            <li>Woman Wear</li>
          </NavLink>

          <NavLink to="/furniture" className="custom-link">
            <li>Furniture</li>
          </NavLink>

          <NavLink to="/kitchen" className="custom-link">
            <li>Kitchen</li>
          </NavLink>

          <NavLink to="/fridge" className="custom-link">
            <li>Fridge</li>
          </NavLink>
         
          <NavLink to="/speaker" className="custom-link">
            <li>Speakers</li>
          </NavLink>

          <NavLink to="/tv" className="custom-link">
            <li>TV's</li>
          </NavLink>

          <NavLink to="/ac" className="custom-link">
            <li>AC</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;