import React from 'react'

import "../styles/Header.css";


const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <a href="/" className='header__logo-zankoo'>Zankoo</a>
      </div>
      <div className="header__card-signin">
        <a href="/" className='header__card'>Cart</a>
        <a href="/" className='header__sign-in'>Sign In</a>
      </div>
    </div>
  )
}

export default Header

