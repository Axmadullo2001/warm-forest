import React from 'react'
import { Link } from 'react-router-dom'

import "./SignIn.css";

export const SignIn = () => {
  return (
    <div className="sign-in">
        <form action="">
        <div><h2 className='sign-in__title'>Sign In</h2></div>
        <div className="sign-in__email-content">
            <label htmlFor="email" className='sign-in__email-label'>Email</label>
            <input type="email" name="email" id="email" className='sign-in__email' placeholder='Enter email'/>
        </div>
        <div className="sign-in__password-content">
            <label htmlFor="password" className='sign-in__password-label'>Password</label>
            <input type="password" name="password" id="password" className='sign-in__password' placeholder='Enter password'/>
        </div>
        <div><button className='sign-in__button'>Sign In</button></div>
        <div className='sign-in__new-customer'><p>New customer? <Link to="/sign-in" className='sign-in__create-account'>Create your account</Link></p></div>
        </form>
    </div>
  )
}
