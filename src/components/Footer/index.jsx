import React from 'react'

import footer_style from "./Footer.module.scss";

const Footer = () => {
    return (
    <footer className={footer_style.footer}>
        <p className={footer_style.footer__right_saved}>All right reserved</p>
    </footer>
    )
}

export default Footer
