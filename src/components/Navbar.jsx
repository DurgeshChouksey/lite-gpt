import React from 'react';
import "../css/navbar.css"
import "../css/common.css"
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <div className="nav wrapper">
      <Link to="/" className='logo'>LiteGPT</Link>

      <ul className="list">
        {location.pathname != '/about' && <Link to="/about" className='list-item'>About</Link>}
        {location.pathname != '/chat-bot' && <Link to="/chat-bot" className = "cta">Use LiteGPT</Link>}
      </ul>

    </div>
  )
}

export default Navbar;
