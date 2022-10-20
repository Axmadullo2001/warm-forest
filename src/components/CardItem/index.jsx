import { NavLink } from "react-router-dom";

import { config } from "../../mocks";

import s from "./styles.module.scss";

const CardItem = (props) => {
    const { img, name, price, reviews } = props

    return (
        <div className={s.card_item}>
            <div className={s.card_item__img_block}>
                <img className={s.card_item__img} src={ img } alt={ name } />
            </div>

            <div className={s.card_item__body}>
                <p className={s.card_item__name}><NavLink to="/"  className={s.card_item__name_link}>{ name }</NavLink></p>
                <div className={s.card_item__reviews}>
                    {config.map(star => (
                        <img className={s.card_item__star} key={ star.id } src={ star.src } alt={''} />
                    ))}

                    <span className={s.card_item__reviews}>{ reviews } reviews</span>
                </div>
                <p className={s.card_item__price}>${ price }</p>

            </div>
        </div>
    )
}

export default CardItem
