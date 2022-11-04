import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { config } from '../../mocks'

import s from './styles.module.scss'

const CardItem = (props) => {
    const { avatar, first_name, last_name } = props

    return (
        <div className={s.card_item}>
            <div className={s.card_item__img_block}>
                <img className={s.card_item__img} src={ avatar } alt='avatar' />
            </div>

            <div className={s.card_item__body}>
                <p className={s.card_item__name}><NavLink to="/"  className={s.card_item__name_link}>{ first_name }</NavLink></p>
                <div className={s.card_item__reviews}>
                    {config.map(star => (
                        <img className={s.card_item__star} key={ star.id } src={ star.src } alt={''} />
                    ))}
                    <span className={s.card_item__reviews}>{ last_name } reviews</span>
                </div>
                <p className={s.card_item__price}>${ first_name }</p>
            </div>
        </div>
    )
}

CardItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired
}

export default CardItem
