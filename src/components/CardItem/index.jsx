import React from 'react'
import PropTypes from 'prop-types'

import { config } from '../../mocks'

import s from './styles.module.scss'

const CardItem = (props) => {
    const { category, description, image, price, rating, title } = props

    return (
        <div className={s.card_item}>
                <div className={s.card_item__content}><img className={s.card_item__img} src={image} alt={title} /></div>
                <div className={s.card_item__content}><p className={`${s.card_item__title} ${s.card_item__extra_info}`}>{title}</p></div>

                <div className={`${s.card_item__content} ${s.card_item__desc_text}`}>
                    <p className={`${s.card_item__text} ${s.card_item__extra_info}`}>{description}</p>
                </div>
                <div className={`${s.card_item__content} ${s.card_item__star_img} ${s.card_item__extra_info}`}>
                    {config.map(star => <img className={s.card_item__star_icon} key={star.id} src={star.src} alt={star.id} />)}
                </div>

                <div className={s.card_item__content}><b className={`${s.card_item__extra_info}`}>{ price } $</b></div>
                <div className={s.card_item__content}><p className={`${s.card_item__extra_info}`}>Rating: {rating.rate}</p></div>
                <div className={s.card_item__content}><p className={`${s.card_item__extra_info}`}>Count: { rating.count }</p></div>
                <div className={s.card_item__content}><p className={`${s.card_item__extra_info}`}>Category <a className={`${s.card_item__hashtag}`} href={`#${category}`}>#{category}</a></p></div>
            </div>
    )
}

CardItem.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

export default CardItem
