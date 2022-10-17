import React from 'react'

import "./Header.css";


const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <a href="/" className='header__logo-zankoo'>Zankoo</a>
      </div>
      <div className="header__card-signin">
        <button className='header__card'>Cart</button>
        <button className='header__sign-in'>Sign In</button>
      </div>
    </div>
  )
}

export default Header

