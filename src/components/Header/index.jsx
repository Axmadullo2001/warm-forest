import React from 'react'
import { Link } from "react-router-dom"

import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <a href="/" className='header__logo-zankoo'>Zankoo</a>
      </div>
      <div className="header__card-signin">
        <Link to="/" className='header__card'>Cart</Link>
        <Link to="/sign-in" className='header__sign-in'>Sign In</Link>
      </div>
    </div>
  )
}

export default Header
