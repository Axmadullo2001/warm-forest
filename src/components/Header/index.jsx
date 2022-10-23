import React from 'react'
import { NavLink } from 'react-router-dom'

import s from './styles.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.header__logo}>
        <NavLink to="/" className={s.header__logo_zankoo}>Zankoo</NavLink>
      </div>
      <div className={s.header__card_signin}>
        <NavLink to="/" className={s.header__card}>Cart</NavLink>
        <NavLink to="/sign-in" className={s.header__sign_in}>Sign In</NavLink>
      </div>
    </div>
  )
}

export default Header
