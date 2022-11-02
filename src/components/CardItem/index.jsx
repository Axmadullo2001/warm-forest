import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import s from './styles.module.scss'

const CardItem = (props) => {
    const { email, first_name, last_name, avatar } = props

    return (
        <div className={s.card_item}>
            <div className={s.card_item__img_block}>
                <img className={s.card_item__img} src={ avatar } alt={ name } />
            </div>

            <div className={s.card_item__body}>
                <p className={s.card_item__name}><NavLink to="/"  className={s.card_item__name_link}>{ first_name } { last_name }</NavLink></p>
                {/* <div className={s.card_item__reviews}>
                    {config.map(star => (
                        <img className={s.card_item__star} key={ star.id } src={ star.src } alt={''} />
                    ))}
                    <span className={s.card_item__reviews}>{ reviews } reviews</span>
                </div> */}
                <p className={s.card_item__price}>{ email }</p>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string
}

export default CardItem
