import React from 'react'
import { Link } from "react-router-dom"

import header_style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={header_style.header}>
      <div className={header_style.header__logo}>
        <Link to="/" className={header_style.header__logo_zankoo}>Zankoo</Link>
      </div>
      <div className={header_style.header__card_signin}>
        <Link to="/" className={header_style.header__card}>Cart</Link>
        <Link to="/sign-in" className={header_style.header__sign_in}>Sign In</Link>
      </div>
    </div>
  )
}

export default Header
